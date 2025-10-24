import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./API2.css";

function API2() {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      setUser(data);
      console.log(response);
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
      <h2 style={{ color: "green" }}>Componente API AXIOS</h2>
      <section>{HtmlUsers}</section>
    </div>
  );
}

export default API2;
