import React from "react";

function TarefaCard({titulo, categoria, status, toggleTarefaStatus, excluirTarefa}) {
    return(
        <div className={`tarefa_card ${status ? 'tarefa_completa_card' : ''}`}>
        <div className='tarefa_title_container'>
          <h3 className={`tarefa_title ${status ? 'tarefa_completa_title' : ''}`}>{titulo}</h3>
          <h4 className={`tarefa_categoria_title ${status ? 'tarefa_completa_title' : ''}`}>{categoria}</h4>
        </div>
        <div className='tarefa_buttons'>
          <button className={`completar_tarefa_button tarefa_button ${status ? 'tarefa_completa_button tarefa_completa_title' : ''}`} onClick={toggleTarefaStatus}>Completar</button>
          <button className='excluir_tarefa_button tarefa_button' onClick={excluirTarefa}>X</button>
        </div>
      </div>
    )
} export default TarefaCard