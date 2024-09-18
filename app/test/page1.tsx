import { signIn } from "@/lib/auth/actions";
import { doSomething } from "./actions";
import { MyForm, Retry } from "./component";
import { isAssured, isSignedIn } from "@/lib/auth/utils";
import { SignInButton } from "./client-stuff";
import { UserVerification } from "./UserVerification";

export default function Page() {
  // return <MyForm action={doSomething} />;
  // return <Retry action={doSomething} />;

  if (!isSignedIn()) {
    return <SignInButton />;
  }

  if (!isAssured()) {
    return (
      <div className="flex flex-col gap-4">
        <p>You are siged in but not assured</p>
        <UserVerification />
      </div>
    );
  }

  return <>We are assured</>;
}
