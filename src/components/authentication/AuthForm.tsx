import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css'; 

interface User {
  name: string;
  email: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState<string>(''); // Tipificación de useState para username
  const [password, setPassword] = useState<string>(''); // Tipificación de useState para password
  const [errors, setErrors] = useState<{ username?: string, password?: string }>({}); // Tipificación de useState para errors

  const navigate = useNavigate();

  const validate = (): { username?: string, password?: string } => {
    const newErrors: { username?: string, password?: string } = {};
    if (!username) newErrors.username = 'El nombre de usuario es obligatorio.';
    if (!password) newErrors.password = 'La contraseña es obligatoria.';
    return newErrors;
  };

  const handleLogin = async () => {
    // Limpiar validaciones antes de realizar una nueva consulta
    setErrors({});
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }

      const users: User[] = await response.json(); // Tipificación del array de usuarios
      const user = users.find((u: User) => u.email === username && u.password === password);

      if (user) {
        console.log('Usuario autenticado:', user);
        const userData = {username: user.name, email: user.email}; // Tipificación de userData
        // Guardar los datos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        // Redirigir a la pantalla principal
        navigate('/');
      } else {
        setErrors({ password: 'Nombre de usuario o contraseña incorrectos' });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ password: 'Error en la autenticación' });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      handleLogin();
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h2>Autenticación</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Correo electrónico:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
