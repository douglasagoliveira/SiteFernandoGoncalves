import { HeroSection, StatsSection, PainPointsSection, AboutSummarySection, MethodSection, ModulesSection, StepsSection, BenefitsSection, FormatsSection, TestimonialsSection, BooksSection, FAQSection, UrgencySection, FinalCtaSection } from '../components/sections';
import { hero, stats, painSection, aboutSummary, method, modules, steps, benefits, benefitsQuote, formats, testimonials, books, faqItems, urgency, finalCta } from '../data/content';

export default function Home() {
  return (
    <div>
      {/* DOBRA 1 — HERO */}
      <HeroSection {...hero} />

      {/* DOBRA 2 — STATS */}
      <StatsSection stats={stats} />

      {/* DOBRA 3 — PAIN POINTS */}
      <PainPointsSection {...painSection} />

      {/* DOBRA 12 — ABOUT SUMMARY */}
      <AboutSummarySection {...aboutSummary} />

      {/* DOBRA 4 — METHOD */}
      <MethodSection {...method} />

      {/* DOBRA 7 — MODULES */}
      <ModulesSection 
        modules={modules}
        label="Palestras"
        title="Uma experiência dividida em três momentos"
        subtitle="As palestras podem ser adaptadas ao perfil, objetivo e disponibilidade de cada contratante."
      />

      {/* DOBRA 6 — STEPS */}
      <StepsSection 
        steps={steps}
        label="Como contratar"
        title="Sua palestra em 3 passos"
        subtitle="Do primeiro contato à realização do evento, o processo é simples e personalizado."
        microcopy="Sem burocracia · Proposta personalizada · Atendimento humano"
      />

      {/* DOBRA 5 — BENEFITS */}
      <BenefitsSection 
        benefits={benefits}
        label="Para Empresas"
        title="O que muda quando a equipe reencontra o propósito"
        subtitle="Colaboradores mais conscientes de seu papel e mais dispostos a contribuir podem fortalecer o ambiente de trabalho e favorecer melhores resultados."
        quote={benefitsQuote}
      />

      {/* DOBRA 9 — FORMATS */}
      <FormatsSection 
        formats={formats}
        label="Formatos Disponíveis"
        title="Escolha o formato ideal para sua empresa"
        subtitle="Cada contratação pode ser estruturada de acordo com o perfil e a disponibilidade do contratante."
      />

      {/* DOBRA 8 — TESTIMONIALS */}
      <TestimonialsSection 
        testimonials={testimonials}
        label="Depoimentos"
        title="Quem vive a experiência pode contar melhor"
        subtitle="Veja o que gestores e participantes dizem sobre as palestras."
      />

      {/* BOOKS */}
      <BooksSection 
        books={books}
        label="Obras Publicadas"
        title="Livros de Fernando Gonçalves"
        subtitle="Com vocação nata para a escrita, Fernando é um legítimo autor de peças motivacionais."
      />

      {/* DOBRA 11 — FAQ */}
      <FAQSection 
        items={faqItems}
        label="Perguntas Frequentes"
        title="Tudo o que você precisa saber antes de contratar"
      />

      {/* DOBRA 13 — URGENCY */}
      <UrgencySection {...urgency} />

      {/* DOBRA 14 — FINAL CTA */}
      <FinalCtaSection {...finalCta} />
    </div>
  );
}
