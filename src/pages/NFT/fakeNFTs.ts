import image1 from 'assets/images/trending/1.png';
import image2 from 'assets/images/trending/2.png';
import image3 from 'assets/images/trending/3.png';
import image4 from 'assets/images/trending/4.png';
import image5 from 'assets/images/trending/5.png';
import image6 from 'assets/images/trending/6.png';
import image7 from 'assets/images/trending/7.png';
import image8 from 'assets/images/trending/8.png';
import { uniqueId } from 'lodash';

const data = [
  {
    event: {
      name: 'Sale',
      icon: 'shopping-cart',
    },
    date_time: {
      date: '04 Sep 2021',
      timestamp: '14:03',
    },
    price: {
      token: '120 ADA',
      usd: '$123.39',
    },
  },
  {
    event: {
      name: 'List',
      icon: 'tag',
    },
    date_time: {
      date: '04 Sep 2021',
      timestamp: '14:03',
    },
    price: {
      token: '120 ADA',
      usd: '$123.39',
    },
  },
  {
    event: {
      name: 'Sale',
      icon: 'shopping-cart',
    },
    date_time: {
      date: '04 Sep 2021',
      timestamp: '14:03',
    },
    price: {
      token: '120 ADA',
      usd: '$123.39',
    },
  },
  {
    event: {
      name: 'Sale',
      icon: 'tag',
    },
    date_time: {
      date: '04 Sep 2021',
      timestamp: '14:03',
    },
    price: {
      token: '120 ADA',
      usd: '$123.39',
    },
  },
];

const FAKE_NFTS = [
  {
    name: `NFT #${Math.round(Math.random() * 1000)}`,
    details: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work. The artist has to relinquish control, and set the work free, where only some loosely-predetermined rules and a hash number will determine the actual outcome. The Brushstroke was detached from the painting, and it’s now detached from the artist as well...',
    copies: Math.round(Math.random() * 100),
    author: 'Kimberly Mastrangelo',
    collection_name: 'Collection name could be so long and a little bit longer',
    released: '2021-02-01T22:00:00.000Z',
    status: 0,
    src: image1,
    activity: data,
    price_ada: Math.round(Math.random() * 1000),
    multiplier: 1.04,
    isFavorite: false,
    currentBid: 444,
  },
  {
    name: `NFT #${Math.round(Math.random() * 1000)}`,
    details: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work. The artist has to relinquish control, and set the work free, where only some loosely-predetermined rules and a hash number will determine the actual outcome. The Brushstroke was detached from the painting, and it’s now detached from the artist as well...',
    copies: Math.round(Math.random() * 100),
    author: 'Kimberly Mastrangelo',
    collection_name: 'Collection name could be so long and a little bit longer',
    released: '2021-02-01T22:00:00.000Z',
    status: 1,
    src: image2,
    activity: data,
    price_ada: Math.round(Math.random() * 1000),
    multiplier: 1.04,
    isFavorite: false,
    currentBid: 444,
  },
  {
    name: `NFT #${Math.round(Math.random() * 1000)}`,
    details: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work. The artist has to relinquish control, and set the work free, where only some loosely-predetermined rules and a hash number will determine the actual outcome. The Brushstroke was detached from the painting, and it’s now detached from the artist as well...',
    copies: Math.round(Math.random() * 100),
    author: 'Kimberly Mastrangelo',
    collection_name: 'Collection name could be so long and a little bit longer',
    released: '2021-02-01T22:00:00.000Z',
    status: 1,
    src: image3,
    activity: data,
    price_ada: Math.round(Math.random() * 1000),
    multiplier: 1.04,
    isFavorite: false,
    currentBid: 444,
  },
  {
    name: `NFT #${Math.round(Math.random() * 1000)}`,
    details: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work. The artist has to relinquish control, and set the work free, where only some loosely-predetermined rules and a hash number will determine the actual outcome. The Brushstroke was detached from the painting, and it’s now detached from the artist as well...',
    copies: Math.round(Math.random() * 100),
    author: 'Kimberly Mastrangelo',
    collection_name: 'Collection name could be so long and a little bit longer',
    released: '2021-02-01T22:00:00.000Z',
    status: 0,
    src: image4,
    activity: data,
    price_ada: Math.round(Math.random() * 1000),
    multiplier: 1.04,
    isFavorite: false,
    currentBid: 444,
  },
  {
    name: `NFT #${Math.round(Math.random() * 1000)}`,
    details: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work. The artist has to relinquish control, and set the work free, where only some loosely-predetermined rules and a hash number will determine the actual outcome. The Brushstroke was detached from the painting, and it’s now detached from the artist as well...',
    copies: Math.round(Math.random() * 100),
    author: 'Kimberly Mastrangelo',
    collection_name: 'Collection name could be so long and a little bit longer',
    released: '2021-02-01T22:00:00.000Z',
    status: 1,
    src: image5,
    activity: data,
    price_ada: Math.round(Math.random() * 1000),
    multiplier: 1.04,
    isFavorite: false,
    currentBid: 0,
  },
  {
    name: `NFT #${Math.round(Math.random() * 1000)}`,
    details: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work. The artist has to relinquish control, and set the work free, where only some loosely-predetermined rules and a hash number will determine the actual outcome. The Brushstroke was detached from the painting, and it’s now detached from the artist as well...',
    copies: Math.round(Math.random() * 100),
    author: 'Kimberly Mastrangelo',
    collection_name: 'Collection name could be so long and a little bit longer',
    released: '2021-02-01T22:00:00.000Z',
    status: 1,
    src: image6,
    activity: data,
    price_ada: Math.round(Math.random() * 1000),
    multiplier: 1.04,
    isFavorite: false,
    currentBid: 12312,
  },
  {
    name: `NFT #${Math.round(Math.random() * 1000)}`,
    details: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work. The artist has to relinquish control, and set the work free, where only some loosely-predetermined rules and a hash number will determine the actual outcome. The Brushstroke was detached from the painting, and it’s now detached from the artist as well...',
    copies: Math.round(Math.random() * 100),
    author: 'Kimberly Mastrangelo',
    collection_name: 'Collection name could be so long and a little bit longer',
    released: '2021-02-01T22:00:00.000Z',
    status: 0,
    src: image7,
    activity: data,
    price_ada: Math.round(Math.random() * 1000),
    multiplier: 1.04,
    isFavorite: false,
    currentBid: 444,
  },
  {
    name: `NFT #${Math.round(Math.random() * 1000)}`,
    details: 'Brushpops is a generative system inspired by Roy Lichtenstein’s iconic work, where a random hash determines the composition of a series of abstract brush strokes. Lichtenstein’s original work has separated the brushstrokes from their original context, and now we take another step in the same direction, and separate the artist from the work. The artist has to relinquish control, and set the work free, where only some loosely-predetermined rules and a hash number will determine the actual outcome. The Brushstroke was detached from the painting, and it’s now detached from the artist as well...',
    copies: Math.round(Math.random() * 100),
    author: 'Kimberly Mastrangelo',
    collection_name: 'Collection name could be so long and a little bit longer',
    released: '2021-02-01T22:00:00.000Z',
    status: 0,
    src: image8,
    activity: data,
    price_ada: Math.round(Math.random() * 1000),
    multiplier: 1.04,
    isFavorite: false,
    currentBid: 0,
  },
].map((item) => (
  {
    ...item,
    currency: 'ADA',
    id: `nft_${uniqueId()}`,
  }));

export default FAKE_NFTS;
