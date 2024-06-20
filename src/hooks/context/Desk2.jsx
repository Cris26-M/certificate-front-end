import { useContext } from "react";
import SharedNotesContext from "./SharedNotesContext";

export default function Desk2() {
  const { addNotas } = useContext(SharedNotesContext);

  return (
    <div className="desk">
      <h2>Escritorio 2</h2>
      <button onClick={() => addNotas("esta es una nota importante")}>
        Agregar Nota
      </button>
    </div>
  );
}
