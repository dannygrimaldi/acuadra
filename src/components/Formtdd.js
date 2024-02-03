import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';
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
    console.log(datos);
    try {
      const response = await axios.post('/tdd', datos, {
        headers: {
          //"X-CSRFToken": DjangoCSRFToken.csrftoken,
        },
      });
      console.log(response.data);
      navigate('/selectItems');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e, field) => {
    const trimmedValue = e.target.value.trim();
    setDatos({ ...datos, [field]: trimmedValue });
  };

  const containerClass = `container mx-auto mt-[18vh]  ${
    theme === 'dark' ? 'dark' : ''
  }`;

  const formClass = `max-w-md mx-auto p-4 rounded-lg shadow-md relative ${
    theme === 'dark' ? 'dark:bg-[#222]' : ''
  }`;

  const labelClass = `block font-bold mb-2 ${
    theme === 'dark' ? 'text-white' : 'text-gray-700'
  }`;

  const inputClass = `w-full px-3 py-2 rounded-md ${
    theme === 'dark' ? 'dark:bg-[#333] dark:text-white focus:ring-blue-500 focus:border-blue-500' : 'focus:ring-red-500 focus:border-purple-300'
  }`;

  const buttonClass = `bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-110 ${
    theme === 'dark' ? 'dark:bg-blue-700' : 'bg-gradient-to-br from-red-400 to-red-700'
  }`;

  return (
    <div className={containerClass}>
      <form onSubmit={handleSubmit} className={formClass}>
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="opcion" className={labelClass}>
            Seleccionar:
          </label>
          <select
            id="opcion"
            className={inputClass}
            value={datos.opcion}
            onChange={(e) => handleInputChange(e, 'opcion')}
          >
            <option value="">Selecciona una opción</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div className="text-center">
          <Button type="submit" className={buttonClass}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
