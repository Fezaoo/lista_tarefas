import React from "react";
import TarefaCard from "./TarefaCard";
function TarefaList({tarefa}) {
    return (
        <div className='tarefa_list'>
            {tarefa.map((tarefa, index)=>(
                <TarefaCard
                key={index}
                titulo={tarefa.tarefa}
                categoria={tarefa.categoria}
                />
            ))}
        </div>
    )
} export default TarefaList