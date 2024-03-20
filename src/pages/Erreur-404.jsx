import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="error-404">
      <p className="top">404</p>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
