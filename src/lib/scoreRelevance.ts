export type FeedbackEvent = {
  category: string
  action: "clicked" | "ignored"
}

export function scoreRelevance(category: string, feedback: FeedbackEvent[]): "High" | "Medium" | "Low" {
  const clickedCount = feedback.reduce((count, event) => {
    if (event.category === category && event.action === "clicked") return count + 1
    return count
  }, 0)

  if (clickedCount >= 3) return "High"
  if (clickedCount === 1 || clickedCount === 2) return "Medium"
  return "Low"
}

