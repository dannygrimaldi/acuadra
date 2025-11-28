// pages/historial-aclaraciones.jsx
import React, { useState } from "react";
import SearchForm from "../../components/SearchForm";
import AclaracionesTable from "../../components/AclaracionesTable";
import ComprasModal from "../../components/ComprasModal";
import { useAclaracionesWS } from "../../components/useAclaracionesWS";

export default function HistorialAclaracionesPage() {
  const { aclaraciones, loading } = useAclaracionesWS();

  const [modalOpen, setModalOpen] = useState(false);
  const [compras, setCompras] = useState([]);
  const [comprasLoading, setComprasLoading] = useState(false);

  const abrirCompras = (row) => {
    setModalOpen(true);
    setComprasLoading(true);

    fetch(`http://localhost:8080/api/compras/${row.folio}`)
      .then(res => res.json())
      .then(data => {
        setCompras(data);
        setComprasLoading(false);
      });
  };

  const buscar = (filtros) => {
    console.log("Filtros aplicados:", filtros);

    // opcional: fetch hacia /api/aclaraciones?criterio=X&valor=Y
  };

  return (
    <div className="container mx-auto mt-6 px-4">
      <SearchForm onSearch={buscar} />

      {loading ? (
        <p className="text-center text-gray-600">Cargando aclaraciones...</p>
      ) : (
        <AclaracionesTable
          data={aclaraciones}
          onOpenDetalles={abrirCompras}
        />
      )}

      <ComprasModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        compras={compras}
        loading={comprasLoading}
      />
    </div>
  );
}
