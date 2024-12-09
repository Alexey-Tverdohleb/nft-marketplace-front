export type NFTCard = {
  name: string
  collection_name: string
  price: number
  currency: string
  src: string
  id: number
}

const DUMMY_CARDS: NFTCard[] = [
  {
    name: 'NFT Card',
    collection_name: 'Collection name could be so long and a little bit longer',
    price: 120,
    currency: 'ADA',
    src: '/images/nft-cover/trending/1.png',
  },
  {
    name: 'NFT Card',
    collection_name: 'Collection name could be so long and a little bit longer',
    price: 120,
    currency: 'ADA',
    src: '/images/nft-cover/trending/2.png',
  },
  {
    name: 'NFT Card',
    collection_name: 'Collection name could be so long and a little bit longer',
    price: 120,
    currency: 'ADA',
    src: '/images/nft-cover/trending/3.png',
  },
  {
    name: 'NFT Card',
    collection_name: 'Collection name could be so long and a little bit longer',
    price: 120,
    currency: 'ADA',
    src: '/images/nft-cover/trending/4.png',
  },
  {
    name: 'NFT Card',
    collection_name: 'Collection name could be so long and a little bit longer',
    price: 120,
    currency: 'ADA',
    src: '/images/nft-cover/trending/5.png',
  },
  {
    name: 'NFT Card',
    collection_name: 'Collection name could be so long and a little bit longer',
    price: 120,
    currency: 'ADA',
    src: '/images/nft-cover/trending/6.png',
  },
  {
    name: 'NFT Card',
    collection_name: 'Collection name could be so long and a little bit longer',
    price: 120,
    currency: 'ADA',
    src: '/images/nft-cover/trending/7.png',
  },
  {
    name: 'NFT Card',
    collection_name: 'Collection name could be so long and a little bit longer',
    price: 120,
    currency: 'ADA',
    src: '/images/nft-cover/trending/8.png',
  },
].map((item, index) => ({ ...item, id: index }));

export default DUMMY_CARDS;
