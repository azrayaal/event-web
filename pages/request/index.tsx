import React, { useState } from 'react';
import { Card, Textarea } from 'flowbite-react';
import Layouts from '../../components/layout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// or

interface RequestTypes {
  event_name: string;
  description: string;
  date: string;
  location: string;
  maps: string;
  agencyName: string;
}

export default function Request() {
  const [email, setEmail] = useState('');
  //   const [date, setDate] = useState('');
  const [maps, setMaps] = useState('');
  const [location, setLocation] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit = async () => {
    const data = new FormData();
    // data.append('name', user.name);
    // data.append('phoneNumber', user.phoneNumber);
    // data.append('image', user.avatar);

    // console.log('dataform', user);

    // const response = await putEditProfile(data, user.id);
  };
  return (
    <Layouts pageTitle="Edit Profile">
      <div className="sm:px-[4rem] px-[1rem] h-screen w-full py-10 bg-slate-100">
        <div className=" h-full place-content-center flex">
          <div className="sm:mx-5 sm:w-[50%] w-[100%]">
            <form>
              <Card>
                <div className="inputan1 email">
                  <div className=" content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Event Name</label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type=""
                      placeholder="event name"
                      id="event_name"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <Card>
                  <div className="inputan1 date">
                    <div className=" content-center">
                      <div className="mb-2">
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide ">Date</label>
                      </div>
                      <DatePicker className="" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
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
