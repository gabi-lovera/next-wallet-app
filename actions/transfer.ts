"use server";
import { getEnv } from "@/lib/env";
import { Transfer } from "@/stores/transfer";
import { type Error } from "@/actions/types";

const { API_BASE_URL } = getEnv();

export async function loadLatestTransfers(
  count: number = 15
): Promise<Transfer[] | Error> {
  const res = await fetch(`${API_BASE_URL}?results=${count}`);

  if (!res.ok) {
    return { error: "Failed to load transfers" };
  }

  const data = await res.json();

  return data.results;
}
