import {post} from "./api.service";
import environment from "../constants/env";

export const authenticateUser = async (
  username: string,
  password: string,
) => {
  const url: string = environment.AUTH_URL ? environment.AUTH_URL : '';
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const raw = JSON.stringify({
    username,
    password,
  });
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: raw,
    redirect: 'follow'
  };
  const response = await post(url, requestOptions);
  if (response.data.ok) {
    return {
      ok: true,
      data: response.data.data,
    };
  } else {
    return {
      ok: false,
      data: response.data.message,
    };
  };
};