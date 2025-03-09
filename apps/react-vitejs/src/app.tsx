import { useState } from "react";
import { Button, IconButton } from "@repo/ui-react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <div>count app: {count}</div>
      <Button onClick={handleClick}>button</Button>
      <IconButton onClick={handleClick}> button</IconButton>
    </>
  );
}
