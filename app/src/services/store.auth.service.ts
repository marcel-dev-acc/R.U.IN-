import EncryptedStorage from 'react-native-encrypted-storage';

export const authReference = 'auth';

type Auth = {
  username: string;
  password: string;
  token: string;
  expiry: number;
};

export const storeAuth = async (auth: Auth) => {
  try {
    await EncryptedStorage.setItem(
      authReference,
      JSON.stringify(auth)
    );
    return {
      ok: true,
      message: 'Successfully stored authentication details', 
    };
  } catch (err) {
    return {
      ok: false,
      message: 'Failed to store authentication details locally'
    };
  }
};



type LocalFetchAuthSuccess = {
  ok: boolean;
  data: Auth | null;
};

type LocalFetchAuthFailure = {
  ok: boolean;
  data: null;
};

export const fetchAuth = async (): Promise<LocalFetchAuthSuccess|LocalFetchAuthFailure> => {
  try {
    const response = await EncryptedStorage.getItem(authReference);
    return {
      ok: response ? true : false,
      data: response ? JSON.parse(response) : null,
    };
  } catch (err) {
    return {
      ok: false,
      data: null,
    };
  }
};

export const removeAuth = async () => {
  try {
    await EncryptedStorage.removeItem(authReference);
    return {
      ok: true,
      message: 'Successfully removed authentication details', 
    };
  } catch (err) {
    return {
      ok: false,
      message: 'Failed to remove local authentication details'
    };
  }
};