import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register/', { username, password });
      console.log(response.data);
      // Aquí puedes manejar la redirección o mostrar un mensaje de éxito
    } catch (error) {
      console.error(error);
      // Aquí puedes manejar los errores, como mostrar un mensaje de error
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default Register;
