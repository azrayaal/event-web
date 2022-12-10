import jwtDecode from 'jwt-decode';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layouts from '../components/layout';
import ButtonFilterRequest from '../components/request_event/button_filter';
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
  return (
    <Layouts pageTitle="Transactions">
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen flex justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="text-center justify-center items-center py-5">
              <ButtonFilterRequest onClick={() => onTabClick('all')} title="All Trx" active={tab === 'all'} />
              <ButtonFilterRequest onClick={() => onTabClick('success')} title="success" active={tab === 'success'} />
              <ButtonFilterRequest onClick={() => onTabClick('pending')} title="pending" active={tab === 'pending'} />
              <ButtonFilterRequest onClick={() => onTabClick('failed')} title="failed" active={tab === 'failed'} />
            </div>
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Event</th>
                    <th className="py-3 px-6 text-center">Quantity</th>
                    <th className="py-3 px-6 text-center">Users</th>
                    <th className="py-3 px-6 text-center">Total</th>
                    <th className="py-3 px-6 text-center">Order Date</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                {transactionList.map((item: TransactionHistoryTypes) => {
                  return (
                    <tbody className="text-gray-600 text-sm font-light">
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{item.historyTicketCat.event_name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className=" items-center ">
                            <span className="font-medium">{item.historyTicketCat.quantity}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className=" items-center">
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className="bg-purple-200 text-black py-1 px-3 rounded-full text-xs">{item.historyTicketCat.total}</span>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className="bg-purple-200 text-black py-1 px-3 rounded-full text-xs">{item.createdAt}</span>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className={`status-historyTransaction ${item.status} text-white py-1 px-3 rounded-full text-xs`}>{item.status}</span>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
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
