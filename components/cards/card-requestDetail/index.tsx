import Link from 'next/link';
import React from 'react';
import { RequestHistoryTypes } from '../../../services/data-types';

interface GetDetailRequestProps {
  requestDetail: RequestHistoryTypes;
}

const IMG = process.env.NEXT_PUBLIC_IMG;

export default function RequestDetailCard(props: GetDetailRequestProps) {
  const { requestDetail } = props;
  return (
    <div className="h-full w-full py-10 ">
      <div className="sm:px-16 px-0 ">
        {/* <div className="sm:border-[1.5px] border-0 sm:py-10 py-0 justify-center flex border-solid border-slate-400 rounded-md drop-shadow-xl"> */}
        <img src={`${IMG}/${requestDetail.thumbnail}`} className="sm:rounded-md rounded-none" alt="" />
        {/* </div> */}
        <div className="Description pt-10 sm:px-0 px-10">
          <h1 className="text-2xl font-bold">{requestDetail.event_name}</h1>

          <p className="text-sm font-semibold pb-3 pt-5">Description:</p>
          <p className="text-sm pb-14 ">{requestDetail.description}</p>

          <p className="text-sm font-semibold pb-3 pt-5">Date:</p>
          <p className="text-sm pb-14 ">{requestDetail.date}</p>

          <p className="text-sm font-semibold pb-3 pt-5">Location:</p>
          <p className="text-sm pb-14 ">{requestDetail.location}</p>

          <p className="text-sm font-semibold pb-3 pt-5">Maps:</p>
          <p className="text-sm pb-14 ">{requestDetail.maps}</p>
          <p className="text-sm font-semibold pb-3 pt-5">Agency Name:</p>
          <p className="text-sm pb-14 ">{requestDetail.agencyName}</p>
          <p className="text-sm font-semibold pb-3 pt-5">Request by:</p>
          <p className="text-sm pb-14 ">{requestDetail.name}</p>
          <p className="text-sm font-semibold pb-3 pt-5">Status:</p>
          <p className="text-sm pb-14 ">{requestDetail.status}</p>
          {/* <p className="text-sm font-semibold pb-3">Terms And Conditions:</p>
          <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque corrupti veniam laboriosam!</p> */}
          <Link href="/your_event">
            <button>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
