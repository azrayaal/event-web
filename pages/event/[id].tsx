import { Card } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CategoryCards from '../../components/cards/card-category';
import Footers from '../../components/footer';
import Navbars from '../../components/header';
import { CategoryTypes, TalentTypes } from '../../services/data-types';
import { getDetailEvent } from '../../services/pages';
import '../../styles/Event.module.css';

export default function EventDetails() {
  const [clicked, setClicked] = useState('');
  const [clicked2, setClicked2] = useState('');
  const handleClick = () => {
    clicked ? setClicked('') : setClicked(' buttonbeliticketmobile w-full h-full bg-white z-30 absolute top-0 ');
    clicked2 ? setClicked2('') : setClicked2(' hidden ');
  };

  const { query, isReady } = useRouter();

  const [dataItem, setDataItem] = useState({
    event_name: '',
    description: '',
    date: '',
    location: '',
    banner: '',
  });

  const [talentItem, setTalentitem] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);
  // const [totalCO, setTotalCO] = useState(0);

  const getEventDetailAPI = useCallback(async (id) => {
    const data = await getDetailEvent(id);
    // console.log('data detail', data.data.category);
    setDataItem(data.data);
    setTalentitem(data.data.talent);
    setCategoryItem(data.data.category);
  }, []);

  useEffect(() => {
    // const dataFromLocal = localStorage.getItem('checkout-item');
    // const dataItemLocal = JSON.parse(dataFromLocal!);
    // const dataTotal = dataItemLocal.price;
    // console.log('data CO=>', dataItemLocal);
    // setTotalCO(dataTotal);

    getEventDetailAPI(query.id);
  }, [isReady]);

  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <>
      <div className={clicked2 || 'block'}>
        {/* <NavbarsDetail /> */}
        <Navbars />

        <nav className="sticky z-20 top-0  bg-[#172029] hidden sm:block max-h-32 drop-shadow shadow-blue-600">
          <div className="grid grid-cols-3  ">
            <div className="pl-16 text-slate-50 my-3">
              <div className="NAMAEVENT font-extrabold text-3xl">{dataItem.event_name}</div>
              <ul className="pt-10">
                <li className="inline-block text-sm text-slate-400">Created by:</li>
                <li className="inline-block text-sm text-yellow-500 font-bold pl-2">Gema Smansagra Choir</li>
                <li className="inline-block text-sm pl-6 text-slate-400">Status: </li>
                <li className="inline-block text-sm pl-2">Publish</li>
              </ul>
            </div>
            <div className="text-right">
              <div className="absolute left-[67%] top-4 -ml-0.5 w-0.5 h-[6rem] bg-yellow-500"></div>
            </div>
            <div className="">
              <ul className="pl-8 text-slate-50 my-3">
                <li className="Time text-sm">{dataItem.date} | 17:00:00</li>
                <li className="Place my-5 text-sm">{dataItem.location} </li>
                <li className="Map text-sm font-bold">
                  <a target="_blank" href="/" className="text-yellow-500">
                    View in Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="h-full">
          <div className="flex mb-4">
            <div className=" w-full sm:w-[70%] h-full  ">
              <div className=" pt-0 sm:pt-10 sm:px-16 px-0">
                <div className="sm:border-[1.5px] border-0 sm:py-10 py-0 justify-center flex  border-solid border-slate-400 rounded-md">
                  <img src={`${IMG}/${dataItem.banner}`} className="sm:rounded-md rounded-none" alt="" />
                </div>
                <div className="Description pt-10 sm:px-0 px-10">
                  <h1 className="text-2xl font-bold">{dataItem.event_name}</h1>
                  <p className="text-sm font-semibold pb-3 pt-5">Description:</p>
                  <p className="text-sm pb-14 ">{dataItem.description}</p>
                  <p className="text-sm font-semibold pb-3">Terms And Conditions:</p>
                  <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque corrupti veniam laboriosam!</p>
                </div>
                <div className="py-[1px] my-16 bg-slate-400 rounded sm:mx-0 mx-10" />
                <div className="TALENT">
                  <div className="text-2xl font-bold pb-10 pl-10 sm:pl-0 ">Talent</div>
                  <div className=" grid-cols-1 grid md:grid-cols-3 sm:grid-cols-2 gap-2 pb-5 mx-6 ">
                    {talentItem.map((item: TalentTypes) => {
                      return (
                        <div key={item._id} className=" justify-center flex">
                          <div className="max-w-sm">
                            <Card>
                              <div className="flex ">
                                <img width={50} height={50} src={`${IMG}/${item.talent_picture}`} className="pr-2 rounded-full" alt="" />
                                <h5 className="text-2xl font-bold tracking-tight px-auto mt-1 text-gray-900 dark:text-white">{item.talent_name} </h5>
                              </div>
                            </Card>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[30%] h-full sticky top-36 z-10   hidden sm:block">
              <div className="py-10 pr-16 pl-7">
                <div className="max-w-sm  rounded-md overflow-hidden bg-white border-slate-400 border border-solid   hover:drop-shadow-xl">
                  <div className="px-3 py-4 ">
                    <div className="font-bold text-xl mb-2 pb-1 ">Ticket Category</div>
                  </div>

                  <div className="px-3 py-2 bg-slate-200 divide-x-2 " />
                  {categoryItem.map((item: CategoryTypes) => {
                    return <CategoryCards category_name={item.category_name} price={item.price} key={item._id} id={item._id} />;
                    // return <CategoryCards />;
                  })}
                  <div className="px-3 py-2 bg-slate-200 divide-x-2 " />

                  <div className="px-3 py-4 ">
                    <div className="font-semibold text-md ">Total:</div>
                    <div className="grid-cols-2 grid">
                      {/* <div className="font-bold text-xl mb-2 text-yellow-500 mt-2">RP. {totalCO}</div> */}
                      <div className="font-bold text-xl mb-2 text-yellow-500 ml-auto">
                        <Link href="/event">
                          <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">Chekout</button>
                        </Link>
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
            Buy TIcket
          </button>
        </div>

        {/* Footer */}
        <div className="sm:block hidden">
          <Footers />
        </div>
      </div>

      {/* ticket mobile */}
      <div className={clicked || 'w-full h-full bg-white z-30 absolute top-0 hidden '}>
        <div className="px-3  flex items-center h-[7%] ">
          <div className="font-bold text-xl" onClick={handleClick}>
            -Ticket Category
          </div>
        </div>
        <div className="px-3 py-4 bg-slate-300 h-[84%]">
          <div className=" text-xl ">
            <ul className="my-4 space-y-3 border-yellow-500 border-solid border-l-4 rounded-lg">
              <li>
                <div className="group flex items-center rounded-lg  bg-white p-3 text-base font-bold text-gray-900  dark:bg-gray-600 dark:text-white ">
                  <ul className=" flex-1">
                    <li className="ml-3 text-xs whitespace-nowrap">Presale 1</li>
                    <li className="ml-3 whitespace-nowrap">Rp. 100.000</li>
                  </ul>
                  <a href="/event">
                    <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-3 border  hover:border-transparent rounded-lg">add</button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-3 h-[9%] ">
          <div className="h-full ">
            <div className="font-semibold text-md absolute pt-1">Total:</div>
            <div className="grid-cols-2 grid  items-center h-full ">
              <div className="font-bold text-xl mb-2 text-yellow-500 ">RP. 0</div>
              <div className="font-bold text-xl mb-2 text-yellow-500 ml-auto">
                <Link href="/event">
                  <button className="bg-slate-500 hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">Chekout</button>
                </Link>
              </div>
            </div>
            {/* <div className="flex  bg-green-500 h-full">
            <div className="flex float-left">Total</div>
            <div className="flex float-left">RP. 0</div>
            <div className="flex float-right">Chekout</div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
