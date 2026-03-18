import type { FeedbackEvent } from "@/lib/scoreRelevance"

export const feedback: FeedbackEvent[] = [
  // High (>= 3 clicked)
  { category: "pricing", action: "clicked" },
  { category: "pricing", action: "clicked" },
  { category: "pricing", action: "clicked" },

  // Medium (1-2 clicked)
  { category: "features", action: "clicked" },
  { category: "features", action: "clicked" },
  { category: "features", action: "ignored" },

  // Low (0 clicked)
  { category: "messaging", action: "ignored" },
  { category: "messaging", action: "ignored" },
]

