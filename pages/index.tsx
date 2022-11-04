import CardsEvent from '../components/cards/cards-event';
import Carousels from '../components/carousel';
import Footers from '../components/footer';
import Navbars from '../components/header';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
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
        <div className="sm:pl-16 sm:pt-24 sm:pb-8 pt-10">
          <p className=" font-bold text-4xl pb-3">Popular Event</p>
          <p>Find your favorite events, and let's have fun</p>
        </div>
        <div className={styles.main}>
          <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-8 pb-5 ">
            <div>
              <Link href="/event/33">
                <CardsEvent />
              </Link>
            </div>
            <div>
              <Link href="/event/33">
                <CardsEvent />
              </Link>
            </div>
            <div>
              <Link href="/event/33">
                <CardsEvent />
              </Link>
            </div>
            <div>
              <Link href="/event/33">
                <CardsEvent />
              </Link>
            </div>
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
