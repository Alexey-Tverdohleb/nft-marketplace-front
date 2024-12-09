export type NFT = {
  asset_id: string
  asset_name: string
  asset_num: string
  collections: {
    description: string
    display_name: string
    hero_image: string
    is_verified: boolean
    jpg_floor_lovelace: string
    policy_id: string
    royalties: {
      addr: string
      pct: number
    }
    source: string
    supply: string
    traits: Record<string, Record<string, number>>
    url: string
  }
  created_at: string
  display_name: string
  fingerprint: string
  initial_mint_tx_hash: string
  is_taken_down: boolean
  likes: string
  mediatype: string
  optimized_source: string
  policy_id: string
  quantity: string
  reports: string
  source: string
  traits: Record<string, string>
  views: string
  onchain_metadata: Record<string, string>
}
