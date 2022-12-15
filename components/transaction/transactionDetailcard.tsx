import Link from 'next/link';
import { TransactionHistoryTypes } from '../../services/data-types';
import ReactToPrint from 'react-to-print';
// import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

interface GetDetailTransactionProps {
  transactionDetail: TransactionHistoryTypes;
}

const IMG = process.env.NEXT_PUBLIC_IMG;

export default function TransactionDetailcard(props: GetDetailTransactionProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  const { transactionDetail } = props;
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4" ref={componentRef}>
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
            <ReactToPrint
              trigger={() => {
                return (
                  <button
                    // onClick={handlePrint}
                    className="inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right"
                  >
                    Print
                  </button>
                );
              }}
              content={() => componentRef.current}
            />
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
          {/* <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-2">{transactionDetail.historyTicketCat.description}</p> */}
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
