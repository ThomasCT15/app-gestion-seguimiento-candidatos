import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Sistema de Gestión de
            <span className="highlight"> Candidatos</span>
          </h1>
          <p className="hero-subtitle">
            Optimiza tu proceso de reclutamiento con nuestra plataforma integral
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Buscar Ofertas</button>
            <button className="btn-secondary">Conocer más</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span>Candidatos</span>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <span>Vacantes</span>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <span>Postulaciones</span>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Funcionalidades principales</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="feature-title">Gestión de candidatos</h3>
            <p className="feature-description">
              Administra tu base de datos de candidatos de manera eficiente y
              organizada
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="feature-title">Seguimiento en tiempo real</h3>
            <p className="feature-description">
              Monitorea el progreso de cada postulación desde el inicio hasta la
              contratación
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="feature-title">Publicación de vacantes</h3>
            <p className="feature-description">
              Crea y gestiona ofertas de trabajo de manera rápida y sencilla
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="feature-title">Análisis y reportes</h3>
            <p className="feature-description">
              Obtén métricas detalladas sobre tu proceso de reclutamiento
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">1,234</div>
            <div className="stat-label">Candidatos registrados</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">89</div>
            <div className="stat-label">Vacantes activas</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">456</div>
            <div className="stat-label">Postulaciones procesadas</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Tasa de satisfacción</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
