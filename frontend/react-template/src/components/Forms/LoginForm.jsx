import React from "react";
import "../Forms/LoginForm.css";

export default function Login() {
  return (
    <div className="login__div">
      <h3 className="login__title">Ingresá</h3>
      <form className="login__form">
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresá tu email"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresá tu contraseña"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recordarme
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="login__button">
            Ingresar
          </button>
        </div>
        <p className="forgot-password text-right">
          Olvidaste tu <a href="/">contraseña?</a>
        </p>
      </form>
    </div>
  );
}
