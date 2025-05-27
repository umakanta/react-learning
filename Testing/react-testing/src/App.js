import './App.css';
import Greeting from './Compnent/Greeting';
import Counter from './Compnent/Counter';
import TodoList from './Compnent/TodoList';

function App() {
  return (
    <div className="App">
      {/* <Greeting name="Umakanta" /> */}
      {/* <Counter/> */}
      <TodoList />
    </div>
  );
}

export default App;
