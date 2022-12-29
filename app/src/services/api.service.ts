export type Get = {
  ok: boolean;
  data: any;
};

export const get = async (url: string): Promise<Get> => {
  try {
    const response = await fetch(url);
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

export type Post = {
  ok: boolean;
  data: any;
};

export const post = async (url: string): Promise<Post> => {
  try {
    const response = await fetch(url);
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