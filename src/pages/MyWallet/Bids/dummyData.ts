import { BidItem } from './types';

const DUMMY_BIDS: BidItem[] = [
  {
    display_name: `NFT #${Math.round(Math.random() * 1000)}`,
    collection_name: 'Collection name could be so long and a litle bit longer',
    last_activity: Math.round(Math.random() * 60),
    proposed_price: 243,
    image: '/images/nft/1.png',
  },
  {
    display_name: `NFT #${Math.round(Math.random() * 1000)}`,
    collection_name: 'Collection name could be so long and a litle bit longer',
    last_activity: Math.round(Math.random() * 60),
    proposed_price: 255,
    image: '/images/nft/1.png',
  },
];

export default DUMMY_BIDS;
