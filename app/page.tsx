import { SignInButton, SignOutButton } from "@/lib/auth/client-components";
import { isSignedIn } from "@/lib/auth/utils";
import Link from "next/link";

export default function Home() {
  if (!isSignedIn()) {
    return <SignInButton />;
  }

  return (
    <div className="flex flex-col gap-3">
      <SignOutButton />
      <Link href={"/test"}>Go to /test</Link>
    </div>
  );
}
