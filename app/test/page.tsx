import { isSignedIn } from "@/lib/auth/utils";
import { DeletePatientForm } from "./client-stuff";
import { SignInButton } from "@/lib/auth/client-components";

export default function Page() {
  // return <MyForm action={doSomething} />;
  // return <Retry action={doSomething} />;

  if (!isSignedIn()) {
    return <SignInButton />;
  }

  return <DeletePatientForm />;
}
