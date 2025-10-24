import { useEffect } from "react";
import { useState } from "react";
import "./API.css";

function API() {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Se llama una vez la api con el [] , sin [] carga cada vez que hay un cambio en el estado
  useEffect(() => {
    getUser();
  }, []);

  const HtmlUsers = users.map((user) => {
    return (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    );
  });

  return (
    <div>
      <h2 style={{ color: "red" }}>Componente API</h2>
      <section>{HtmlUsers}</section>
    </div>
  );
}

export default API;
