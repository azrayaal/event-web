import callAPI from "../config/api";
import { LoginTypes } from "./data-types";

const URL = "auth";
const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function getSignUpApi(data: FormData) {
  const url = `${ROOT_API}${URL}/signup`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function getSignIn(data: LoginTypes) {
  const url = `${ROOT_API}${URL}/signin`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
