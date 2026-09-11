export default function Contato() {
  return (
    <div>
      {/* ============================================
          BREADCRUMB
          ============================================ */}
      <div className="wf-breadcrumb">
        <a href="#/">Início</a>
        <span>/</span>
        Contato
      </div>

      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="wf-page-header">
        <p className="wf-section-label">Contato</p>
        <h1 className="wf-page-header-title">[Título: Solicite uma palestra para sua empresa]</h1>
        <p className="wf-page-header-text">
          [Subtítulo: Texto curto e direto. Ex: "Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas para entender sua necessidade e apresentar a melhor proposta."]
        </p>
      </section>

      {/* ============================================
          FORMULÁRIO + INFO DE CONTATO
          ============================================ */}
      <section className="wf-section">
        <div className="wf-contact-layout">
          {/* COLUNA ESQUERDA — Formulário */}
          <div>
            <p className="wf-section-label">Formulário</p>
            <h2 className="wf-section-title" style={{ fontSize: '28px' }}>Envie sua solicitação</h2>
            <p className="wf-section-subtitle" style={{ marginBottom: '32px' }}>
              [Texto curto: orientação para preenchimento. Ex: "Quanto mais detalhes, melhor podemos personalizar a proposta."]
            </p>

            <form className="wf-form">
              <div className="wf-form-row">
                <div className="wf-form-group">
                  <label className="wf-form-label">Nome Completo *</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Seu nome]
                  </div>
                </div>
                <div className="wf-form-group">
                  <label className="wf-form-label">E-mail Corporativo *</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [seu@email.com]
                  </div>
                </div>
              </div>

              <div className="wf-form-row">
                <div className="wf-form-group">
                  <label className="wf-form-label">Telefone / WhatsApp *</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [(00) 00000-0000]
                  </div>
                </div>
                <div className="wf-form-group">
                  <label className="wf-form-label">Empresa *</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Nome da empresa]
                  </div>
                </div>
              </div>

              <div className="wf-form-row">
                <div className="wf-form-group">
                  <label className="wf-form-label">Cargo</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Seu cargo]
                  </div>
                </div>
                <div className="wf-form-group">
                  <label className="wf-form-label">Segmento da Empresa</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Selecionar segmento ▼]
                  </div>
                </div>
              </div>

              <div className="wf-form-group">
                <label className="wf-form-label">Tipo de Evento Desejado *</label>
                <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                  [Selecionar: Palestra / Workshop / Consultoria / Outro ▼]
                </div>
              </div>

              <div className="wf-form-group">
                <label className="wf-form-label">Tema de Interesse</label>
                <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                  [Selecionar tema de palestra ▼]
                </div>
              </div>

              <div className="wf-form-row">
                <div className="wf-form-group">
                  <label className="wf-form-label">Data Prevista</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [DD/MM/AAAA]
                  </div>
                </div>
                <div className="wf-form-group">
                  <label className="wf-form-label">Número Estimado de Participantes</label>
                  <div className="wf-form-input" style={{ color: '#bbbbbb' }}>
                    [Quantidade]
                  </div>
                </div>
              </div>

              <div className="wf-form-group">
                <label className="wf-form-label">Mensagem / Detalhes do Evento</label>
                <div className="wf-form-textarea" style={{ color: '#bbbbbb' }}>
                  [Conte mais sobre seu evento, objetivos, expectativas...]
                </div>
              </div>

              <div style={{ marginTop: '32px' }}>
                <button type="button" className="wf-btn-primary">
                  Enviar Solicitação
                </button>
              </div>

              <p style={{ fontSize: '12px', color: '#999999', marginTop: '16px' }}>
                [Texto: Política de privacidade — seus dados estão seguros e não serão compartilhados.]
              </p>
            </form>
          </div>

          {/* COLUNA DIREITA — Informações de Contato */}
          <div>
            <p className="wf-section-label">Informações</p>
            <h2 className="wf-section-title" style={{ fontSize: '28px' }}>Outras formas de contato</h2>

            <div style={{ marginTop: '32px' }}>
              {/* Email */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">@</div>
                <div>
                  <p className="wf-contact-info-label">E-mail</p>
                  <p className="wf-contact-info-value">[contato@fernandogoncalves.com.br]</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">TEL</div>
                <div>
                  <p className="wf-contact-info-label">Telefone / WhatsApp</p>
                  <p className="wf-contact-info-value">[(00) 00000-0000]</p>
                </div>
              </div>

              {/* Localização */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">LOC</div>
                <div>
                  <p className="wf-contact-info-label">Localização</p>
                  <p className="wf-contact-info-value">[Cidade, Estado — Brasil]</p>
                  <p style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>
                    [Texto: Atendemos eventos em todo o Brasil e no exterior.]
                  </p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">SOC</div>
                <div>
                  <p className="wf-contact-info-label">Redes Sociais</p>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                    <div className="wf-footer-social-item">IG</div>
                    <div className="wf-footer-social-item">YT</div>
                    <div className="wf-footer-social-item">IN</div>
                    <div className="wf-footer-social-item">FB</div>
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
                  [Pergunta 1: ex. "Qual o investimento para uma palestra?"]
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
                  [Resposta resumida: 2-3 linhas.]
                </p>
              </div>

              <div style={{ marginBottom: '20px', borderBottom: '1px solid #e0e0e0', paddingBottom: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                  [Pergunta 2: ex. "Atende em qual formato?"]
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
                  [Resposta resumida: 2-3 linhas.]
                </p>
              </div>

              <div style={{ marginBottom: '20px', borderBottom: '1px solid #e0e0e0', paddingBottom: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                  [Pergunta 3: ex. "É possível personalizar o conteúdo?"]
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
                  [Resposta resumida: 2-3 linhas.]
                </p>
              </div>

              <div style={{ paddingBottom: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                  [Pergunta 4: ex. "Qual o prazo de retorno?"]
                </p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
                  [Resposta resumida: 2-3 linhas.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          MAPA (placeholder)
          ============================================ */}
      <section style={{ padding: '0' }}>
        <div style={{
          width: '100%',
          height: '300px',
          border: '2px dashed #cccccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5'
        }}>
          <span style={{ fontSize: '12px', color: '#bbbbbb', textTransform: 'uppercase', letterSpacing: '1px' }}>
            [MAPA — Google Maps Embed ou imagem da localização]
          </span>
        </div>
      </section>
    </div>
  );
}
