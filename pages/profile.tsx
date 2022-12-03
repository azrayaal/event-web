import { Card } from 'flowbite-react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Layouts from '../components/layout';

import { useRouter } from 'next/router';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { JWTPayloadsTypes, UserTypes } from '../services/data-types';
import { putEditProfile } from '../services/pages';
import styles from '../styles/Signup.module.css';

interface UserStateTypes {
  email: string;
  id: string;
  name: string;
  phoneNumber: string;
  avatar: any;
}

export default function profile() {
  const [imagePreview, setImagePreview] = useState<any>('/');
  const [user, setUser] = useState<UserStateTypes>({
    email: '',
    name: '',
    phoneNumber: '',
    avatar: '',
    id: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.user;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${userFromPayload.avatar}`;
      // console.log('data payload profile=>', user.avatar);
      setUser(userFromPayload);
    }
  }, []);

  const router = useRouter();

  const onSubmit = async () => {
    const data = new FormData();
    data.append('name', user.name);
    data.append('phoneNumber', user.phoneNumber);
    data.append('image', user.avatar);

    console.log('dataform', user);

    const response = await putEditProfile(data, user.id);

    if (response.error) {
      toast.error(response.message, {
        theme: 'colored',
      });
    } else {
      toast.success('berhasil ganti data', {
        theme: 'colored',
      });
      console.log('data dari resp', response);
      Cookies.remove('token');
      router.push('/signin');
    }
  };
  return (
    <Layouts pageTitle="Edit Profile">
      <div className="sm:px-[4rem] px-[1rem] h-screen  py-10  bg-slate-100">
        <div className=" h-full place-content-center flex">
          <div className="sm:mx-5 mx-auto sm:w-[50%] w-[100%]">
            <form>
              <Card>
                <div className={styles.signupphoto}>
                  <label htmlFor="avatar">
                    {imagePreview === '/' ? (
                      <img src={user.avatar} alt="" width="120" height="120" className="avatar img-fluid rounded-circle" />
                    ) : (
                      <img src={imagePreview} alt="" width="120" height="120" className="avatar img-fluid rounded-circle" />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
                {/* </Card> */}
                <div className="inputan1 email">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                    <input
                      disabled
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type="email"
                      placeholder="email@mail.com"
                      id="email"
                      value={user.email}
                      onChange={(event) => setUser({ ...user, email: event.target.value })}
                    />
                  </div>
                </div>
                <div className="inputan1 nama">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">name</label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type="name"
                      placeholder="siapa namanya??"
                      id="name"
                      value={user.name}
                      onChange={(event) => setUser({ ...user, name: event.target.value })}
                    />
                  </div>
                </div>
                <div className="inputan1 phoneNumber">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Nomor Telfon</label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type=""
                      placeholder="Berapa nomernya??"
                      id="phoneNumber"
                      value={user.phoneNumber}
                      onChange={(event) => setUser({ ...user, phoneNumber: event.target.value })}
                    />
                  </div>
                </div>

                <button type="button" className="bg-slate-800 w-full hover:bg-slate-700 font-semibold text-white py-2 px-2 border hover:border-transparent rounded-3xl" onClick={onSubmit}>
                  Save My Profile
                </button>
              </Card>
            </form>
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
