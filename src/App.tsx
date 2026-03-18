import { AlertCard } from "@/components/AlertCard"
import { alerts } from "@/data/alerts"

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
        <div className="bg-gray-50 rounded-md px-4 py-2 text-xs text-gray-500">
          30 days ago you prioritized: Pricing alerts<br />
          This week you're engaging with: News alerts
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
