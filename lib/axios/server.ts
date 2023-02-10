import axios from "axios";

export const localServer = axios.create({
    baseURL: "https://sm5wz4-3000.csb.app/api"
})