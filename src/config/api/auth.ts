
export const config = {
  issuer: 'https://www.kinefit.fr/auth/realms/kine',
  clientId: 'public-app',
  redirectUrl: 'com.kinefit.kine://oauth2/redirect',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  dangerouslyAllowInsecureHttpRequests: true,
  serviceConfiguration: {
      authorizationEndpoint: 'https://www.kinefit.fr/auth/realms/kine/protocol/openid-connect/auth',
      tokenEndpoint: 'https://www.kinefit.fr/auth/realms/kine/protocol/openid-connect/token',
      revocationEndpoint: 'https://www.kinefit.fr/auth/realms/kine/protocol/openid-connect/revoke'
  }
};

export const registerConfig = {
  issuer: 'https://www.kinefit.fr/auth/realms/kine',
  clientId: 'public-app',
  redirectUrl: 'com.kinefit.kine://oauth2/redirect',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  dangerouslyAllowInsecureHttpRequests: true,
  serviceConfiguration: {
      authorizationEndpoint: 'https://www.kinefit.fr/auth/realms/kine/protocol/openid-connect/registrations',
      tokenEndpoint: 'https://www.kinefit.fr/auth/realms/kine/protocol/openid-connect/token',
      revocationEndpoint: 'https://www.kinefit.fr/auth/realms/kine/protocol/openid-connect/revoke'
  }
};

export const postLogoutRedirectUrl = 'com.kinefit.kine://Welcome';