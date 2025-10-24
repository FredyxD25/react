import { useEffect } from "react";

function Hijo2(props) {
  const handleClick = () => {
    props.handleLogin("Fredy");
  };

  useEffect(() => {
    console.log("Componente montado");
  }, []);

  useEffect(() => {
    console.log("Componente actualizado");
  });

  useEffect(() => {
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <div className="Hijo2">
      <h2>Este es un componente hijo</h2>
      <p>Nombre de usuario: {props.userName}</p>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Hijo2;
