import { MMAPI } from "../BaseUrl"
import { RegisterFormValues } from "./RegisterType"

export const Register = async (data: RegisterFormValues) => {
    try {
        const response = await MMAPI.post("/register", data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log("Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
}