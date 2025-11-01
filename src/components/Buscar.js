import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';


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

  const containerClass = `${theme === 'dark' ? 'dark' : ''}`;
  const formClass = `max-w-md mx-auto p-4 rounded-lg shadow-md relative ${theme === 'dark' ? 'dark:bg-[#222]' : ''}`;
  const labelClass = `block font-bold mb-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`;
  const inputClass = `w-full px-3 py-2 rounded-md text-sm ${theme === 'dark' ? 'dark:bg-[#333] dark:text-white focus:ring-blue-500 focus:border-blue-500' : 'focus:ring-red-500 focus:border-purple-300'}`;
  const buttonClass = `bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-110 text-sm flex items-center justify-center ${theme === 'dark' ? 'dark:bg-blue-700' : 'bg-gradient-to-br from-red-400 to-red-700'}`;

  return (
    <div className={containerClass}>
      <form onSubmit={handleSubmit} className={formClass}>
        <div className="text-center mb-6">

          <h2 className={`**text-xl** font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Buscar Aclaraciones          
        </h2>
        </div>
        
        <div className="mb-4">
          <label htmlFor="criterio" className={labelClass}>
            Criterio de Búsqueda
          </label>
          <select
            name="criterio"
            id="criterio"
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

        <div className="mb-4">
          <label htmlFor="valor" className={labelClass}>
            Valor a Buscar
          </label>
          <input
            type="text"
            name="valor"
            id="valor"
            value={formData.valor}
            onChange={handleChange}
            required
            placeholder="Ingrese el valor..."
            className={inputClass}
          />
        </div>

        {/* 🔑 CLAVE: Contenedor para centrar el botón */}
        <div className="text-center mt-6">
            <Button
              type="submit"
              fullWidth
              className={buttonClass}
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
    </div>
  );
};

export default BuscarAclaraciones;