import axios from 'axios';
import callAPI from '../config/api';

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
