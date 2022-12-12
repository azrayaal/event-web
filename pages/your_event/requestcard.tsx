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
    <Link href={`/your_event/${id}`} className="px-5">
      <div className="relative mx-auto  overflow-hidden max-w-sm bg-white  hover:drop-shadow-2xl drop-shadow-xl" key={id} id={id}>
        <img className="w-full min-h-[250px] max-h-[250px] bg-red-200" src={thumbnail} alt="Sunset in the mountains" />
        <h5 className={`text-white float-right font-bold px-5 py-3  status-requestcard ${status}`}>{status}</h5>
        <div className="px-5 py-5 ">
          <div className="font-bold text-xl mb-2 py-4">{event_name}</div>
          <span>Description:</span>
          <div className="max-h-16 min-h-16 h-[100px] pb-5">
            <h3 className="font-semibold text-lg ">{description}</h3>
          </div>
        </div>
        {/* <button className="bg-[#015E95] hover:bg-slate-700 float-left font-bold px-5 py-3   text-white border hover:border-transparent ">Detail</button> */}
      </div>
    </Link>
  );
}
