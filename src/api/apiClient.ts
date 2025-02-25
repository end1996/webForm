import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dragonball-api.com/api", // Base URL de la API
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
