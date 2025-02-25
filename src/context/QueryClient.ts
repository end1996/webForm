import axios from "axios";

const ApiMarco = axios.create({
    baseURL: "https://dragonball-api.com/api/characters",
    headers: {
        "Content-Type": "application/json",
    },
});

export default ApiMarco;