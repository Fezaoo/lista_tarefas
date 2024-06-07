import React from "react";
import TarefaCard from "./TarefaCard";
function TarefaList({ pesquisa, filtro, tarefa, toggleTarefaStatus, excluirTarefa }) {

    const tarefasFiltradas = tarefa.filter(tarefa => {
        const tarefaAtendePesquisa = tarefa.tarefa.toLowerCase().includes(pesquisa.toLowerCase())
        if (filtro === "Completas" && tarefaAtendePesquisa) return tarefa.completa
        else if (filtro === "Incompletas" && tarefaAtendePesquisa) return !tarefa.completa
        return tarefaAtendePesquisa
    })

return (
    <div className='tarefa_list'>
        {tarefasFiltradas.map((tarefa, index) => (
            <TarefaCard
                key={index}
                titulo={tarefa.tarefa}
                categoria={tarefa.categoria}
                status={tarefa.completa}
                toggleTarefaStatus={() => toggleTarefaStatus(index)}
                excluirTarefa={() => excluirTarefa(index)}
            />
        ))}
    </div>
)
} export default TarefaList