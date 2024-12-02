import { MMAPI } from "../BaseUrl"
import { RegisterFormValues } from "./RegisterType"

export const Register = async (data: RegisterFormValues) => {
    MMAPI.post("/register", data)
}