"use client";

import { startTransition, useActionState } from "react";
import { signIn, signOut } from "./actions";

type Action = () => Promise<any>;

// export function MyForm({ action }: { action: Action }) {
//   const [state, trigger, isPending] = useActionState(action, "");

//   return (
//     <>
//       <form action={trigger}>
//         <h1>Nice</h1>

//         <button disabled={isPending}>Wow</button>

//         <div />
//       </form>
//       <div>{state}</div>
//     </>
//   );
// }

const isComponent = (val: any) => {
  return typeof val === "object" && "$$typeof" in val;
};

export function Retry({ action }: { action: Action }) {
  const [state, trigger, isPending] = useActionState(action, "");

  if (!state) {
    return (
      <>
        <button
          onClick={async () => {
            startTransition(async () => {
              await signIn();
            });
          }}
        >
          Sigin
        </button>
        <button
          type="button"
          onClick={async () => {
            startTransition(async () => {
              await trigger();
            });
          }}
        >
          Try again {isPending && "loading"}
        </button>
      </>
    );
  }

  if (isComponent(state)) {
    return state;
  }

  return (
    <button
      onClick={async () => {
        startTransition(async () => {
          await signOut();
        });
      }}
    >
      sign out
    </button>
  );
}
