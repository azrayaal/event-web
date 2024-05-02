import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { setCheckout } from "../../services/pages";

export default function PaymentSummary() {
  const router = useRouter();

  const onsubmit = async () => {
    const dataItemFromLocal = localStorage.getItem("data-item");
    const dataCheckOutFromLocal = localStorage.getItem("checkout-item");
    const dataItem = JSON.parse(dataItemFromLocal!);
    const datacheckout = JSON.parse(dataCheckOutFromLocal!);

    const data = {
      event: dataItem._id,
      event_name: dataItem.event_name,
      category: datacheckout.ticketCat.category_name,
      banner: dataItem.banner,

      date: dataItem.date,
      location: dataItem.location,
      maps: dataItem.maps,
      quantity: dataItem.category.quantity,
      description: dataItem.description,
      total: datacheckout.ticketCat.price,
    };

    const response = await setCheckout(data);
    if (response.error) {
      toast.error(response.message, {
        theme: "colored",
      });
    } else {
      toast.success("Check-Out Berhasil!!", {
        theme: "colored",
      });
      // console.log('data co', response);
      router.push("/payment/confirmation");
    }
  };
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
              <span className="font-normal text-center">
                Pembayaran akan segera dikonfirmasi oleh admin setelah
                pembayaran
              </span>
            </p>
          </div>
        </div>
        {/* <p className="text-lg font-semibold leading-6 text-gray-800">$8.00</p> */}
      </div>
      <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
        <div className="flex w-full justify-center items-center md:justify-start md:items-start">
          <button
            className="inline-block w-full  py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#015E95] active:shadow-lg transition duration-150 ease-in-out"
            onClick={onsubmit}
          >
            {/* <a href="/payment/confirmation">Confirmation</a> */}
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
