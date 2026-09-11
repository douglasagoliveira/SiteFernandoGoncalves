export default function Sobre() {
  return (
    <div>
      {/* ============================================
          BREADCRUMB
          ============================================ */}
      <div className="wf-breadcrumb">
        <a href="#/">Início</a>
        <span>/</span>
        Sobre
      </div>

      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="wf-page-header">
        <p className="wf-section-label">Sobre</p>
        <h1 className="wf-page-header-title">[Título: Quem é Fernando Gonçalves]</h1>
        <p className="wf-page-header-text">
          [Subtítulo: Uma frase que resume a essência — ex: "Palestrante, escritor e transformador de equipes que já impactou mais de X mil profissionais pelo Brasil."]
        </p>
      </section>

      {/* ============================================
          BIOGRAFIA PRINCIPAL — Foto + Texto
          Objetivo: Construir autoridade e conexão
          ============================================ */}
      <section className="wf-section">
        <div className="wf-grid-2" style={{ alignItems: 'start', gap: '64px' }}>
          <div>
            <div className="wf-card-image" style={{ height: '450px' }}>
              <span className="wf-annotation">FOTO — Retrato profissional</span>
            </div>
          </div>
          <div>
            <p className="wf-section-label">[Label: Minha História]</p>
            <h2 className="wf-section-title">[Título: Frase de impacto sobre a origem]</h2>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              [Parágrafo 1: Origem — de onde veio, contexto de vida. Máximo 4 linhas. Foco em elementos que conectam com o público corporativo.]
            </p>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              [Parágrafo 2: O momento de virada — quando decidiu dedicar-se a palestras e desenvolvimento humano. Máximo 4 linhas.]
            </p>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              [Parágrafo 3: O que entrega hoje — metodologia, abordagem, diferencial. Máximo 4 linhas.]
            </p>
            <p className="wf-section-subtitle">
              [Parágrafo 4: Fechamento — frase de propósito/missão. 1-2 linhas.]
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          DIFERENCIAIS — Por que contratar
          Objetivo: Argumentos de venda
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Diferenciais</p>
          <h2 className="wf-section-title">Por que empresas escolhem Fernando Gonçalves</h2>
          <p className="wf-section-subtitle">
            [Texto curto: posicionamento de valor para o decisor corporativo.]
          </p>
        </div>

        <div className="wf-grid-4">
          {/* Diferencial 1 */}
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>
              ÍCONE
            </div>
            <h3 className="wf-card-title">[Diferencial 1]</h3>
            <p className="wf-card-text">
              [Texto curto: 2-3 linhas explicando o diferencial.]
            </p>
          </div>

          {/* Diferencial 2 */}
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>
              ÍCONE
            </div>
            <h3 className="wf-card-title">[Diferencial 2]</h3>
            <p className="wf-card-text">
              [Texto curto: 2-3 linhas explicando o diferencial.]
            </p>
          </div>

          {/* Diferencial 3 */}
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>
              ÍCONE
            </div>
            <h3 className="wf-card-title">[Diferencial 3]</h3>
            <p className="wf-card-text">
              [Texto curto: 2-3 linhas explicando o diferencial.]
            </p>
          </div>

          {/* Diferencial 4 */}
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>
              ÍCONE
            </div>
            <h3 className="wf-card-title">[Diferencial 4]</h3>
            <p className="wf-card-text">
              [Texto curto: 2-3 linhas explicando o diferencial.]
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          TIMELINE — Trajetória profissional
          Objetivo: Mostrar evolução e credibilidade
          ============================================ */}
      <section className="wf-section">
        <div style={{ maxWidth: '700px' }}>
          <p className="wf-section-label">Trajetória</p>
          <h2 className="wf-section-title">Uma jornada de transformação</h2>
          <p className="wf-section-subtitle">
            [Texto curto: introdução à timeline.]
          </p>
        </div>

        <div className="wf-timeline" style={{ maxWidth: '700px' }}>
          {/* Timeline Item 1 */}
          <div className="wf-timeline-item">
            <p className="wf-timeline-year">[Período/Ano]</p>
            <h3 className="wf-timeline-title">[Marco da trajetória]</h3>
            <p className="wf-timeline-text">
              [Texto resumido: 2-3 linhas sobre o marco. Foco em resultado ou aprendizado.]
            </p>
          </div>

          {/* Timeline Item 2 */}
          <div className="wf-timeline-item">
            <p className="wf-timeline-year">[Período/Ano]</p>
            <h3 className="wf-timeline-title">[Marco da trajetória]</h3>
            <p className="wf-timeline-text">
              [Texto resumido: 2-3 linhas sobre o marco.]
            </p>
          </div>

          {/* Timeline Item 3 */}
          <div className="wf-timeline-item">
            <p className="wf-timeline-year">[Período/Ano]</p>
            <h3 className="wf-timeline-title">[Marco da trajetória]</h3>
            <p className="wf-timeline-text">
              [Texto resumido: 2-3 linhas sobre o marco.]
            </p>
          </div>

          {/* Timeline Item 4 */}
          <div className="wf-timeline-item">
            <p className="wf-timeline-year">[Período/Ano]</p>
            <h3 className="wf-timeline-title">[Marco da trajetória]</h3>
            <p className="wf-timeline-text">
              [Texto resumido: 2-3 linhas sobre o marco.]
            </p>
          </div>

          {/* Timeline Item 5 */}
          <div className="wf-timeline-item">
            <p className="wf-timeline-year">[Período/Ano]</p>
            <h3 className="wf-timeline-title">[Marco da trajetória]</h3>
            <p className="wf-timeline-text">
              [Texto resumido: 2-3 linhas sobre o marco.]
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CONQUISTAS / CREDENCIAIS
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Credenciais</p>
          <h2 className="wf-section-title">Reconhecimento e conquistas</h2>
        </div>

        <div className="wf-grid-3">
          {/* Conquista 1 */}
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-image" style={{ height: '120px' }}></div>
            <h3 className="wf-card-title">[Título da Conquista]</h3>
            <p className="wf-card-text">[Descrição breve: 1-2 linhas.]</p>
          </div>

          {/* Conquista 2 */}
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-image" style={{ height: '120px' }}></div>
            <h3 className="wf-card-title">[Título da Conquista]</h3>
            <p className="wf-card-text">[Descrição breve: 1-2 linhas.]</p>
          </div>

          {/* Conquista 3 */}
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-image" style={{ height: '120px' }}></div>
            <h3 className="wf-card-title">[Título da Conquista]</h3>
            <p className="wf-card-text">[Descrição breve: 1-2 linhas.]</p>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA — Direcionar para contato
          ============================================ */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">[Título CTA: Convite para contratar uma palestra]</h2>
        <p className="wf-cta-text">
          [Texto curto: reforço de valor + urgência.]
        </p>
        <a href="#/contato" className="wf-btn-primary">Fale Conosco</a>
      </section>
    </div>
  );
}
