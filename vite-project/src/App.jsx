import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifecycleCompClass from "./Comps/LifecycleCompClass";
import LifecycleCompFunc from "./Comps/LifecycleCompFunc";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LifecycleCompClass />
      <LifecycleCompFunc />
    </>
  );
}

export default App;
