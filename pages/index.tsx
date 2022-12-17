import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import CardsEvent from '../components/cards/cards-event';
import Footers from '../components/footer';
import Navbars from '../components/header';
import Pagination from '../components/pagination';
import { EventListTypes } from '../services/data-types';
import { getFeaturedEvent } from '../services/pages';
import styles from '../styles/Home.module.css';

export default function Home() {
  // export default function Home(props) {
  //   const { eventList } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(9);
  const [eventList, setEventList] = useState([]);
  const [search, setSearch] = useState('');

  const getEventList = useCallback(async (value: any) => {
    const response = await getFeaturedEvent(value);
    setEventList(response.data);
    // console.log(response.data);
  }, []);

  useEffect(() => {
    getEventList('');
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = eventList.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {/* <Layouts pageTitle="Home"> */}
      <Navbars />
      {/* <div className=" bg-slate-100 h-[2000px]"> */}
      <div className="carousel-ceritanya sm:block hidden relative">
        <img src="https://cdn.evbstatic.com/s3-build/fe/build/images/126d82b6f3fe6bb844e5afb23d51c720-8_tablet_1067x470.jpg" alt="" />

        <div className="absolute top-12 left-12">
          <h1 className="text-[50px] font-extrabold text-yellow-300">Do The New Year Right</h1>
          <h2 className="text-xl  mb-10 font-semibold text-white">We've curated the best events near you to get your 2023 started.</h2>
          <Link href="/your_event/request">
            <button className="inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-lg leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Create Your Own Event
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.main}>
        {/* <Carousels /> */}
        <div className=" pb-6 ">
          <div className="sm:ml-8 mx-4 sm:pt-12 sm:pb-8 ">
            <div className="sm:w-[50%] w-full sm:float-right float-none sm:pb-0 pb-2">
              <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                    // value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div>
              <p className=" font-bold text-4xl pb-3">Popular Event</p>
              <p>Find your favorite events, and let's have fun</p>
            </div>
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
              {currentPost &&
                currentPost
                  .filter((currentPost: EventListTypes) => {
                    if (search === '') {
                      return currentPost;
                    } else if (currentPost.event_name.toLowerCase().includes(search.toLocaleLowerCase())) {
                      return currentPost;
                    }
                  })
                  .map((item: EventListTypes) => {
                    return <CardsEvent agency_name={item.agency_name} date={item.date} key={item._id} id={item._id} event_name={item.event_name} banner={item.banner} location={item.location} status={item.status} />;
                  })}
              {/* {eventList.map((item: EventListTypes) => {
                return <CardsEvent agency_name={item.agency_name} date={item.date} key={item._id} id={item._id} event_name={item.event_name} banner={item.banner} location={item.location} status={item.status} />;
              })} */}
            </div>
            <div className="text-center justify-center items-center mt-10">
              <Link href="/event">
                <button className="inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Discover More Event
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Pagination totalPosts={eventList.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>

      <Footers />
      {/* </Layouts> */}
    </>
  );
}
