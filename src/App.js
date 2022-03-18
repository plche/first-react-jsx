import Todo from "./components/Todo/Todo";
import './App.css';

function App() {
  const tasks = ["Learn React", "Climb Mt. Everest", "Run a marathon", "feed the dogs"]
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <Todo tasks={tasks} />
    </div>
  );
}

export default App;
