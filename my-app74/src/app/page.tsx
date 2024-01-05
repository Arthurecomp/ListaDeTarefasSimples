"use client";
import { InterfaceTarefas } from "@/componentes/InterfaceTarefas";
import Cabecalho from "../componentes/Cabecalho";
import CampoTexto from "../componentes/CampoTexto";
import { useState } from "react";
import Tarefa from "@/componentes/Tarefa";

export default function Home() {
  const [tarefas, setTarefas] = useState<InterfaceTarefas[]>([]);

  function aoAdicionarTarefas(tarefa: InterfaceTarefas) {
    setTarefas([...tarefas, tarefa]);
    {
      console.log(tarefas);
    }
  }

  return (
    <main className=" bg-slate-700 h-screen">
      <div className=" flex flex-col items-center">
        <Cabecalho cabecalho={"LISTA DE TAREFAS"} />
        <CampoTexto
          placeholder={"Adicione uma tarefa"}
          botao={"+"}
          type={"submit"}
          aoAdicionarTarefas={aoAdicionarTarefas}
        />
        <ul
          className="flex flex-col w-2/3 mt-3 rounded-md hover:bg-slate-500 bg-neutral-300
      text-white font-mono select-auto"
        >
          {tarefas.map((item) => {
            return <Tarefa item={item} />;
          })}
        </ul>
      </div>
    </main>
  );
}
