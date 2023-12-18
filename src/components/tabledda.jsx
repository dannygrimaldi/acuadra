//import Header from '../../components/header';
//import Footer from '../../components/footer';
//import MiComponente from '../../components/datatable';
import { Tbl } from './Tbl';
//import { Frag } from '../../components/Frag'
import React, { Component } from 'react';
import axios from 'axios'; // Importa Axios



function reformatDataFromDjango(dataFromDjango) {
  return dataFromDjango.map(item => {
    return [
      item.Fecha,
      item.Referencia,
      item["Nombre del Comercio"],
      item["D/C"],
      item.Monto,
      '<input type="checkbox" class="item-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>',
    ];
  });
}



class tabledda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSet: [], // Inicializa dataSet como un arreglo vacío
    };
  }

  componentDidMount() {
    // Realiza una solicitud HTTP GET para obtener los datos desde Django
    axios.get('/Selectdatatdd') // Ajusta la URL según tu configuración de Django
      .then(response => {
        // Reformatea los datos antes de actualizar el estado
        const reformattedData = reformatDataFromDjango(response.data.data);
        this.setState({ dataSet: reformattedData }); // Actualiza el estado con los datos reformateados
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  render() {
    return (
      <div>
        {/* Tu contenido */}
        <table className="display" width="100%">
          <thead>
            <tr>
              {/* Encabezados de tabla */}
            </tr>
          </thead>
          <tbody>
            {/* filas de la tabla */}
          </tbody>
        </table>

        <Tbl data={this.state.dataSet} />
      </div>
    );
  }
}

export default tabledda;
