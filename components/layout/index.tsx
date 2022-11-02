import Footers from '../footer/index';
import Headers from '../header/index';
import { ReactNode } from 'react';
import styles from './layout.module.css';
import Head from 'next/head';

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
      </Head>
      <Headers />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
      <Footers />
    </>
  );
}
