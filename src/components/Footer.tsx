import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="wf-footer">
      <div className="wf-footer-grid">
        {/* Coluna 1 - Sobre */}
        <div>
          <div className="wf-logo" style={{ marginBottom: '20px' }}>LOGO</div>
          <p className="wf-footer-text">
            [Texto institucional resumido sobre Fernando Gonçalves — palestrante, escritor e especialista em desenvolvimento humano e liderança.]
          </p>
        </div>

        {/* Coluna 2 - Navegação */}
        <div>
          <h4 className="wf-footer-title">Navegação</h4>
          <ul className="wf-footer-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/palestras">Palestras</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3 - Palestras */}
        <div>
          <h4 className="wf-footer-title">Palestras</h4>
          <ul className="wf-footer-links">
            <li><Link to="/palestras">[Tema Palestra 1]</Link></li>
            <li><Link to="/palestras">[Tema Palestra 2]</Link></li>
            <li><Link to="/palestras">[Tema Palestra 3]</Link></li>
            <li><Link to="/palestras">[Tema Palestra 4]</Link></li>
          </ul>
        </div>

        {/* Coluna 4 - Contato */}
        <div>
          <h4 className="wf-footer-title">Contato</h4>
          <ul className="wf-footer-links">
            <li><a href="#">[E-mail de contato]</a></li>
            <li><a href="#">[Telefone / WhatsApp]</a></li>
            <li><a href="#">[Cidade / Estado]</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="wf-footer-bottom">
        <p className="wf-footer-copy">© 2025 Fernando Gonçalves. Todos os direitos reservados.</p>
        <div className="wf-footer-social">
          <div className="wf-footer-social-item">IG</div>
          <div className="wf-footer-social-item">YT</div>
          <div className="wf-footer-social-item">IN</div>
          <div className="wf-footer-social-item">FB</div>
        </div>
      </div>
    </footer>
  );
}
