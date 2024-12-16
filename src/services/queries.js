import { useQuery } from "@tanstack/react-query";

import api from "@/config/axios";

function useGetProfile() {
  const queryFn = async () => api.get("/user/profile");
  const queryKey = ["user-profile"];

  return useQuery({ queryKey, queryFn });
}

export { useGetProfile };
