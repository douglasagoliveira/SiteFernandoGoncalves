import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div>
      {/* BREADCRUMB */}
      <div className="wf-breadcrumb">
        <a href="#/">Início</a>
        <span>/</span>
        Sobre
      </div>

      {/* PAGE HEADER */}
      <section className="wf-page-header">
        <p className="wf-section-label">Sobre</p>
        <h1 className="wf-page-header-title">Uma história real. Uma experiência de vida. Uma mensagem que conecta.</h1>
        <p className="wf-page-header-text">
          Fernando Gonçalves é storyteller e palestrante motivacional desde 1992. Sua experiência nasceu muito antes dos palcos — nasceu de uma vida marcada por dificuldades, recomeços e pela necessidade de encontrar caminhos quando aparentemente não havia caminhos.
        </p>
      </section>

      {/* ============================================
          BIOGRAFIA PRINCIPAL
          ============================================ */}
      <section className="wf-section">
        <div className="wf-grid-2" style={{ alignItems: 'start', gap: '64px' }}>
          <div>
            <div className="wf-card-image" style={{ height: '450px' }}>
              <span className="wf-annotation">FOTO — Retrato profissional</span>
            </div>
          </div>
          <div>
            <p className="wf-section-label">Minha História</p>
            <h2 className="wf-section-title">Das dificuldades à decisão de não desistir</h2>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              Durante a infância e adolescência, enfrentou situações extremamente adversas: problemas de saúde, extrema pobreza, bullying, violência familiar, dificuldades comportamentais e emocionais relacionadas ao TDAH e experiências traumáticas durante sua formação.
            </p>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              Filho de um homem que enfrentou a condição de andarilho e ex-morador de rua e de uma mulher órfã que passou por experiências de extrema exploração durante a infância, Fernando cresceu conhecendo de perto realidades que poderiam facilmente produzir desesperança.
            </p>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              Na adolescência, foi enviado para um internato, onde enfrentou humilhações e diferentes formas de violência. Apesar de tudo isso, decidiu não desistir. Essa decisão tornou-se o ponto de partida de uma trajetória construída com resiliência, perseverança, paciência, otimismo e responsabilidade pelas próprias escolhas.
            </p>
            <p className="wf-section-subtitle">
              Hoje, Fernando transforma essa experiência em conteúdo, reflexão e inspiração. Mais do que contar uma história, Fernando utiliza sua história para provocar novas histórias.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          TIMELINE — Minha Trajetória
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div style={{ maxWidth: '700px' }}>
          <p className="wf-section-label">Trajetória</p>
          <h2 className="wf-section-title">De uma infância de dificuldades a uma carreira dedicada a pessoas</h2>
        </div>

        <div className="wf-timeline" style={{ maxWidth: '700px' }}>
          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Infância</p>
            <h3 className="wf-timeline-title">Primeiros desafios</h3>
            <p className="wf-timeline-text">
              Infância marcada por pobreza extrema, problemas de saúde, bullying e violência familiar. Filho de pai ex-morador de rua e mãe órfã explorada na infância.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Adolescência</p>
            <h3 className="wf-timeline-title">Internato e superação</h3>
            <p className="wf-timeline-text">
              Enviado para um internato, enfrentou humilhações e violência. Estudou até a antiga 6ª série. Apesar das adversidades, decidiu não desistir.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Retomada</p>
            <h3 className="wf-timeline-title">Volta aos estudos</h3>
            <p className="wf-timeline-text">
              Anos mais tarde, decidiu retomar os estudos, prestou o ENEM e concluiu o ensino médio. Ingressou em curso superior de Marketing.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">1992</p>
            <h3 className="wf-timeline-title">Início como palestrante</h3>
            <p className="wf-timeline-text">
              Em pequenas reuniões e encontros religiosos, começou a desenvolver sua experiência como palestrante. Contou sua própria história a um grupo — a reação foi surpreendente.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Década de 1990</p>
            <h3 className="wf-timeline-title">Experiência corporativa</h3>
            <p className="wf-timeline-text">
              Atuou como coordenador de treinamento motivacional de uma das maiores empresas de assistência médica do Brasil, desenvolvendo atividades em Belo Horizonte e diversas cidades de Minas Gerais.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Hoje</p>
            <h3 className="wf-timeline-title">+30 anos transformando vidas</h3>
            <p className="wf-timeline-text">
              Mais de três décadas dedicadas à comunicação, ao desenvolvimento humano e à motivação. Autor de 3 livros. Palestrante para empresas, instituições e grupos em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          DIFERENCIAIS
          ============================================ */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Diferenciais</p>
          <h2 className="wf-section-title">Por que contratar Fernando Gonçalves?</h2>
        </div>

        <div className="wf-grid-3">
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Uma história verdadeira</h3>
            <p className="wf-card-text">
              A principal ferramenta de Fernando é sua própria experiência de vida.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">+30 anos de atuação</h3>
            <p className="wf-card-text">
              Experiência como palestrante desde 1992, com atuação junto a empresas e equipes de diferentes segmentos.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Vivência dos dois lados</h3>
            <p className="wf-card-text">
              Experiência tanto como colaborador quanto como gestor. Conhecer os dois lados da relação profissional faz diferença.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Identificação com o público</h3>
            <p className="wf-card-text">
              A abordagem parte da realidade de uma pessoa comum enfrentando desafios reais.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Interatividade</h3>
            <p className="wf-card-text">
              Dinâmicas, participação do público, brincadeiras, sorteios de brindes e atividades práticas.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Foco em atitude</h3>
            <p className="wf-card-text">
              A palestra não termina na inspiração. O participante é estimulado a definir atitudes concretas para começar a mudança.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          EXPERIÊNCIA PROFISSIONAL
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Experiência</p>
          <h2 className="wf-section-title">Décadas de experiência falando com pessoas e equipes</h2>
        </div>

        <div className="wf-grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="wf-card">
            <h3 className="wf-card-title">Palestras motivacionais</h3>
            <p className="wf-card-text">Para empresas, indústria, comércio e serviços.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Treinamentos para equipes</h3>
            <p className="wf-card-text">Equipes de vendas, colaboradores, gestores, equipes administrativas e operacionais.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Eventos corporativos</h3>
            <p className="wf-card-text">Congressos, convenções, encontros empresariais e eventos motivacionais.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Terceiro setor e instituições</h3>
            <p className="wf-card-text">ONGs, associações, projetos sociais, instituições religiosas e grupos familiares.</p>
          </div>
        </div>
      </section>

      {/* ============================================
          HABILIDADES E CONHECIMENTOS
          ============================================ */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Conhecimentos</p>
          <h2 className="wf-section-title">Áreas de atuação e estudo</h2>
        </div>

        <div className="wf-grid-4">
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Relações Humanas</h3>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Comunicação Interpessoal</h3>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Gerenciamento de Equipes</h3>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Oratória</h3>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Liderança Organizacional</h3>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Análise Comportamental</h3>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Comunicação Eleitoral</h3>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Design e Produção de Mídias</h3>
          </div>
        </div>
      </section>

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
