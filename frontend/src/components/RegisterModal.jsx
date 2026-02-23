import './Modal.css'

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
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
          <h2>Crear cuenta</h2>
          <p>Únete a la comunidad WorkHub 3D</p>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Juan" className="form-input" />
            </div>
            <div className="form-group">
              <label>Apellidos</label>
              <input type="text" placeholder="Pérez" className="form-input" />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" className="form-input" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Mínimo 8 caracteres" className="form-input" />
          </div>
          <div className="form-group">
            <label>Plan inicial</label>
            <select className="form-input">
              <option>Estándar — 49€/mes</option>
              <option>Premium — 99€/mes</option>
              <option>Ilimitado — 199€/mes</option>
            </select>
          </div>
          <label className="checkbox-label">
            <input type="checkbox" /> Acepto los{' '}
            <button type="button" className="form-link">términos y condiciones</button>
          </label>
          <button type="submit" className="btn-primary btn-full">Crear cuenta</button>
          <p className="form-footer">
            ¿Ya tienes cuenta?{' '}
            <button type="button" className="form-link" onClick={onSwitchToLogin}>
              Iniciar sesión
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
