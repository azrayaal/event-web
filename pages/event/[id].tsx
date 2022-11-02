import React from 'react';
import Layouts from '../../components/layout';
import NavbarsDetail from '../../components/header/headerEventDetail';
import Footers from '../../components/footer';
import Link from 'next/link';

export default function EventDetails() {
  return (
    <>
      <NavbarsDetail />
      <nav className="sticky top-0  bg-[#172029] hidden sm:block  drop-shadow shadow-blue-600">
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
                <Link href="/" className="text-yellow-500">
                  View in Maps
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-screen">
        <img src="/Noah.png" alt="" />
      </div>
      <Footers />
    </>
  );
}
