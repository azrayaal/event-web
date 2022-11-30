import callAPI from '../config/api';

const URL = 'auth';
const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function getSignUpApi(data: FormData) {
  const url = `${ROOT_API}/${URL}/signup`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function getDetailEvent() {
  return null;
}
