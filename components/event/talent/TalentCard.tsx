import React from 'react';
import { Card, Label } from 'flowbite-react';
interface TalentItemProps {
  id: string;
  talent_picture: string;
  talent_name: string;
}

export default function TalentCard(props: TalentItemProps) {
  const { id, talent_picture, talent_name } = props;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <Label>
      <div key={id} id={id} className=" justify-center flex">
        <div className="max-w-sm">
          <Card>
            <div className="flex ">
              <img width={50} height={50} src={`${IMG}/${talent_picture}`} className="pr-2 rounded-full" alt="" />
              <h5 className="text-2xl font-bold tracking-tight px-auto mt-1 text-gray-900 dark:text-white">{talent_name} </h5>
            </div>
          </Card>
        </div>
      </div>
    </Label>
  );
}
