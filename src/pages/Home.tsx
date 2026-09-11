import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* ============================================
          HERO SECTION
          Objetivo: Impacto imediato + CTA principal
          ============================================ */}
      <section className="wf-hero">
        <div className="wf-hero-content">
          <p className="wf-tagline">[Tagline / Posicionamento]</p>
          <h1 className="wf-hero-title">
            [Título principal de impacto — proposta de valor em uma frase]
          </h1>
          <p className="wf-hero-subtitle">
            [Subtítulo que conecta a dor do público corporativo à solução que Fernando oferece. Máximo 2 linhas.]
          </p>
          <div className="wf-hero-buttons">
            <Link to="/contato" className="wf-btn-primary">Solicitar Palestra</Link>
            <Link to="/palestras" className="wf-btn-secondary">Conheça as Palestras</Link>
          </div>
        </div>
        <div className="wf-hero-image">
          <span className="wf-hero-image-label">FOTO HERO — Fernando Gonçalves</span>
        </div>
      </section>

      {/* ============================================
          LOGOS — Prova social (empresas que já contrataram)
          ============================================ */}
      <section className="wf-logos-section">
        <p className="wf-logos-label">Empresas que já confiaram no trabalho de Fernando Gonçalves</p>
        <div className="wf-logos-grid">
          <div className="wf-logo-item">LOGO 1</div>
          <div className="wf-logo-item">LOGO 2</div>
          <div className="wf-logo-item">LOGO 3</div>
          <div className="wf-logo-item">LOGO 4</div>
          <div className="wf-logo-item">LOGO 5</div>
          <div className="wf-logo-item">LOGO 6</div>
        </div>
      </section>

      {/* ============================================
          SOBRE RESUMIDO — Gerar curiosidade para página Sobre
          ============================================ */}
      <section className="wf-section">
        <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <p className="wf-section-label">[Label: Quem é Fernando]</p>
            <h2 className="wf-section-title">[Título: Uma frase que resume quem ele é e o que entrega]</h2>
            <p className="wf-section-subtitle">
              [Texto resumido: 3-4 linhas sobre a trajetória e diferencial. Foco em resultado para o contratante.]
            </p>
            <p className="wf-section-subtitle" style={{ marginTop: '-32px' }}>
              [Segundo parágrafo curto: dado de impacto ou conquista relevante.]
            </p>
            <Link to="/sobre" className="wf-btn-secondary">Conheça a Trajetória</Link>
          </div>
          <div className="wf-card-image" style={{ height: '350px' }}>
            <span className="wf-annotation">FOTO — Fernando em ação</span>
          </div>
        </div>
      </section>

      {/* ============================================
          NÚMEROS / STATS — Autoridade em dados
          ============================================ */}
      <section className="wf-stats">
        <div>
          <p className="wf-stat-number">[+XXX]</p>
          <p className="wf-stat-label">Palestras Realizadas</p>
        </div>
        <div>
          <p className="wf-stat-number">[+XXX]</p>
          <p className="wf-stat-label">Profissionais Impactados</p>
        </div>
        <div>
          <p className="wf-stat-number">[+XX]</p>
          <p className="wf-stat-label">Empresas Atendidas</p>
        </div>
        <div>
          <p className="wf-stat-number">[X]</p>
          <p className="wf-stat-label">Livros Publicados</p>
        </div>
      </section>

      {/* ============================================
          PALESTRAS EM DESTAQUE — Cards com CTA
          Objetivo: Mostrar variedade e gerar interesse
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Palestras</p>
          <h2 className="wf-section-title">Transforme sua equipe com conteúdo que gera resultado</h2>
          <p className="wf-section-subtitle">
            [Texto curto: posicionamento das palestras como solução corporativa.]
          </p>
        </div>

        <div className="wf-grid-3">
          {/* Card Palestra 1 */}
          <div className="wf-card">
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">[Categoria]</span>
            <h3 className="wf-card-title">[Nome da Palestra 1]</h3>
            <p className="wf-card-text">
              [Descrição resumida em 2-3 linhas. Foco no benefício para a empresa.]
            </p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </div>

          {/* Card Palestra 2 */}
          <div className="wf-card">
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">[Categoria]</span>
            <h3 className="wf-card-title">[Nome da Palestra 2]</h3>
            <p className="wf-card-text">
              [Descrição resumida em 2-3 linhas. Foco no benefício para a empresa.]
            </p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </div>

          {/* Card Palestra 3 */}
          <div className="wf-card">
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">[Categoria]</span>
            <h3 className="wf-card-title">[Nome da Palestra 3]</h3>
            <p className="wf-card-text">
              [Descrição resumida em 2-3 linhas. Foco no benefício para a empresa.]
            </p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/palestras" className="wf-btn-primary">Ver Todas as Palestras</Link>
        </div>
      </section>

      {/* ============================================
          DEPOIMENTOS — Prova social
          ============================================ */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Depoimentos</p>
          <h2 className="wf-section-title">O que dizem sobre as palestras</h2>
          <p className="wf-section-subtitle">
            [Texto curto de introdução aos depoimentos.]
          </p>
        </div>

        <div className="wf-grid-3">
          {/* Depoimento 1 */}
          <div className="wf-testimonial">
            <p className="wf-testimonial-quote">
              [Depoimento resumido — máximo 3 linhas. Foco em resultado transformador.]
            </p>
            <div className="wf-testimonial-author">
              <div className="wf-testimonial-avatar">FOTO</div>
              <div>
                <p className="wf-testimonial-name">[Nome da Pessoa]</p>
                <p className="wf-testimonial-role">[Cargo — Empresa]</p>
              </div>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="wf-testimonial">
            <p className="wf-testimonial-quote">
              [Depoimento resumido — máximo 3 linhas. Foco em resultado transformador.]
            </p>
            <div className="wf-testimonial-author">
              <div className="wf-testimonial-avatar">FOTO</div>
              <div>
                <p className="wf-testimonial-name">[Nome da Pessoa]</p>
                <p className="wf-testimonial-role">[Cargo — Empresa]</p>
              </div>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="wf-testimonial">
            <p className="wf-testimonial-quote">
              [Depoimento resumido — máximo 3 linhas. Foco em resultado transformador.]
            </p>
            <div className="wf-testimonial-author">
              <div className="wf-testimonial-avatar">FOTO</div>
              <div>
                <p className="wf-testimonial-name">[Nome da Pessoa]</p>
                <p className="wf-testimonial-role">[Cargo — Empresa]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA FINAL — Conversão
          ============================================ */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">[Título CTA: Convite direto para ação]</h2>
        <p className="wf-cta-text">
          [Texto curto de reforço — 1-2 linhas conectando necessidade à solução.]
        </p>
        <Link to="/contato" className="wf-btn-primary">Solicitar Palestra Agora</Link>
      </section>
    </div>
  );
}
