import { useEffect, useState } from "react";
export const FetchingData = () => {
  const [arrayUsuarios, setArrayUsuarios] = useState([]);

  useEffect(() => {
    const getUsers = fetch("https://jsonplaceholder.typicode.com/users");

    getUsers
      .then((res) => res.json())
      .then((data) => setArrayUsuarios(data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Aca los usuarios</h1>
      {arrayUsuarios.map((data) => {
        return <h2 key={data.id}>{data.name}</h2>;
      })}
    </div>
  );
};
