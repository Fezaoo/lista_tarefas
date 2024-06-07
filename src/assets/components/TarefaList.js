import React from "react";
import TarefaCard from "./TarefaCard";
function TarefaList({tarefa}) {
    return (
        <div className='tarefa_list'>
            {tarefa.map((tarefa, index)=>(
                <TarefaCard
                key={index}
                titulo={tarefa[0]}
                categoria={tarefa[1]}
                />
            ))}
        </div>
    )
} export default TarefaList