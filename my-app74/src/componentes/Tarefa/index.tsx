import { Interface } from "readline";
import { InterfaceTarefas } from "../InterfaceTarefas";
import { useState } from "react";

interface PropsTarefa {
  item: InterfaceTarefas;
}

function Tarefa({ item }: PropsTarefa) {
  const [isChecked, setIsChecked] = useState(item.done);

  let corNome;
  if (isChecked) {
    corNome = " line-through text-red-950";
  } else {
    corNome = "";
  }

  return (
    <div className=" flex flex-row items-center rounded-lg bg-slate-500 mb-2 py-0">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <h1 className={corNome}> {item.nome}</h1>
    </div>
  );
}

export default Tarefa;
