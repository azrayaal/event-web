import Link from 'next/link';
import React from 'react';

interface RequestCardProps {
  event_name: string;
  description: string;
  id: string;
  status: string;
  date: string;
  thumbnail: string;
}

export default function RequestCard(props: RequestCardProps) {
  const { event_name, description, id, status, date, thumbnail } = props;
  return (
    <div className="relative pb-10 mx-auto  rounded-2xl overflow-hidden max-w-sm bg-slate-100  hover:drop-shadow-2xl drop-shadow-xl" key={id} id={id}>
      <div className="px-5 py-4 ">
        <img className="w-full rounded-2xl min-h-[250px] max-h-[250px] bg-red-200" src={thumbnail} alt="Sunset in the mountains" />
        <div className="font-bold text-xl mb-2 py-4">{event_name}</div>
        Tanggal:
        <div className=" text-md mb-2 ">{date}</div>
        <div className="py-[1px] my-16 bg-slate-400 rounded sm:mx-0 mx-10" />
        <div className="max-h-16 min-h-16 h-[100px] ">
          Deskripsi:
          <p className="text-gray-700 text-base text-justify sm:text-left text-md">{description}</p>
        </div>
      </div>
      {/* accept */}
      {/* <div className={`border-green-600 border-t border-l border-solid absolute h-20 w-20 bg-green-400 bottom-0 right-0 rounded-tl-full ${status}`}></div> */}
      {/* failed */}
      {/* <div className={`border-red-800 border-t border-l border-solid absolute h-20 w-20 bg-red-600 bottom-0 right-0 rounded-tl-full ${status}`}></div> */}
      {/* pending */}
      <div className={`border-yellow-600 border-t border-l border-solid absolute h-20 w-20 bg-yellow-400 bottom-0 right-0 rounded-tl-full ${status}`}></div>
      {/* <Link href={`/member/transaction/${id}`}> */}
      <Link href={`/your_event/${id}`}>
        <div className="btn btn-status rounded-pill text-sm">Details</div>
      </Link>
    </div>
  );
}
