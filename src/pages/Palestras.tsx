import { Link } from 'react-router-dom';
import Breadcrumb from '../components/layout/Breadcrumb';
import { Button, Section, Container, ImagePlaceholder, Card } from '../components/ui';
import { palestrasMethod, detailedModules, interaction, audiences, formats, results, resultsQuote } from '../data/content';

export default function Palestras() {
  return (
    <div>
      <Breadcrumb currentPage="Palestras" />

      {/* PAGE HEADER */}
      <section className="wf-page-header">
        <p className="wf-section-label">Palestras</p>
        <h1 className="wf-page-header-title">{palestrasMethod.headerTitle}</h1>
        <p className="wf-page-header-text">{palestrasMethod.headerSubtitle}</p>
      </section>

      {/* MÉTODO */}
      <Section>
        <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <p className="wf-section-label">{palestrasMethod.sectionLabel}</p>
            <h2 className="wf-section-title">{palestrasMethod.sectionTitle}</h2>
            {palestrasMethod.paragraphs.map((paragraph, index) => (
              <p key={index} className="wf-section-subtitle" style={{ marginBottom: index === 0 ? '24px' : '0' }}>
                {paragraph}
              </p>
            ))}
          </div>
          <ImagePlaceholder label="FOTO — Fernando em palestra" height="350px" />
        </div>
      </Section>

      {/* MÓDULOS DETALHADOS */}
      <Section dark>
        <Container centered>
          <p className="wf-section-label">Estrutura</p>
          <h2 className="wf-section-title">Uma experiência dividida em três momentos</h2>
          <p className="wf-section-subtitle">
            As palestras podem ser adaptadas ao perfil, objetivo e disponibilidade de cada contratante.
          </p>
        </Container>

        {detailedModules.map((module, index) => (
          <div key={index} className="wf-palestra-item">
            <div className="wf-palestra-image"></div>
            <div>
              <span className="wf-palestra-tag">{module.tag}</span>
              <h3 className="wf-palestra-title">{module.title}</h3>
              <p className="wf-palestra-desc">{module.description}</p>
              {'topics' in module && module.topics && (
                <ul className="wf-palestra-topics">
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              )}
              {'conclusion' in module && module.conclusion && (
                <p className="wf-palestra-desc" style={{ marginTop: '16px' }}>
                  {module.conclusion}
                </p>
              )}
            </div>
          </div>
        ))}
      </Section>

      {/* INTERAÇÃO */}
      <Section>
        <Container centered>
          <p className="wf-section-label">{interaction.label}</p>
          <h2 className="wf-section-title">{interaction.title}</h2>
          {interaction.paragraphs.map((paragraph, index) => (
            <p key={index} className="wf-section-subtitle">{paragraph}</p>
          ))}
        </Container>

        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#555', lineHeight: '1.8' }}>
            {interaction.quote}
          </p>
        </div>
      </Section>

      {/* SIMPLEX */}
      <Section dark>
        <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <ImagePlaceholder label="LOGO / IMAGEM SIMPLEX" height="350px" />
          <div>
            <p className="wf-section-label">Metodologia</p>
            <h2 className="wf-section-title">SIMPLEX — Sistema Motivacional para Performances de Excelência</h2>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              Uma palestra não precisa ser igual para todas as empresas. O Simplex é uma metodologia desenvolvida para estruturar a experiência motivacional de acordo com as características e necessidades de cada contratante.
            </p>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              O projeto considera aspectos como: perfil da organização, perfil da equipe, objetivos da contratação, características do público, tempo disponível, conteúdos prioritários, formato da apresentação, estratégias de interação, dinâmicas e necessidades identificadas durante o processo.
            </p>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              A partir dessas informações, é estruturado um programa personalizado. Após a realização do trabalho, podem ser elaborados relatórios relacionados à participação, interação e aceitação da equipe, permitindo que a empresa avalie possíveis ações para fortalecer os resultados obtidos.
            </p>
            <p className="wf-section-subtitle">
              <strong>Simplex: motivação com planejamento, propósito e acompanhamento.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* PÚBLICO */}
      <Section>
        <Container centered>
          <p className="wf-section-label">Público</p>
          <h2 className="wf-section-title">Diferentes públicos. Uma mesma proposta: despertar pessoas.</h2>
        </Container>

        <div className="wf-grid-3">
          {audiences.map((audience, index) => (
            <Card key={index}>
              <h3 className="wf-card-title">{audience.title}</h3>
              <p className="wf-card-text">{audience.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FORMATOS */}
      <Section dark>
        <Container centered>
          <p className="wf-section-label">Formatos</p>
          <h2 className="wf-section-title">Uma palestra adequada à sua realidade</h2>
          <p className="wf-section-subtitle">
            Cada contratação pode ser estruturada de acordo com o perfil e a disponibilidade do contratante.
          </p>
        </Container>

        <div className="wf-grid-3">
          {formats.map((format, index) => (
            <Card key={index}>
              <div className="wf-card-icon">⏱</div>
              <h3 className="wf-card-title">{format.title}</h3>
              <p className="wf-card-text">{format.description}</p>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Os formatos podem ser personalizados conforme os objetivos e necessidades do contratante.
          </p>
        </div>
      </Section>

      {/* RESULTADOS */}
      <Section>
        <Container centered>
          <p className="wf-section-label">Resultados</p>
          <h2 className="wf-section-title">O que uma experiência motivacional pode despertar?</h2>
          <p className="wf-section-subtitle">
            O objetivo das palestras é estimular mudanças que possam refletir tanto no comportamento individual quanto na convivência coletiva.
          </p>
        </Container>

        <div className="wf-grid-3">
          {results.map((result, index) => (
            <Card key={index} centered>
              <h3 className="wf-card-title">{result.title}</h3>
              <p className="wf-card-text">{result.description}</p>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '48px auto 0' }}>
          <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#555', lineHeight: '1.8' }}>
            {resultsQuote}
          </p>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">Convide Fernando para seu evento</h2>
        <p className="wf-cta-text">
          Uma apresentação que combina: História + emoção + reflexão + interação + atitude. Ideal para eventos que desejam oferecer ao público uma experiência humana, envolvente e inspiradora.
        </p>
        <Link to="/contato" className="wf-btn-primary">Solicitar Proposta</Link>
      </section>
    </div>
  );
}
