import Link from 'next/link';

interface CardEventProps {
  event_name: string;
  // description: string;
  id: string;
  banner: string;
  date: string;
  location: any;
  agency_name: string;
  status: string;
}

export default function CardsEvent(props: CardEventProps) {
  const IMG = process.env.NEXT_PUBLIC_IMG;

  const { event_name, id, banner, date, agency_name, location, status } = props;
  return (
    <Link href={`/event/${id}`}>
      <div key={id} id={id}>
        {/* img  940x470 */}
        <img src={`${IMG}/${banner}`} alt=" random image" className="image-center object-cover object-center hover:shadow-xl shadow-md" />

        <div className="relative px-4 -mt-10 ">
          <div className="bg-white p-6 shadow-lg hover:shadow-xl min-h-[250px] max-h-[250px] min-w-[350px] max-w-[350px]">
            <p className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{event_name}</p>

            <div className="mt-1 text-red-600 font-semibold">{date}</div>

            <div className="mt-2">
              <span className="text-sm text-gray-600 font-semibold">{location}</span>
            </div>
            <div className="flex ">
              <div className="mt-1 text-black font-semibold">{agency_name}</div>
            </div>
            {/* <div className={`absolute bottom-3 right-7 px-5 py-2 bg-red-500 text-white font-semibold indexstat ${status}`}>{status}</div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
