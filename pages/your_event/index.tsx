import { Select } from 'flowbite-react';
import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layouts from '../../components/layout';
import { JWTPayloadsTypes, RequestHistoryTypes, UserTypes } from '../../services/data-types';
import { getRequest } from '../../services/pages';
import RequestCard from './requestcard';

export default function Tickets() {
  const [requestList, setRequestList] = useState([]);

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

  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <Layouts pageTitle="Transactions z-30 ">
      <div className="sm:px-[4rem] px-[1.5rem] h-full w-full bg-slate-100">
        {/* input search */}
        <div className="pt-5 sm:hidden block">
          <div className="font-extrabold text-2xl pb-5">Request.</div>
          <div className="input-group relative flex flex-wrap items-stretch w-full rounded ">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search Transactions"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span className="input-group-text flex items-center px-3  text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2"></span>
          </div>
          <div id="select" className="pt-5">
            <Select id="Transactions" required={true}>
              <option>All Request</option>
              <option>Pending</option>
              <option>Accept</option>
              <option>Declined</option>
            </Select>
          </div>
        </div>
        {/* input search */}

        <div className="md:grid-cols-3 sm:grid-cols-2 gap-8 py-10 grid">
          {requestList.map((item: RequestHistoryTypes) => {
            return <RequestCard thumbnail={`${IMG}/${item.thumbnail}`} date={item.date} status={item.status} event_name={item.event_name} description={item.description} key={item._id} id={item._id} />;
          })}
        </div>
        <div className=" text-center justify-center items-center  h-4/5 py-10">
          {/* <Image src="/coupon.svg" width={150} height={150} alt="dompet" className=" flex mx-auto "></Image>
          <div className="text-lg font-bold my-5">Oops, kamu belum pernah membuat event </div> */}
          {/* <div className="text-slate-700 my-5">Maybe you took the wrong route or address. Let’s go back before it gets dark!</div> */}
          <Link href="/your_event/request">
            <button className="bg-slate-500 hover:bg-slate-700  font-semibold text-white py-2 px-4 border  hover:border-transparent rounded-full">Buat Event</button>
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
