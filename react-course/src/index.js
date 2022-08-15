import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting title="Hola Mundo" />
    <Greeting title="Hola React" />
    <Greeting title="JavaScript" />
    <Greeting title="Hola Dennys Ferrer" />

    <UserCard
      name={"Dennys Ferrer"}
      amount={3000}
      married={true}
      points={[1, 2, 3]}
      address={{ street: "Calle 10BN # 11AE62", city: "Cucuta" }}
      greet={function () {
        alert("Holaaa");
      }}
    />
    <UserCard
      name={"Joe Macmillan"}
      amount={1000}
      married={false}
      points={[99, 33.3, 45.7]}
      address={{ street: "Avenida 1 # 19-01", city: "Cucuta" }}
      greet={function () {
        alert("Holaaa");
      }}
    />
  </>
);
