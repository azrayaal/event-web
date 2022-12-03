import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { getSignIn } from '../services/auth';

import Cookies from 'js-cookie';

export default function signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const route = useRouter();

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    const dataLogin = {
      email,
      password,
    };

    if (!email || !password) {
      toast.error('Email atau Password tidak boleh kosong', { theme: 'colored' });
    } else {
      const response = await getSignIn(dataLogin);
      if (response.error) {
        toast.error(response.message, {
          theme: 'colored',
        });
      } else {
        toast.success('Berhasil Login', {
          theme: 'colored',
        });
        // console.log(response.data);
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, {
          expires: 1,
        });
        route.push('/');
      }
    }
  };

  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div
          className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}
        >
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Reference site about Lorem Ipsum..</div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              {' '}
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and
              scrambled it to make a type specimen book it has?
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center items-center md:justify-center sm:my-0 my-32 sm:w-auto md:h-full h-full w-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Back!</h2>
              <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
            </div>

            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="email"
                  placeholder="email@mail.com"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mt-8 content-center">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Password</label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-indigo-400 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  onClick={onSubmitLogin}
                >
                  Sign in
                </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Don't have an account?</span>
                <a href="/signup" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
