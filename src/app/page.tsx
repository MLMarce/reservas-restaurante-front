'use client';
import Button from "@/components/button";
import Header from "@/components/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define el tipo de mesa (puedes agregar más propiedades si es necesario)
type Table = {};

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  // Estado para manejar las mesas por sector
  const [tables, setTables] = useState<{ left: Table[], center: Table[], right: Table[] }>({
    left: [],
    center: [],
    right: [],
  });

  // Estado para controlar el modal
  const [showModal, setShowModal] = useState(false);
  const [selectedSector, setSelectedSector] = useState('left');
  const [tableCount, setTableCount] = useState(1);

  if (!session?.user?.name) {
    router.push('/login');
  }

  // Función para agregar mesas
  const handleAddTable = () => {
    let newTables = { ...tables };

    switch (selectedSector) {
      case 'left':
        newTables.left.push(...Array(tableCount).fill({} as Table)); // Agrega mesas al exterior izquierdo
        break;
      case 'center':
        newTables.center.push(...Array(tableCount).fill({} as Table)); // Agrega mesas al interior
        break;
      case 'right':
        newTables.right.push(...Array(tableCount).fill({} as Table)); // Agrega mesas al exterior derecho
        break;
      default:
        break;
    }

    setTables(newTables); // Actualiza el estado con las nuevas mesas
    setShowModal(false);  // Cierra el modal
  };

  return (
    <main className="pt-2 w-screen h-screen border-white flex flex-col">
      <Header />
      <div className="relative w-screen flex-1 bg-yellow-50 flex flex-col overflow-auto snap-x snap-mandatory scroll-smooth overflow-y-hidden">
        <div className="w-max md:w-full flex items-center text-black text-xl font-semibold">
          <h3 className="w-screen text-center md:w-1/4 border snap-center">Exterior Izquierdo</h3>
          <h3 className="w-screen text-center md:w-1/2 border snap-center">Interior</h3>
          <h3 className="w-screen text-center md:w-1/4 border snap-center">Exterior Derecho</h3>
        </div>
        <div className="w-max md:w-full h-full flex items-center text-black">
          <div className="w-screen h-full text-center md:w-1/4 flex flex-col justify-center gap-8 items-center border bg-slate-500 snap-center">
            {tables.left.map((_, index) => (
              <div key={index} className="w-24 h-24 bg-black rounded-lg"></div>
            ))}
          </div>
          <div className="w-screen h-full text-center md:w-1/2 flex-wrap gap-8 flex flex-col justify-center items-center border bg-slate-500 snap-center">
            {tables.center.map((_, index) => (
              <div key={index} className="w-24 h-24 bg-black rounded-lg"></div>
            ))}
          </div>
          <div className="w-screen h-full text-center md:w-1/4 flex flex-col justify-center gap-8 items-center border bg-slate-500 snap-center">
            {tables.right.map((_, index) => (
              <div key={index} className="w-24 h-24 bg-black rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full h-auto justify-around">
        <Button
          bgColor="bg-green-500 hover:bg-green-700"
          onClick={() => setShowModal(true)}
          title="Agregar Mesa"
        />
        <Button bgColor="bg-orange-500 hover:bg-orange-700" onClick={() => console.log('Reservar Mesa')} title="Reservar Mesa" />
        <Button bgColor="bg-red-500 hover:bg-red-700" onClick={() => console.log('Eliminar Mesa')} title="Eliminar Mesa" />
        <Button bgColor="bg-blue-500 hover:bg-blue-700" onClick={() => console.log('Resetear')} title="Resetear" />
      </div>

      <footer className="text-center">App creada por &copy; Marcelo Lencina y Turi Coledani</footer>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl mb-4">Agregar Mesas</h2>

            <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
              Selecciona el sector:
            </label>
            <select
              id="sector"
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full mt-1 mb-4 p-2 border rounded"
            >
              <option value="left">Exterior Izquierdo</option>
              <option value="center">Interior</option>
              <option value="right">Exterior Derecho</option>
            </select>

            <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">
              Cantidad de mesas:
            </label>
            <input
              type="number"
              id="cantidad"
              value={tableCount}
              onChange={(e) => setTableCount(parseInt(e.target.value))}
              className="w-full mt-1 mb-4 p-2 border rounded"
              min="1"
            />

            <div className="flex justify-end">
              <button
                onClick={handleAddTable}
                className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mr-2"
              >
                Agregar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
