import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { useEffect, useState } from "react";
import CouponSummary from "../../components/paymentSummary/couponSummary";
import CustSummary from "../../components/paymentSummary/custSummary";
import PaymentSummary from "../../components/paymentSummary/paymentSummary";
import TotalSummary from "../../components/paymentSummary/totalSummary";
import { JWTPayloadsTypes, UserTypes } from "../../services/data-types";

export default function Payment() {
  const [dataItem, setDataItem] = useState({
    event_name: "",
    location: "",
    time: "",
    date: "",
    _id: "",
    createdAt: "",
  });
  const [checkOutItem, setCheckOutItem] = useState({
    ticketCat: {
      category_name: "",
      price: 0,
    },
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [avatarimg, setAvatar] = useState({
    avatar: "",
  });
  const [bannerImg, setBannerImg] = useState({
    banner: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.user;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      avatarimg.avatar = `${IMG}/${userFromPayload.avatar}`;
      // console.log("data payload=>", userFromPayload);
      setAvatar(avatarimg);
      setUser(userFromPayload);

      const dataFromLocal = localStorage.getItem("data-item");
      const checkoutFromLocal = localStorage.getItem("checkout-item");
      const dataItemLocals = JSON.parse(dataFromLocal!);
      const checkoutLocals = JSON.parse(checkoutFromLocal!);
      bannerImg.banner = `${IMG}/${dataItemLocals.banner}`;
      setDataItem(dataItemLocals);
      setBannerImg(bannerImg);
      setCheckOutItem(checkoutLocals);
      // console.log('data dataItem=>', checkoutLocals);
    }
  }, []);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto bg-slate-100">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <Link href="/">
          <div className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-yellow-400 my-5">
            Leisure Event
          </div>
        </Link>
        <h1 className="text-2xl lg:text-2xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Order
          <span> {dataItem._id}</span>
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          {dataItem.createdAt}
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <CouponSummary
            category_name={checkOutItem.ticketCat.category_name}
            banner={bannerImg.banner}
            event_name={dataItem.event_name}
            location={dataItem.location}
            time={dataItem.time}
            date={dataItem.date}
          />
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <TotalSummary price={checkOutItem.ticketCat.price} />

            <PaymentSummary />
          </div>
        </div>

        <CustSummary
          avatar={avatarimg.avatar}
          name={user.name}
          email={user.email}
        />
      </div>
    </div>
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
        destination: "/signin",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
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
