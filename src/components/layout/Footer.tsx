import { Link } from 'react-router-dom';
import { navItems, socialLinks } from '../../data/content';

export default function Footer() {
  return (
    <footer className="wf-footer">
      <div className="wf-footer-grid">
        {/* Coluna 1 - Sobre */}
        <div>
          <div className="wf-logo" style={{ marginBottom: '20px' }}>LOGO</div>
          <p className="wf-footer-text">
            Fernando Gonçalves<br />
            Storyteller | Palestrante Motivacional<br />
            Desde 1992 transformando histórias de vida em inspiração para novas atitudes.
          </p>
        </div>

        {/* Coluna 2 - Navegação */}
        <div>
          <h4 className="wf-footer-title">Navegação</h4>
          <ul className="wf-footer-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 - Palestras */}
        <div>
          <h4 className="wf-footer-title">Palestras</h4>
          <ul className="wf-footer-links">
            <li><Link to="/palestras">O Método</Link></li>
            <li><Link to="/palestras">Os 3 Módulos</Link></li>
            <li><Link to="/palestras">Para Empresas</Link></li>
            <li><Link to="/palestras">Formatos</Link></li>
          </ul>
        </div>

        {/* Coluna 4 - Contato */}
        <div>
          <h4 className="wf-footer-title">Contato</h4>
          <ul className="wf-footer-links">
            <li><a href="https://wa.me/5531998475453" target="_blank" rel="noopener noreferrer">📱 (31) 99847-5453</a></li>
            <li><a href="mailto:contato@fernandosimplex.com.br">✉ contato@fernandosimplex.com.br</a></li>
            <li><a href="#">Belo Horizonte, MG</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="wf-footer-bottom">
        <p className="wf-footer-copy">© 2025 Fernando Gonçalves. Todos os direitos reservados. | www.fernandosimplex.com.br</p>
        <div className="wf-footer-social">
          {socialLinks.map((link) => (
            <div key={link.platform} className="wf-footer-social-item" title={link.platform}>
              {link.platform.substring(0, 2).toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
