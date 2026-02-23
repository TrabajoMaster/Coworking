import './Modal.css'

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <span className="logo-icon modal-logo">◆</span>
          <h2>Bienvenido de nuevo</h2>
          <p>Inicia sesión para reservar tu espacio</p>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" className="form-input" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="••••••••" className="form-input" />
          </div>
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" /> Recordarme
            </label>
            <button type="button" className="form-link">¿Olvidaste tu contraseña?</button>
          </div>
          <button type="submit" className="btn-primary btn-full">Iniciar sesión</button>
          <p className="form-footer">
            ¿No tienes cuenta?{' '}
            <button type="button" className="form-link" onClick={onSwitchToRegister}>
              Crear una cuenta
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
