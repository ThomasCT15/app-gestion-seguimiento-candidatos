import Header from "../../components/Header";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <main className="dashboard-main">
        <section className="dashboard-hero">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenido al Dashboard</h1>
            <p className="hero-description">
              Gestiona candidatos, vacantes y postulaciones desde un solo lugar
            </p>
          </div>
        </section>
        <section className="quick-access">
          <h2 className="section-title">Acceso Rápido</h2>

          <div className="cards-grid">
            <div className="access-card card-vacantes">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20M16 13H8M16 17H8M10 9H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="card-title">Vacantes</h3>
              <p className="card-description">
                Administra las ofertas de trabajo disponibles
              </p>
              <div className="card-arrow">→</div>
            </div>

            <div className="access-card card-candidatos">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="card-title">Candidatos</h3>
              <p className="card-description">
                Revisa y gestiona los perfiles de candidatos
              </p>
              <div className="card-arrow">→</div>
            </div>

            <div className="access-card card-postulaciones">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 11L12 14L22 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="card-title">Postulaciones</h3>
              <p className="card-description">
                Consulta el estado de las postulaciones
              </p>
              <div className="card-arrow">→</div>
            </div>

            <div className="access-card card-reportes">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="card-title">Reportes</h3>
              <p className="card-description">
                Genera y descarga informes detallados
              </p>
              <div className="card-arrow">→</div>
            </div>
          </div>
        </section>
        <section className="info-section">
          <div className="info-card">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 16V12M12 8H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="info-content">
              <h3 className="info-title">Sistema de Gestión de Candidatos</h3>
              <p className="info-text">
                Optimiza tu proceso de reclutamiento con herramientas intuitivas
                y eficientes. Gestiona todo el ciclo de vida de las
                contrataciones desde una plataforma centralizada.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;