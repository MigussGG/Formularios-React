import React, { useState } from 'react';  // Importa React y useState desde React
import './App.css';  // Importa un archivo CSS para los estilos de la aplicación

function App() {  // Define el componente funcional App
  // Inicializa el estado del formulario utilizando el hook useState
  const [formData, setFormData] = useState({
    nombre: '',  // Campo para el nombre del solicitante
    telefono: '',  // Campo para el número de teléfono del solicitante
    tipoSoporte: 'fisico',  // Campo para seleccionar el tipo de soporte (valor predeterminado: físico)
    descripcionProblema: ''  // Campo para la descripción del problema
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;  // Obtiene el nombre y el valor del campo que cambió
    setFormData({
      ...formData,  // Copia el estado actual del formulario
      [name]: value  // Actualiza el campo correspondiente con el nuevo valor
    });
  }

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();  // Previene la recarga de la página por defecto al enviar el formulario
    console.log(formData);  // Muestra los datos del formulario en la consola
  }

  // Renderiza el componente
  return (
    <div className="App">
      <h1>Solicitud de Soporte</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre del solicitante */}
        <label>
          Nombre:
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required  // Campo obligatorio
          />
        </label>
        <br />

        {/* Campo para el número de teléfono del solicitante */}
        <label>
          Teléfono:
          <input 
            type="tel" 
            name="telefono" 
            value={formData.telefono} 
            onChange={handleChange} 
            required  // Campo obligatorio
          />
        </label>
        <br />

        {/* Campo para seleccionar el tipo de soporte */}
        <label>
          Tipo de Soporte:
          <select 
            name="tipoSoporte" 
            value={formData.tipoSoporte} 
            onChange={handleChange} 
            required  // Campo obligatorio
          >
            <option value="fisico">Físico</option>
            <option value="presencial">Presencial</option>
          </select>
        </label>
        <br />

        {/* Campo para la descripción del problema */}
        <label>
          Descripción del Problema:
          <textarea 
            name="descripcionProblema" 
            value={formData.descripcionProblema} 
            onChange={handleChange} 
            required  // Campo obligatorio
          />
        </label>
        <br />

        <button type="submit">Enviar Solicitud</button>
      </form>
    </div>
  );
}

export default App;  // Exporta el componente App para su uso en otros lugares
