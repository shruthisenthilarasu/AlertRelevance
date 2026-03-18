import { useState } from "react"
import { AlertCard } from "@/components/AlertCard"
import { alerts } from "@/data/alerts"
import { feedback } from "@/data/feedback"
import { scoreRelevance } from "@/lib/scoreRelevance"

function App() {
  const [selectedFilter, setSelectedFilter] = useState<"All" | "High" | "Medium" | "Low">("All")
  const [feedbackEvents, setFeedbackEvents] = useState(feedback)

  const scoredAlerts = alerts.map((alert) => ({
    ...alert,
    relevanceLabel: scoreRelevance(alert.field, feedbackEvents),
  }))

  const handleThumbUp = (category: string) => {
    setFeedbackEvents((prev) => {
      const clickedCount = prev.filter((e) => e.category === category && e.action === "clicked").length

      // Step logic to match the UI expectation: Low -> Medium -> High
      if (clickedCount >= 3) return prev
      if (clickedCount === 0) return [...prev, { category, action: "clicked" }]
      if (clickedCount === 1) {
        return [...prev, { category, action: "clicked" }, { category, action: "clicked" }]
      }

      // clickedCount === 2
      return [...prev, { category, action: "clicked" }]
    })
  }

  const handleThumbDown = (category: string) => {
    setFeedbackEvents((prev) => {
      const clickedIndices = prev
        .map((e, idx) => (e.category === category && e.action === "clicked" ? idx : -1))
        .filter((idx) => idx !== -1)
      const clickedCount = clickedIndices.length

      let next = [...prev]

      // Step logic to match the UI expectation: High -> Medium -> Low
      if (clickedCount >= 3) {
        // Keep it at exactly 2 clicked so we deterministically land in Medium
        const removeCount = clickedCount - 2
        const removeIndices = clickedIndices.slice(0, removeCount).sort((a, b) => b - a)
        for (const idx of removeIndices) next.splice(idx, 1)
      } else if (clickedCount >= 1) {
        // Remove all clicked to deterministically land in Low
        next = next.filter((e) => !(e.category === category && e.action === "clicked"))
      }

      // Record the downvote (scoring ignores "ignored", but keeping it is useful for future)
      next.push({ category, action: "ignored" })
      return next
    })
  }

  const displayedAlerts =
    selectedFilter === "All"
      ? scoredAlerts
      : scoredAlerts.filter((alert) => alert.relevanceLabel === selectedFilter)

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">Alert Relevance Prototype</h1>
          <p className="max-w-2xl text-sm text-gray-500">
            A small experiment exploring how competitor alerts become more useful
            when they include historical context and adapt to what the user actually cares about.
          </p>
        </div>
        <div className="bg-gray-50 rounded-md px-4 py-2 text-xs text-gray-500">
          30 days ago you prioritized: Pricing alerts<br />
          This week you're engaging with: News alerts
        </div>
        <div className="flex flex-wrap gap-2">
          {(["All", "High", "Medium", "Low"] as const).map((label) => {
            const selected = selectedFilter === label
            return (
              <button
                key={label}
                type="button"
                aria-pressed={selected}
                onClick={() => setSelectedFilter(label)}
                className={
                  "rounded-md px-2 py-1 text-xs transition-colors " +
                  (selected ? "bg-gray-200 text-gray-800" : "bg-transparent text-gray-500 hover:text-gray-700")
                }
              >
                {label}
              </button>
            )
          })}
        </div>
        <div className="space-y-4">
          {displayedAlerts.map((alert) => (
            <AlertCard
              key={alert.competitor}
              alert={alert}
              onThumbUp={handleThumbUp}
              onThumbDown={handleThumbDown}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
