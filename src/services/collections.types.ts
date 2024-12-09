export type CollectionRank = {
  display_name: string
  floor_price: number
  is_verified: true
  policy_id: string
  source: string
  volume: number
  unique_collection_name: string
}

export type CollectionTrending = {
  category: string,
  display_name: string
  global_floor_lovelace: string
  global_volume_lovelace_all_time: string
  hero_image: string
  is_verified: boolean
  optimized_source: string
  policy_id: string
  source: string
  supply: string
  unique_collection_name: string
}

export type HeaderCollection = {
  category: string,
  display_name: string
  global_floor_lovelace: string
  global_volume_lovelace_all_time: string
  hero_image: string
  is_verified: boolean
  optimized_source: string
  policy_id: string
  source: string
  supply: string
  unique_collection_name: string
}

export type Trait = {
  items: Record<string, number>
  min: string
  max: string
  type: 'options' | 'range'
}

export type Collection = {
  items: {
    bg_image: string
    description: string
    display_name: string
    floor: string
    global_volume_lovelace_all_time: string
    source: string
    highest_sale: {
      asset_name: string
      name: string
      price: number
    }
    holders: string
    image: string
    name: string
    policy_id: string
    price_range: {
      avg: number
      max: number
      min: number
    }
    royalties: {
      addr: string
      pct: string
    }
    socials: {
      discord: string
      telegram: string
      twitter: string
      website: string
    }
    supply: string
    total_assets_sold: number
    total_tx: number
    verified: boolean
    traits: Record<string, Trait>
  }
}
