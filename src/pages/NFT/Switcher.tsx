import React from 'react';
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';

type Tab = 'properties' | 'activities'

const TABS: Tab[] = ['properties', 'activities'];

export default function Switcher() {
  const [params, setParams] = useSearchParams();
  const activeTab = params.get('tab') ?? 'properties';

  const handleTab = (tab: Tab) => {
    const newSearchParams = new URLSearchParams(params);
    newSearchParams.set('tab', tab);

    setParams(newSearchParams);
  };
  return (
    <nav className="my-[20px] w-fit px-[24px] flex items-center justify-center bg-white dark:bg-black-900 shadow-card rounded-2xl">
      <ul className="grid grid-flow-col grid-cols-1 gap-[32px]">
        { TABS.map((item) => (
          <li key={item} className="relative">
            <button
              type="button"
              onClick={() => handleTab(item)}
              className={cx(
                'list-none cursor-pointer h-fit py-[16px] relative',
                { 'text-[#194185] after:content-[" "] after:absolute after:rounded-3xl after:h-[4px] after:w-full after:bg-[#194185] after:bottom-0 after:left-0': activeTab === item },
              )}
            >
              <span className="capitalize text-base font-semibold">{item}</span>
            </button>
          </li>
        )) }
      </ul>
    </nav>
  );
}
