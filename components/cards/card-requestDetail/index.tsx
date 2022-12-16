import Link from 'next/link';
import { RequestHistoryTypes } from '../../../services/data-types';

interface GetDetailRequestProps {
  requestDetail: RequestHistoryTypes;
}

const IMG = process.env.NEXT_PUBLIC_IMG;

export default function RequestDetailCard(props: GetDetailRequestProps) {
  const { requestDetail } = props;
  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img className="w-full" alt="img of a girl posing" src={`${IMG}/${requestDetail.thumbnail}`} />
        </div>
        <div className="md:hidden">
          <img className="w-full" alt="img of a girl posing" src={`${IMG}/${requestDetail.thumbnail}`} />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div>
            <div className="border-b border-gray-200 pb-6">
              <div className="">
                <div className="text-sm leading-none text-gray-600">RequestID: {requestDetail._id}</div>
                <button
                  className={`inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out float-right bg-slate-700 status-requestcard ${requestDetail.status}`}
                >
                  {requestDetail.status}
                </button>
              </div>
              <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">{requestDetail.event_name}</h1>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Request Date: {requestDetail.createdAt}</p>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <div className=" text-sm leading-4 text-gray-600">
                Locaton Event:
                <div className="flex items-center justify-center">
                  <p className="text-base leading-none text-gray-800 mt-1">{requestDetail.location}</p>
                </div>
              </div>
              <div className=" text-sm leading-4 text-gray-600">
                Maps:
                <div className="flex items-center justify-center">
                  <p className="text-base leading-none text-gray-800 mt-1">{requestDetail.location}</p>
                </div>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <div className=" text-sm leading-4 text-gray-600">
                Date Event:
                <div className="flex items-center justify-center">
                  <p className="text-base leading-none text-gray-800 mt-1">{requestDetail.date}</p>
                </div>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 ">
              <div className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-2">{requestDetail.description}</div>
              <div className="text-base leading-4 mt-7 text-gray-600">
                Agency Name: <p className="font-semibold mt-2">{requestDetail.agency_name}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="md:w-96 text-base leading-normal text-gray-600 mt-4">
              Requested by:
              <p className="font-semibold">{requestDetail.name}</p>
              <p className="font-semibold">{requestDetail.status}</p>
            </div>
            <Link href="/your_event">
              <button className="inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
