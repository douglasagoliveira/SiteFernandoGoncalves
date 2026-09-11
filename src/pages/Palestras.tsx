import { Link } from 'react-router-dom';

export default function Palestras() {
  return (
    <div>
      {/* ============================================
          BREADCRUMB
          ============================================ */}
      <div className="wf-breadcrumb">
        <a href="#/">Início</a>
        <span>/</span>
        Palestras
      </div>

      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="wf-page-header">
        <p className="wf-section-label">Palestras</p>
        <h1 className="wf-page-header-title">[Título: Palestras que transformam equipes e resultados]</h1>
        <p className="wf-page-header-text">
          [Subtítulo: Texto curto posicionando as palestras como investimento em desenvolvimento corporativo. 2-3 linhas.]
        </p>
      </section>

      {/* ============================================
          FORMATOS DE PALESTRA — Cards de serviço
          Objetivo: Mostrar opções de contratação
          ============================================ */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Formatos</p>
          <h2 className="wf-section-title">Como posso contribuir com sua empresa</h2>
          <p className="wf-section-subtitle">
            [Texto curto: introdução aos formatos disponíveis.]
          </p>
        </div>

        <div className="wf-grid-3">
          {/* Formato 1 */}
          <div className="wf-card">
            <div className="wf-card-icon">ÍCONE</div>
            <h3 className="wf-card-title">[Palestra / Keynote]</h3>
            <p className="wf-card-text">
              [Descrição: duração, formato, público-alvo. 2-3 linhas.]
            </p>
            <ul style={{ marginTop: '12px', paddingLeft: '16px' }}>
              <li style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>[Detalhe: ex. 60-90 min]</li>
              <li style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>[Detalhe: ex. Até 500 pessoas]</li>
              <li style={{ fontSize: '13px', color: '#666' }}>[Detalhe: ex. Presencial ou online]</li>
            </ul>
          </div>

          {/* Formato 2 */}
          <div className="wf-card">
            <div className="wf-card-icon">ÍCONE</div>
            <h3 className="wf-card-title">[Workshop / Treinamento]</h3>
            <p className="wf-card-text">
              [Descrição: duração, formato, público-alvo. 2-3 linhas.]
            </p>
            <ul style={{ marginTop: '12px', paddingLeft: '16px' }}>
              <li style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>[Detalhe: ex. 4h a 16h]</li>
              <li style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>[Detalhe: ex. Até 50 pessoas]</li>
              <li style={{ fontSize: '13px', color: '#666' }}>[Detalhe: ex. Prático e vivencial]</li>
            </ul>
          </div>

          {/* Formato 3 */}
          <div className="wf-card">
            <div className="wf-card-icon">ÍCONE</div>
            <h3 className="wf-card-title">[Consultoria / Mentoria]</h3>
            <p className="wf-card-text">
              [Descrição: duração, formato, público-alvo. 2-3 linhas.]
            </p>
            <ul style={{ marginTop: '12px', paddingLeft: '16px' }}>
              <li style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>[Detalhe: ex. Programa personalizado]</li>
              <li style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>[Detalhe: ex. Liderança / Equipes]</li>
              <li style={{ fontSize: '13px', color: '#666' }}>[Detalhe: ex. Acompanhamento contínuo]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================
          DIVISOR
          ============================================ */}
      <div className="wf-divider-thick"></div>

      {/* ============================================
          TEMAS DE PALESTRA — Lista detalhada
          Objetivo: Mostrar profundidade de conteúdo
          ============================================ */}
      <section className="wf-section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="wf-section-label">Temas</p>
          <h2 className="wf-section-title">Temas disponíveis</h2>
          <p className="wf-section-subtitle">
            [Texto curto: posicionamento sobre personalização de conteúdo.]
          </p>
        </div>

        {/* Palestra 1 */}
        <div className="wf-palestra-item">
          <div className="wf-palestra-image"></div>
          <div>
            <span className="wf-palestra-tag">[Categoria]</span>
            <h3 className="wf-palestra-title">[Nome da Palestra 1]</h3>
            <p className="wf-palestra-desc">
              [Descrição resumida: 3-4 linhas. O que o público vai aprender/vivenciar. Foco em resultado prático.]
            </p>
            <ul className="wf-palestra-topics">
              <li>[Tópico-chave 1 — o que será abordado]</li>
              <li>[Tópico-chave 2 — o que será abordado]</li>
              <li>[Tópico-chave 3 — o que será abordado]</li>
              <li>[Tópico-chave 4 — o que será abordado]</li>
            </ul>
            <Link to="/contato" className="wf-btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
              Solicitar Esta Palestra
            </Link>
          </div>
        </div>

        {/* Palestra 2 */}
        <div className="wf-palestra-item">
          <div className="wf-palestra-image"></div>
          <div>
            <span className="wf-palestra-tag">[Categoria]</span>
            <h3 className="wf-palestra-title">[Nome da Palestra 2]</h3>
            <p className="wf-palestra-desc">
              [Descrição resumida: 3-4 linhas. O que o público vai aprender/vivenciar.]
            </p>
            <ul className="wf-palestra-topics">
              <li>[Tópico-chave 1]</li>
              <li>[Tópico-chave 2]</li>
              <li>[Tópico-chave 3]</li>
              <li>[Tópico-chave 4]</li>
            </ul>
            <Link to="/contato" className="wf-btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
              Solicitar Esta Palestra
            </Link>
          </div>
        </div>

        {/* Palestra 3 */}
        <div className="wf-palestra-item">
          <div className="wf-palestra-image"></div>
          <div>
            <span className="wf-palestra-tag">[Categoria]</span>
            <h3 className="wf-palestra-title">[Nome da Palestra 3]</h3>
            <p className="wf-palestra-desc">
              [Descrição resumida: 3-4 linhas. O que o público vai aprender/vivenciar.]
            </p>
            <ul className="wf-palestra-topics">
              <li>[Tópico-chave 1]</li>
              <li>[Tópico-chave 2]</li>
              <li>[Tópico-chave 3]</li>
              <li>[Tópico-chave 4]</li>
            </ul>
            <Link to="/contato" className="wf-btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
              Solicitar Esta Palestra
            </Link>
          </div>
        </div>

        {/* Palestra 4 */}
        <div className="wf-palestra-item">
          <div className="wf-palestra-image"></div>
          <div>
            <span className="wf-palestra-tag">[Categoria]</span>
            <h3 className="wf-palestra-title">[Nome da Palestra 4]</h3>
            <p className="wf-palestra-desc">
              [Descrição resumida: 3-4 linhas. O que o público vai aprender/vivenciar.]
            </p>
            <ul className="wf-palestra-topics">
              <li>[Tópico-chave 1]</li>
              <li>[Tópico-chave 2]</li>
              <li>[Tópico-chave 3]</li>
              <li>[Tópico-chave 4]</li>
            </ul>
            <Link to="/contato" className="wf-btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
              Solicitar Esta Palestra
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          PARA QUEM — Público-alvo
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Para Quem</p>
          <h2 className="wf-section-title">Ideal para sua empresa se...</h2>
        </div>

        <div className="wf-grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="wf-card">
            <h3 className="wf-card-title">[Perfil de empresa/segmento 1]</h3>
            <p className="wf-card-text">
              [Texto: 2-3 linhas descrevendo o cenário ideal. Ex: "Empresas que buscam engajar equipes..."]
            </p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">[Perfil de empresa/segmento 2]</h3>
            <p className="wf-card-text">
              [Texto: 2-3 linhas descrevendo o cenário ideal.]
            </p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">[Perfil de empresa/segmento 3]</h3>
            <p className="wf-card-text">
              [Texto: 2-3 linhas descrevendo o cenário ideal.]
            </p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">[Perfil de empresa/segmento 4]</h3>
            <p className="wf-card-text">
              [Texto: 2-3 linhas descrevendo o cenário ideal.]
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA FINAL
          ============================================ */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">[Título CTA: Pronto para transformar sua equipe?]</h2>
        <p className="wf-cta-text">
          [Texto curto: reforço + direcionamento para contato.]
        </p>
        <Link to="/contato" className="wf-btn-primary">Solicitar Proposta</Link>
      </section>
    </div>
  );
}
