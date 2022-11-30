import { Card, Label } from 'flowbite-react';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Layouts from '../components/layout';
import { getSignUpApi } from '../services/auth';
import Link from 'next/link';
// import { toast } from 'react-toastify';

export default function signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [image, setImage] = useState<any>('');
  const [imagePreview, setImagePreview] = useState<any>(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();

    data.append('image', image);
    data.append('name', name);
    data.append('email', email);
    data.append('phoneNumber', phoneNumber);
    data.append('password', password);
    // data.append('password', password);

    // const result = await getSignUpApi(data);
    // if (result.error) {
    //   toast.error(result.message, {
    //     theme: 'colored',
    //   });
    // } else {
    //   toast.success('Register Berhasil');
    //   // router.push('/sign-up-success');
    //   localStorage.removeItem('user-form');
    // }

    const result = await getSignUpApi(data);
    console.log('result: ', result);
  };

  // const [startDate, setStartDate] = useState(new Date());
  return (
    <Layouts pageTitle="Sign Up">
      <div className="sm:px-[4rem] px-[3rem] h-[100%] pb-24 bg-slate-100">
        <div className="flex h-full">
          <div className=" w-[100%] sm:w-[35%] pt-10">
            <div className="max-w-sm mx-auto">
              <Card className="">
                {/* <img src="/profile.svg" alt="a" className="rounded-full" /> */}
                {/* img */}
                <div className="image-upload text-center">
                  <label htmlFor="image">{imagePreview ? <img src={imagePreview} className="img-upload rounded-full" alt="upload" /> : <img src="/profile.svg" width={120} height={120} className="img-upload rounded-full" />}</label>
                  {/* kalo buat input yg biasa dia 'event.target.value'
                   kalo buat masukin gambar ' event.target.files' */}
                  <input
                    id="avatar"
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
                {/* end of img */}
                {/* <div id="fileUpload">
                  <FileInput id="file" />
                </div> */}
              </Card>
              {/* mobile data input */}
              <div className=" sm:hidden block w-[100%] pt-10 ">
                <div className=" ">
                  <Card className="shadow-2xl">
                    <div className="inputan1 email">
                      <div className="mb-2 block ">
                        <Label htmlFor="username3" color="green" value="Email" />
                      </div>
                      <input id="username" value={email} name="email" onChange={(event) => setEmail(event.target.value)} placeholder="apa emailnya??" required={true} color="green" className="w-[90%] " />
                    </div>
                    <div className="inputan1 nama">
                      <div className="mb-2 block ">
                        <Label htmlFor="username3" color="green" value="Nama" />
                      </div>
                      <input id="username" value={name} name="name" onChange={(event) => setName(event.target.value)} placeholder="siapa namanya??" required={true} color="green" className="w-[90%] " />
                    </div>
                    <div className="inputan1 notelp">
                      <div className="mb-2 block ">
                        <Label htmlFor="username3" color="green" value="No Telp" />
                      </div>
                      <input id="username" value={phoneNumber} name="phoneNumber" onChange={(event) => setphoneNumber(event.target.value)} placeholder="berapa nomernya??" required={true} color="green" className="w-[90%] " />
                    </div>
                    <div className="inputan1 password">
                      <div className="mb-2 block ">
                        <Label htmlFor="username3" color="green" value="Password" />
                      </div>
                      <input
                        id="username"
                        type="password"
                        value={password}
                        name="password"
                        aria-describedby="password"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Masukan Password"
                        required={true}
                        color="green"
                        className="w-[90%] "
                      />
                    </div>

                    <Link href="/" className="">
                      <button onClick={onSubmit} className="bg-slate-500 w-full hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">
                        Create my account
                      </button>
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:w-[65%] pt-10 ">
            <div className="  mx-5">
              <Card>
                <div className="inputan1 email">
                  <div className="mb-2 block ">
                    <Label htmlFor="username3" color="green" value="Email" />
                  </div>
                  <input id="username" value={email} name="email" onChange={(event) => setEmail(event.target.value)} placeholder="apa emailnya??" required={true} color="green" className="w-[90%] " />
                </div>
                <div className="inputan1 nama">
                  <div className="mb-2 block ">
                    <Label htmlFor="username3" color="green" value="Nama" />
                  </div>
                  <input id="username" value={name} name="name" onChange={(event) => setName(event.target.value)} placeholder="siapa namanya??" required={true} color="green" className="w-[90%] " />
                </div>
                <div className="inputan1 notelp">
                  <div className="mb-2 block ">
                    <Label htmlFor="username3" color="green" value="No Telp" />
                  </div>
                  <input id="username" value={phoneNumber} name="phoneNumber" onChange={(event) => setphoneNumber(event.target.value)} placeholder="berapa nomernya??" required={true} color="green" className="w-[90%] " />
                </div>
                <div className="inputan1 password">
                  <div className="mb-2 block ">
                    <Label htmlFor="username3" color="green" value="Password" />
                  </div>
                  <input id="username" value={password} name="password" aria-describedby="password" onChange={(event) => setPassword(event.target.value)} placeholder="Masukan Password" required={true} color="green" className="w-[90%] " />
                </div>

                {/* date */}
                {/* <div>
                  <div className="mb-2 block ">
                    <Label htmlFor="username3" color="green" value="Tanggal berapa lahirnya" />
                  </div>
                  <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} className="rounded-lg" />
                </div> */}

                {/* gender */}
                {/* <div>
                  <fieldset className="flex flex-col gap-4" id="radio">
                    <div>
                      <div className="mb-2 block ">
                        <Label htmlFor="username3" color="green" value="gender" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="Male" name="gender" value="USA" defaultChecked={true} />
                        <Label htmlFor="Male">Male</Label>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio id="Female" name="gender" value="Female" />
                      <Label htmlFor="Female">Female</Label>
                    </div>
                  </fieldset>
                </div> */}
                <Link href="/" className="">
                  <button onClick={onSubmit} className="bg-slate-500 w-full hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">
                    Create my account
                  </button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
