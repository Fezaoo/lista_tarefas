
import './App.css';
import { useState } from 'react';
import TarefaList from './assets/components/TarefaList';

function App() {

  const [TarefaTitle, setTarefaTitle] = useState("")
  const [TarefaCategoria, setTarefaCategoria] = useState("Trabalho")
  const [ListaDeTarefas, setListaDeTarefas] = useState([])

  function criar_tarefa() {
    const nova_tarefa = { tarefa: TarefaTitle, categoria: TarefaCategoria }
    if (TarefaTitle !== "") {
      if (!ListaDeTarefas.find(tarefa => tarefa.tarefa === TarefaTitle && tarefa.categoria === TarefaCategoria)) {

        setListaDeTarefas([...ListaDeTarefas, nova_tarefa]);
        setTarefaTitle("")
        console.log(ListaDeTarefas)
      } else {alert("Tarefa já existe!")}
    } else { alert("Adicione um título à tarefa!") }
  }

  function ordenar_tarefas(abc){
    if (abc) {
      setListaDeTarefas([...ListaDeTarefas.sort((a, b) => a.tarefa.localeCompare(b.tarefa))])
      } else {
      setListaDeTarefas([...ListaDeTarefas.sort((a, b) => a.tarefa.localeCompare(b.tarefa)).reverse()])
    }
    console.log("ORdenado")
  }

  return (
    <div className="App">
      <div className='content_container'>
        <main className='content'>
          <h1>
            Lista de Tarefas
          </h1>
          <div className='section_container'>
            <h2 className='section_title'>
              Pesquisar:
            </h2>
            <div className='pesquisar_input_container'>
              <input className='pesquisar_input input_border' placeholder='Digite para pesquisar' />
            </div>
          </div>
          <hr></hr>
          <div className='section_container'>
            <h2 className='section_title'>
              Filtrar:
            </h2>
            <div className='filtrar_input_container'>
              <div className='status_container'>
                <label>
                  Status
                </label>
                <div className='status_select_container'>
                  <select className='select status_select input_border'>
                    <option>Todas</option>
                    <option>Completas</option>
                    <option>Incompletas</option>
                  </select>
                </div>
              </div>
              <div>
                <label>
                  Ordem Alfabética
                </label>
                <div className='ordem_button_container'>
                  <button className='ordem_button' onClick={(e) => ordenar_tarefas(true)}>ABC</button>
                  <button className='ordem_button' onClick={(e) => ordenar_tarefas(false)}>ZYX</button>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='section_container'>
            <h2 className='section_title tarefas_title'>Tarefas</h2>

            <div>
              <TarefaList tarefa={ListaDeTarefas} />
            </div>

          </div>
          <hr></hr>
          <div className='section_container'>
            <h2 className='section_title'>
              Criar Tarefa:
            </h2>
            <div className='criar_tarefa_input_container'>
              <input className='pesquisar_input input_border' placeholder='Digite o nome da tarefa' value={TarefaTitle} onChange={(e) => setTarefaTitle(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { criar_tarefa() } }} />
              <select className='select categoria_select input_border' defaultValue={TarefaCategoria} onChange={(e) => setTarefaCategoria(e.target.value)}>
                <option>Trabalho</option>
                <option>Estudos</option>
                <option>Pessoal</option>
              </select>
              <button className='ordem_button' onClick={(e) => { criar_tarefa() }}>Criar Tarefa</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
