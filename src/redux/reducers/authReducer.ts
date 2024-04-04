import { 
  AuthState,
  AuthActionTypes,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  REVOKE_TOKEN_SUCCESS,
  REVOKE_TOKEN_FAILURE,
  LOAD_TOKEN_SUCCESS,
  LOAD_TOKEN_FAILURE,
  TokenType,
  AuthResultTypes,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from '@redux/types/authTypes';

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  accessTokenExpirationDate: null,
  idToken: null,
  refreshToken: null,
  tokenType: null,
  additionalParameters: {},
  authorizeAdditionalParameters: {},
  isFailure: false,
  errorMessage: null,
};

const AuthResultToAuthState = (result: AuthResultTypes): AuthState => {
  const state = {
    isAuthenticated: true,
    accessToken: result.accessToken,
    accessTokenExpirationDate: result.accessTokenExpirationDate,
    idToken: result.idToken,
    refreshToken: result.refreshToken,
    tokenType: result.tokenType,
    authorizeAdditionalParameters: {},
    additionalParameters: {},
    isFailure: false,
    errorMessage: null,
  }

  if ('authorizeAdditionalParameters' in result) {
    state.authorizeAdditionalParameters = result.authorizeAdditionalParameters ?? {};
  }

  if ('additionalParameters' in result) {
    state.additionalParameters = result.additionalParameters ?? {};
  }
  
  return state;
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return AuthResultToAuthState(action.payload);

    case LOGIN_FAILURE:
      return {
        ...initialState,
        isFailure: true,
        errorMessage: action.payload,
      };
    
    case REGISTER_SUCCESS:
      return AuthResultToAuthState(action.payload);

    case REGISTER_FAILURE:
      return {
        ...initialState,
        isFailure: true,
        errorMessage: action.payload,
      };

    case LOGOUT_SUCCESS:
      return initialState;

    case LOGOUT_FAILURE:
      return {
        ...state,
        isFailure: true,
        errorMessage: action.payload,
      };

    case REFRESH_TOKEN_SUCCESS:
      return AuthResultToAuthState(action.payload);

    case REFRESH_TOKEN_FAILURE:
      return {
        ...initialState,
        isFailure: true,
        errorMessage: action.payload,
      };

    case REVOKE_TOKEN_SUCCESS:
      return action.payload === TokenType.ACCESS ? {
        ...state,
        accessToken: null,
        accessTokenExpirationDate: null,
      }: initialState;

    case REVOKE_TOKEN_FAILURE:
      return {
        ...state,
        isFailure: true,
        errorMessage: action.payload,
      };

    case LOAD_TOKEN_SUCCESS:
      return AuthResultToAuthState(action.payload);

    case LOAD_TOKEN_FAILURE:
      return initialState;
      
    default:
      return state;
  }
};

export default authReducer;