"use server";

import { isAssured } from "@/lib/auth/utils";
import { UserVerification } from "@/lib/auth/client-components";
import { signIn } from "@/lib/auth/actions";
import { waitFor } from "@/lib/utils";

export const deletePatient = async () => {
  await waitFor();

  if (isAssured()) {
    return true;
  }

  return (
    <UserVerification prolongAction={signIn} retryAction={deletePatient} />
  );
};
