import React from 'react';

export default function Confirmation() {
  return (
    //    <!-- component -->
    <div className="bg-gray-100 h-full my-auto items-center ">
      <div className="bg-white p-6  md:mx-auto">
        {/* <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
          <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
        </svg> */}
        <img src="/tandatanya.jpg" className="w-24 h-30 mx-auto my-6" alt="" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Confirmation!</h3>
          {/* <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p> */}
          <p className="text-gray-600 my-2">Pembayaran Sedang dikonfirmasi oleh admin harap tunggu sebentar</p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <a
              href="/"
              className="px-12 inline-block  py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#015E95] active:shadow-lg transition duration-150 ease-in-out3"
            >
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
