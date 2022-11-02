import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CardsEvent() {
  return (
    <div className="max-w-sm  rounded-2xl overflow-hidden  border-slate-200 border border-solid bg-slate-100  hover:drop-shadow-xl">
      <div className="px-3 py-4">
        <img className="w-full rounded-2xl" src="/Noah.png" alt="Sunset in the mountains" />
        <div className="font-bold text-xl mb-2 pt-4">The Coldest Sunset</div>

        <p className="text-gray-700 text-base max-h-24 min-h-24 text-justify sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>

      <div className="px-3 pt-4 pb-3">
        <div className="py-[1px] mb-2 bg-slate-400 rounded" />
        <div className="">
          <span className="float-left inline-block text-sm font-semibold text-gray-400 pl-2 mb-2 pt-1">Start From: </span>
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span> */}
          <span className="float-right inline-block text-lg font-semibold text-yellow-300 pr-2 mb-2">RP. 100.000</span>
        </div>
      </div>
    </div>
  );
}
