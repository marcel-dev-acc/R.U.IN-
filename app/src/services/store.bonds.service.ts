import EncryptedStorage from 'react-native-encrypted-storage';

export const bondsReference = 'bonds';

type LocalFetchBond = {
  ok: boolean;
  message: string;
};

export const storeBonds = async (bonds: string[]): Promise<LocalFetchBond> => {
  try {
    await EncryptedStorage.setItem(
      bondsReference,
      JSON.stringify(bonds)
    );
    return {
      ok: true,
      message: 'Successfully stored bond details', 
    };
  } catch (err) {
    return {
      ok: false,
      message: 'Failed to store bond details locally'
    };
  }
};


export const updateBonds = async (bonds: string[]): Promise<LocalFetchBond> => {
  try {
    await EncryptedStorage.setItem(
      bondsReference,
      JSON.stringify(bonds)
    );
    return {
      ok: true,
      message: 'Successfully updated bond details', 
    };
  } catch (err) {
    return {
      ok: false,
      message: 'Failed to update bond details locally'
    };
  }
};


type LocalFetchBondSuccess = {
  ok: boolean;
  data: string[];
};

type LocalFetchBondFailure = {
  ok: boolean;
  data: string[];
};

export const fetchBonds = async (): Promise<LocalFetchBondSuccess|LocalFetchBondFailure> => {
  try {
    const response = await EncryptedStorage.getItem(bondsReference);
    return {
      ok: true,
      data: response ? JSON.parse(response) : [],
    };
  } catch (err) {
    return {
      ok: false,
      data: [],
    };
  }
};

export const removeBonds = async (): Promise<LocalFetchBond> => {
  try {
    await EncryptedStorage.removeItem(bondsReference);
    return {
      ok: true,
      message: 'Successfully removed bond details', 
    };
  } catch (err) {
    return {
      ok: false,
      message: 'Failed to remove local bond details'
    };
  }
};