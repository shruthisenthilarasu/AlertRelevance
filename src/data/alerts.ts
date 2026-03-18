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
  {
    competitor: "TechCrunch",
    field: "News",
    oldValue: "Series A - $12M raised",
    newValue: "Series B - $40M raised",
    stableSince: "January 2025",
    daysStable: 74,
    relevanceLabel: "Low" as const,
    timeline: [
      { date: "Oct 2023", value: "Seed - $2M" },
      { date: "Jan 2025", value: "Series A - $12M" },
      { date: "Mar 2025", value: "Series B - $40M" },
    ],
  },
]

