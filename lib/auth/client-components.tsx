"use client";

import { signIn } from "@/lib/auth/actions";
import { startTransition, useActionState } from "react";

const SignInButton = () => {
  return (
    <button
      onClick={async () => {
        await signIn();
      }}
    >
      SignIn
    </button>
  );
};

function UserVerification({
  prolongAction,
  retryAction,
}: {
  prolongAction: () => Promise<any>;
  retryAction: () => Promise<any>;
}) {
  const [state, trigger] = useActionState(prolongAction, null);

  return (
    <>
      <h1 className="text-2xl">Get assured</h1>

      {state ? (
        <button
          onClick={async () => {
            startTransition(async () => {
              await retryAction();
            });
          }}
        >
          Retry
        </button>
      ) : (
        <button
          onClick={async () => {
            startTransition(async () => {
              await trigger();
            });
          }}
        >
          Prolong
        </button>
      )}
    </>
  );
}

export { SignInButton, UserVerification };
