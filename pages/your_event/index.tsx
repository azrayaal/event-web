import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layouts from '../../components/layout';
import ButtonFilterRequest from '../../components/request_event/button_filter';
import { JWTPayloadsTypes, RequestHistoryTypes, UserTypes } from '../../services/data-types';
import { getRequest } from '../../services/pages';
import RequestCard from './requestcard';

export default function Tickets() {
  const [requestList, setRequestList] = useState([]);
  const [tab, setTab] = useState('all');

  const getRequestList = useCallback(async (value: any) => {
    const response = await getRequest(value);
    if (response.error) {
      toast.error(response.error, {
        theme: 'colored',
      });
    } else {
      console.log('data>>', response);
      setRequestList(response.data);
    }
  }, []);

  useEffect(() => {
    getRequestList('all');
  }, []);

  const onTabClick = (value: any) => {
    setTab(value);
    getRequestList(value);
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <Layouts pageTitle="Transactions z-30 ">
      <div className="sm:px-[4rem] px-[1.5rem] h-full w-full bg-slate-100">
        {/* filter */}
        <div className="text-center justify-center items-center py-5">
          <ButtonFilterRequest onClick={() => onTabClick('all')} title="All Rq" active={tab === 'all'} />
          <ButtonFilterRequest onClick={() => onTabClick('pending')} title="pending" active={tab === 'pending'} />
          <ButtonFilterRequest onClick={() => onTabClick('accept')} title="accept" active={tab === 'accept'} />
          <ButtonFilterRequest onClick={() => onTabClick('decline')} title="decline" active={tab === 'decline'} />
        </div>
        {/* filter */}
        <div className="md:grid-cols-3 sm:grid-cols-2 gap-8 py-10 grid">
          {requestList.map((item: RequestHistoryTypes) => {
            return <RequestCard thumbnail={`${IMG}/${item.thumbnail}`} date={item.date} status={item.status} event_name={item.event_name} description={item.description} key={item._id} id={item._id} />;
          })}
        </div>
        <div className=" text-center justify-center items-center  h-4/5 py-10">
          <Link href="/your_event/request">
            <button className="bg-[#504CD8] hover:bg-slate-700 rounded-full font-semibold text-white py-2 px-4 border  hover:border-transparent ">Buat Event</button>
          </Link>
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
