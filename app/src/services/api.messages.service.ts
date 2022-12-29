import { get } from "./api.service";

export const fetchMessages = async (token: string, from: number, to: number, id: string) => {
  const path = 'https://script.google.com/macros/s/AKfycbxN9-SA7T7TUvugVpcVtb_7hAXjPcc21iCa0t8aUVtjAGdDqvD2kz5FqQnPidM9irh7Ug/exec';
  const params = `?token=${token}&from=${from}&to=${to}&id=${id}`;
  const url = `${path}${params}`;
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