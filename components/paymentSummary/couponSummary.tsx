import React from 'react';

interface CouponProps {
  banner: any;
  event_name: string;
  location: string;
  time: string;
  date: string;
}

export default function CouponSummary(props: CouponProps) {
  const { banner, event_name, location, time, date } = props;

  return (
    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Keranjang Ticket</p>
      <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
        <div className="pb-4 md:pb-8 w-full md:w-40">
          <img className="w-full hidden md:block" src={banner} alt="dress" />
          <img className="w-full md:hidden" src={banner} alt="dress" />
        </div>
        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
          <div className="w-full flex flex-col justify-start items-start space-y-8">
            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{event_name}</h3>
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-sm leading-none text-gray-800">
                <span className="text-gray-500">Locaton: </span>
                <br />
                <div className="mt-1">{location}</div>
              </p>
              {/* <p className="text-sm leading-none text-gray-800">
                <span className="text-gray-500">Time: </span> <br />
                <div className="mt-1">{date}</div>
              </p> */}
              <p className="text-sm leading-none text-gray-800">
                <span className="text-gray-500">Date: </span> <br />
                <div className="mt-1">{date}</div>
              </p>
            </div>
          </div>
          <div className="flex justify-between space-x-8 items-start w-full">
            <p className="text-base xl:text-lg leading-6">
              {/* CATEGORY <span className="text-red-300 line-through"> $45.00</span> */}
              <ul>
                <li>
                  <p className="text-base xl:text-lg leading-6 text-gray-800">CATEGORY</p>
                </li>
                <li>
                  <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
                </li>
              </ul>
            </p>
            <ul>
              <li>
                <p className="text-base xl:text-lg leading-6 text-gray-800">JUMLAH TIKET</p>
              </li>
              <li>
                <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
              </li>
            </ul>
            {/* <p className="text-base xl:text-lg leading-6 text-gray-800">01</p> */}
            {/* <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p> */}
          </div>
        </div>
      </div>
      {/* <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
        <div className="w-full md:w-40">
          <img className="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
          <img className="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
        </div>
        <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
          <div className="w-full flex flex-col justify-start items-start space-y-8">
            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">High Quaility Italic Dress</h3>
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-sm leading-none text-gray-800">
                <span className="text-gray-300">Style: </span> Italic Minimal Design
              </p>
              <p className="text-sm leading-none text-gray-800">
                <span className="text-gray-300">Size: </span> Small
              </p>
              <p className="text-sm leading-none text-gray-800">
                <span className="text-gray-300">Color: </span> Light Blue
              </p>
            </div>
          </div>
          <div className="flex justify-between space-x-8 items-start w-full">
            <p className="text-base xl:text-lg leading-6">
              $20.00 <span className="text-red-300 line-through"> $30.00</span>
            </p>
            <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
