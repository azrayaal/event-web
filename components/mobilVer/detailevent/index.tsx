import Link from 'next/link';
import React, { useState } from 'react';

const [clicked, setClicked] = useState('');
const [clicked2, setClicked2] = useState('');
const handleClick = () => {
  clicked ? setClicked('') : setClicked(' buttonbeliticketmobile w-full h-full bg-white z-30 absolute top-0 ');
  clicked2 ? setClicked2('') : setClicked2(' hidden ');
};

export default function MobileDetail() {
  return (
    <div className={clicked || 'w-full h-full bg-white z-30 absolute top-0 hidden '}>
      <div className="px-3  flex items-center h-[7%] ">
        <div className="font-bold text-xl" onClick={handleClick}>
          -Ticket Category
        </div>
      </div>
      <div className="px-3 py-4 bg-slate-300 h-[84%]">
        <div className=" text-xl ">
          <ul className="my-4 space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg">
            <li>
              <div className="group flex items-center rounded-lg  bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white ">
                <ul className=" flex-1">
                  <li className="ml-3 text-xs whitespace-nowrap">Presale 1</li>
                  <li className="ml-3 whitespace-nowrap">Rp. 100.000</li>
                </ul>
                <a href="/event">
                  <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-3 border  hover:border-transparent rounded-lg">add</button>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-3 h-[9%] ">
        <div className="h-full ">
          <div className="font-semibold text-md absolute pt-1">Total:</div>
          <div className="grid-cols-2 grid  items-center h-full ">
            <div className="font-bold text-xl mb-2 text-yellow-500 ">RP. 0</div>
            <div className="font-bold text-xl mb-2 text-yellow-500 ml-auto">
              <Link href="/event">
                <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">Chekout</button>
              </Link>
            </div>
          </div>
          {/* <div className="flex  bg-green-500 h-full">
            <div className="flex float-left">Total</div>
            <div className="flex float-left">RP. 0</div>
            <div className="flex float-right">Chekout</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
