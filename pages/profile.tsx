import { Card } from 'flowbite-react';
import { useState } from 'react';
import Layouts from '../components/layout';
import Image from 'next/image';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/Signup.module.css';

export default function profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [image, setImage] = useState<any>('');
  const [imagePreview, setImagePreview] = useState<any>('');

  const onSubmit = () => {
    console.log('hahah');
  };
  return (
    <Layouts pageTitle="Edit Profile">
      <div className="sm:px-[4rem] px-[1rem] h-screen  py-10  bg-slate-100">
        <div className=" h-full place-content-center flex">
          <div className="sm:mx-5 mx-auto sm:w-[50%] w-[100%]">
            <Card>
              <div className={styles.signupphoto}>
                <label htmlFor="image">
                  {imagePreview ? (
                    <Image src={imagePreview} width={120} height={120} className="img-upload rounded-full" alt="upload" />
                  ) : (
                    <Image src="/upload.svg" width={120} height={120} className="img-upload rounded-full" alt="upload" />
                  )}
                </label>
                <input
                  id="image"
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    // console.log(event.target.files);
                    const img = event.target.files![0];
                    setImagePreview(URL.createObjectURL(img));
                    return setImage(img);
                  }}
                />
              </div>
              {/* </Card> */}
              <div className="inputan1 email">
                <div className=" content-center">
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
              </div>
              <div className="inputan1 nama">
                <div className=" content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">name</label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="name"
                    placeholder="siapa namanya??"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <div className="inputan1 nama">
                <div className=" content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Nomor Telfon</label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type=""
                    placeholder="Berapa nomernya??"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(event) => setphoneNumber(event.target.value)}
                  />
                </div>
              </div>
              <div className="inputan1 nama">
                <div className=" content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Password</label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="password"
                    placeholder="Masukan Password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>

              <button onClick={onSubmit} className="bg-slate-800 w-full hover:bg-slate-700 font-semibold text-white py-2 px-2 border  hover:border-transparent rounded-3xl">
                Create my account
              </button>
            </Card>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
