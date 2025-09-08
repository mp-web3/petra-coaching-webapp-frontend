import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/coaching-donna-online">Coaching Donna</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navigation