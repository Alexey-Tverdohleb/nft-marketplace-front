import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import useScrollToTop from 'hooks/useScrollToTop';
import Icon from 'components/Icon/Icon';
import CollectionsBanner from 'components/Collections/CollectionsBanner';
import GroupButton from 'components/Button/GroupButton';
import CollectionsActivity from 'components/Collections/CollectionsActivity';

import { ReactComponent as ItemsIcon } from 'assets/icons/Items.svg';
import { ReactComponent as ActivityIcon } from 'assets/icons/Activity.svg';

import ItemsTab from './ItemsTab';
import { useFetchParticularCollectionQuery } from '../../services/CollectionService';
import Dots from '../../components/Loader/Dots';
import ErrorPage from '../ErrorPage';

const TABS = [
  {
    label: 'Items',
    icon: ItemsIcon,
  },
  {
    label: 'Activity',
    icon: ActivityIcon,
  },
].map((item) => ({ ...item, tab: item.label.toLowerCase() }));

function Collections() {
  const { id } = useParams();
  const { data, isLoading } = useFetchParticularCollectionQuery('id' ?? '', { skip: !id });

  useScrollToTop();
  const [params] = useSearchParams();
  const activeTab = params.get('tab') ?? 'items';

  if (isLoading) {
    return <Dots />;
  }

  if (!data?.items) {
    return <ErrorPage />;
  }

  return (
    <div className="collections mt-12">
      <div className="container p-[16px] lg:p-0">
        <div className="flex flex-row items-center">
          <Icon name="arrow-left" className="stroke-current dark:text-white mr-2" />
          <Link className="text-black-400 dark:text-white" to="/artists">
            Back to all collections
          </Link>
        </div>
        <CollectionsBanner data={data} />

        <div className="flex my-10 md:my-0 w-min mx-auto items-center border-[2px] rounded-[20px] border-[#194185] p-1">
          {TABS.map((item) => {
            const newSearchParams = new URLSearchParams(params);
            newSearchParams.set('tab', item.tab);

            return (
              <GroupButton
                key={item.label}
                to={{ search: newSearchParams.toString() }}
                isActive={activeTab === item.tab}
              >
                <div className="flex items-center -mx-[6px]">
                  <item.icon className="mx-[6px]" />
                  <span className="mx-[6px]">{item.label}</span>
                </div>
              </GroupButton>
            );
          })}
        </div>
        {activeTab === 'items' && <ItemsTab />}
        {activeTab === 'activity' && <CollectionsActivity />}
      </div>
    </div>
  );
}

export default Collections;
