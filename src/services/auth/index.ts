import authAPI from 'src/config/api/auth';
import {
    SignupRequest,
    LoginRequest
} from 'src/services/auth/types.ts';

export const signupApi = async ({
    email,
    password
}: SignupRequest) => {
    return await authAPI.post("/signup", {
        email,
        password
    });
};

export const loginApi = async ({
    email,
    password,
}: LoginRequest) => {
    return await authAPI.post("/login", {
        email,
        password
    });
};

export const logoutUserApi = async () => {
    return await authAPI.post("/logout");
};