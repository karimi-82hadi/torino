import axios from "axios";

import { getNewTokens } from "@/services/token";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accToken = getCookie("Torino::AccToken");
    if (accToken) {
      request.headers["Authorization"] = `bearer ${accToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const res = await getNewTokens();
      
      if (res?.response?.status === 201) {
        setCookie("Torino::AccToken", res?.response?.data.accessToken, 30);
        return api(originalRequest);
      } else {
        setCookie("Torino::AccToken", "", 0);
      }
    }

    return Promise.reject(error.response.data);
  },
);

export default api;
