import axios from 'axios';
import callAPI from '../config/api';
import { RequestTypes } from './data-types';

const URL = 'leisure';
const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function getFeaturedEvent() {
  const response = await axios.get(`${ROOT_API}/${URL}/landingpage`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getDetailEvent(id: any) {
  const url = `${ROOT_API}/${URL}/detail/${id}`;

  return callAPI({
    url,
    method: 'GET',
  });
}

export async function putEditProfile(data: FormData, id: any) {
  const url = `${ROOT_API}/${URL}/editprofile/${id}`;

  return callAPI({
    url,
    data,
    method: 'PUT',
    token: true,
  });
}

export async function postRequest(data: FormData) {
  const url = `${ROOT_API}/${URL}/request`;

  return callAPI({
    url,
    data,
    method: 'POST',
    token: true,
  });
}

export async function getDetailRequest(id: string, token: string) {
  const url = `${ROOT_API}/${URL}/historyrequest/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}

export async function getRequest(valueParams: any) {
  let params = '';
  if (valueParams === 'all') {
    params = '';
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}/${URL}/historyrequest${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getTransactions(valueParams: any) {
  let params = '';
  if (valueParams === 'all') {
    params = '';
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}/${URL}/history${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getDetailTransactions(id: string, token: string) {
  const url = `${ROOT_API}/${URL}/history/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}
