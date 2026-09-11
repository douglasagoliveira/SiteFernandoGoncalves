import { Link } from 'react-router-dom';
import Breadcrumb from '../components/layout/Breadcrumb';
import { Button, Section, Container, SectionHeader, ImagePlaceholder, Card } from '../components/ui';
import { biography, timeline, professionalExperience, experienceQuote, differentials, knowledgeAreas, additionalSkills } from '../data/content';

export default function Sobre() {
  return (
    <div>
      <Breadcrumb currentPage="Sobre" />

      {/* PAGE HEADER */}
      <section className="wf-page-header">
        <p className="wf-section-label">Sobre</p>
        <h1 className="wf-page-header-title">{biography.headerTitle}</h1>
        <p className="wf-page-header-text">{biography.headerSubtitle}</p>
      </section>

      {/* BIOGRAFIA */}
      <Section>
        <div className="wf-grid-2" style={{ alignItems: 'start', gap: '64px' }}>
          <div>
            <ImagePlaceholder label="FOTO — Retrato profissional" height="450px" />
          </div>
          <div>
            <p className="wf-section-label">{biography.sectionLabel}</p>
            <h2 className="wf-section-title">{biography.sectionTitle}</h2>
            {biography.paragraphs.map((paragraph, index) => (
              <p key={index} className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section dark>
        <Container maxWidth="700px">
          <p className="wf-section-label">Trajetória</p>
          <h2 className="wf-section-title">De uma infância de dificuldades a uma carreira dedicada a pessoas</h2>
        </Container>

        <div className="wf-timeline" style={{ maxWidth: '700px' }}>
          {timeline.map((item, index) => (
            <div key={index} className="wf-timeline-item">
              <p className="wf-timeline-year">{item.year}</p>
              <h3 className="wf-timeline-title">{item.title}</h3>
              <p className="wf-timeline-text">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <Section>
        <Container centered>
          <p className="wf-section-label">Experiência</p>
          <h2 className="wf-section-title">Décadas de experiência falando com pessoas e equipes</h2>
          <p className="wf-section-subtitle">
            Ao longo de sua trajetória, Fernando Gonçalves acumulou experiência em diferentes ambientes e contextos.
          </p>
        </Container>

        <div className="wf-grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {professionalExperience.map((exp, index) => (
            <Card key={index}>
              <h3 className="wf-card-title">{exp.title}</h3>
              <p className="wf-card-text">{exp.description}</p>
            </Card>
          ))}
        </div>

        <div style={{ maxWidth: '700px', margin: '48px auto 0', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#555', lineHeight: '1.8' }}>
            {experienceQuote}
          </p>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section dark>
        <Container centered>
          <p className="wf-section-label">Diferenciais</p>
          <h2 className="wf-section-title">Por que contratar Fernando Gonçalves?</h2>
        </Container>

        <div className="wf-grid-3">
          {differentials.map((diff, index) => (
            <Card key={index} centered>
              <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>{diff.icon}</div>
              <h3 className="wf-card-title">{diff.title}</h3>
              <p className="wf-card-text">{diff.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CONHECIMENTOS */}
      <Section>
        <Container centered>
          <p className="wf-section-label">Conhecimentos</p>
          <h2 className="wf-section-title">Áreas de atuação e estudo</h2>
          <p className="wf-section-subtitle">
            Em constante busca por aprimoramento, Fernando possui conhecimento em áreas estratégicas do desenvolvimento humano e corporativo.
          </p>
        </Container>

        <div className="wf-grid-4">
          {knowledgeAreas.map((area, index) => (
            <Card key={index} centered>
              <h3 className="wf-card-title">{area}</h3>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>{additionalSkills}</p>
        </div>
      </Section>

      {/* CTA */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">Conheça as palestras de Fernando Gonçalves</h2>
        <p className="wf-cta-text">
          Uma apresentação que combina história + emoção + reflexão + interação + atitude.
        </p>
        <Link to="/palestras" className="wf-btn-primary">Ver Palestras</Link>
      </section>
    </div>
  );
}
