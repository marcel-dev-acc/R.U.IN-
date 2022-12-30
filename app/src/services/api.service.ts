export type Get = {
  ok: boolean;
  data: any;
};

export const get = async (url: string): Promise<Get> => {
  try {
    const response = await fetch(url);
    return {
      ok: response.ok,
      data: await response.json(),
    };
  } catch (err) {
    return {
      ok: false,
      data: [],
    };
  }
};

export type Post = {
  ok: boolean;
  data: any;
};

export const post = async (url: string, requestOptions: any): Promise<Post> => {
  try {
    const response = await fetch(url, requestOptions);
    return {
      ok: true,
      data: await response.json(),
    };
  } catch (err) {
    return {
      ok: false,
      data: [],
    };
  }
};