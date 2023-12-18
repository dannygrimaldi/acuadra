import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from 'next-themes';
import { Button } from "@nextui-org/react";
//import { MyButton } from '../components/buttonCustom'


export default function App() {
const navigate = useNavigate();
  const { theme } = useTheme();

  

  const handleTDDButtonClick = () => {
    // Redirige a la ruta deseada cuando se hace clic en el botón "TDD"
    navigate("/set/tdd");
  };

  const handleTDCButtonClick = () => {
    // Redirige a la ruta deseada cuando se hace clic en el botón "TDC"
    navigate("/set/tdc");
  };

  const buttonClass = `text-gray-900 rounded-md px-5 py-2.5 mr-2 mb-2 transition-transform transform hover:scale-110 ${
    theme === 'dark'
      ? 'dark:bg-blue-700 dark:text-white'
      : 'bg-white text-gray-900 dark:border-gray-300 border border-gray-300 '
  }`;
  // Clases CSS para ajustar el estilo según el tema
  const containerClass = `container mx-auto mt-[18vh]  ${
    theme === 'dark' ? 'dark' : '' //'dark' si el tema es oscuro
  }`;

  return (
    <div className={containerClass}>
    <div className="flex gap-4 items-center">
      <Button  onClick={handleTDDButtonClick} size="lg" className={buttonClass} >
        TDD
      </Button>  
      <Button  onClick={handleTDCButtonClick} size="lg" className={buttonClass}>
        TDC
      </Button>  
    </div>
    </div>
  );
}
