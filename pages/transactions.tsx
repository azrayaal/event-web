import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layouts from '../components/layout';

export default function transactions() {
  return (
    <Layouts pageTitle="Transactions">
      <div className=" sticky  top-0 z-20 bg-[#172029] hidden sm:block  drop-shadow shadow-blue-600">
        <div className="grid grid-cols-3  ">
          <div className="pl-16 text-slate-50 my-10">
            <div className="NAMAEVENT font-extrabold text-3xl">Gemas Festival</div>
            <ul className="pt-10">
              <li className="inline-block text-sm text-slate-400">Created by:</li>
              <li className="inline-block text-sm text-yellow-500 font-bold pl-2">Gema Smansagra Choir</li>
              <li className="inline-block text-sm pl-6 text-slate-400">Status: </li>
              <li className="inline-block text-sm pl-2">Publish</li>
            </ul>
          </div>
          <div className="text-right">
            <div className="absolute left-[67%] top-10 -ml-0.5 w-0.5 h-[6rem] bg-yellow-500"></div>
          </div>
          <div className="">
            <ul className="pl-8 text-slate-50 my-10">
              <li className="Time text-sm">February 4, 2023 | 17:00:00</li>
              <li className="Place my-5 text-sm">SMA Negeri 1 Grabag | Lapangan Sepak Bola SMAN 1 Grabag</li>
              <li className="Map text-sm font-bold">
                <a target="_blank" href="/" className="text-yellow-500">
                  View in Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-[4rem] h-[65vh] ">
        <div className=" text-center justify-center items-center  h-4/5 pt-10">
          <Image src="/dompet.svg" width={150} height={150} alt="dompet" className=" flex mx-auto "></Image>
          <div className="text-lg font-bold">Oops, no transaction history yet </div>
          <div className="text-slate-700 my-5">Maybe you took the wrong route or address. Let’s go back before it gets dark!</div>
          <Link href="/event">
            <button className="bg-slate-500 hover:bg-slate-700  font-semibold text-white py-2 px-4 border  hover:border-transparent rounded">Discover More Events</button>
          </Link>
        </div>
      </div>
    </Layouts>
  );
}
