import React from 'react';
import Accordion from '../Accordion';
import HelpCategories from '../HelpCategories/HelpCategories';

function FrequentQuestions() {
  return (
    <section className="faq mb-10">
      <HelpCategories />
      {[
        {
          question:
            'How does your DEX work? Is there a high level description?',
          answer:
            'As a content creator, you can add unlockable content to your collectibles, that only becomes visible after a transfer of ownership (i.e. selling or gifting your NFT). Artists use this feature to include high res files, making ofs. videos, secret messages etc.',
        },
        {
          question:
            'How does your DEX work? Is there a high level description?',
          answer:
            'As a content creator, you can add unlockable content to your collectibles, that only becomes visible after a transfer of ownership (i.e. selling or gifting your NFT). Artists use this feature to include high res files, making ofs. videos, secret messages etc.',
        },
        {
          question:
            'How does your DEX work? Is there a high level description?',
          answer:
            'As a content creator, you can add unlockable content to your collectibles, that only becomes visible after a transfer of ownership (i.e. selling or gifting your NFT). Artists use this feature to include high res files, making ofs. videos, secret messages etc.',
        },
        {
          question:
            'How does your DEX work? Is there a high level description?',
          answer:
            'As a content creator, you can add unlockable content to your collectibles, that only becomes visible after a transfer of ownership (i.e. selling or gifting your NFT). Artists use this feature to include high res files, making ofs. videos, secret messages etc.',
        },
        {
          question:
            'How does your DEX work? Is there a high level description?',
          answer:
            'As a content creator, you can add unlockable content to your collectibles, that only becomes visible after a transfer of ownership (i.e. selling or gifting your NFT). Artists use this feature to include high res files, making ofs. videos, secret messages etc.',
        },
        {
          question:
            'How does your DEX work? Is there a high level description?',
          answer:
            'As a content creator, you can add unlockable content to your collectibles, that only becomes visible after a transfer of ownership (i.e. selling or gifting your NFT). Artists use this feature to include high res files, making ofs. videos, secret messages etc.',
        },
        {
          question:
            'How does your DEX work? Is there a high level description?',
          answer:
            'As a content creator, you can add unlockable content to your collectibles, that only becomes visible after a transfer of ownership (i.e. selling or gifting your NFT). Artists use this feature to include high res files, making ofs. videos, secret messages etc.',
        },
      ].map((item) => (
        <Accordion question={item.question} answer={item.answer} />
      ))}
    </section>
  );
}

export default FrequentQuestions;
