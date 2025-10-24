import "./App2.css";
import { useState } from "react";
import Hijo2 from "./components/Hijo2";

function App2() {
  const [displayName, setDisplayName] = useState("");
  const [showChild, setShowChild] = useState(true);

  const login = (name) => {
    setDisplayName(name);
  };

  return (
    <div>
      <h1>Props | Comunicación hijo-padre ⬆</h1>
      <h2>Hola {displayName}</h2>
      <Hijo2 handleLogin={login} userName={displayName}></Hijo2>

      <h1>useEffec() | Ciclo de vida de los componentes</h1>
      <button onClick={() => setShowChild(!showChild)}>cambiar estado</button>
      {showChild && <Hijo2 handleLogin={login} userName={displayName}></Hijo2>}
    </div>
  );
}

export default App2;
