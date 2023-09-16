
//import { Dropdown } from 'flowbite-react';
import Dropdown  from '../components/dropdown';
import { useTheme } from 'next-themes';
import logoHSBC from '../assets/img/logoHSBC.svg';
import '../styles/index.css';
// import { ThemeSwitcher } from '../components/ThemeSwitcher';




function Header() {
  const { theme } = useTheme();
  return (
<header className={`${theme === 'dark' ? 'from-gray-800 via-blue-800 to-gray-800' : 'from-purple-400 via-pink-400 to-red-500'} bg-gradient-to-r hover:bg-gradient-to-r transition duration-400 text-white py-4 px-6 flex justify-between items-center opacity-100`}>
      <div className="text-2xl font-bold"><a href="/" >
        <img src={logoHSBC} alt="Logo HSBC" className="h-8 w-auto transition-transform transform hover:scale-110" /></a></div>
      <div className="text-2xl font-bold">AclaraApp</div>
      <div className="relative inline-block text-left">
        <Dropdown />
      </div>
    </header>
  );
}



export default Header;

