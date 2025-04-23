import {
  QueryClient,
  useMutation,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL;

export const usePostList = (): UseQueryResult<{ data: any }, Error> => {
  const queryClient = new QueryClient();

  return useQuery(
    {
      queryKey: ["post_list"],
      queryFn: async () => {
        const { data } = await axios.get(`${BASE_URL}/post`);
        return data;
      },
    },
    queryClient
  );
};

export const usePostAdd = () => {
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await axios.post(`${BASE_URL}/post`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    },
  });
};

export const usePostGetById = (id: string) => {
  const queryClient = new QueryClient();

  return useQuery(
    {
      queryKey: ["post", id],
      queryFn: async () => {
        const { data } = await axios.get(`${BASE_URL}/post/${id}`);
        return data;
      },
      enabled: !!id,
    },
    queryClient
  );
};

export const usePostUpdate = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: async ({ id, payload }: { id: string; payload: any }) => {
      const { data } = await axios.put(`${BASE_URL}/post/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post_list"] });
    },
    onError: (error) => {
      console.error("Error updating post:", error);
    },
  });
};

export const usePostDelete = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${BASE_URL}/post/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post_list"] });
    },
    onError: (error) => {
      console.error("Error deleting post:", error);
    },
  });
};
