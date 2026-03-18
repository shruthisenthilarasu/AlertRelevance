import type { FeedbackEvent } from "@/lib/scoreRelevance"

export const feedback: FeedbackEvent[] = [
  { category: "Pricing", action: "clicked" },
  { category: "Pricing", action: "clicked" },
  { category: "Pricing", action: "clicked" },

  { category: "Headline", action: "clicked" },
  { category: "Headline", action: "ignored" },

  { category: "News", action: "ignored" },
  { category: "News", action: "ignored" },
]

