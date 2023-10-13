import React, { useState } from 'react';
import './App.css';

// Define un componente funcional llamado LoginForm
const LoginForm = () => {

  // Define un estado local para el formulario
  const [formData, setFormData] = useState({
    username: '',  // Inicializa el campo de nombre de usuario como una cadena vacía
    password: ''   // Inicializa el campo de contraseña como una cadena vacía
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,  // Copia el estado actual del formulario
      [name]: value  // Actualiza el campo correspondiente con el nuevo valor
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();  // Previene la recarga de la página por defecto al enviar el formulario

    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Formulario enviado:', formData);
  };

  // Renderiza el componente de formulario de inicio de sesión
  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required  // Campo obligatorio
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required  // Campo obligatorio
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;  // Exporta el componente LoginForm para su uso en otros lugares
