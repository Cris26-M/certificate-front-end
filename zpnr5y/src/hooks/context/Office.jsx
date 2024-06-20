import { useState } from "react";
import Desk1 from "./Desk1";
import Desk2 from "./Desk2";
import SharedNotesContext from "./SharedNotesContext";

export const Office = () => {
  const [sharedNotes, setSharedNotes] = useState([]);

  const addNotas = (note) => {
    setSharedNotes([...sharedNotes, note]);
  };

  return (
    <SharedNotesContext.Provider
      value={{
        sharedNotes,
        addNotas,
      }}
    >
      <div>
        <div className="office">
          <h1>Oficina Compartida</h1>
          <Desk1 />
          <Desk2 />
        </div>
      </div>
    </SharedNotesContext.Provider>
  );
};
