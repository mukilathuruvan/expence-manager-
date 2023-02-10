import { localServer } from "@/lib/axios/server";
import { Transaction } from "../types/transactions";

export const getTransactions = async () => (await localServer.get('/transactions')).data

export const getTransaction = async (id: string) => (await localServer.get(`/transactions/${id}`)).data

export const createTransaction = async (body: Transaction) => (await localServer.post('/transactions', body)).data