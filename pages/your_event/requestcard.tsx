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
      <div className="px-5 py-5 ">
        <div className="mb-5 lg:mb-5"></div>
        <img className="w-full rounded-2xl min-h-[250px] max-h-[250px] bg-red-200" src={thumbnail} alt="Sunset in the mountains" />
        <div className="font-bold text-xl mb-2 py-4">{event_name}</div>
        <span>Description:</span>
        <div className="max-h-16 min-h-16 h-[100px] pb-5">
          <h3 className="font-semibold text-lg ">{description}</h3>
        </div>
      </div>
      <h5 className={`text-white float-right font-bold px-5 py-3 rounded-l-full status-requestcard ${status}`}>{status}</h5>
      <Link href={`/your_event/${id}`} className="px-5">
        <button className="bg-[#504CD8]  hover:bg-slate-700 float-left font-bold px-5 py-3 rounded-r-full  text-white border hover:border-transparent ">Detail</button>
      </Link>
    </div>
  );
}
