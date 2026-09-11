import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <header className="wf-header">
      <div className="wf-logo">
        LOGO
      </div>
      <nav className="wf-nav">
        <Link to="/" className={`wf-nav-link ${isActive('/')}`}>Início</Link>
        <Link to="/sobre" className={`wf-nav-link ${isActive('/sobre')}`}>Sobre</Link>
        <Link to="/palestras" className={`wf-nav-link ${isActive('/palestras')}`}>Palestras</Link>
        <Link to="/contato" className={`wf-nav-link ${isActive('/contato')}`}>Contato</Link>
        <Link to="/contato" className="wf-nav-cta">Solicite Uma Palestra</Link>
      </nav>
    </header>
  );
}
