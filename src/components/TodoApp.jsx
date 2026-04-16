import { useSelector, useDispatch } from "react-redux";
import { tambahTugas, hapusSemua } from "../features/todoSlice";

const TodoApp = () => {
  const tugas = useSelector((state) => state.todo.listTugas);
  const dispatch = useDispatch();

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        📚 Daftar Tugas
      </h2>

      {/* LIST TUGAS */}
      <div className="space-y-3 mb-6">
        {tugas.length > 0 ? (
          tugas.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl hover:shadow-md transition"
            >
              <span className="text-gray-700 font-medium">
                {index + 1}. {item}
              </span>
            </div>
          ))
        ) : (
          <div className="text-center py-6 bg-gray-50 rounded-xl text-gray-500">
            Belum ada tugas
          </div>
        )}
      </div>

      {/* BUTTON */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => dispatch(tambahTugas("Belajar React"))}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition"
        >
          Tambah Tugas Belajar
        </button>

        <button
          onClick={() => dispatch(hapusSemua())}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition"
        >
          Bersihkan Semua
        </button>
      </div>
    </div>
  );
};

export default TodoApp;