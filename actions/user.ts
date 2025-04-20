"use server";
import { getEnv } from "@/lib/env";
import { User } from "@/stores/user";
import { type Error } from "@/actions/types";

const { API_BASE_URL } = getEnv();

export async function getUserInfo(): Promise<User | Error> {
  const res = await fetch(API_BASE_URL);

  if (!res.ok) {
    return { error: "Failed to fetch user information" };
  }

  const data = await res.json();

  return data.results[0];
}
