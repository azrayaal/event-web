import React from 'react';

export default function PaymentSummary() {
  return (
    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
      <h3 className="text-xl font-semibold leading-5 text-gray-800">Payment</h3>
      <div className="flex justify-between items-start w-full">
        <div className="flex justify-center items-center space-x-4">
          {/* <div className="w-8 h-8">
            <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
          </div> */}
          <div className="flex flex-col justify-start items-center">
            <p className="text-lg leading-6 font-semibold text-gray-800">
              Harap Transfer ke no rekening berikut:
              <br />
              <br />
              <span className="font-normal">123456788</span>
              <br />
              <br />
              <span className="font-normal text-center">Pembayaran akan segera dikonfirmasi oleh admin setelah pembayaran</span>
            </p>
          </div>
        </div>
        {/* <p className="text-lg font-semibold leading-6 text-gray-800">$8.00</p> */}
      </div>
      <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
        <div className="flex w-full justify-center items-center md:justify-start md:items-start">
          <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
            Confirmation
          </button>
        </div>
      </div>
    </div>
  );
}
