import Link from 'next/link';
import React from 'react';

interface TransactionListProps {
  event_name: String;
  id: String;
  name: String;
  total: String;
  createdAt: String;
  status: String;
}

export default function TransactionList(props: TransactionListProps) {
  const { event_name, id, name, total, createdAt, status } = props;
  return (
    <tbody className="text-gray-600 text-sm font-light">
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{event_name}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className=" items-center ">
            <span className="font-medium">{event_name}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className=" items-center">
            <span className="font-medium">{name}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <span className="bg-purple-200 text-black py-1 px-3 rounded-full text-xs">{total}</span>
        </td>
        <td className="py-3 px-6 text-center">
          <span className="bg-purple-200 text-black py-1 px-3 rounded-full text-xs">{createdAt}</span>
        </td>
        <td className="py-3 px-6 text-center">
          <span className={`status-historyTransaction ${status} text-white py-1 px-3 rounded-full text-xs`}>{status}</span>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <Link href={`/transaction_history/${id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
