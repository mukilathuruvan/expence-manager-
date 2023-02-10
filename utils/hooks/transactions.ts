import { useQuery } from "react-query";
import { getUsers } from "../fetcher-methods/users";
import { User } from "../types/users";
import { getTransaction } from "../fetcher-methods/transactions";
const globalQueryOption = {
  cacheTime: 5000,
  refetchOnWindowFocus: false,
  refetchOnMount: true,
};

//! to get all transactiosns
export const useGetTransactios = useQuery<User[]>("all-users", getUsers, {
  ...globalQueryOption,
});

//! to get inditual transaction
export const useGetTransaction = (id: string) =>
  useQuery<User>(["single-user", id], () => getTransaction(id), {
    ...globalQueryOption,
  });
