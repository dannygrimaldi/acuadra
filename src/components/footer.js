import { useTheme } from 'next-themes';



function Footer() {
  const { theme } = useTheme();
    return (
      
      <footer className={`${theme === 'dark' ? 'from-gray-800 via-blue-800 to-gray-800' : 'from-purple-400 via-pink-400 to-red-500'} bg-gradient-to-r hover:bg-gradient-to-l transition duration-400 text-white py-4`}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} RPA Management</p>
      </div>
    </footer>
    );
  }
  
  export default Footer;