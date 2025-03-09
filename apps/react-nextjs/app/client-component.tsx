"use client";

import { Button, IconButton } from "@repo/ui-react";
import { useState } from "react";

export function Component() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>component</div>
      <Button onClick={() => setCount((c) => c + 1)}>button {count}</Button>
      <IconButton> button</IconButton>
    </>
  );
}
