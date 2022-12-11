import Link from 'next/link';
import React from 'react';
interface EdetailMProps {
  quantity: number;
  category_name: string;
  id: string;
  onSubmit: () => void;
  totalCartPrice: number;
  price: number;
  clicked: any;
  handleClick: () => void;
  //   handleChange: boolean;
}

export default function EDetailMobile(props: EdetailMProps) {
  const { quantity, category_name, id, onSubmit, totalCartPrice, clicked, handleClick, price } = props;
  return (
    <div className={clicked || 'w-full h-full bg-white z-30 absolute top-0 hidden '} id={id}>
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
                  <li className="ml-3 text-xs whitespace-nowrap">{category_name}</li>
                  <li className="ml-3 whitespace-nowrap">{price}</li>
                  <li className="inline-block float-right mr-3">
                    <div className="flex items-center justify-center">
                      <div className="inline-flex focus:shadow-lg" role="group">
                        <button
                          onClick={() => handleChange(item, -1)}
                          type="button"
                          className="rounded-l-full inline-block px-3 py-2.5 bg-[#504CD8] text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 trans ition duration-150 ease-in-out"
                        >
                          -
                        </button>
                        <div className=" inline-block px-3 py-2.5 bg-slate-300 text-slate-800 font-medium text-xs leading-tight uppercase "> {quantity} </div>
                        <button
                          onClick={() => handleChange(item, 1)}
                          type="button"
                          className="  inline-block px-3 py-2.5 bg-[#504CD8] text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out rounded-r-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
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
                <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded" onClick={onSubmit}>
                  Chekout
                </button>
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
