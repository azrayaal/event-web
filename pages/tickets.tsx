import { Select } from 'flowbite-react';
import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import Layouts from '../components/layout';
import { JWTPayloadsTypes, UserTypes } from '../services/data-types';

export default function Tickets() {
  return (
    <Layouts pageTitle="Transactions z-30">
      <div className=" sticky  top-0  bg-[#172029] hidden sm:block py-8 drop-shadow shadow-blue-600">
        <div className="grid grid-cols-3  ">
          <div className="pl-16 text-slate-50 my-auto ">
            <div className="NAMAEVENT font-extrabold text-3xl">Tickets</div>
          </div>
          <div className=" justify-center flex  items-center "></div>
          <div className=" justify-center flex  items-center ">
            <div className="w-4/5">
              <div className="input-group relative flex flex-wrap items-stretch w-full rounded">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search Tickets"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span className="input-group-text flex items-center px-3  text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[4rem] h-[65vh] ">
        {/* Mobile form input search */}
        <div className="pt-10 sm:hidden block">
          <div className="font-extrabold text-2xl pb-5">Transations.</div>
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
              <option>All Transactions</option>
              <option>Waiting Payment</option>
              <option>Paid</option>
              <option>Expired</option>
            </Select>
          </div>
        </div>

        <div className=" text-center justify-center items-center  h-4/5 py-10">
          <Image src="/coupon.svg" width={150} height={150} alt="dompet" className=" flex mx-auto "></Image>
          <div className="text-lg font-bold">Oops, no ticket yet </div>
          <div className="text-slate-700 my-5">Maybe you took the wrong route or address. Let’s go back before it gets dark!</div>
          <Link href="/event">
            <button className="bg-slate-500 hover:bg-slate-700  font-semibold text-white py-2 px-4 border  hover:border-transparent rounded">Discover More Events</button>
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
