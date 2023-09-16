import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';

function Formulario() {
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');
  const [opcion, setOpcion] = useState('');
  const { theme } = useTheme(); // Obtener el tema activo

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza acciones con los valores ingresados
    console.log('Número:', numero);
    console.log('Texto:', texto);
    console.log('Opción seleccionada:', opcion);
  };

  // Clases CSS para ajustar el estilo según el tema
  const containerClass = `container mx-auto mt-8 ${
    theme === 'dark' ? 'dark' : '' // Agregar 'dark' si el tema es oscuro
  }`;

  const formClass = `max-w-md mx-auto bg-white p-4 rounded-lg shadow-md ${
    theme === 'dark' ? 'dark:bg-[#222]' : '' // Cambiar el fondo si el tema es oscuro
  }`;

  const labelClass = `block font-bold mb-2 ${
    theme === 'dark' ? 'text-white' : 'text-gray-700' // Cambiar el color del texto según el tema
  }`;

  const inputClass = `w-full px-3 py-2 rounded-md  ${
    theme === 'dark' ? 'dark:bg-[#333] dark:text-white focus:ring-blue-500 focus:border-blue-500' : 'focus:ring-red-500 focus:border-purple-300'
  }`;

  const buttonClass = `bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${
    theme === 'dark' ? 'dark:bg-blue-700' : ''
  }`;

  return (
    <div className={containerClass}>
      <form onSubmit={handleSubmit} className={formClass}>
        <div className="mb-4">
          <label htmlFor="numero" className={labelClass}>
            Número de Tarjeta:
          </label>
          <input
            type="text" // Cambiamos el tipo a "text" para permitir la entrada de texto
            id="numero"
            className={inputClass}
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            inputMode="numeric" // Indicamos que se espera una entrada numérica
            pattern="[0-9]*" // Establecemos un patrón que solo permite dígitos numéricos
            maxLength={16} // Limitamos a un máximo de 16 dígitos
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
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="opcion" className={labelClass}>
            Seleccionar:
          </label>
          <select
            id="opcion"
            className={inputClass}
            value={opcion}
            onChange={(e) => setOpcion(e.target.value)}
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
