import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Greeting title="Hola Mundo" />
    <Greeting title="Hola React" />
    <Greeting title="JavaScript" />
    <Greeting title="Hola Dennys Ferrer" /> */}

    {/* <UserCard
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
    /> */}

    {/* <Button text='Click-me'/>
    <Button text='Pay'/>
    <Button text={"Hola mundo"} name='Dennys Ferrer'/>

    <input onChange={function(e){
      console.log(e.target.value);
    }}></input>

    <form onSubmit={(e)=>{
      e.preventDefault();
      console.log("Enviando formulario ...");
    }}>
      <h1>Formulario</h1>
      <button>Boton</button>
    </form> */}

    {/* <TaskCard ready={false}/> */}

    {/* <Saludar/> */}

    <Posts/>

  </>
);
