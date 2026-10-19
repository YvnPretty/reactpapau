import { useState } from 'react';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [contador, setContador] = useState(0);
  const saludo = (nombre = 'sin nombre') => alert(`Hola bienvenido ${nombre}`);
  const sumar = () => setContador((valor) => (valor === 10 ? 0 : valor + 1));
  const restar = () => setContador((valor) => (valor === 0 ? 10 : valor - 1));
  return <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col text-center">
        <h1 className="titulo">Hola mundo</h1>
        <input className="form-control mb-3" type="text" placeholder="Nombre" value={nombre} onChange={(evento) => setNombre(evento.target.value)} />
        <button className="btn btn-primary" onClick={() => saludo(nombre || undefined)}>Saludar</button>
        <div className="mt-3 d-flex justify-content-center align-items-center gap-3">
          <button className="btn btn-primary" aria-label="Sumar" onClick={sumar}>+</button>
          <h2 className="mb-0">{contador}</h2>
          <button className="btn btn-danger" aria-label="Restar" onClick={restar}>-</button>
        </div>
      </div>
    </div>
  </div>;
};

export default App;