import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export type Alert = {
  competitor: string
  field: string
  oldValue: string
  newValue: string
  stableSince: string
  daysStable: number
  relevanceLabel: "High" | "Medium" | "Low"
  timeline: { date: string; value: string }[]
}

const relevanceColors = {
  High: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-gray-100 text-gray-600",
}

export function AlertCard({ alert }: { alert: Alert }) {
  const [relevanceLabel, setRelevanceLabel] = useState<Alert["relevanceLabel"]>(alert.relevanceLabel)

  const nextRelevance: Record<Alert["relevanceLabel"], Alert["relevanceLabel"]> = {
    Low: "Medium",
    Medium: "High",
    High: "High",
  }

  const prevRelevance: Record<Alert["relevanceLabel"], Alert["relevanceLabel"]> = {
    Low: "Low",
    Medium: "Low",
    High: "Medium",
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base font-medium">{alert.competitor}</CardTitle>
          <Badge variant="outline">{alert.field}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm font-medium">
          <span className="text-gray-400">{alert.oldValue}</span>
          <span className="mx-2 text-gray-400">to</span>
          <span>{alert.newValue}</span>
        </div>
        <div className="text-xs text-gray-400 space-y-1">
          <div>Stable for {alert.daysStable} days</div>
          <div>Since {alert.stableSince}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">Relevance</span>
          <span className={"text-xs px-2 py-0.5 rounded-full font-medium " + relevanceColors[relevanceLabel]}>
            {relevanceLabel}
          </span>
          <button
            type="button"
            aria-label="Increase relevance"
            className="text-xs text-gray-400 hover:text-gray-900"
            onClick={() => setRelevanceLabel((r) => nextRelevance[r])}
          >
            👍
          </button>
          <button
            type="button"
            aria-label="Decrease relevance"
            className="text-xs text-gray-400 hover:text-gray-900"
            onClick={() => setRelevanceLabel((r) => prevRelevance[r])}
          >
            👎
          </button>
        </div>
        <div className="border-t pt-2 text-xs">
          <div className="mb-1 font-medium text-gray-400">History</div>
          <ul className="space-y-1">
            {alert.timeline.map((item, i) => (
              <li key={i} className="flex justify-between">
                <span className="text-gray-400">{item.date}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
