import Link from 'next/link';
import React from 'react';

interface CustProps {
  avatar: any;
  name: string;
  email: string;
}

export default function CustSummary(props: CustProps) {
  const { avatar, name, email } = props;
  return (
    <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
      <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
      <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
        <div className="flex flex-col justify-start items-start flex-shrink-0">
          <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            <img src={avatar} className="max-h-12 max-w-12 rounded-full" alt="avatar" />
            <div className=" flex justify-start items-start flex-col space-y-2">
              <p className="text-base font-semibold leading-4 text-left text-gray-800">{name}</p>
            </div>
          </div>

          <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="cursor-pointer text-sm leading-5 text-gray-800">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
