import axios from "axios"

export const BaseUrl = "http://127.0.0.1:8000/api"

export const MMAPI = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})