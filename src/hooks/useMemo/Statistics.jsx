import React, { useMemo, useState } from "react";
import { data } from "../../database";

const average = (list) => {
  console.log("calculando Average");
  const suma = list.reduce((a, b) => a + b.amount, 0);
  return `el promedio es ${suma/list.length}`;
};

export const Statistics = () => {
  const [show, setShow] = useState(false);

  const averageMemo = useMemo(() => average(data), [data]);

  console.log("renderizado");

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <h2>Statistics {averageMemo}</h2>
      <button onClick={handleShow}>{show ? "hide" : "Show"}</button>
    </div>
  );
};
