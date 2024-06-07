import React from "react";

function TarefaCard({titulo, categoria}) {
    return(
        <div className='tarefa_card'>
        <div className='tarefa_title_container'>
          <h3 className='tarefa_title'>{titulo}</h3>
          <h4 className='tarefa_categoria_title'>{categoria}</h4>
        </div>
        <div className='tarefa_buttons'>
          <button className='completar_tarefa_button tarefa_button'>Completar</button>
          <button className='excluir_tarefa_button tarefa_button'>X</button>
        </div>
      </div>
    )
} export default TarefaCard