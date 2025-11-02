import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';

const BuscarAclaraciones = () => {
  const [formData, setFormData] = useState({
    criterio: 'cis',
    valor: ''
  });

  const { theme } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  const isDark = theme === 'dark';
  const containerClass = `${isDark ? 'dark' : ''}`;
  const labelClass = `
    block font-semibold mb-2 text-base
    ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}
  `;  
    const inputClass = `
    w-full px-3 py-2 rounded-md text-base
    focus:outline-none focus:ring-2
    ${theme === 'dark'
      ? 'bg-[#333] text-white focus:ring-blue-500 focus:border-blue-500'
      : 'bg-white text-gray-800 focus:ring-red-500 focus:border-red-400'}
  `;
    const buttonClass = `
    w-full mt-4 text-base px-4 py-2 font-medium rounded-lg
    transition-transform transform hover:scale-105
    ${theme === 'dark'
      ? 'bg-blue-700 text-white hover:bg-blue-600'
      : 'bg-gradient-to-br from-red-400 to-red-700 text-white'}
  `;

  return (
    <div className={containerClass}>
      <Card
        className={`w-full w-[500px] mx-auto p-4 shadow-md rounded-lg ${isDark ? 'bg-[#222]' : 'bg-white'}`}
      >
        <CardHeader className="flex-col justify-center mb-2">
          <h2 className={`text-[20px] font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
Historial de solicitudes
</h2>
<h3 className={`text-[16px] ${isDark ? 'text-white' : 'text-gray-900'}`}>
Consulta Aclaraciones Previas
</h3>
        </CardHeader>

        <CardBody>
          <form onSubmit={handleSubmit}>
            {/* Criterio de búsqueda */}
            <div className="mb-4">
              <label htmlFor="criterio" className={labelClass}>
                Criterio de Búsqueda
              </label>
              <select
                name="criterio"
                id="criterio"
                aria-label="Selecciona el criterio de búsqueda"
                value={formData.criterio}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="cis">CIS</option>
                <option value="numTarjeta">Número de Tarjeta</option>
                <option value="cuenta">Cuenta</option>
              </select>
            </div>

            {/* Valor a buscar */}
            <div className="mb-4">
              <label htmlFor="valor" className={labelClass}>
                Valor a Buscar
              </label>
              <input
                type="text"
                name="valor"
                id="valor"
                aria-label="Introduce el valor que deseas buscar"
                value={formData.valor}
                onChange={handleChange}
                required
                placeholder="Ingrese el valor..."
                className={inputClass}
              />
            </div>

            {/* Botón */}
            <div className="text-center mt-6">
              <Button
                type="submit"
                className={buttonClass}
                fullWidth
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Buscar
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default BuscarAclaraciones;
