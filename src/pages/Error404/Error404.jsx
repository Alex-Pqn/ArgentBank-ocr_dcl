import './Error404.scss';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Error404 = () => {
  const { user } = useSelector((state) => state.userReducers);

  return (
    <section className="error404">
      <h1>Oups! La page que vous demandez n'existe pas.</h1>

      {user.isLogged ? (
        <span>
          <Link to="/profile">Retourner sur mon profile</Link>
        </span>
      ) : (
        <span>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </span>
      )}
    </section>
  );
};

export default Error404;
