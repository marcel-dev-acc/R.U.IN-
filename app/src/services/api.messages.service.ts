import { get } from "./api.service";
import environment from "../constants/env";

export const fetchMessages = async (
  token: string,
  from: number,
  to: number,
  id: string
) => {
  const path: string = environment.CHAT_URL ? environment.CHAT_URL : '';
  const params: string = `?token=${token}&from=${from}&to=${to}&id=${id}`;
  const url: string = `${path}${params}`;
  const response = await get(url);
  if (response.ok) {
    return {
      ok: true,
      data: response.data.data.messages,
    };
  } else {
    return {
      ok: false,
      data: [],
    };
  };
};