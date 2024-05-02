import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

interface callAPIProps extends AxiosRequestConfig<any> {
  token?: boolean;
  serverToken?: string;
  url?: string;
  method?: string;
  data?: {};
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}: callAPIProps) {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token === true) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  try {
    const response: AxiosResponse<any> = await axios({
      url,
      method,
      data,
      headers,
    });
    // console.log("Response:", response);

    if (response.status && response.status > 300) {
      const res = {
        error: true,
        message: response.data.message,
        data: null,
      };
      return res;
    }

    const { length } = Object.keys(response.data);
    const res = {
      error: false,
      message: "success",
      data: length > 1 ? response.data : response.data.data,
    };
    return res;
  } catch (error: any) {
    console.error("Error:", error);
    const res = {
      error: true,
      message: error.message,
      data: null,
    };
    return res;
  }
}
