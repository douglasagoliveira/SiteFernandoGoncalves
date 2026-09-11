import { Link } from 'react-router-dom';
import { Button, Card, Section, Container, SectionHeader, ImagePlaceholder } from '../ui';
import type { Stat, PainPoint, Module, Step, Benefit, Format, Testimonial, Book, FAQItem } from '../../types';

// ============================================
// HERO SECTION
// ============================================
interface HeroProps {
  tagline: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  microcopy: string;
}

export function HeroSection({ tagline, title, subtitle, primaryCta, secondaryCta, microcopy }: HeroProps) {
  return (
    <section className="wf-hero">
      <div className="wf-hero-content">
        <p className="wf-tagline">{tagline}</p>
        <h1 className="wf-hero-title">{title}</h1>
        <p className="wf-hero-subtitle">{subtitle}</p>
        <div className="wf-hero-buttons">
          <Button to="/contato" variant="primary">{primaryCta}</Button>
          <Button to="/palestras" variant="secondary">{secondaryCta}</Button>
        </div>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>{microcopy}</p>
      </div>
      <div className="wf-hero-image">
        <span className="wf-hero-image-label">FOTO HERO — Fernando Gonçalves</span>
      </div>
    </section>
  );
}

// ============================================
// STATS SECTION
// ============================================
interface StatsSectionProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="wf-stats">
      {stats.map((stat, index) => (
        <div key={index}>
          <p className="wf-stat-number">{stat.number}</p>
          <p className="wf-stat-label">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

// ============================================
// PAIN POINTS SECTION
// ============================================
interface PainPointsSectionProps {
  label: string;
  title: string;
  intro: string;
  points: string[];
  bridge: string;
}

export function PainPointsSection({ label, title, intro, points, bridge }: PainPointsSectionProps) {
  return (
    <Section>
      <Container maxWidth="800px" centered>
        <p className="wf-section-label">{label}</p>
        <h2 className="wf-section-title">{title}</h2>
        <p className="wf-section-subtitle" style={{ marginBottom: '32px' }}>{intro}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '40px' }}>
          {points.map((point, index) => (
            <div key={index} style={{ padding: '20px', borderLeft: '3px solid #333', backgroundColor: '#f9f9f9' }}>
              <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7' }}>{point}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.8', fontStyle: 'italic', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          {bridge}
        </p>
      </Container>
    </Section>
  );
}

// ============================================
// ABOUT SUMMARY SECTION
// ============================================
interface AboutSummarySectionProps {
  label: string;
  title: string;
  paragraphs: string[];
  cta: string;
}

export function AboutSummarySection({ label, title, paragraphs, cta }: AboutSummarySectionProps) {
  return (
    <Section dark>
      <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
        <div>
          <p className="wf-section-label">{label}</p>
          <h2 className="wf-section-title">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="wf-section-subtitle" style={{ marginTop: index > 0 ? '-32px' : '0' }}>
              {paragraph}
            </p>
          ))}
          <Button to="/sobre" variant="secondary">{cta}</Button>
        </div>
        <ImagePlaceholder label="FOTO — Fernando em ação" height="350px" />
      </div>
    </Section>
  );
}

// ============================================
// METHOD SECTION
// ============================================
interface MethodSectionProps {
  label: string;
  title: string;
  paragraphs: string[];
  cta: string;
}

export function MethodSection({ label, title, paragraphs, cta }: MethodSectionProps) {
  return (
    <Section>
      <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
        <ImagePlaceholder label="LOGO / IMAGEM SIMPLEX" height="350px" />
        <div>
          <p className="wf-section-label">{label}</p>
          <h2 className="wf-section-title">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="wf-section-subtitle" style={{ marginBottom: index === 0 ? '24px' : '0' }}>
              {paragraph}
            </p>
          ))}
          <Button to="/palestras" variant="secondary">{cta}</Button>
        </div>
      </div>
    </Section>
  );
}

// ============================================
// MODULES SECTION
// ============================================
interface ModulesSectionProps {
  modules: Module[];
  label?: string;
  title?: string;
  subtitle?: string;
}

export function ModulesSection({ modules, label, title, subtitle }: ModulesSectionProps) {
  return (
    <Section dark>
      <Container centered>
        {label && <p className="wf-section-label">{label}</p>}
        {title && <h2 className="wf-section-title">{title}</h2>}
        {subtitle && <p className="wf-section-subtitle">{subtitle}</p>}
      </Container>

      <div className="wf-grid-3">
        {modules.map((module, index) => (
          <Card key={index}>
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">{module.tag}</span>
            <h3 className="wf-card-title">{module.title}</h3>
            <p className="wf-card-text">{module.description}</p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </Card>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Button to="/palestras" variant="primary">Ver Detalhes das Palestras</Button>
      </div>
    </Section>
  );
}

// ============================================
// STEPS SECTION
// ============================================
interface StepsSectionProps {
  steps: Step[];
  label?: string;
  title?: string;
  subtitle?: string;
  microcopy?: string;
}

export function StepsSection({ steps, label, title, subtitle, microcopy }: StepsSectionProps) {
  return (
    <Section>
      <Container centered>
        {label && <p className="wf-section-label">{label}</p>}
        {title && <h2 className="wf-section-title">{title}</h2>}
        {subtitle && <p className="wf-section-subtitle">{subtitle}</p>}
      </Container>

      <div className="wf-grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {steps.map((step) => (
          <div key={step.number} style={{ textAlign: 'center', padding: '32px 20px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '2px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '24px',
              fontWeight: 700,
              color: '#333'
            }}>
              {step.number}
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>
              {step.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {microcopy && (
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '13px', color: '#888' }}>{microcopy}</p>
        </div>
      )}
    </Section>
  );
}

// ============================================
// BENEFITS SECTION
// ============================================
interface BenefitsSectionProps {
  benefits: Benefit[];
  label?: string;
  title?: string;
  subtitle?: string;
  quote?: string;
}

export function BenefitsSection({ benefits, label, title, subtitle, quote }: BenefitsSectionProps) {
  return (
    <Section dark>
      <Container centered>
        {label && <p className="wf-section-label">{label}</p>}
        {title && <h2 className="wf-section-title">{title}</h2>}
        {subtitle && <p className="wf-section-subtitle">{subtitle}</p>}
      </Container>

      <div className="wf-grid-4">
        {benefits.map((benefit, index) => (
          <Card key={index} centered>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>{benefit.icon}</div>
            <h3 className="wf-card-title">{benefit.title}</h3>
            <p className="wf-card-text">{benefit.description}</p>
          </Card>
        ))}
      </div>

      {quote && (
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>{quote}</p>
        </div>
      )}
    </Section>
  );
}

// ============================================
// FORMATS SECTION
// ============================================
interface FormatsSectionProps {
  formats: Format[];
  label?: string;
  title?: string;
  subtitle?: string;
}

export function FormatsSection({ formats, label, title, subtitle }: FormatsSectionProps) {
  return (
    <Section>
      <Container centered>
        {label && <p className="wf-section-label">{label}</p>}
        {title && <h2 className="wf-section-title">{title}</h2>}
        {subtitle && <p className="wf-section-subtitle">{subtitle}</p>}
      </Container>

      <div className="wf-grid-3">
        {formats.map((format, index) => (
          <div key={index} className="wf-card" style={{ border: '2px solid #333', position: 'relative' }}>
            {format.popular && (
              <span style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#333',
                color: '#fff',
                padding: '4px 16px',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Mais Popular
              </span>
            )}
            <div className="wf-card-icon">⏱</div>
            <h3 className="wf-card-title">{format.title}</h3>
            <p style={{ fontSize: '24px', fontWeight: 700, color: '#333', marginBottom: '12px' }}>
              {format.duration}
            </p>
            <p className="wf-card-text">{format.description}</p>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '16px', borderTop: '1px solid #eee', paddingTop: '12px' }}>
              {format.ideal}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
          Todos os formatos podem ser personalizados conforme os objetivos e necessidades do contratante.
        </p>
        <Button to="/contato" variant="primary">Solicitar Proposta Personalizada</Button>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '12px' }}>
          Proposta em até 24h · Sem compromisso
        </p>
      </div>
    </Section>
  );
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  label?: string;
  title?: string;
  subtitle?: string;
  note?: string;
}

export function TestimonialsSection({ testimonials, label, title, subtitle, note }: TestimonialsSectionProps) {
  return (
    <Section dark>
      <Container centered>
        {label && <p className="wf-section-label">{label}</p>}
        {title && <h2 className="wf-section-title">{title}</h2>}
        {subtitle && <p className="wf-section-subtitle">{subtitle}</p>}
      </Container>

      <div className="wf-grid-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="wf-testimonial">
            <p className="wf-testimonial-quote">{testimonial.quote}</p>
            <div className="wf-testimonial-author">
              <div className="wf-testimonial-avatar">FOTO</div>
              <div>
                <p className="wf-testimonial-name">{testimonial.name}</p>
                <p className="wf-testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {note && (
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '24px' }}>
          {note}
        </p>
      )}
    </Section>
  );
}

// ============================================
// BOOKS SECTION
// ============================================
interface BooksSectionProps {
  books: Book[];
  label?: string;
  title?: string;
  subtitle?: string;
}

export function BooksSection({ books, label, title, subtitle }: BooksSectionProps) {
  return (
    <Section>
      <Container centered>
        {label && <p className="wf-section-label">{label}</p>}
        {title && <h2 className="wf-section-title">{title}</h2>}
        {subtitle && <p className="wf-section-subtitle">{subtitle}</p>}
      </Container>

      <div className="wf-grid-3">
        {books.map((book, index) => (
          <Card key={index} centered>
            <ImagePlaceholder height="250px" />
            <h3 className="wf-card-title">{book.title}</h3>
            <p className="wf-card-text">{book.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ============================================
// FAQ SECTION
// ============================================
interface FAQSectionProps {
  items: FAQItem[];
  label?: string;
  title?: string;
}

export function FAQSection({ items, label, title }: FAQSectionProps) {
  return (
    <Section dark>
      <Container maxWidth="800px">
        <Container centered>
          {label && <p className="wf-section-label">{label}</p>}
          {title && <h2 className="wf-section-title">{title}</h2>}
        </Container>

        <div style={{ marginTop: '40px' }}>
          {items.map((item, index) => (
            <div key={index} style={{ marginBottom: '24px', padding: '24px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
                {item.question}
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ============================================
// URGENCY SECTION
// ============================================
interface UrgencySectionProps {
  title: string;
  description: string;
  boxTitle: string;
  boxSubtitle: string;
  costOfInaction: string;
}

export function UrgencySection({ title, description, boxTitle, boxSubtitle, costOfInaction }: UrgencySectionProps) {
  return (
    <section className="wf-section" style={{ backgroundColor: '#f2f2f2', textAlign: 'center' }}>
      <Container maxWidth="700px" centered>
        <p className="wf-section-label">Agenda</p>
        <h2 className="wf-section-title">{title}</h2>
        <p className="wf-section-subtitle" style={{ margin: '0 auto 32px' }}>{description}</p>
        <div style={{
          display: 'inline-block',
          padding: '16px 32px',
          border: '2px solid #333',
          backgroundColor: '#fff',
          marginBottom: '24px'
        }}>
          <p style={{ fontSize: '14px', color: '#333', fontWeight: 600 }}>{boxTitle}</p>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{boxSubtitle}</p>
        </div>
        <p style={{ fontSize: '13px', color: '#888' }}>{costOfInaction}</p>
      </Container>
    </section>
  );
}

// ============================================
// FINAL CTA SECTION
// ============================================
interface FinalCtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  whatsappNote?: string;
}

export function FinalCtaSection({ title, description, buttonText, whatsappNote }: FinalCtaSectionProps) {
  return (
    <section className="wf-cta-section">
      <h2 className="wf-cta-title">{title}</h2>
      <p className="wf-cta-text">{description}</p>
      <Button to="/contato" variant="primary">{buttonText}</Button>
      {whatsappNote && (
        <p style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>{whatsappNote}</p>
      )}
    </section>
  );
}
