import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Formulario() {
  const [datos, setDatos] = useState({
    numero: '',
    texto: '',
    opcion: '',
  });

  const { theme } = useTheme();
  const navigate = useNavigate();

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/tdd', datos);
      console.log(response.data);
      navigate('/selectItems');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e, field) => {
    setDatos({ ...datos, [field]: e.target.value.trim() });
  };

  const isDark = theme === 'dark';

  const inputClass = `
    w-full px-3 py-2 rounded-md text-base
    focus:outline-none focus:ring-2
    ${theme === 'dark'
      ? 'bg-[#333] text-white focus:ring-blue-500 focus:border-blue-500'
      : 'bg-white text-gray-800 focus:ring-red-500 focus:border-red-400'}
  `;

  const labelClass = `
    block font-semibold mb-2 text-base
    ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}
  `;

  const buttonClass = `
    w-full mt-4 text-base px-4 py-2 font-medium rounded-lg
    transition-transform transform hover:scale-105
    ${theme === 'dark'
      ? 'bg-blue-700 text-white hover:bg-blue-600'
      : 'bg-gradient-to-br from-red-400 to-red-700 text-white'}
  `;

  return (
      <Card className={`w-full w-[500px] p-4 shadow-md rounded-lg ${theme === 'dark' ? 'bg-[#222]' : 'bg-white'}`}>
                <CardHeader className="flex-col justify-center mb-2">
                  
                  <h2 className={`text-[20px] font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Nueva Solicitud
</h2>
<h3
  className={`text-[16px] whitespace-nowrap ${
    isDark ? 'text-white' : 'text-gray-900'
  }`}
>Inicia una nueva aclaración de cargos no reconocidos</h3>

                </CardHeader>
        
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="numero" className={labelClass}>
                Número de Tarjeta:
              </label>
              <input
                type="text"
                id="numero"
                className={inputClass}
                value={datos.numero}
                onChange={(e) => handleInputChange(e, 'numero')}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={16}
                placeholder="Ej. 1234567890123456"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="texto" className={labelClass}>
                SFE:
              </label>
              <input
                type="text"
                id="texto"
                className={inputClass}
                value={datos.texto}
                onChange={(e) => handleInputChange(e, 'texto')}
                placeholder="Ej. Código de aclaración"
              />
            </div>
                        <div className="text-center mt-6">

            <Button type="submit" className={buttonClass}>
              Enviar
            </Button>
            </div>
          </form>
        </CardBody>
      </Card>
  );
}

export default Formulario;
