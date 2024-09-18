"use client";

import { startTransition, useActionState } from "react";
import { deletePatient } from "./actions";

const DeletePatientForm = () => {
  const [state, trigger, isPending] = useActionState(() => {
    /**
     * Maybe do more stuff here in order to persist the pending state
     */
    return deletePatient();
  }, null);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Delete patient</h1>
      <button
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await trigger();
          });
        }}
      >
        Click to delete patient {isPending && "(loading...)"}
      </button>

      {!isPending && (state === true ? "Deleted" : state)}
    </div>
  );
};

export { DeletePatientForm };
