import AddStudent from "./components/AddStudent";
import ListStudent from "./components/ListStudent";
import TodoApp from "./components/TodoApp";
import { removeStudent } from "./features/studentSlice";

function App() {
  return (
    <div className="p-6">
      <AddStudent />
      <ListStudent />
      <TodoApp /> {/* TAMBAH INI */}
    </div>
  );
}

export default App;