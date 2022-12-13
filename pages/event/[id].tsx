import { getDetailEvent, getFeaturedEvent } from '../../services/pages';
import { useState } from 'react';

import { useRouter } from 'next/router';
import EventHeader from '../../components/event/eventHeader/EventHeader';
import TalentCard from '../../components/event/talent/TalentCard';
import Footers from '../../components/footer';
import Navbars from '../../components/header';
import { CategoryTypes, EventListTypes, TalentTypes } from '../../services/data-types';
import TikectCategoryItem from '../../components/cards/card-category/categoryItem';

interface dataItemProps {
  dataItem: EventListTypes;
  talentItem: TalentTypes;
  categoryItem: CategoryTypes;
}

export default function DetailPage({ dataItem, talentItem, categoryItem }: dataItemProps) {
  const [verifyID, setVerifyID] = useState('');
  const [ticket, setTicket] = useState({});
  const router = useRouter();

  const ticketItemChange = (data: CategoryTypes) => {
    // con sole.log('data nominal=>>', data);
    setTicket(data);
  };

  const onSubmit = () => {
    // alert('ahahah');
    const data = {
      verifyID,
      ticket,
    };
    // localStorage.setItem('data-item', JSON.stringify(dataItem));
    // localStorage.setItem('data-total', JSON.stringify(dataTotal));
    console.log('data', data);
    // router.push('/payment');
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

          <div className="w-[30%] h-full sticky top-36 z-[-0] hidden sm:block">
            <div className="py-10 pr-16 pl-7">
              <div className="max-w-sm  rounded-md overflow-hidden bg-white border-slate-400 border border-solid   hover:drop-shadow-xl">
                <div className="text-center justify-center items-center ">
                  {/* input nama */}
                  <div className="relative mx-4 my-4">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={(event) => setVerifyID(event.target.value)}
                    />
                    <label
                      htmlFor="floating_outlined"
                      className=" absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative h-[100%] py-10 flex items-center justify-center bg-slate-200">
                    <div className="mx-auto max-w-6xl px-12">
                      <div className="flex flex-wrap gap-3">
                        {categoryItem.map((item: CategoryTypes) => {
                          return <TikectCategoryItem category_name={item.category_name} key={item._id} _id={item._id} price={item.price} onChange={() => ticketItemChange(categoryItem)} />;
                        })}
                      </div>
                    </div>
                  </div>
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
