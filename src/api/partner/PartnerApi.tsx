import { MMAPI } from "../BaseUrl"
import { resMeals } from "../member-api/MemberResType";

export const meals = (token : string) : Promise<resMeals> => {
    return MMAPI.get('/order',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}