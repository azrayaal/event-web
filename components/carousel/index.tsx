import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function Carousels() {
  return (
    <div className=" sm:h-[500px] xl:h-[500px] 2xl:h-96 pt-8 sm:block hidden ">
      <Carousel>
        <Image src="/csTiket.png" width={1216} height={500} alt="..." />
        <Image src="/igtiket.png" width={1216} height={500} alt="..." />
        <Image src="/tiket.png" width={1216} height={500} alt="..." />
      </Carousel>
    </div>
  );
}
