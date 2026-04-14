import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "../features/studentSlice";

const ListStudent = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Daftar Siswa
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Kelas</th>
              <th className="p-3 text-left">Alamat</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{student.nama}</td>
                  <td className="p-3">{student.kelas}</td>
                  <td className="p-3">{student.alamat}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => dispatch(removeStudent(student.id))}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-4 text-gray-500"
                >
                  Belum ada data siswa
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudent;