import { type Alert } from "@/components/AlertCard"

export const alerts: Alert[] = [
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

