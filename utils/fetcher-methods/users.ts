import { localServer } from "@/lib/axios/server";
import { User } from "../types/users";

export const getUsers = async () => (await localServer.get('/users')).data

export const getUser = async (id: string) => (await localServer.get(`/users/${id}`)).data

export const createUser = async (body: User) => (await localServer.post('/users', body)).data