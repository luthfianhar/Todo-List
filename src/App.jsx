import AddStudent from "./components/AddStudent";
import ListStudent from "./components/ListStudent";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Manajemen Siswa
      </h1>

      <AddStudent />
      <ListStudent />
    </div>
  );
}

export default App;