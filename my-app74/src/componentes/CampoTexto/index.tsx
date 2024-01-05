"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { InterfaceTarefas } from "../InterfaceTarefas";

interface PropsCampoTexto {
  placeholder: string;
  botao: string;
  type: "submit" | "reset" | "button" | undefined;
  aoAdicionarTarefas: (tarefas: InterfaceTarefas) => void;
}

function CampoTexto({
  placeholder,
  botao,
  type,
  aoAdicionarTarefas,
}: PropsCampoTexto) {
  const [entrada, setEntrada] = useState("");

  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("enviou");
    aoAdicionarTarefas({
      nome: entrada,
      id: 1,
      done: false
    });
    console.log(entrada);

    setEntrada("");
  }

  function aoDigitado(e: ChangeEvent<HTMLInputElement>) {
    setEntrada(e.target.value);
    console.log(entrada);
  }

  return (
    <form
      onSubmit={aoEnviar}
      className=" w-2/3 items-center justify-center flex"
    >
      <button type={type} className="">
        {botao}{" "}
      </button>
      <input
        placeholder={placeholder}
        className=" w-full"
        value={entrada}
        onChange={aoDigitado}
        
      ></input>
    </form>
  );
}

export default CampoTexto;
