
export const config = {
  issuer: 'https://kinefit.fr/auth/realms/kine',
  clientId: 'mobile',
  redirectUrl: 'com.kine.kine:/oauth2/',
  scopes: ["email"],
};

export const postLogoutRedirectUrl = 'com.kine.kine:/Welcome';