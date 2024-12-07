import { MMAPI } from "../BaseUrl";

interface logoutResType {
    message : string;
}

export const logout = async () => {
    await MMAPI.post<logoutResType>("/logout");
};
