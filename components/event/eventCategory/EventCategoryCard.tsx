import React, { useState } from 'react';
import PriceItem from '../../cards/card-category/priceItem';

interface EventCardProps {
  id: string;
  category_name: string;
  price: number;
  key: string;
  onClick: () => void;
}

export default function EventCategoryCard(props: EventCardProps) {
  const { id, category_name, price, onClick } = props;

  return (
    <>
      <div className="px-3 py-2 bg-gray-200 divide-x-2 " key={id} id={id}>
        <div className=" text-xl mb-2 ">
          <div className=" space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg ">
            <div className="group flex items-center rounded-lg bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white">
              <div className=" flex-1">
                <div className="ml-3 text-xs whitespace-nowrap">{category_name}</div>
                <ul className="">
                  <li className="inline-block ml-3">
                    <PriceItem price={price} key={id} />
                  </li>
                  <li className="inline-block float-right ">
                    <button
                      className="rounded-lg inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#015E95] active:shadow-lg transition duration-150 ease-in-out"
                      onClick={onClick}
                    >
                      add
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
