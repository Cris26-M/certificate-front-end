import { useState } from "react";
import { Office } from "./hooks/context/Office";
import { InputWithFocus } from "./hooks/InputWithFocus";
import RoomWithCanvas from "./hooks/RoomWithCanvas";
import "./styles.css";
import { CounterReducer } from "./hooks/counterReducer";

const getInitialCount = () => 28;

const Counter = () => {
  const [count, setCount] = useState(() => getInitialCount());

  return (
    <ButtonComponent onClick={() => setCount(count + 1)}>
      + {count}
    </ButtonComponent>
  );
};

const ButtonComponent = ({ onClick, children }) => {
  console.log("render button");
  return <button onClick={onClick}> {children}</button>;
};

export default function App() {
  return (
    <>
      Hooks
      {/* <Counter /> */}
      {/* <RoomWithCanvas /> */}
      {/* <Office /> */}
      {/* <InputWithFocus /> */}
      <CounterReducer/>
    </>
  );
}
