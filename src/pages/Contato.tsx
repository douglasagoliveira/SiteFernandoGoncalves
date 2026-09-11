import Breadcrumb from '../components/layout/Breadcrumb';
import { Button, Section } from '../components/ui';
import { contactInfo, socialLinks, contactForm, contactCta, faqItems } from '../data/content';

export default function Contato() {
  return (
    <div>
      <Breadcrumb currentPage="Contato" />

      {/* PAGE HEADER */}
      <section className="wf-page-header">
        <p className="wf-section-label">Contato</p>
        <h1 className="wf-page-header-title">Sua equipe precisa de motivação? Vamos conversar.</h1>
        <p className="wf-page-header-text">
          Se sua empresa, instituição ou organização deseja proporcionar uma experiência motivacional capaz de estimular reflexão, participação e mudança de atitude, entre em contato. Fernando Gonçalves está disponível para palestras, treinamentos, eventos e projetos motivacionais personalizados.
        </p>
      </section>

      {/* FORMULÁRIO + INFO */}
      <Section>
        <div className="wf-contact-layout">
          {/* COLUNA ESQUERDA — Formulário */}
          <div>
            <p className="wf-section-label">{contactForm.sectionLabel}</p>
            <h2 className="wf-section-title" style={{ fontSize: '28px' }}>{contactForm.title}</h2>
            <p className="wf-section-subtitle" style={{ marginBottom: '32px' }}>
              {contactForm.subtitle}
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
                  {contactForm.submitButton}
                </button>
              </div>
            </form>
          </div>

          {/* COLUNA DIREITA — Informações */}
          <div>
            <p className="wf-section-label">Informações</p>
            <h2 className="wf-section-title" style={{ fontSize: '28px' }}>Fale diretamente</h2>

            <div style={{ marginTop: '32px' }}>
              {contactInfo.map((info, index) => (
                <div key={index} className="wf-contact-info-item">
                  <div className="wf-contact-icon">{info.icon}</div>
                  <div>
                    <p className="wf-contact-info-label">{info.label}</p>
                    <p className="wf-contact-info-value">{info.value}</p>
                    {info.details && info.details.map((detail, i) => (
                      <p key={i} style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Redes Sociais */}
              <div className="wf-contact-info-item">
                <div className="wf-contact-icon">SOC</div>
                <div>
                  <p className="wf-contact-info-label">Redes Sociais</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                    {socialLinks.map((link, index) => (
                      <div key={index} style={{ fontSize: '13px', color: '#555' }}>
                        {link.platform}: {link.handle}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="wf-divider" style={{ margin: '40px 0' }}></div>

            {/* FAQ */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '20px' }}>
                Perguntas Frequentes
              </h3>

              {faqItems.slice(0, 4).map((item, index) => (
                <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #e0e0e0', paddingBottom: '16px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>
                    {item.question}
                  </p>
                  <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">{contactCta.title}</h2>
        <p className="wf-cta-text">{contactCta.description}</p>
        <Button 
          href={contactCta.whatsappUrl} 
          variant="primary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {contactCta.buttonText}
        </Button>
      </section>
    </div>
  );
}
