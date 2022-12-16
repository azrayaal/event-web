import Link from 'next/link';
import React from 'react';

interface RequestCardProps {
  event_name: string;
  description: string;
  id: string;
  status: string;
  date: string;
  thumbnail: string;
  agency_name: string;
}

export default function RequestCard(props: RequestCardProps) {
  const { event_name, description, id, status, date, thumbnail, agency_name } = props;
  return (
    <Link href={`/your_event/${id}`} className="px-5">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
        <img className="rounded-t-lg w-full min-h-[250px] max-h-[250px]" src={thumbnail} alt="product image" />
        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{event_name}</h3>
          <div className="flex items-center mt-2.5 mb-5">
            {/* {status} */}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"> RequestID: {id}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {agency_name}
              {/* <NumericFormat value={total} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," /> */}
            </span>
            {/* <h5 className={`text-white float-right font-bold px-5 py-3  status-requestcard ${status}`}>{status}</h5> */}
            <a
              // href={`/transaction_history/${id}`}
              className={`text-white bg-slate-700  font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded status-requestcard ${status}`}
            >
              {status}
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
