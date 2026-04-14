import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../features/studentSlice";

const AddStudent = () => {
  const dispatch = useDispatch();

  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !kelas || !alamat) return;

    dispatch(addStudent(nama, kelas, alamat));

    setNama("");
    setKelas("");
    setAlamat("");
  };

  return (
    <div className="max-w-xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Tambah Siswa
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default AddStudent;