import { useState } from "react";
import { Office } from "./hooks/context/Office";
import { InputWithFocus } from "./hooks/InputWithFocus";
import RoomWithCanvas from "./hooks/RoomWithCanvas";
import "./styles.css";
import { CounterReducer } from "./hooks/counterReducer";
import { MeasureElement } from "./hooks/MeasureElement";
import { Statistics } from "./hooks/useMemo/Statistics";
import { ParentComponent } from "./hooks/useCallback/ParentComponent";
import ComponentBasic from "./proptypes/ComponentBasic";
import { ComponentAdvance } from "./proptypes/ComponentAdvance";
import { ComponentWithChildren } from "./proptypes/ComponentWithChildren";

const getInitialCount = () => 28;

// const Counter = () => {
//   const [count, setCount] = useState(() => getInitialCount());

//   return (
//     <ButtonComponent onClick={() => setCount(count + 1)}>
//       + {count}
//     </ButtonComponent>
//   );
// };

// const ButtonComponent = ({ onClick, children }) => {
//   console.log("render button");
//   return <button onClick={onClick}> {children}</button>;
// };

const list = [
  { id: 1, name: "item1" },
  { id: 2, name: "item2" },
  { id: 3, name: "item3" },
];

export default function App() {
  return (
    <>
      proptypes
      <br />
      <br />
      {/* Hooks */}
      {/* <Counter /> */}
      {/* <RoomWithCanvas /> */}
      {/* <Office /> */}
      {/* <InputWithFocus /> */}
      {/* <CounterReducer/> */}
      {/* <MeasureElement /> */}
      {/* <Statistics/> */}
      {/* <ParentComponent/> */}
      {/* <ComponentBasic texto={'hola'} numero={2} data={true} arrayOfNumbers={[1,2,3,4,5]}/> */}
      {/* <ComponentAdvance list={list} title={'hola'}/> */}
      <ComponentWithChildren>
       <p>Children</p>
      </ComponentWithChildren>
    </>
  );
}
