import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../data/content';

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <header className="wf-header">
      <div className="wf-logo">
        LOGO
      </div>
      <nav className="wf-nav">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={`wf-nav-link ${isActive(item.path)}`}>
            {item.label}
          </Link>
        ))}
        <Link to="/contato" className="wf-nav-cta">Solicite Uma Palestra</Link>
      </nav>
    </header>
  );
}
