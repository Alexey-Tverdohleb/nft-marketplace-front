import { PropositionType } from './types';

const DUMMY_PROPOSITIONS: PropositionType[] = [
  {
    display_name: `NFT #${Math.round(Math.random() * 1000)}`,
    collection_name: 'Collection name could be so long and a litle bit longer',
    last_activity: Math.round(Math.random() * 60),
    activity_history: [
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
    ],
  },
  {
    display_name: `NFT #${Math.round(Math.random() * 1000)}`,
    collection_name: 'Collection name could be so long and a litle bit longer',
    last_activity: Math.round(Math.random() * 60),
    activity_history: [
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
    ],
  },
  {
    display_name: `NFT #${Math.round(Math.random() * 1000)}`,
    collection_name: 'Collection name could be so long and a litle bit longer',
    last_activity: Math.round(Math.random() * 60),
    activity_history: [
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
      {
        time: Math.round(Math.random() * 30),
        price: Math.round(Math.random() * 1000),
      },
    ],
  },
];

export default DUMMY_PROPOSITIONS;
