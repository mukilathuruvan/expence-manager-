"use client";
import { useGetTransaction } from "@/utils/hooks/transactions";
const HomePage = () => {
  const {} = useGetTransactions();
  return <div>HomePage</div>;
};

export default HomePage;
