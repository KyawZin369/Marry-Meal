import { MMAPI } from "../BaseUrl";
import { LoginFormValues, LoginResponse } from "./LoginType";

export const login = async (data: LoginFormValues): Promise<LoginResponse | null> => {
    const response = await MMAPI.post<LoginResponse>("/login", data);
    return response.data as LoginResponse;
};
