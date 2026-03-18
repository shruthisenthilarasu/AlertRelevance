export type FeedbackEvent = {
  category: "pricing" | "features" | "messaging"
  action: "clicked" | "ignored"
  timestamp: string
}

export const feedback: FeedbackEvent[] = [
  { category: "pricing", action: "clicked", timestamp: "2025-03-01" },
  { category: "pricing", action: "clicked", timestamp: "2025-03-05" },
  { category: "features", action: "ignored", timestamp: "2025-03-03" },
  { category: "messaging", action: "ignored", timestamp: "2025-03-07" },
]

