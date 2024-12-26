import { useMutation } from "@tanstack/react-query";

import api from "@/config/axios";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const mutationFn = (data) => api.post("/auth/check-otp", data);

  return useMutation({ mutationFn });
};

const useUpdateProfile = () => {
  const mutationFn = (data) => api.put("/user/profile", data);

  return useMutation({ mutationFn });
};

const useAddTourToBasket = () => {
  const mutationFn = (id) => api.put(`/basket/${id}`);
  return useMutation({ mutationFn });
};

const useCheckOut = () => {
  const mutationFn = (data) => api.post(`/order`, data);
  return useMutation({ mutationFn });
};

export {
  useSendOtp,
  useCheckOtp,
  useUpdateProfile,
  useAddTourToBasket,
  useCheckOut,
};
