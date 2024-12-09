const DUMMY_DATA = [
  {
    content: 'Purchased for 2.25 ADA',
    time: '12 min ago',
    seen: true,
    event: {
      name: 'Sale',
      icon: 'shopping-cart',
    },
    item: {
      name: 'This is name of the NFT',
      url: 'images/activity/1.png',
      width: 66,
      height: 66,
    },
  },
  {
    content: 'Purchased for 2.25 ADA',
    time: '12 min ago',
    seen: true,
    event: {
      name: 'List',
      icon: 'tag',
    },
    item: {
      name: 'This is name of the NFT',
      url: 'images/activity/2.png',
      width: 66,
      height: 66,
    },
  },
  {
    content: 'Proposition to sell for 345 ADA',
    time: '12 min ago',
    seen: false,
    event: {
      name: 'Proposition',
      icon: 'dollar-sign',
    },
    item: {
      name: 'This is name of the NFT',
      url: 'images/activity/3.png',
      width: 66,
      height: 66,
    },
  },
  {
    content: 'Purchased for 317 ADA',
    time: '12 min ago',
    seen: false,
    event: {
      name: 'Sale',
      icon: 'shopping-cart',
    },
    item: {
      name: 'This is name of the NFT',
      url: 'images/activity/4.png',
      width: 66,
      height: 66,
    },
  },
].map((item, index) => ({ ...item, id: index }));

export default DUMMY_DATA;
