import { useState } from "react";

export function PracticeMutationAndImmutability() {
  // This is a practice file to understand the difference between mutation and immutability in React state management.

  let [mutate, setMutate] = useState("mutate");
  let [immutable, setImmutable] = useState("immutable");

  return (
    <div>
      <button
        onClick={() => {
          mutate = "Changed Mutate";
          // mutating the state directly will not update the state in React
          // because React does not know that the state has changed.
        }}
      >
        {mutate}
      </button>

      <button
        onClick={() => {
          setImmutable("immutable changed");
        }}
      >
        {immutable}
      </button>
    </div>
  );
}
