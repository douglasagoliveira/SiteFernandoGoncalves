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

      {/* BIOGRAFIA PRINCIPAL */}
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
              Na adolescência, foi enviado para um internato, onde enfrentou humilhações e diferentes formas de violência. Apesar de tudo isso, decidiu não desistir. Essa decisão tornou-se o ponto de partida de uma trajetória construída com resiliência, perseverança, paciência, otimismo, disposição para recomeçar e, principalmente, responsabilidade pelas próprias escolhas.
            </p>
            <p className="wf-section-subtitle">
              Hoje, Fernando transforma essa experiência em conteúdo, reflexão e inspiração para pessoas que precisam recuperar a disposição para seguir em frente. Mais do que contar uma história, Fernando utiliza sua história para provocar novas histórias.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE — MINHA TRAJETÓRIA */}
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
              Problemas de saúde, extrema pobreza, bullying, violência familiar, dificuldades comportamentais e emocionais relacionadas ao TDAH e experiências traumáticas durante a formação.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Adolescência</p>
            <h3 className="wf-timeline-title">Internato e superação</h3>
            <p className="wf-timeline-text">
              Enviado para um internato, enfrentou humilhações e diferentes formas de violência. Estudou inicialmente até a antiga 6ª série. Apesar de tudo, decidiu não desistir.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Retomada</p>
            <h3 className="wf-timeline-title">Volta aos estudos</h3>
            <p className="wf-timeline-text">
              Anos mais tarde, decidiu retomar os estudos, prestou o ENEM e concluiu o ensino médio. Ingressou posteriormente em um curso superior de Marketing, mas direcionou sua carreira para a comunicação visual e para a comunicação com pessoas.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">1992</p>
            <h3 className="wf-timeline-title">Início como palestrante</h3>
            <p className="wf-timeline-text">
              Foi em pequenas reuniões e encontros religiosos que começou a desenvolver sua experiência como palestrante. Até que, em determinado momento, simplesmente contou sua própria história a um grupo de pessoas. A reação foi surpreendente.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Década de 1990</p>
            <h3 className="wf-timeline-title">Experiência corporativa</h3>
            <p className="wf-timeline-text">
              Atuou como coordenador de treinamento motivacional de uma das maiores empresas de assistência médica do Brasil, desenvolvendo atividades em Belo Horizonte e em diversas cidades de Minas Gerais.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Evolução</p>
            <h3 className="wf-timeline-title">Os convites começaram a surgir</h3>
            <p className="wf-timeline-text">
              Algumas pessoas se identificaram com suas experiências e passaram a aplicar em suas próprias vidas atitudes que Fernando havia desenvolvido ao longo de sua trajetória: resiliência, perseverança, paciência, otimismo, coragem para recomeçar e responsabilidade pelas próprias escolhas. Primeiro, para conversar com pessoas que enfrentavam problemas semelhantes. Depois, para falar com equipes profissionais.
            </p>
          </div>

          <div className="wf-timeline-item">
            <p className="wf-timeline-year">Hoje</p>
            <h3 className="wf-timeline-title">+30 anos transformando vidas</h3>
            <p className="wf-timeline-text">
              Uma carreira construída não apenas sobre conhecimento teórico, mas sobre experiência, observação, relacionamento humano e vivência prática. Mais de três décadas dedicadas à comunicação, ao desenvolvimento humano e à motivação.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Experiência</p>
          <h2 className="wf-section-title">Décadas de experiência falando com pessoas e equipes</h2>
          <p className="wf-section-subtitle">
            Ao longo de sua trajetória, Fernando Gonçalves acumulou experiência em diferentes ambientes e contextos.
          </p>
        </div>

        <div className="wf-grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="wf-card">
            <h3 className="wf-card-title">Palestras motivacionais</h3>
            <p className="wf-card-text">Para empresas da indústria, comércio e serviços.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Treinamentos para equipes de vendas</h3>
            <p className="wf-card-text">Motivação, atitude, perseverança, relacionamento e foco em resultados.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Treinamentos para cooperados</h3>
            <p className="wf-card-text">Grupos de cooperados e associações.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Instituições religiosas e terceiro setor</h3>
            <p className="wf-card-text">Igrejas, grupos, ministérios, ONGs, associações e projetos sociais.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Grupos familiares</h3>
            <p className="wf-card-text">Encontros, eventos e momentos de reflexão.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Eventos motivacionais e políticos</h3>
            <p className="wf-card-text">Congressos, convenções, encontros corporativos e grupos ligados à atividade política.</p>
          </div>
        </div>

        <div style={{ maxWidth: '700px', margin: '48px auto 0', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#555', lineHeight: '1.8' }}>
            Conhecer os dois lados da relação profissional faz diferença. Fernando entende que motivação não acontece isoladamente. Ela está relacionada ao ambiente, às relações, à liderança, ao reconhecimento, à comunicação e, principalmente, à maneira como cada pessoa percebe seu papel dentro de um grupo.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="wf-section wf-section-dark">
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
              Experiência como palestrante desde 1992.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Experiência corporativa</h3>
            <p className="wf-card-text">
              Atuação junto a empresas e equipes de diferentes segmentos.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Vivência dos dois lados</h3>
            <p className="wf-card-text">
              Experiência tanto como colaborador quanto como gestor.
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
              Dinâmicas, participação do público, brincadeiras e atividades práticas.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Personalização</h3>
            <p className="wf-card-text">
              O conteúdo pode ser adaptado ao perfil e aos objetivos de cada contratante.
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

      {/* HABILIDADES E CONHECIMENTOS */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Conhecimentos</p>
          <h2 className="wf-section-title">Áreas de atuação e estudo</h2>
          <p className="wf-section-subtitle">
            Em constante busca por aprimoramento, Fernando possui conhecimento em áreas estratégicas do desenvolvimento humano e corporativo.
          </p>
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
            <h3 className="wf-card-title">Assessoria Parlamentar</h3>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Além de proficiência técnica e criativa em Design Gráfico, Design Digital, Redação e Produção de Mídias.
          </p>
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
