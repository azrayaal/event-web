import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import CardsEvent from '../../components/cards/cards-event';
import Layouts from '../../components/layout';
import { getFeaturedEvent } from '../../services/pages';
import styles from '../../styles/Event.module.css';

export default function Event() {
  const [eventList, setEventList] = useState([]);

  const getEventList = useCallback(async () => {
    const data = await getFeaturedEvent();
    setEventList(data);
  }, [getFeaturedEvent]);

  useEffect(() => {
    getEventList();
  }, []);
  return (
    <>
      <Layouts pageTitle="Events">
        <div className="px-5 pb-6">
          <div className="sm:pl-16 sm:pt-10 pb-8 pt-10">
            <p className=" font-bold text-4xl pb-3">All Events</p>
            <p>Find your favorite events, and let's have fun</p>
          </div>

          <div className="div">
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-8 pb-5 ">
              {eventList.map((item) => {
                return <CardsEvent key={item._id} id={item._id} event_name={item.event_name} description={item.description} banner={item.banner} />;
              })}
            </div>
            <div className="mt-10 ">
              <div className={styles.buttonCenter}>
                <Link href="/event">
                  <button className="bg-slate-500 hover:bg-slate-700  font-semibold text-white py-2 px-4 border  hover:border-transparent rounded">View More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
}
