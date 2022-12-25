import Footers from '../footer/index';
import Headers from '../header/index';
import { ReactNode } from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
// import '../../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layouts(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Leisure Event | {pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <meta name="description" content="Kami menyediakan ticket game yang tidak dijual di manapun" />
        <meta property="og:title" content="Leisure Event - Get a new Experience at Event" />
        <meta property="og:keywords" content="HTML, CSS, JavaScript" />
        <meta property="og:description" content="Kami menyediakan ticket game yang tidak dijual di manapun" />
        <meta property="og:author" content="azrayaal" />
        <meta property="og:viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta property="og:img" content="/icon/favicon.ico" /> */}
        <meta property="og:url" content="https://vercel.com/azrayal/leisure-event" />
        <link rel="icon" href="/pngegg-removebg-preview (1).png" />
      </Head>
      <Headers />
      {/* <div className={styles.container}> */}
      <div className={styles.main}>{children}</div>
      {/* </div> */}
      <Footers />
    </>
  );
}
