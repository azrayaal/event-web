import React from 'react';

interface EventHeaderProps {
  event_name: string;
  date: string;
  location: string;
  agency_name: string;
  status: string;
  maps: string;
}

export default function EventHeader(props: EventHeaderProps) {
  const { event_name, date, location, agency_name, status, maps } = props;
  return (
    <nav className="sticky z-[1] top-0  bg-[#172029] hidden sm:block h-auto drop-shadow shadow-blue-600">
      <div className="grid grid-cols-3  ">
        <div className="pl-16 text-slate-50 my-3">
          <div className="NAMAEVENT font-extrabold text-3xl">{event_name}</div>
          <ul className="pt-10">
            <li className="inline-block text-sm text-slate-400">Created by:</li>
            <li className="inline-block text-sm text-yellow-300 font-bold pl-2">{agency_name}</li>
            <li className="inline-block text-sm pl-6 text-slate-400">Status: </li>
            <li className="inline-block text-sm pl-2">{status}</li>
          </ul>
        </div>
        <div className="text-right">{/* <div className="absolute left-[67%] mt-10 -ml-0.5 w-0.5 h-[5rem] bg-yellow-500"></div> */}</div>
        <div className=" border-l-2 border-yellow-300 my-3">
          <ul className="pl-8 text-slate-50 my-3">
            <li className="Time text-sm">{date} | 17:00:00</li>
            <li className="Place my-5 text-sm">{location} </li>
            <li className="Map text-sm font-bold">
              <a target="_blank" href={maps} className="text-yellow-300">
                View in Maps
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
