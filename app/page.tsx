import React from 'react';
import TaskList from './componentes/TaskList';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
