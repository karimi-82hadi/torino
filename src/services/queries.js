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

function useGetTour(params) {
  const queryFn = ({ queryKey }) => api.get(`/tour/${queryKey[1]}`);
  const queryKey = ["tour", params];

  return useQuery({ queryKey, queryFn });
}

function useGetUserTours() {
  const queryFn = () => api.get("/user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryKey, queryFn });
}

function useGetUserTransactions() {
  const queryFn = () => api.get("/user/transactions");
  const queryKey = ["user-transactions"];

  return useQuery({ queryKey, queryFn });
}

function useGetBasket() {
  const queryFn = () => api.get("/basket");
  const queryKey = ["basket"];

  return useQuery({ queryKey, queryFn });
}

function useGetFilteredTours(params) {
  const queryFn = () => api.get(`/tour?${params}`);
  const queryKey = ["filtered-tours"];

  return useQuery({ queryKey, queryFn, gcTime: 0, staleTime: 0 });
}

export {
  useGetProfile,
  useGetAllTours,
  useGetTour,
  useGetUserTours,
  useGetUserTransactions,
  useGetBasket,
  useGetFilteredTours,
};
