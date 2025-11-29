import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import axios from "axios";


export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Login failed");
      }

      const data = await res.json();
      const token = data.token;
      localStorage.setItem("token", token);

      // configurar axios por defecto
      axios.defaults.baseURL = "http://localhost:8080";
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // redirigir
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Error de autenticación");
    } finally {
      setLoading(false);
    }
  };

  const containerClass = `${isDark ? 'dark bg-[#111]' : 'bg-gray-100'} min-h-screen flex items-center justify-center p-4`;
  const labelClass = `block mb-2 font-semibold text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`;
  const inputClass = `w-full px-4 py-2 rounded-lg border text-base focus:outline-none focus:ring-2 transition-all ${
    isDark
      ? 'bg-[#2a2a2a] text-white border-gray-700 focus:ring-red-600'
      : 'bg-white text-gray-900 border-gray-300 focus:ring-red-500'
  }`;
  const buttonClass = `
    w-full mt-4 text-base px-4 py-2 font-medium rounded-lg
    transition-transform transform hover:scale-105
    ${theme === 'dark'
      ? 'bg-blue-700 text-white hover:bg-blue-600'
      : 'bg-gradient-to-br from-red-400 to-red-700 text-white'}
  `;

  return (
    <div className={containerClass}>
      <Card className={`w-full w-[500px] p-4 shadow-md rounded-lg ${theme === 'dark' ? 'bg-[#222]' : 'bg-white'}`}>
      <CardHeader className="flex-col justify-center mb-2">
          <h2 className="text-2xl font-bold">
            HSBC Authentication System
          </h2>
        </CardHeader>

        <CardBody>
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-600 text-white text-sm font-medium">{error}</div>
          )}

          {message && (
            <div className="mb-4 p-3 rounded-lg bg-green-600 text-white text-sm font-medium">{message}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className={labelClass}>ID / Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingrese su Employee ID o usuario"
                required
                autoFocus
                className={inputClass}
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className={labelClass}>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                required
                className={inputClass}
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className={buttonClass} fullWidth>
              Iniciar Sesión
            </Button>
          </form>


        </CardBody>
      </Card>
    </div>
  );
};