import {
    SignupRequest,
    LoginRequest
} from '@services/auth/types.ts';

export const signupApi = async ({
    email: string,
    password: string
}: SignupRequest) => {
    return await plantsApi.post("/signup", {
      email,
      password
    });
};

export const loginApi = async ({
    email: string,
    password: string
}: LoginRequest) => {
    return await plantsApi.post("/login", {
      email,
      password
    });
};