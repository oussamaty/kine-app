
export const config = {
  issuer: 'http://10.0.2.2:3000/auth/realms/kine',
  clientId: 'public-app',
  redirectUrl: 'com.kine.app://oauth2/redirect',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  dangerouslyAllowInsecureHttpRequests: true,
  serviceConfiguration: {
      authorizationEndpoint: 'http://10.0.2.2:3000/auth/realms/kine/protocol/openid-connect/auth',
      tokenEndpoint: 'http://10.0.2.2:3000/auth/realms/kine/protocol/openid-connect/token',
      revocationEndpoint: 'http://10.0.2.2:3000/auth/realms/kine/protocol/openid-connect/revoke'
  }
};

export const registerConfig = {
  issuer: 'http://10.0.2.2:3000/auth/realms/kine',
  clientId: 'public-app',
  redirectUrl: 'com.kine.app://oauth2/redirect',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  dangerouslyAllowInsecureHttpRequests: true,
  serviceConfiguration: {
      authorizationEndpoint: 'http://10.0.2.2:3000/auth/realms/kine/protocol/openid-connect/registrations',
      tokenEndpoint: 'http://10.0.2.2:3000/auth/realms/kine/protocol/openid-connect/token',
      revocationEndpoint: 'http://10.0.2.2:3000/auth/realms/kine/protocol/openid-connect/revoke'
  }
};

export const postLogoutRedirectUrl = 'com.kine.app:/MainFood'