import { getDetailEvent, getFeaturedEvent } from '../../services/pages';

import { useRouter } from 'next/router';
import EventHeader from '../../components/event/eventHeader/EventHeader';
import TalentCard from '../../components/event/talent/TalentCard';
import Footers from '../../components/footer';
import Navbars from '../../components/header';
import { CategoryTypes, EventListTypes, TalentTypes } from '../../services/data-types';

interface dataItemProps {
  dataItem: EventListTypes;
  talentItem: TalentTypes;
  categoryItem: CategoryTypes;
}

export default function DetailPage({ dataItem, talentItem, categoryItem }: dataItemProps) {
  const router = useRouter();
  const onSubmit = () => {
    // alert('ahahah');
    // console.log('haha');
    localStorage.setItem('data-item', JSON.stringify(dataItem));
    // localStorage.setItem('data-total', JSON.stringify(dataTotal));
    // console.log('data', dataTotal);
    router.push('/payment');
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <>
      <Navbars />
      <EventHeader event_name={dataItem.event_name} date={dataItem.date} location={dataItem.location} agencyName={dataItem.agencyName} status={dataItem.status} />

      <div className="h-full">
        <div className="flex mb-4 ">
          <div className=" w-full sm:w-[70%] h-full  ">
            <div className=" pt-0 sm:pt-10 sm:px-16 px-0 ">
              <div className="sm:border-[1.5px] border-0 sm:py-10 py-0 justify-center flex border-solid border-slate-400 rounded-md drop-shadow-xl">
                <img src={`${IMG}/${dataItem.banner}`} className="sm:rounded-md rounded-none" alt="" />
              </div>
              <div className="Description pt-10 sm:px-0 px-10">
                <h1 className="text-3xl font-bold">{dataItem.event_name}</h1>
                <p className="text-2xl font-semibold pb-3 pt-5">About this event:</p>
                <p className="text-sm pb-14 ">{dataItem.description}</p>
                <p className="text-sm font-semibold pb-3">Terms And Conditions:</p>
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque corrupti veniam laboriosam!</p>
              </div>

              <div className="py-[1px] my-16 bg-slate-400 rounded sm:mx-0 mx-10" />
              <div className="TALENT">
                <div className="text-2xl font-bold pb-10 pl-10 sm:pl-0 ">Talent</div>
                <div className=" grid-cols-1 grid md:grid-cols-3 sm:grid-cols-2 gap-2 pb-5 mx-6 ">
                  {talentItem.map((item: TalentTypes) => {
                    return <TalentCard id={item._id} key={item._id} talent_picture={item.talent_picture} talent_name={item.talent_name} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%] h-full sticky top-36 z-[-0]   hidden sm:block">
            <div className="py-10 pr-16 pl-7">
              <div className="max-w-sm  rounded-md overflow-hidden bg-white border-slate-400 border border-solid   hover:drop-shadow-xl">
                <div className="text-center justify-center items-center pt-4 ">
                  {categoryItem.map((item) => {
                    return <div className="font-bold text-xl mb-2 pb-1 ">Rp. {item.price}</div>;
                  })}
                </div>
                <div className="py-4 ">
                  <div className="text-center justify-center items-center">
                    <div className="font-bold text-xl  text-yellow-500 mx-4">
                      <button
                        className=" inline-block w-full  py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#015E95] active:shadow-lg transition duration-150 ease-in-out"
                        onClick={onSubmit}
                      >
                        Get Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
}

export async function getStaticPaths() {
  const data = await getFeaturedEvent();
  const paths = data.data.map((item: EventListTypes) => ({
    params: {
      id: item._id,
    },
  }));
  // console.log('isi paths=>>', paths);
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailEvent(id);
  console.log('data dari getstprops=>>', data);
  return {
    props: {
      dataItem: data,
      talentItem: data.talent,
      categoryItem: data.category,
    },
  };
}
