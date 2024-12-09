/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ReactComponent as LogoSign } from 'assets/icons/LogoSign.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/Plus.svg';
import { ReactComponent as MuesliLogo } from 'assets/icons/MuesliLogo.svg';
import { ReactComponent as CheapestIcon } from 'assets/icons/Cheapest.svg';
import { ReactComponent as DecentralizationIcon } from 'assets/icons/Decentralization.svg';
import { ReactComponent as CommunityIcon } from 'assets/icons/Community.svg';
import SectionTitle from './Title';

type Props = {
  withLabel?: boolean;
  withMoreDetails?: boolean;
};

const BENEFITS = [
  {
    title: 'Cheapest Fees on the Market',
    paragraph: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    icon: CheapestIcon,
  },
  {
    title: 'Decentralized',
    paragraph: 'Powered by cutting edge, secure smart contracts',
    icon: DecentralizationIcon,
  },
  {
    title: 'Community driven',
    paragraph: 'We value community feedback and source the best artists possible ',
    icon: CommunityIcon,
  },
];

function WhyChooseUs({ withLabel = false, withMoreDetails = false }: Props) {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  return (
    <section className="why-choose-us  md:p-0">
      {withLabel && <SectionTitle className="mb-6">Why Choose Us</SectionTitle>}
      <div className="grid grid-cols-1 gap-6  gap-x-20 lg:grid-cols-3 lg:gap-x-10 ">
        {BENEFITS.map((item) => (
          <div
            className="bg-light-gray-50 dark:bg-black-800 px-3 py-10 rounded-3xl flex flex-col items-center"
            key={item.title}
          >
            <item.icon />
            <p className="text-2xl font-semibold mt-8 mb-6">{item.title}</p>
            <p className="text-center px-6">{item.paragraph}</p>
          </div>
        ))}
      </div>
      {withMoreDetails && (
        <div className="py-32 flex flex-col items-center">
          <div className="flex items-center justify-center -mx-[12px] sm:-mx-[42px] mb-[84px]">
            <LogoSign className="mx-[12px] h-[126px] w-[126px] md:h-[142px] sm:mx-[42px]" />
            <PlusIcon className="w-[25px] mx-auto h-[25px]" style={{ color: darkMode ? '#fff' : '#000' }} />
            <MuesliLogo className="mx-[12px] h-[126px] w-[126px] md:h-[142px] sm:mx-[42px]" />
          </div>
          <p className="text-3xl my-6 text-blue-900">Powered by MuesliSwap</p>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nulla volutpat, dictumst
            non, vitae aliquet enim et ut. Facilisis risus.
          </p>
        </div>
      )}
    </section>
  );
}

export default WhyChooseUs;
