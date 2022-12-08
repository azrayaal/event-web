import { format } from 'date-fns';
import { Card, FileInput, Textarea } from 'flowbite-react';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { toast } from 'react-toastify';
import Layouts from '../../components/layout';
import { JWTPayloadsTypes, UserTypes } from '../../services/data-types';
import { postRequest } from '../../services/pages';

export default function Request() {
  const [event_name, setEventName] = useState('');
  const [email, setEmail] = useState('');
  const [maps, setMaps] = useState('');
  const [location, setLocation] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<any>('');
  const [selected, setSelected] = React.useState<any>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  const route = useRouter();

  const onSubmit = async () => {
    const data = new FormData();
    data.append('event_name', event_name);
    data.append('date', selected);
    data.append('maps', maps);
    data.append('location', location);
    data.append('agencyName', agencyName);
    data.append('description', description);
    data.append('image', image);

    console.log('data--->', data);

    const response = await postRequest(data);
    if (response.error) {
      toast.error(response.message, {
        theme: 'colored',
      });
    } else {
      toast.success('berhasil kirm request event', {
        theme: 'colored',
      });
      console.log('data dari resp', response);
      route.push('/your_event/confirmationRequest');
    }
  };
  return (
    <Layouts pageTitle="Edit Profile">
      <div className="sm:px-[4rem] px-[1rem] h-full w-full py-10 bg-slate-100">
        <div className=" h-full place-content-center flex">
          <div className="sm:mx-5 sm:w-[50%] w-[100%]">
            <form>
              <Card>
                <div className="inputan1 eventName">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Event Name</label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type=""
                      placeholder="event name"
                      id="event_name"
                      value={event_name}
                      onChange={(event) => setEventName(event.target.value)}
                    />
                  </div>
                </div>

                <div className="">
                  <div className="mb-2">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide ">Date</label>
                  </div>
                  <Card>
                    <div className="inputan1 date ">
                      <div className=" content-center">
                        <div className="flex justify-center ">
                          <DayPicker className="" mode="single" selected={selected} onSelect={setSelected} footer={footer} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide ">Banner</label>
                <Card>
                  <div className="inputan1 Banner">
                    <div className=" content-center">
                      {/* <FileInput id="file" helperText="A Banner picture is useful to confirm your request" value={banner} onChange={(event) => setBanner(event.target.file)} /> */}
                      <FileInput
                        id="file"
                        helperText="A Banner picture is useful to confirm your request"
                        accept="image/png, image/jpeg"
                        onChange={(event) => {
                          // console.log(event.target.files);
                          const img = event.target.files![0];
                          // setImagePreview(URL.createObjectURL(img));
                          return setImage(img);
                        }}
                      />
                    </div>
                  </div>
                </Card>

                <div className="inputan1 location">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Location</label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type=""
                      placeholder="location"
                      id="location"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                    />
                  </div>
                </div>
                <div className="inputan1 maps">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Maps</label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type=""
                      placeholder="maps"
                      id="maps"
                      value={maps}
                      onChange={(event) => setMaps(event.target.value)}
                    />
                  </div>
                </div>
                <div className="inputan1 agencyName">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Agency Name</label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type=""
                      placeholder="Agency Name"
                      id="agencyName"
                      value={agencyName}
                      onChange={(event) => setAgencyName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="inputan1 description">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Description</label>
                    <Textarea id="comment" placeholder="Leave a comment..." required={true} rows={4} value={description} onChange={(event) => setDescription(event.target.value)} />
                  </div>
                </div>

                <button type="button" className="bg-slate-800 w-full hover:bg-slate-700 font-semibold text-white py-2 px-2 border hover:border-transparent rounded-3xl" onClick={onSubmit}>
                  Send Request!
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
