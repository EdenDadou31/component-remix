import React from "react";
export default function Loader() {
  return (
    <div
      className="border-current text-surface inline-block h-3 w-3 animate-spin rounded-full border-4 border-solid border-bluenight100 border-e-transparent p-2 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    />
  );
}
