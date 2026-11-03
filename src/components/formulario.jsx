import React, { useState } from 'react';
import '../css/Formulario.css';

export default function Formulario() {
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: comprobar que ambos campos estén seleccionados
    if ([moneda.trim(), cripto.trim()].includes('')) {
      setError(true);
      setMensaje('');
      return;
    }

    setError(false);
    // Mensaje de éxito / información al completar el envío
    setMensaje('Formulario creado correctamente');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      {/* Mensaje de error usando tu clase .alerta-error */}
      {error && (
        <div className="alerta-error">
          Todos los campos son obligatorios
        </div>
      )}

      {/* Mensaje informativo usando tu clase .alerta-info */}
      {mensaje && !error && (
        <div className="alerta-info">
          {mensaje}
        </div>
      )}

      {/* Selector de Moneda Tradicional */}
      <div className="campo">
        <label className="label" htmlFor="moneda">Moneda</label>
        <select
          id="moneda"
          className="select"
          value={moneda}
          onChange={(e) => setMoneda(e.target.value)}
        >
          <option value="">-- Elige tu Moneda --</option>
          <option value="USD">Dólar Estadounidense (USD)</option>
          <option value="MXN">Peso Mexicano (MXN)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">Libra Esterlina (GBP)</option>
        </select>
      </div>

      {/* Selector de Criptomoneda */}
      <div className="campo">
        <label className="label" htmlFor="cripto">Criptomoneda</label>
        <select
          id="cripto"
          className="select"
          value={cripto}
          onChange={(e) => setCripto(e.target.value)}
        >
          <option value="">-- Elige tu Criptomoneda --</option>
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="USDT">Tether (USDT)</option>
          <option value="SOL">Solana (SOL)</option>
        </select>
      </div>

      {/* Botón de envío */}
      <button type="submit" className="btn-cotizar">
        Cotizar
      </button>
    </form>
  );
}