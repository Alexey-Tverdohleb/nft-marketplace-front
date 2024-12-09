export type PropositionType = {
  display_name: string
  collection_name: string
  last_activity: number
  activity_history: {
    time: number
    price: number
  }[]
}