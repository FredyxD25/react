import "./App.css";
import { useState } from "react"; //libreria para variables reactivas
import Menu from "./components/Menu";
import Hijo from "./components/Hijo";

function App() {
  let numero = 0;
  const condicion = true;
  const peliculas = ["Batman", "Spiderman", "El señor de los anillos"];
  const animals = [
    {
      id: 1,
      name: "Perro",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    },
    {
      id: 2,
      name: "Gato",
      img: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
    },
    {
      id: 3,
      name: "Pajaro",
      img: "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
  ];
  const persona = {
    nombre: "Fredy",
    apellido: "Lopez",
    edad: 30,
  };

  //variable reactiva: [variable, funcion para cambiar variable] = useState(Valor inicial);
  const [numero2, setSumarNumero] = useState(0);
  const [texto, setTexto] = useState("Texto inicial");
  const [texto_guardado, setTextoGuardado] = useState("");

  const consola = () => {
    console.log("Hola mundo");
  };

  const sumarnumero = () => {
    numero += 1;
    console.log(numero);
  };

  const sumarnumero2 = () => {
    setSumarNumero(numero2 + 1);
    console.log(numero2 + 1);
  };

  const guardarTexto = (evento) => {
    console.log(evento.target.value);
    setTextoGuardado(evento.target.value);
  };

  const HTMLpeliculas = peliculas.map((pelicula, index) => {
    console.log(index + pelicula);
    return <li key={index + pelicula}>{pelicula}</li>;
  });

  const HTMLanimales = animals.map((animal) => {
    return (
      <div key={animal.id}>
        <h3>{animal.name}</h3>
        <img src={animal.img} alt={animal.name} width="200" />
      </div>
    );
  });

  const saludo = "Hola mundo desde react padre";

  return (
    <div>
      <Menu></Menu>
      <button onClick={consola}>Presioname</button>
      <button
        onClick={() => {
          console.log("Segunda forma");
        }}
      >
        Presioname2
      </button>

      <h2>Numero: {numero}</h2>
      <button onClick={sumarnumero}>Incrementar</button>

      <h2>Numero Reactivo: {numero2}</h2>
      <button onClick={sumarnumero2}>Incrementar</button>

      <h2>Texto Reactivo</h2>

      <input
        type="text"
        placeholder={texto}
        value={texto_guardado}
        onChange={guardarTexto}
      />

      <h3>Condiciones</h3>
      {condicion && <p>La condicion es verdadera</p>}
      {!condicion && <p>La condicion es falsa</p>}

      {condicion ? <p>Condicion verdadera</p> : <p>Condicion falsa</p>}
      {!condicion ? <p>Condicion verdadera</p> : <p>Condicion falsa</p>}

      <h3>Listado de peliculas</h3>
      <ul>{HTMLpeliculas}</ul>

      <h3>Listado de animales</h3>
      <div>{HTMLanimales}</div>
      <Hijo msg="mensaje desde main" obj=""></Hijo>
      <Hijo msg={saludo} obj=""></Hijo>
      <Hijo msg={"envio objeto"} obj={persona}></Hijo>
    </div>
  );
}

export default App;
