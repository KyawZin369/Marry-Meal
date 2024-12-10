import { MMAPI } from "../BaseUrl"
import { ProfileApiRes } from "./ProfileApiRes";

export const ProfileList = (token : string) : Promise<ProfileApiRes> => {
    return MMAPI.get('/profile',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}