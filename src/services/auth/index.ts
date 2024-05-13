import * as Keychain from 'react-native-keychain';
import { authorize, refresh, revoke, logout, EndSessionResult, RefreshResult, AuthorizeResult } from 'react-native-app-auth';
import { config, postLogoutRedirectUrl } from '@config/api/auth';
import { AuthResultTypes } from '@redux/types/authTypes';
import { checkTokenExp } from '@utils/index';

export const loginUserApi = async (): Promise<AuthorizeResult> => {
  return authorize(config);
};

export const refreshTokenApi = async ( refreshToken: string ): Promise<RefreshResult> => {
  return refresh(config, { refreshToken });
};

export const revokeTokenApi = async ( token: string ) => {
  await revoke(config, {
    tokenToRevoke: token,
    includeBasicAuth: true,
    sendClientId: true,
  });
};

export const logoutUserApi = async ( idToken: string ): Promise<EndSessionResult> => {
  return logout(config, {
    idToken: idToken,
    postLogoutRedirectUrl: postLogoutRedirectUrl,
  });
};

export const saveToken = async (token: AuthResultTypes) => {
  return Keychain.setGenericPassword('token', JSON.stringify(token));
}

export const removeToken = async () => {
  return Keychain.resetGenericPassword();
}

export const getToken = async (): Promise<AuthResultTypes | undefined> => {
  const store = await Keychain.getGenericPassword();
  if (store && store.password) {
    return JSON.parse(store.password);
  }
  return undefined;
}

export const checkAndUpdateToken = async () => {
  const token = await getToken();
  if (!token || !token.refreshToken) {
    throw new Error('Cannot load token');
  }

  if (checkTokenExp(token.accessToken, token.accessTokenExpirationDate)) return token;
  
  const newToken = await refreshTokenApi(token.refreshToken);
  if (!newToken) {
    throw new Error('Cannot refresh token');
  }

  const saved = await saveToken(newToken);
  if (!saved) {
    throw new Error('Cannot save new token');
  }

  return newToken;
}