export default function Contato() {
  return (
    <div>
      {/* BREADCRUMB */}
      <div className="wf-breadcrumb">
        <a href="#/">Início</a>
        <span>/</span>
        Contato
      </div>

      {/* PAGE HEADER */}
      <section className="wf-page-header">
        <p className="wf-section-label">Contato</p>
        <h1 className="wf-page-header-title">Sua equipe precisa de motivação? Vamos conversar.</h1>
        <p className="wf-page-header-text">
          Se sua empresa, instituição ou organização deseja proporcionar uma experiência motivacional capaz de estimular reflexão, participação e mudança de atitude, entre em contato. Fernando Gonçalves está disponível para palestras, treinamentos, eventos e projetos motivacionais personalizados.
        </p>
      </section>

      {/* ============================================
          FORMULÁRIO + INFO DE CONTATO
          ============================================ */}
      <section className="wf-section">
        <div className="wf-contact-layout">
          {/* COLUNA ESQUERDA — Formulário */}
          <div>
            <p className="wf-section-label">Solicite uma Proposta</p>
            <h2 className="wf-section-title" style={{ fontSize: '28px' }}>Preencha os dados abaixo</h2>
            <p className="wf-section-subtitle" style={{ marginBottom: '32px' }}>
              Informe os dados do evento e nossa equipe entrará em contato para apresentar a melhor proposta.
            </p>

            <form className="wf-form">
              <div className="wf-form-group">
                <label className="wf-form-label">Nome *</label>
                <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                  [Seu nome completo]
                </div>
              </div>

              <div className="wf-form-row">
                <div className="wf-form-group">
                  <label className="wf-form-label">Empresa / Instituição *</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Nome da empresa]
                  </div>
                </div>
                <div className="wf-form-group">
                  <label className="wf-form-label">Cidade *</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Cidade / Estado]
                  </div>
                </div>
              </div>

              <div className="wf-form-row">
                <div className="wf-form-group">
                  <label className="wf-form-label">E-mail *</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [seu@email.com]
                  </div>
                </div>
                <div className="wf-form-group">
                  <label className="wf-form-label">Telefone / WhatsApp *</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [(00) 00000-0000]
                  </div>
                </div>
              </div>

              <div className="wf-form-row">
                <div className="wf-form-group">
                  <label className="wf-form-label">Número Estimado de Participantes</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Quantidade]
                  </div>
                </div>
                <div className="wf-form-group">
                  <label className="wf-form-label">Tipo de Evento</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Palestra / Treinamento / Congresso / Convenção / Outro ▼]
                  </div>
                </div>
              </div>

              <div className="wf-form-row">
                <div className="wf-form-group">
                  <label className="wf-form-label">Data Desejada</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [DD/MM/AAAA]
                  </div>
                </div>
                <div className="wf-form-group">
                  <label className="wf-form-label">Tempo Disponível</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [2h / 3-4h / Até 6h ▼]
                  </div>
                </div>
              </div>

              <div className="wf-form-group">
                <label className="wf-form-label">Objetivo da Palestra</label>
                <div className="wf-form-textarea" style={{ color: '#bbbbbb' }}>
                  [Descreva o objetivo da contratação, perfil do público, expectativas...]
                </div>
              </div>

              <div style={{ marginTop: '32px' }}>
                <button type="button" className="wf-btn-primary">
                  Solicitar Proposta
                </button>
              </div>
            </form>
          </div>

          {/* COLUNA DIREITA — Informações de Contato */}
          <div>
            <p className="wf-section-label">Informações</p>
            <h2 className="wf-section-title" style={{ fontSize: '28px' }}>Fale diretamente</h2>

            <div style={{ marginTop: '32px' }}>
              {/* WhatsApp */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">📱</div>
                <div>
                  <p className="wf-contact-info-label">WhatsApp</p>
                  <p className="wf-contact-info-value">(31) 99847-5453</p>
                </div>
              </div>

              {/* Email */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">@</div>
                <div>
                  <p className="wf-contact-info-label">E-mail</p>
                  <p className="wf-contact-info-value">contato@fernandosimplex.com.br</p>
                </div>
              </div>

              {/* Localização */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">LOC</div>
                <div>
                  <p className="wf-contact-info-label">Localização</p>
                  <p className="wf-contact-info-value">Belo Horizonte, MG — Brasil</p>
                  <p style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>
                    Atendemos eventos em todo o Brasil.
                  </p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">SOC</div>
                <div>
                  <p className="wf-contact-info-label">Redes Sociais</p>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>Instagram: @fernandosimplex</div>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>Facebook: Fernando Simplex</div>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>TikTok: @fernandosimplex</div>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>YouTube: @FernandoSimplexCanal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="wf-divider" style={{ margin: '40px 0' }}></div>

            {/* FAQ Rápido */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '20px' }}>
                Perguntas Frequentes
              </h3>

              <div style={{ marginBottom: '20px', borderBottom: '1px solid #e0e0e0', paddingBottom: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                  Qual o formato ideal para minha empresa?
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
                  Os formatos podem ser personalizados conforme os objetivos e necessidades do contratante: Palestra Essencial (a partir de 2h), Palestra Ampliada (3 a 4h) ou Experiência Completa (até 6h).
                </p>
              </div>

              <div style={{ marginBottom: '20px', borderBottom: '1px solid #e0e0e0', paddingBottom: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                  É possível personalizar o conteúdo?
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
                  Sim. Através da metodologia SIMPLEX, o conteúdo é estruturado de acordo com o perfil da organização, perfil da equipe, objetivos da contratação e conteúdos prioritários.
                </p>
              </div>

              <div style={{ marginBottom: '20px', borderBottom: '1px solid #e0e0e0', paddingBottom: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                  Para quais tipos de empresa as palestras são indicadas?
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
                  Indústria, comércio, serviços, equipes de vendas, terceiro setor, instituições religiosas, eventos corporativos, congressos e convenções.
                </p>
              </div>

              <div style={{ paddingBottom: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                  Qual o diferencial das palestras?
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
              A principal ferramenta é a própria experiência de vida do palestrante, com mais de 30 anos de atuação. A abordagem parte da identificação, gera reflexão e estimula atitudes concretas de mudança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA FINAL
          ============================================ */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">Pronto para transformar sua equipe?</h2>
        <p className="wf-cta-text">
          Uma apresentação que combina: História + emoção + reflexão + interação + atitude.
        </p>
        <a href="https://wa.me/5531998475453" className="wf-btn-primary" target="_blank" rel="noopener noreferrer">
          Falar pelo WhatsApp
        </a>
      </section>
    </div>
  );
}
