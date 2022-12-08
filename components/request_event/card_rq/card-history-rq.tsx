interface RequestCardProps {
  event_name: string;
  description: string;
  id: string;
  status: string;
  date: string;
  thumbnail: string;
}

export default function CardHistoryRequest(props: RequestCardProps) {
  const { event_name, description, id, status, date, thumbnail } = props;
  return (
    <div className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
      <div className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
        <h1 className="mt-5 font-bold text-lg lg:mt-7">{id}</h1>
        <img className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl" src={thumbnail} alt="Ad- woman on a beach" />
        <h1 className="mt-5 font-bold text-lg lg:mt-7">{event_name}</h1>
        <h1 className="font-bold text-lg text-gray-600">{date}</h1>
        <h1 className="font-bold text-lg text-gray-600">{status}</h1>
        <h1 className="text-lg text-gray-600 text-justify pt-2">{description}</h1>
        <button className="mt-5 bg-gray-600 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-gray-800">Detail</button>
      </div>

      <div className="hidden relative lg:block  lg:col-span-3">
        <img className="absolute inset-0 w-full h-full object-cover object-center" src={thumbnail} alt="Ad- woman on a beach" />
      </div>
    </div>
  );
}
