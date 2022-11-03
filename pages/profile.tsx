import React from 'react';
import Layouts from '../components/layout';
import { Card, Label, FileInput, TextInput, Radio } from 'flowbite-react';
import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';
import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';

const inputan = [
  { nama: 'Email', Placeholder: 'Apa Emailnya??' },
  { nama: 'Nama', Placeholder: 'Siapa Namanya??' },
  { nama: 'Nomor Telefon', Placeholder: 'Nomor Telefonya kaka' },
];

const datepickerEl = document.getElementById('datepickerId');
new Datepicker(datepickerEl, {
  // options
});

const dateRangePickerEl = document.getElementById('dateRangePickerId');
new DateRangePicker(datepickerEl, {
  // options
});

export default function profile() {
  return (
    <Layouts pageTitle="Edit Profile">
      <div className="sm:px-[4rem] px-[3rem] h-[100vh]">
        <div className="flex h-full">
          <div className="bg-red-300 w-[100%] sm:w-[35%] pt-10">
            <div className="max-w-sm mx-auto">
              <Card>
                <img src="/profile.svg" alt="a" className="rounded-full" />
                <div id="fileUpload">
                  <FileInput id="file" />
                </div>
              </Card>
            </div>
          </div>
          <div className="bg-green-300 hidden sm:block sm:w-[65%] pt-10 ">
            <div className=" bg-red-600 mx-5">
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
                    <Label htmlFor="username3" color="green" value="Date of Birth" />
                  </div>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <input
                      datepicker=""
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                      placeholder="Select date"
                    />
                  </div>
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
                  <button className="bg-slate-500 w-full hover:bg-slate-700 font-semibold text-white py-1 px-2 border  hover:border-transparent rounded">Simpan</button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
