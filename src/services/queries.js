import { useQuery } from "@tanstack/react-query";

import api from "@/config/axios";

function useGetProfile() {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-profile"];

  return useQuery({ queryKey, queryFn });
}

function useGetAllTours() {
  const queryFn = () => api.get("/tour");
  const queryKey = ["all-tours"];

  return useQuery({ queryKey, queryFn });
}

export { useGetProfile, useGetAllTours };
