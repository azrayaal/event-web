import Link from 'next/link';
import { TransactionHistoryTypes } from '../../services/data-types';

interface GetDetailTransactionProps {
  transactionDetail: TransactionHistoryTypes;
}

const IMG = process.env.NEXT_PUBLIC_IMG;

export default function TransactionDetailcard(props: GetDetailTransactionProps) {
  const { transactionDetail } = props;
  return (
    // <div className=" lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
    //   {/* <div className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full"> */}
    //   <div className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
    //     <span>OrderID:</span>
    //     <h1 className="h-10 font-semibold">{transactionDetail._id}</h1>
    //     <img className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl" src={`${IMG}/${transactionDetail.historyTicketCat.banner}`} alt="Ad- woman on a beach" />
    //     <h1 className="mt-5 font-bold text-lg lg:mt-7">{transactionDetail.historyTicketCat.event_name}</h1>
    //     <h1 className="font-bold text-lg text-gray-600">{transactionDetail.historyTicketCat.location}</h1>
    //     <h1 className="font-bold text-sm text-gray-600">{transactionDetail.historyTicketCat.date}</h1>
    //     <h1 className="text-lg text-gray-600 text-justify pt-2">{transactionDetail.historyTicketCat.description}</h1>
    //     <div className="mt-5">
    //       <span>Ordered by:</span>
    //       <h1 className="h-10 font-semibold">{`${transactionDetail.name} || ${transactionDetail.createdAt}`}</h1>
    //       <span>Total:</span>
    //       <h1 className="h-10 font-semibold">{`${transactionDetail.historyTicketCat.quantity} Tiket || Rp. ${transactionDetail.historyTicketCat.total}`}</h1>
    //     </div>
    //     <button className="mt-5 bg-gray-600 py-3 px-8 shadow-2xl rounded-full text-white font-bold hover:bg-gray-800 ">
    //       <a href="/transactions">Back</a>
    //     </button>
    //     <div className={`float-right mt-5 py-3 px-8 shadow-2xl rounded-full text-white font-bold  status-historyTransaction ${transactionDetail.status}`}>{transactionDetail.status}</div>
    //   </div>

    //   <div className="hidden relative lg:block  lg:col-span-3">
    //     <img className="absolute inset-0 w-full h-full object-cover object-center" src={`${IMG}/${transactionDetail.historyTicketCat.banner}`} alt="Ad- woman on a beach" />
    //   </div>
    // </div>
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img className="w-full" alt="img of a girl posing" src={`${IMG}/${transactionDetail.historyTicketCat.banner}`} />
      </div>
      <div className="md:hidden">
        <img className="w-full" alt="img of a girl posing" src={`${IMG}/${transactionDetail.historyTicketCat.banner}`} />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <div className="">
            <p className="text-sm leading-none text-gray-600">OrderId: {transactionDetail._id}</p>
            <button className="inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right">
              Print
            </button>
          </div>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">{transactionDetail.historyTicketCat.event_name}</h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Order Date: {transactionDetail.createdAt}</p>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className=" text-sm leading-4 text-gray-600">
            Locaton Event:
            <div className="flex items-center justify-center">
              <p className="text-base leading-none text-gray-800 mt-1">{transactionDetail.historyTicketCat.location}</p>
            </div>
          </p>
          <p className=" text-sm leading-4 text-gray-600">
            Maps:
            <div className="flex items-center justify-center">
              <p className="text-base leading-none text-gray-800 mt-1">{transactionDetail.historyTicketCat.location}</p>
            </div>
          </p>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className=" text-sm leading-4 text-gray-600">
            Date Event:
            <div className="flex items-center justify-center">
              <p className="text-base leading-none text-gray-800 mt-1">{transactionDetail.historyTicketCat.date}</p>
            </div>
          </p>
        </div>
        <div className="py-4 border-b border-gray-200 ">
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-2">{transactionDetail.historyTicketCat.description}</p>
          <p className="text-base leading-4 mt-7 text-gray-600">Agency Name: 8BN321AF2IF0NYA</p>
        </div>

        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 mt-4 text-gray-600">
            Quantity:
            <div className="font-bold ">{transactionDetail.historyTicketCat.quantity}</div>
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Total:
            <div className="font-bold text-center">Rp. {transactionDetail.historyTicketCat.total}</div>
          </p>
        </div>
        <div>
          <div className="md:w-96 text-base leading-normal text-gray-600 mt-4">
            status:
            <p className="font-semibold">{transactionDetail.status}</p>
          </div>
          <Link href="/transactions">
            <button className="inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
