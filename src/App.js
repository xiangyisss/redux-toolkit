import './App.css';
import { Counter } from './features/Counter/Counter';
import { TodoList } from './features/Todo/TodoList';

function App() {
  return (
    <div className='App'>
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
