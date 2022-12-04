import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { JWTPayloadsTypes, UserTypes } from '../../services/data-types';
import NologinNavbar from '../noLogin/navbar';
import Auth from './auth';

const navigation = [
  //   { name: 'Transactions', href: '#', current: true },
  {
    name: 'Transactions',
    href: '/transactions',
    current: false,
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    name: 'Tickets',
    href: '/tickets',
    current: false,
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
        />
      </svg>
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbars() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
  });

  //  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.user;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${userFromPayload.avatar}`;
      // console.log('data token=>', userFromPayload);
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  if (isLogin) {
    return (
      <>
        <nav className="bg-gray-800 shadow-lg  z-40">
          {/* {({ open }) => ( */}
          <>
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
              <div className="relative flex  h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center mr-auto text-gray-300 ">
                    <Link href="/" className="font-semibold whitespace-nowrap">
                      Leisuere Event
                    </Link>
                  </div>

                  {/* search box */}
                  <div className=" justify-center hidden sm:ml-6 sm:block">
                    <div className="mt-7 xl:w-96">
                      <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                        <input
                          type="search"
                          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="button-addon2"
                        />
                        <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2"></span>
                      </div>
                    </div>
                  </div>

                  {/* Nav item */}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex mt-4 space-x-4  h-[67%]">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3  rounded-md text-sm font-medium ')}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <div className=" h-full w-26 flex  items-center ">
                            <div className="pr-2 font-semibold whitespace-nowrap">{item.logo}</div>
                            <div className="font-semibold whitespace-nowrap">{item.name}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <Auth avatar={user.avatar} />
              </div>
            </div>
          </>
          {/* )} */}
        </nav>
      </>
    );
  }
  return <NologinNavbar />;
}
