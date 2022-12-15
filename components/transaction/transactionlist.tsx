import Link from 'next/link';
import React from 'react';
import { NumericFormat } from 'react-number-format';
interface TransactionListProps {
  event_name: string;
  id: string;
  name: string;
  total: string;
  createdAt: string;
  status: string;
  banner: string;
}

export default function TransactionList(props: TransactionListProps) {
  const { event_name, id, name, total, createdAt, status, banner } = props;
  return (
    <>
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
        <img className="rounded-t-lg " src={banner} alt="product image" />
        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{event_name}</h3>
          <div className="flex items-center mt-2.5 mb-5">
            {status}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"> OrderID: {id}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              <NumericFormat value={total} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
            </span>
            <a
              href={`/transaction_history/${id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Detail
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
