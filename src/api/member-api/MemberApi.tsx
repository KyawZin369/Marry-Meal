import { MMAPI } from "../BaseUrl"
import { resMeals } from "./MemberResType";

export const meals = (token : string) : Promise<resMeals> => {
    return MMAPI.get('/meals',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}