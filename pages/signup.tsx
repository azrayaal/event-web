import React, { useState } from 'react';
import { TextInput, Label, Card, FileInput, Radio } from 'flowbite-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const inputan = [
  { nama: 'Email', Placeholder: 'Apa Emailnya??' },
  { nama: 'Nama', Placeholder: 'Siapa Namanya??' },
  { nama: 'Nomor Telefon', Placeholder: 'Nomor Telefonya kaka' },
];

export default function signup() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="sm:px-[4rem] px-[3rem] h-[100%] pb-10 bg-slate-100">
      <div className="flex h-full">
        <div className=" w-[100%] sm:w-[35%] pt-10">
          <div className="max-w-sm mx-auto">
            <Card className="">
              <img src="/profile.svg" alt="a" className="rounded-full" />
              <div id="fileUpload">
                <FileInput id="file" />
              </div>
            </Card>
            {/* mobile data input */}
            <div className=" sm:hidden block w-[100%] pt-10 ">
              <div className=" ">
                <Card className="shadow-2xl">
                  {inputan.map((item) => (
                    <div className="inputan1">
                      <div className="mb-2 block ">
                        <Label htmlFor="username3" color="green" value={item.nama} />
                      </div>
                      <TextInput id="username" placeholder={item.Placeholder} required={true} color="green" className="w-[90%] " />
                    </div>
                  ))}

                  {/* date */}
                  <div>
                    <div className="mb-2 block ">
                      <Label htmlFor="username3" color="green" value="Tanggal berapa lahirnya" />
                    </div>
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} className="rounded-lg" />
                  </div>

                  {/* gender */}
                  <div>
                    <fieldset className="flex flex-col gap-4" id="radio">
                      <div className="mb-2 block ">
                        <Label htmlFor="username3" color="green" value="gender" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="Male" name="gender" value="USA" defaultChecked={true} />
                        <Label htmlFor="Male">Male</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="Female" name="gender" value="Female" />
                        <Label htmlFor="Female">Female</Label>
                      </div>
                    </fieldset>
                  </div>
                  <a href="" className="">
                    <button className="bg-slate-500 w-full hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">Create my account</button>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block sm:w-[65%] pt-10 ">
          <div className="  mx-5">
            <Card>
              {inputan.map((item) => (
                <div className="inputan1">
                  <div className="mb-2 block ">
                    <Label htmlFor="username3" color="green" value={item.nama} />
                  </div>
                  <TextInput id="username" placeholder={item.Placeholder} required={true} color="green" className="w-[90%] " />
                </div>
              ))}

              {/* date */}
              <div>
                <div className="mb-2 block ">
                  <Label htmlFor="username3" color="green" value="Tanggal berapa lahirnya" />
                </div>
                <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} className="rounded-lg" />
              </div>

              {/* gender */}
              <div>
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
              </div>
              <a href="" className="">
                <button className="bg-slate-500 w-full hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">Create my account</button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
