/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Icon from '../Icon/Icon';
import './ActivityDetails.scss';

type Props = {
  data: Array<any>;
};

function ActivityDetails({ data }: Props) {
  return (
    <div className="table-container" role="table" aria-label="Destinations">
      <div className="flex-table header hidden md:block" role="rowgroup">
        <div className="flex-table-row first" role="columnheader">
          Events
        </div>
        <div className="flex-table-row width-40 " role="columnheader">
          Items
        </div>
        <div className="flex-table-row" role="columnheader">
          Date
        </div>
        <div className="flex-table-row" role="columnheader">
          Price
        </div>
      </div>
      {data.map((it) => (
        <div className="flex-table row" role="rowgroup">
          <div className="flex-table-row  hidden md:flex items-center" role="cell">
            <Icon color="#667085" name={it.event.icon} className="mr-3" />
            <p className="text-black-400">{it.event.name}</p>
          </div>
          <div className="flex-table-row flex md:items-center width-40" role="cell">
            <img alt={`${it.item.name}`} src={it.item.url} className=" w-[66px] h-[66px]" />
            <div className="text-black-400 dark:text-red-400 ml-2 md:ml-4 flex flex-col justify-between md:block md:max-w-[230px] w-full">
              <p>This is name of the NFT</p>
              <p className="text-light-gray-400 hidden md:block">
                Collection name could be so long and a litle bit longer
              </p>
              <div className="flex block  md:hidden">
                <Icon color="#667085" name={it.event.icon} className="mr-3" />
                <p className="text-black-400">{it.event.name}</p>
              </div>
            </div>
          </div>
          <div
            className="flex-table-row  flex-col justify-center items-center hidden md:flex"
            role="cell"
          >
            <p>{it.date_time.date}</p>
            <p className=" text-light-gray-400 dark:text-light-gray text-[14px]">
              {it.date_time.timestamp}
            </p>
          </div>
          <div
            className="flex-table-row items-center  md:flex md:flex-col md:justify-center"
            role="cell"
          >
            <p className="text-black-400 dark:text-red-400">{it.price.token}</p>
            <p className="hidden md:block text-light-gray-400 dark:text-light-gray text-[14px]">
              {it.price.usd}
            </p>

            <div className="block md:hidden">
              <p className="text-[14px] text-black-400">{it.date_time.date}</p>
              <p className="text-[12px] text-light-gray-400 dark:text-light-gray ">
                {it.date_time.timestamp}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityDetails;
