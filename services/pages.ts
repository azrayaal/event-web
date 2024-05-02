import axios from "axios";
import callAPI from "../config/api";

const URL = "leisure";
const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function getFeaturedEvent(valueParams: any) {
  let params = "";
  if (valueParams === "") {
    params = "";
  } else {
    params = `?event_name=${valueParams}`;
  }
  const url = `${ROOT_API}${URL}/landingpage${params}`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function getFeaturedEventdetail() {
  const url = `${ROOT_API}${URL}/landingpage`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function searchEvent(params: any) {
  const url = `${ROOT_API}${URL}/historyrequest${params}`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function getDetailEvent(id: string) {
  const URLA = `detail/${id}`;
  const response = await axios.get(`${ROOT_API}${URL}/${URLA}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function putEditProfile(data: FormData, id: any) {
  const url = `${ROOT_API}${URL}/editprofile/${id}`;

  return callAPI({
    url,
    data,
    method: "PUT",
    token: true,
  });
}

export async function postRequest(data: FormData) {
  const url = `${ROOT_API}${URL}/request`;

  return callAPI({
    url,
    data,
    method: "POST",
    token: true,
  });
}

export async function getDetailRequest(id: string, token: string) {
  const url = `${ROOT_API}${URL}/historyrequest/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  });
}

export async function getRequest(valueParams: any) {
  let params = "";
  if (valueParams === "all") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}${URL}/historyrequest${params}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getTransactions(valueParams: any) {
  let params = "";
  if (valueParams === "all") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}${URL}/history${params}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getDetailTransactions(id: string, token: string) {
  const url = `${ROOT_API}${URL}/history/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  });
}

export async function setCheckout(data) {
  const url = `${ROOT_API}${URL}/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}

export async function getTicket() {
  // let params = '';
  // if (valueParams === 'all') {
  //   params = '';
  // } else {
  //   params = `?status=${valueParams}`;
  // }
  const url = `${ROOT_API}${URL}/tickets`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
