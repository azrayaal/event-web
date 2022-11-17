import axios from 'axios';

const URL = 'auth';

export async function getSignUpApi(data) {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const response = await axios.post(`${ROOT_API}/${URL}/signup`, data);
  const axiosResponse = response.data;
  // console.log(response.data);
  return axiosResponse.data;
}

export async function getDetailEvent() {
  return null;
}
