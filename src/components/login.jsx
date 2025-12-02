import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Button, Input } from '@nextui-org/react';
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Detectar tema del sistema
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError(""); // Limpiar error al escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // IMPORTANTE: Cambiar la URL según tu configuración
      // Para desarrollo con SSL (Spring Boot en puerto 8443):
      // const API_URL = "https://localhost:8443/api/auth/login";
      
      // Para desarrollo sin SSL (deshabilita SSL temporalmente en Spring):
      const API_URL = "http://localhost:8080/api/auth/login";
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: form.username.trim(),
          password: form.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Error de autenticación");
      }

      if (data.success && data.token) {
        // Guardar toda la información del usuario
        const userData = {
          token: data.token,
          username: data.username,
          employeeId: data.employeeId,
          fullName: data.fullName,
          email: data.email,
          roles: data.roles,
          expiresIn: data.expiresIn,
          type: "USER" // Para diferenciar de robots
        };
        
        localStorage.setItem("user", JSON.stringify(userData));
        
        // Configurar axios por defecto
        axios.defaults.baseURL = "http://localhost:8080";
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        
        // Opcional: Verificar token inmediatamente
        await verifyToken(data.token);
        
        // Redirigir al dashboard
        window.location.href = "/dashboard";
      } else {
        throw new Error("Respuesta del servidor inválida");
      }
      
    } catch (err) {
      console.error("Error de login:", err);
      setError(err.message || "Error de autenticación. Verifique sus credenciales.");
    } finally {
      setLoading(false);
    }
  };

  const verifyToken = async (token) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/verify", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ token })
      });
      
      const data = await response.json();
      if (data.valid) {
        console.log("Token verificado:", data);
      }
    } catch (error) {
      console.error("Error verificando token:", error);
    }
  };

  // Clases CSS dinámicas
  const containerClass = `${darkMode ? 'dark bg-[#111111]' : 'bg-gradient-to-br from-gray-50 to-gray-100'} min-h-screen flex items-center justify-center p-4`;
  
  const cardClass = `w-full max-w-md p-6 shadow-2xl rounded-2xl transition-all duration-300 ${
    darkMode 
      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
      : 'bg-white border border-gray-200'
  }`;
  
  const inputClass = `w-full ${darkMode 
    ? 'bg-gray-800 text-white border-gray-700 focus:border-red-500' 
    : 'bg-white text-gray-900 border-gray-300 focus:border-red-400'
  }`;
  
  const labelClass = `font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`;
  
  const buttonClass = `w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
    loading 
      ? 'bg-gray-400 cursor-not-allowed' 
      : darkMode 
        ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white' 
        : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
  } ${!loading && 'hover:shadow-lg'}`;

  return (
    <div className={containerClass}>
      <Card className={cardClass}>
        <CardHeader className="flex-col justify-center pb-6">
          <div className="flex items-center justify-center mb-4">
            {/* Logo HSBC */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center">
              <span className="text-white font-bold text-xl">HSBC</span>
            </div>
          </div>
          <h2 className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Sistema de Aclaraciones
          </h2>
          <p className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Autenticación LDAP Corporativa
          </p>
        </CardHeader>

        <CardBody>
          {error && (
            <div className={`mb-6 p-4 rounded-lg border ${darkMode 
              ? 'bg-red-900/20 border-red-700 text-red-300' 
              : 'bg-red-50 border-red-200 text-red-700'
            }`}>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className={labelClass}>
                Employee ID / Usuario
              </label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="ejemplo: E12345 o usuario.corporativo"
                required
                autoComplete="username"
                autoFocus
                value={form.username}
                onChange={handleChange}
                className={inputClass}
                variant="bordered"
                disabled={loading}
              />
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Use su Employee ID o nombre de usuario del dominio
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className={labelClass}>
                Contraseña
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                className={inputClass}
                variant="bordered"
                disabled={loading}
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className={buttonClass}
                fullWidth
                disabled={loading}
                isLoading={loading}
              >
                {loading ? "Autenticando..." : "Iniciar Sesión"}
              </Button>
              
              <div className="mt-4 text-center">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  ¿Problemas para acceder? Contacte a{' '}
                  <a 
                    href="mailto:soporte.it@banco.com" 
                    className={`font-medium hover:underline ${darkMode ? 'text-red-400' : 'text-red-600'}`}
                  >
                    Soporte IT
                  </a>
                </p>
              </div>
            </div>
          </form>

          {/* Información de seguridad */}
          <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-center space-x-2">
              <svg className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Conexión segura via LDAP + JWT
              </span>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Estilos adicionales */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: ${darkMode ? '#ffffff' : '#111827'};
          -webkit-box-shadow: 0 0 0px 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
}zZ