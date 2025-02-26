import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://arteideasback-end-production.up.railway.app/api", // Base URL de la API
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
