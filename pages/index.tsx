import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import CardsEvent from '../components/cards/cards-event';
import Carousels from '../components/carousel';
import Footers from '../components/footer';
import Navbars from '../components/header';
import { EventListTypes } from '../services/data-types';
import { getFeaturedEvent } from '../services/pages';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [eventList, setEventList] = useState([]);

  const getEventList = useCallback(async () => {
    const data = await getFeaturedEvent();
    setEventList(data);
    console.log(data);
  }, []);

  useEffect(() => {
    getEventList();
  }, []);
  return (
    <>
      <Head>
        <title>Leisure Event | Home</title>
        <meta name="description" content="Website NextJS Basic" />
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
      </Head>
      <Navbars />
      <Carousels />
      <div className="px-5 pb-6">
        <div className="sm:pl-16 sm:pt-12 sm:pb-8 pt-10">
          <p className=" font-bold text-4xl pb-3">Popular Event</p>
          <p>Find your favorite events, and let's have fun</p>
        </div>
        <div className={styles.main}>
          <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-8 pb-5 ">
            {eventList.map((item: EventListTypes) => {
              return <CardsEvent key={item._id} id={item._id} event_name={item.event_name} description={item.description} banner={item.banner} />;
            })}
          </div>
          <div className="mt-10 ">
            <Link href="/event">
              <button className="bg-slate-500 hover:bg-slate-700  font-semibold text-white py-2 px-4 border  hover:border-transparent rounded">Discover More Events</button>
            </Link>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}
