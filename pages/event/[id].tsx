import React from 'react';
import Layouts from '../../components/layout';
import NavbarsDetail from '../../components/header/headerEventDetail';
import Footers from '../../components/footer';
import Link from 'next/link';
import { Card } from 'flowbite-react';
import Image from 'next/image';

export default function EventDetails() {
  return (
    <>
      <NavbarsDetail />
      <nav className="sticky  top-0 z-20 bg-[#172029] hidden sm:block  drop-shadow shadow-blue-600">
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
      <div className="h-full">
        <div className="flex mb-4">
          <div className=" w-full sm:w-[70%] h-full  ">
            <div className=" pt-0 sm:pt-10 sm:px-16 px-0">
              <div className="sm:border-[1.5px] border-0 sm:py-10 py-0 justify-center flex  border-solid border-slate-400 rounded-md">
                <img src="/Noah.png" className="rounded-md" alt="" />
              </div>
              <div className="Description pt-10 sm:px-0 px-10">
                <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
                <p className="text-sm font-semibold pb-3 pt-5">Description:</p>
                <p className="text-sm pb-14 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto fugit explicabo, ex aut nobis totam atque culpa eius voluptates.</p>
                <p className="text-sm font-semibold pb-3">Terms And Conditions:</p>
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque corrupti veniam laboriosam!</p>
              </div>
              <div className="py-[1px] my-16 bg-slate-400 rounded sm:mx-0 mx-10" />
              <div className="TALENT">
                <div className="text-2xl font-bold pb-10 pl-10 sm:pl-0 ">Talent</div>
                <div className=" grid-cols-1 grid md:grid-cols-3 sm:grid-cols-2 gap-2 pb-5  ">
                  <div className=" justify-center flex">
                    <div className="max-w-sm">
                      <Card>
                        <div className="flex ">
                          <Image width={50} height={50} src="/favicon.ico" alt="" />
                          <h5 className="text-2xl font-bold tracking-tight pl-10 mt-2 text-gray-900 dark:text-white">Noteworthy </h5>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div className=" justify-center flex">
                    <div className="max-w-sm">
                      <Card>
                        <div className="flex ">
                          <Image width={50} height={50} src="/favicon.ico" alt="" />
                          <h5 className="text-2xl font-bold tracking-tight pl-10 mt-2 text-gray-900 dark:text-white">Noteworthy </h5>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div className=" justify-center flex">
                    <div className="max-w-sm">
                      <Card>
                        <div className="flex ">
                          <Image width={50} height={50} src="/favicon.ico" alt="" />
                          <h5 className="text-2xl font-bold tracking-tight pl-10 mt-2 text-gray-900 dark:text-white">Noteworthy </h5>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full sticky top-36 z-10   hidden sm:block">
            <div className="py-10 pr-16 pl-7">
              {/* <div className="max-w-sm">
                <Card className="bg-yellow-400">
                  <ul>
                    <li className=" ">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </li>
                    <li className=" bg-red-500">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </li>
                    <li className=" ">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </li>
                  </ul>
                </Card>
              </div> */}
              <div className="max-w-sm  rounded-md overflow-hidden bg-white border-slate-400 border border-solid   hover:drop-shadow-xl">
                <div className="px-3 py-4 ">
                  <div className="font-bold text-xl mb-2 ">Ticket Category</div>
                </div>
                <div className="px-3 py-4 bg-slate-200 divide-x-2 ">
                  <div className=" text-xl mb-2  ">
                    <ul className="my-4 space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg">
                      <li>
                        <div className="group flex items-center rounded-lg bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white ">
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
                <div className="px-3 py-4 ">
                  <div className="font-semibold text-md ">Total:</div>
                  <div className="grid-cols-2 grid">
                    <div className="font-bold text-xl mb-2 text-yellow-500 mt-2">RP. 0</div>
                    <div className="font-bold text-xl mb-2 text-yellow-500 ml-auto">
                      <Link href="/event">
                        <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">Chekout</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}
