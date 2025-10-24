function Hijo(props) {
  const { msg, obj } = props;
  return (
    <>
      <h2>Componente Hijo 1</h2>
      <p>{props.msg}</p>
      <div>{props.obj.nombre}</div>

      <h2>Componente Hijo 2 estructurado</h2>
      <p>{msg}</p>
      <div>{obj.nombre}</div>
    </>
  );
}

export default Hijo;
