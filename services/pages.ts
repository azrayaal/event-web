import axios from 'axios';

const URL = 'leisure';

export async function getFeaturedEvent() {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const response = await axios.get(`${ROOT_API}/${URL}/landingpage`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getDetailEvent(id) {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const response = await axios.get(`${ROOT_API}/${URL}/detail/${id}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
