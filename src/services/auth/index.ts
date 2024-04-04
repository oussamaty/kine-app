import * as Keychain from 'react-native-keychain';
import { authorize, refresh, revoke, logout, EndSessionResult, RefreshResult, AuthorizeResult } from 'react-native-app-auth';
import { config, registerConfig, postLogoutRedirectUrl } from '@config/api/auth';
import { AuthResultTypes } from '@redux/types/authTypes';

export const loginUserApi = async (): Promise<AuthorizeResult> => {
  return await authorize(config);
};

export const registerUserApi = async (): Promise<AuthorizeResult> => {
  return await authorize(registerConfig);
};

export const refreshTokenApi = async ( refreshToken: string ): Promise<RefreshResult> => {
  return await refresh(config, { refreshToken });
};

export const revokeTokenApi = async ( token: string ) => {
  await revoke(config, {
    tokenToRevoke: token,
    includeBasicAuth: true,
    sendClientId: true,
  });
};

export const logoutUserApi = async ( idToken: string ): Promise<EndSessionResult> => {
  return await logout(config, {
    idToken: idToken,
    postLogoutRedirectUrl: postLogoutRedirectUrl,
  });
};

export const saveToken = async (token: AuthResultTypes) => {
  await Keychain.setGenericPassword('token', JSON.stringify(token));
}

export const removeToken = async () => {
  await Keychain.resetGenericPassword();
}

export const getToken = async (): Promise<AuthResultTypes | undefined> => {
  const store = await Keychain.getGenericPassword();
  if (store && store.password) {
    return JSON.parse(store.password);
  }
  return undefined;
}