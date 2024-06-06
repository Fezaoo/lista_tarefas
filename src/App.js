
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content_container'>
        <main className='content'>
          <h1>
            Lista de Tarefas
          </h1>
          <div className='section_container'>
            <h2>
              Pesquisar:
            </h2>
            <div className='pesquisar_input_container'>
              <input className='pesquisar_input input_border' placeholder='Digite para pesquisar' />
            </div>
          </div>
          <hr></hr>
          <div className='section_container'>
            <h2>
              Filtrar:
            </h2>
            <div className='filtrar_input_container'>
              <div className='status_container'>
                <label>
                  Status
                </label>
                <div className='status_select_container'>
                  <select className='status_select input_border'>
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
                  <button className='ordem_button'>ABC</button>
                  <button className='ordem_button'>ZYX</button>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div>

          </div>
          <hr></hr>
          <div className='section_container'>
            <h2>
              Criar Tarefa:
            </h2>
            <div>
            <input className='pesquisar_input input_border' placeholder='Digite o nome da tarefa' />

            <input className='pesquisar_input input_border' placeholder='Selecione uma categoria' />
            <button/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
