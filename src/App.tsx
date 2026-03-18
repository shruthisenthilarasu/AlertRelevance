import { AlertCard, type Alert } from "@/components/AlertCard"

const alerts: Alert[] = [
  {
    competitor: "Acme Pricing",
    field: "Pricing",
    oldValue: "$99",
    newValue: "$149",
    stableSince: "June 2024",
    daysStable: 270,
    relevanceLabel: "High",
    timeline: [
      { date: "Jan 2024", value: "$79" },
      { date: "Jun 2024", value: "$99" },
      { date: "Mar 2025", value: "$149" },
    ],
  },
  {
    competitor: "Nova Analytics",
    field: "Headline",
    oldValue: "Simple analytics for small teams",
    newValue: "AI-powered analytics for growing teams",
    stableSince: "August 2024",
    daysStable: 210,
    relevanceLabel: "Low",
    timeline: [
      { date: "Aug 2024", value: "Simple analytics for small teams" },
      { date: "Mar 2025", value: "AI-powered analytics for growing teams" },
    ],
  },
]

function App() {
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
        <div className="space-y-4">
          {alerts.map((alert, i) => (
            <AlertCard key={i} alert={alert} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
