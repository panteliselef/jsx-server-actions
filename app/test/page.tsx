import { isSignedIn } from "@/lib/auth/utils";
import { DeletePatientForm } from "./client-stuff";
import { SignInButton } from "@/lib/auth/client-components";

export default function Page() {
  if (!isSignedIn()) {
    return <SignInButton />;
  }

  return <DeletePatientForm />;
}
