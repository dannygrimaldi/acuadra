// --- Componente actualizado para consumir datos desde Spring Boot ---
import React, { Component } from 'react';
import axios from 'axios';
import { Tbl } from './Tbl';

// Función para reformatear los datos provenientes de Spring Boot
function reformatDataFromSpring(dataFromSpring) {
  return dataFromSpring.map(item => {
    return [
      item.fecha,
      item.referencia,
      item.nombreComercio,
      item.dc,
      item.monto,
      '<input type="checkbox" class="item-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />',
    ];
  });
}

class TableDDA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSet: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Aquí llamas tu API de Spring Boot
    axios.get('http://localhost:8080/api/dda')
      .then(response => {
        const parsed = reformatDataFromSpring(response.data);
        this.setState({ dataSet: parsed, loading: false });
      })
      .catch(error => {
        console.error('Error:', error);
        this.setState({ error: 'Error al obtener datos', loading: false });
      });
  }

  render() {
    const { dataSet, loading, error } = this.state;

    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Transacciones DDA</h2>

        {loading && <p className="text-gray-600">Cargando información...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <Tbl data={dataSet} />
        )}
      </div>
    );
  }
}

export default TableDDA;

// --- Datos de ejemplo provisionales (mock) ---
export const mockDataSpring = [
  {
    fecha: "2025-01-10",
    referencia: "REF123456",
    nombreComercio: "Walmart",
    dc: "D",
    monto: 1250.50
  },
  {
    fecha: "2025-01-11",
    referencia: "REF789012",
    nombreComercio: "Amazon",
    dc: "C",
    monto: 899.99
  },
  {
    fecha: "2025-01-12",
    referencia: "REF456789",
    nombreComercio: "Oxxo",
    dc: "D",
    monto: 59.00
  }
];
