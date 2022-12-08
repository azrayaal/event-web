import { RequestHistoryTypes } from '../../../services/data-types';

interface GetDetailRequestProps {
  requestDetail: RequestHistoryTypes;
}

const IMG = process.env.NEXT_PUBLIC_IMG;

export default function RequestDetailCard(props: GetDetailRequestProps) {
  const { requestDetail } = props;
  return (
    <>
      <div className=" lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        {/* <div className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full"> */}
        <div className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <span>RequestID:</span>
          <h1 className="h-10 font-semibold">{requestDetail._id}</h1>
          <img className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl" src={`${IMG}/${requestDetail.thumbnail}`} alt="Ad- woman on a beach" />
          <h1 className="mt-5 font-bold text-lg lg:mt-7">{requestDetail.event_name}</h1>
          <h1 className="font-bold text-lg text-gray-600">{requestDetail.location}</h1>
          <h1 className="font-bold text-sm text-gray-600">{requestDetail.date}</h1>
          <h1 className="text-lg text-gray-600 text-justify pt-2">{requestDetail.description}</h1>
          <div className="mt-5">
            <span>Requester:</span>
            <h1 className="h-10 font-semibold">{`${requestDetail.email} || ${requestDetail.name}`}</h1>
          </div>
          <button className="mt-5 bg-gray-600 py-3 px-8 shadow-2xl rounded-full text-white font-bold hover:bg-gray-800 ">
            <a href="/your_event">Back</a>
          </button>
          <div className={`float-right mt-5 bg-gray-600 py-3 px-8 shadow-2xl rounded-full text-white font-bold  status-requestcard ${requestDetail.status}`}>{requestDetail.status}</div>
        </div>

        <div className="hidden relative lg:block  lg:col-span-3">
          <img className="absolute inset-0 w-full h-full object-cover object-center" src={`${IMG}/${requestDetail.thumbnail}`} alt="Ad- woman on a beach" />
        </div>
      </div>
    </>
  );
}
