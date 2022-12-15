import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layouts from '../components/layout';
import ButtonFilterRequest from '../components/request_event/button_filter';
import TransactionList from '../components/transaction/transactionlist';
import { JWTPayloadsTypes, TransactionHistoryTypes, UserTypes } from '../services/data-types';
import { getTransactions } from '../services/pages';

export default function transactions() {
  const [tab, setTab] = useState('all');
  const [transactionList, setTransactionList] = useState([]);

  const getTransactionList = useCallback(async (value: any) => {
    const response = await getTransactions(value);
    if (response.error) {
      toast.error(response.error),
        {
          theme: 'colored',
        };
    } else {
      console.log('data transaction', response.data);
      setTransactionList(response.data);
    }
  }, []);

  useEffect(() => {
    getTransactionList('all');
  }, []);

  const onTabClick = (value: any) => {
    setTab(value);
    getTransactionList(value);
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <Layouts pageTitle="Transactions">
      <div className="overflow-x-auto h-full">
        <div className="min-w-screen min-h-screen flex justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="text-center justify-center items-center py-5">
              <ButtonFilterRequest onClick={() => onTabClick('all')} title="All Trx" active={tab === 'all'} />
              <ButtonFilterRequest onClick={() => onTabClick('success')} title="success" active={tab === 'success'} />
              <ButtonFilterRequest onClick={() => onTabClick('pending')} title="pending" active={tab === 'pending'} />
              <ButtonFilterRequest onClick={() => onTabClick('failed')} title="failed" active={tab === 'failed'} />
            </div>
            <div className="md:grid-cols-3 sm:grid-cols-2 gap-8 py-10 grid">
              {transactionList.map((item: TransactionHistoryTypes) => {
                return (
                  <TransactionList
                    event_name={item.historyTicketCat.event_name}
                    id={item._id}
                    name={item.name}
                    total={item.historyTicketCat.total}
                    createdAt={item.createdAt}
                    status={item.status}
                    banner={`${IMG}/${item.historyTicketCat.banner}`}
                  />
                );
              })}
            </div>
            <div className="text-center justify-center items-center ">
              <Link href="/">
                <button className="inline-block px-6 py-2.5 bg-[#015E95] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.user;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
