import { MMAPI } from "../BaseUrl";

interface logoutResType {
    message : string;
}

export const logout = () => {
    return MMAPI.post<logoutResType>("/logout");
};
