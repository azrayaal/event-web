import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import CardsEvent from '../../components/cards/cards-event';
import Carousels from '../../components/carousel';
import Footers from '../../components/footer';
import Navbars from '../../components/header';
import Layouts from '../../components/layout';
import { EventListTypes } from '../../services/data-types';
import { getFeaturedEvent } from '../../services/pages';
import styles from '../../styles/Home.module.css';

export default function Home(props) {
  // export default function Home(props) {
  //   const { eventList } = props;
  const [eventList, setEventList] = useState([]);

  const getEventList = useCallback(async () => {
    const response = await getFeaturedEvent();
    setEventList(response.data);
    console.log(response.data);
  }, []);

  useEffect(() => {
    getEventList();
  }, []);

  return (
    <>
      {/* <Layouts pageTitle="Home"> */}
      <Navbars />
      {/* <div className=" bg-slate-100 h-[2000px]"> */}
      <div className={styles.main}>
        <div className=" pb-6 ">
          <div className="ml-8 sm:pt-12 sm:pb-8 ">
            <p className=" font-bold text-4xl pb-3">Popular Event</p>
            <p>Find your favorite events, and let's have fun</p>
          </div>
          <div className={styles.main}>
            <div
              className="
            cardindex 
            grid 
            lg:grid-cols-3 
            md:grid-cols-2 
            sm:grid-cols-1 
            gap-8 
            md:mx-0
            mx-2"
            >
              {eventList.map((item: EventListTypes) => {
                return <CardsEvent agency_name={item.agencyName} date={item.date} key={item._id} id={item._id} event_name={item.event_name} banner={item.banner} location={item.location} status={item.status} />;
              })}
            </div>
            <div className="text-center justify-center items-center mt-10">
              <Link href="/event">
                <button className="inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  More Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footers />
      {/* </Layouts> */}
    </>
  );
}
