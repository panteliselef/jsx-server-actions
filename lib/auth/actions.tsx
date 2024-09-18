"use server";

import { cookies } from "next/headers";
import { waitFor } from "../utils";

export async function signIn() {
  await waitFor();

  cookies().set("user", Date.now() + "");

  return "signed-in";
}

export async function signOut() {
  await waitFor();

  cookies().set("user", "0");

  return "hehehe";
}
