import Header from "../../components/Header";
import "./Candidatos.css";

const Candidatos = () => {
  return (
    <div>
      <Header />
      <div className="candidatos-container">
        <div className="candidatos-header">
          <div className="header-content">
            <h1 className="page-title">Gestión de Candidatos</h1>
            <p className="page-subtitle">
              Lista completa de candidatos en proceso de selección
            </p>
          </div>
          <div className="header-actions">
            <button className="btn-secondary">Filtrar</button>
            <button className="btn-primary">Nuevo Candidato</button>
          </div>
        </div>
        <div className="table-container">
          <table className="candidatos-table">
            <thead>
              <tr>
                <th>ID Usuario</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Experiencia</th>
                <th>Edad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="candidato-id">ASDFAS</span>
                </td>
                <td>
                  <div className="direccion-info">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="icon-direccion"
                    >
                      <path
                        d="M13 6.66667C13 11 8 14.3333 8 14.3333C8 14.3333 3 11 3 6.66667C3 5.34058 3.52678 4.06881 4.46447 3.13113C5.40215 2.19345 6.67392 1.66667 8 1.66667C9.32608 1.66667 10.5979 2.19345 11.5355 3.13113C12.4732 4.06881 13 5.34058 13 6.66667Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="8"
                        cy="6.66667"
                        r="1.33333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Calle Falsa 123</span>
                  </div>
                </td>
                <td>
                  <div className="telefono-info">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="icon-telefono"
                    >
                      <path
                        d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.6079 13.3983 14.6298 13.2134 14.6127C11.1619 14.3904 9.19137 13.6894 7.46004 12.5667C5.84926 11.5431 4.48359 10.1774 3.46004 8.56666C2.33336 6.82745 1.63235 4.84731 1.41337 2.78666C1.39628 2.60229 1.41803 2.41649 1.47708 2.24109C1.53614 2.06568 1.6311 1.90444 1.75614 1.76773C1.88118 1.63102 2.03329 1.52179 2.20293 1.44692C2.37257 1.37205 2.55578 1.33318 2.74137 1.33332H4.74137C5.06597 1.33013 5.38037 1.4448 5.62527 1.65568C5.87016 1.86656 6.0285 2.15961 6.07337 2.47999C6.15779 3.12003 6.31434 3.74847 6.54004 4.35333C6.62973 4.59193 6.64915 4.85126 6.59597 5.10057C6.5428 5.34988 6.41928 5.57872 6.24004 5.75999L5.39337 6.60666C6.34241 8.27568 7.72435 9.65762 9.39337 10.6067L10.24 9.75999C10.4213 9.58075 10.6501 9.45723 10.8994 9.40406C11.1488 9.35088 11.4081 9.3703 11.6467 9.45999C12.2516 9.68569 12.88 9.84224 13.52 9.92666C13.8439 9.97176 14.1396 10.1334 14.3511 10.3831C14.5625 10.6328 14.6748 10.9526 14.6667 11.28Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>4352352352</span>
                  </div>
                </td>
                <td>
                  <span className="experiencia-badge">
                    Tres años como Front
                  </span>
                </td>
                <td>
                  <span className="edad-badge">30 años</span>
                </td>
                <td>
                  <div className="acciones">
                    <button className="btn-accion btn-editar" title="Editar">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L5.33301 13.3334L1.66634 14.3334L2.66634 10.6667L11.333 2.00004Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      className="btn-accion btn-eliminar"
                      title="Eliminar"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2 4H3.33333H14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.33301 4.00004V2.66671C5.33301 2.31309 5.47348 1.97395 5.72353 1.7239C5.97358 1.47385 6.31272 1.33337 6.66634 1.33337H9.33301C9.68663 1.33337 10.0258 1.47385 10.2758 1.7239C10.5259 1.97395 10.6663 2.31309 10.6663 2.66671V4.00004M12.6663 4.00004V13.3334C12.6663 13.687 12.5259 14.0261 12.2758 14.2762C12.0258 14.5262 11.6866 14.6667 11.333 14.6667H4.66634C4.31272 14.6667 3.97358 14.5262 3.72353 14.2762C3.47348 14.0261 3.33301 13.687 3.33301 13.3334V4.00004H12.6663Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Candidatos;