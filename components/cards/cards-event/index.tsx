import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardEventProps {
  event_name: string;
  description: string;
  id: string;
  banner: string;
}

export default function CardsEvent(props: CardEventProps) {
  const IMG = process.env.NEXT_PUBLIC_IMG;

  const { event_name, description, id, banner } = props;
  return (
    <Link href={`/event/${id}`}>
      <div className="max-w-sm  rounded-2xl overflow-hidden  border-slate-400 border border-solid bg-slate-300  hover:drop-shadow-xl">
        <div className="px-3 py-4 ">
          <img className="w-full rounded-2xl min-h-[250px] max-h-[250px]" src={`${IMG}/${banner}`} alt="Sunset in the mountains" />
          <div className="font-bold text-xl mb-2 pt-4">{event_name}</div>

          <div className="max-h-24 min-h-24  h-[100px]">
            <p className="text-gray-700  text-base  text-justify sm:text-left">{description}</p>
          </div>
        </div>

        <div className="px-3 pt-4 pb-3">
          <div className="py-[1px] mb-2 bg-slate-600 rounded" />
          <div className="">
            <span className="float-left inline-block text-sm font-semibold text-gray-600 pl-2 mb-2 pt-1">Start From: </span>
            <span className="float-right inline-block text-lg font-semibold text-yellow-300 pr-2 mb-2">RP. 100.000</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
