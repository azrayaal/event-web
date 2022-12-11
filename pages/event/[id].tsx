import { Card } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import PriceItem from '../../components/cards/card-category/priceItem';
import EventCategoryCard from '../../components/event/eventCategory/EventCategoryCard';
import EDetailMobile from '../../components/event/eventdetailmobile/EDetailMobile';
import EventHeader from '../../components/event/eventHeader/EventHeader';
import TalentCard from '../../components/event/talent/TalentCard';
import Footers from '../../components/footer';
import Navbars from '../../components/header';
import { CategoryTypes, TalentTypes } from '../../services/data-types';
import { getDetailEvent } from '../../services/pages';
import '../../styles/Event.module.css';

export default function EventDetails() {
  const [clicked, setClicked] = useState('');
  const [clicked2, setClicked2] = useState('');
  const { query, isReady } = useRouter();
  const [categoryItem, setCategoryItem] = useState([]);
  const [count, setCount] = useState(0);
  const [talentItem, setTalentitem] = useState([]);

  let totalCartPrice = 0;
  const router = useRouter();
  const IMG = process.env.NEXT_PUBLIC_IMG;

  const handleClick = () => {
    clicked ? setClicked('') : setClicked(' buttonbeliticketmobile w-full h-full bg-white z-30 absolute top-0 ');
    clicked2 ? setClicked2('') : setClicked2(' hidden ');
  };

  const [dataItem, setDataItem] = useState({
    event_name: '',
    description: '',
    date: '',
    location: '',
    banner: '',
    agencyName: '',
    status: '',
  });

  const handleChange = (item, d) => {
    const ind = categoryItem.indexOf(item);
    const arr = categoryItem;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCategoryItem([...arr]);
  };

  const getEventDetailAPI = useCallback(async (id: any) => {
    const data = await getDetailEvent(id);
    console.log('data detail=>', data.data);
    setDataItem(data.data);
    setTalentitem(data.data.talent);
    setCategoryItem(data.data.category);
  }, []);

  useEffect(() => {
    getEventDetailAPI(query.id);
  }, [isReady]);

  const onSubmit = () => {
    console.log('haha');
    const dataTotal = {
      totalCartPrice,
      // categoryItem,
    };
    localStorage.setItem('data-item', JSON.stringify(dataItem));
    localStorage.setItem('data-total', JSON.stringify(dataTotal));
    console.log('data total', dataTotal);
    router.push('/payment');
  };

  return (
    <div className="bodyasli bg-slate-100">
      <div className={clicked2 || 'block'}>
        {/* <NavbarsDetail /> */}
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
                  <div className="px-3 py-4 ">
                    <div className="font-bold text-xl mb-2 pb-1 ">Ticket Category</div>
                  </div>
                  <div className="px-3 py-2 bg-slate-200 divide-x-2 " />

                  {categoryItem.map((item: CategoryTypes) => {
                    totalCartPrice += item.price * item.quantity;
                    return (
                      <div className="px-3 py-2 bg-slate-200 divide-x-2 " key={item._id} id={item._id}>
                        <div className=" text-xl mb-2 ">
                          <div className=" space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg">
                            <div className="group flex items-center rounded-lg bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white ">
                              <div className=" flex-1">
                                <div className="ml-3 text-xs whitespace-nowrap">{item.category_name}</div>
                                <ul className="">
                                  <li className="inline-block ml-3">
                                    <PriceItem price={item.price} key={item._id} />
                                  </li>
                                  <li className="inline-block float-right mr-3">
                                    <div className="flex items-center justify-center">
                                      <div className="inline-flex focus:shadow-lg" role="group">
                                        <button
                                          onClick={() => handleChange(item, -1)}
                                          type="button"
                                          className="rounded-l-full inline-block px-3 py-2.5 bg-[#504CD8] text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 trans ition duration-150 ease-in-out"
                                        >
                                          -
                                        </button>
                                        <div className=" inline-block px-3 py-2.5 bg-slate-300 text-slate-800 font-medium text-xs leading-tight uppercase "> {item.quantity} </div>
                                        <button
                                          onClick={() => handleChange(item, 1)}
                                          type="button"
                                          className="  inline-block px-3 py-2.5 bg-[#504CD8] text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out rounded-r-full"
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* <h1>{item.quantity * item.price}</h1> */}
                          </div>
                        </div>
                      </div>

                      // <EventCategoryCard key={item._id} id={item._id} category_name={item.category_name} price={item.price} quantity={item.quantity} />
                    );
                  })}

                  <div className="px-3 py-2 bg-slate-200 divide-x-2 " />
                  <div className="px-3 py-4 ">
                    <div className="font-semibold text-md ">Total: </div>
                    <div className="grid-cols-2 grid">
                      <div className="font-bold text-xl mb-2 text-yellow-500 mt-2">RP. {totalCartPrice}</div>
                      <div className="font-bold text-xl mb-2 text-yellow-500 ml-auto">
                        <button className="bg-[#504CD8] hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded-full" onClick={onSubmit}>
                          Chekout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden  py-5 justify-center flex mx-6  border-solid border-t-[0.1px] border-slate-400">
          <button className="bg-slate-500 hover:bg-slate-700  font-semibold text-white py-2 w-full h-12 px-6 hover:border-transparent rounded" onClick={handleClick}>
            Buy Ticket
          </button>
        </div>

        {/* Footer */}
        <div className="sm:block hidden">
          <Footers />
        </div>
      </div>

      {/* ticket mobile */}
      {categoryItem.map((item: CategoryTypes) => {
        return (
          <EDetailMobile
            quantity={item.quantity}
            category_name={item.category_name}
            id={item._id}
            onSubmit={onSubmit}
            totalCartPrice={totalCartPrice}
            clicked={clicked}
            handleClick={handleClick}
            price={item.price}
            // handleChange={handleChange}
          />
        );
      })}
    </div>
  );
}
