import { Link } from 'react-router-dom';

export default function Palestras() {
  return (
    <div>
      {/* BREADCRUMB */}
      <div className="wf-breadcrumb">
        <a href="#/">Início</a>
        <span>/</span>
        Palestras
      </div>

      {/* PAGE HEADER */}
      <section className="wf-page-header">
        <p className="wf-section-label">Palestras</p>
        <h1 className="wf-page-header-title">Motivação que começa pela identificação</h1>
        <p className="wf-page-header-text">
          Para tocar as pessoas, é preciso falar com elas — e não apenas para elas. Fernando não se apresenta como alguém que possui uma fórmula mágica. Ele se apresenta como alguém que também enfrentou limitações, dificuldades e circunstâncias adversas.
        </p>
      </section>

      {/* O MÉTODO */}
      <section className="wf-section">
        <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <p className="wf-section-label">O Método</p>
            <h2 className="wf-section-title">Conexão, reflexão e atitude</h2>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              Essa identificação cria uma conexão natural com os participantes. Durante a palestra, sua história serve como ponto de partida para uma reflexão sobre escolhas, comportamento, relacionamentos, responsabilidade, resiliência e capacidade de mudança.
            </p>
            <p className="wf-section-subtitle">
              O objetivo não é simplesmente emocionar. É provocar reflexão e transformar reflexão em atitude. A partir de situações reais vivenciadas pelo próprio palestrante, os participantes são estimulados a identificar suas próprias limitações e pensar em estratégias possíveis para melhorar sua relação consigo mesmos, com as pessoas e com os ambientes onde vivem e trabalham.
            </p>
          </div>
          <div className="wf-card-image" style={{ height: '350px' }}>
            <span className="wf-annotation">FOTO — Fernando em palestra</span>
          </div>
        </div>
      </section>

      {/* OS 3 MÓDULOS — Detalhados */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Estrutura</p>
          <h2 className="wf-section-title">Uma experiência dividida em três momentos</h2>
          <p className="wf-section-subtitle">
            As palestras podem ser adaptadas ao perfil, objetivo e disponibilidade de cada contratante.
          </p>
        </div>

        {/* Módulo 1 */}
        <div className="wf-palestra-item">
          <div className="wf-palestra-image"></div>
          <div>
            <span className="wf-palestra-tag">Módulo 1</span>
            <h3 className="wf-palestra-title">A História</h3>
            <p className="wf-palestra-desc">
              Fernando apresenta os principais momentos de sua trajetória. Uma história real de dificuldades, quedas, recomeços e superação. O objetivo é criar identificação com os participantes e demonstrar, por meio de experiências concretas, que adversidades não precisam representar o ponto final de uma trajetória.
            </p>
          </div>
        </div>

        {/* Módulo 2 */}
        <div className="wf-palestra-item">
          <div className="wf-palestra-image"></div>
          <div>
            <span className="wf-palestra-tag">Módulo 2</span>
            <h3 className="wf-palestra-title">As Estratégias</h3>
            <p className="wf-palestra-desc">
              Depois da história, vem a reflexão: O que foi feito para mudar essa realidade? Fernando apresenta atitudes e estratégias desenvolvidas ao longo de sua vida para enfrentar situações limitantes. São trabalhados temas como:
            </p>
            <ul className="wf-palestra-topics">
              <li>Resiliência e Perseverança</li>
              <li>Autoconhecimento e Responsabilidade pessoal</li>
              <li>Paciência e Otimismo</li>
              <li>Capacidade de adaptação e Recomeços</li>
              <li>Relacionamento interpessoal</li>
              <li>Mudança de atitudes e Superação de limitações</li>
            </ul>
            <p className="wf-palestra-desc" style={{ marginTop: '16px' }}>
              A proposta é levar os participantes a compreender que pequenas mudanças de comportamento podem produzir transformações significativas na vida pessoal e profissional.
            </p>
          </div>
        </div>

        {/* Módulo 3 */}
        <div className="wf-palestra-item">
          <div className="wf-palestra-image"></div>
          <div>
            <span className="wf-palestra-tag">Módulo 3</span>
            <h3 className="wf-palestra-title">Reflexão e Autoconscientização</h3>
            <p className="wf-palestra-desc">
              O terceiro momento é construído com a participação direta do público. Os participantes recebem um formulário com perguntas estratégicas que estimulam uma análise individual sobre comportamento e convivência. Entre as reflexões propostas:
            </p>
            <ul className="wf-palestra-topics">
              <li>Posso ser uma pessoa melhor para aqueles que fazem parte da minha vida? Família, amigos, colegas, vizinhos e demais pessoas do meu convívio.</li>
              <li>Posso contribuir para melhorar os ambientes onde vivo? Minha casa, meu trabalho, minha comunidade, minha escola, meu bairro e outros espaços de convivência.</li>
              <li>Se posso melhorar, por que ainda não fiz isso?</li>
              <li>Quais três atitudes concretas posso tomar para começar essa mudança?</li>
            </ul>
            <p className="wf-palestra-desc" style={{ marginTop: '16px' }}>
              Os participantes são convidados a estabelecer metas e determinar uma data para colocá-las em prática. O propósito é transformar a palestra em um compromisso pessoal com a mudança.
            </p>
          </div>
        </div>
      </section>

      {/* DINÂMICAS E INTERAÇÃO */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Interação</p>
          <h2 className="wf-section-title">Uma palestra para participar, não apenas assistir</h2>
          <p className="wf-section-subtitle">
            Motivação não precisa ser sinônimo de formalidade excessiva. Durante as apresentações, são utilizadas dinâmicas interativas, momentos de descontração, brincadeiras e sorteios de brindes. Esses recursos ajudam a criar um ambiente mais leve, aproximar o palestrante dos participantes e reduzir as barreiras naturais existentes em apresentações corporativas.
          </p>
          <p className="wf-section-subtitle">
            A interação também favorece a participação do público e contribui para que os conceitos apresentados sejam vivenciados de maneira prática. O objetivo é criar conexão.
          </p>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#555', lineHeight: '1.8' }}>
            "Porque uma mensagem pode ser ouvida. Mas uma experiência pode ser lembrada."
          </p>
        </div>
      </section>

      {/* SIMPLEX — Metodologia */}
      <section className="wf-section wf-section-dark">
        <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div className="wf-card-image" style={{ height: '350px' }}>
            <span className="wf-annotation">LOGO / IMAGEM SIMPLEX</span>
          </div>
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
      </section>

      {/* PARA QUEM SÃO AS PALESTRAS */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Público</p>
          <h2 className="wf-section-title">Diferentes públicos. Uma mesma proposta: despertar pessoas.</h2>
        </div>

        <div className="wf-grid-3">
          <div className="wf-card">
            <h3 className="wf-card-title">Empresas</h3>
            <p className="wf-card-text">Indústria, comércio e serviços.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Equipes profissionais</h3>
            <p className="wf-card-text">Colaboradores, gestores, equipes administrativas e operacionais.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Equipes de vendas</h3>
            <p className="wf-card-text">Motivação, atitude, perseverança, relacionamento e foco em resultados.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Terceiro setor</h3>
            <p className="wf-card-text">ONGs, associações, projetos sociais e instituições.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Instituições religiosas</h3>
            <p className="wf-card-text">Igrejas, grupos e ministérios.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Grupos familiares</h3>
            <p className="wf-card-text">Encontros, eventos e momentos de reflexão.</p>
          </div>
          <div className="wf-card">
            <h3 className="wf-card-title">Eventos</h3>
            <p className="wf-card-text">Congressos, convenções, encontros corporativos e eventos motivacionais.</p>
          </div>
        </div>
      </section>

      {/* FORMATOS */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Formatos</p>
          <h2 className="wf-section-title">Uma palestra adequada à sua realidade</h2>
          <p className="wf-section-subtitle">
            Cada contratação pode ser estruturada de acordo com o perfil e a disponibilidade do contratante.
          </p>
        </div>

        <div className="wf-grid-3">
          <div className="wf-card">
            <div className="wf-card-icon">⏱</div>
            <h3 className="wf-card-title">Palestra Essencial</h3>
            <p className="wf-card-text">
              A partir de 2 horas. Formato indicado para eventos, encontros corporativos e grupos que desejam uma experiência motivacional objetiva e dinâmica.
            </p>
          </div>
          <div className="wf-card">
            <div className="wf-card-icon">⏱</div>
            <h3 className="wf-card-title">Palestra Ampliada</h3>
            <p className="wf-card-text">
              De 3 a 4 horas. Possibilita aprofundar os conteúdos, ampliar as dinâmicas e desenvolver maior interação com os participantes.
            </p>
          </div>
          <div className="wf-card">
            <div className="wf-card-icon">⏱</div>
            <h3 className="wf-card-title">Experiência Completa</h3>
            <p className="wf-card-text">
              Até 6 horas, divididas em duas ou três etapas. Formato indicado para organizações que desejam uma experiência mais aprofundada, com maior tempo dedicado à reflexão, interação, aplicação de questionários e desenvolvimento das atividades propostas.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Os formatos podem ser personalizados conforme os objetivos e necessidades do contratante.
          </p>
        </div>
      </section>

      {/* RESULTADOS ESPERADOS */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Resultados</p>
          <h2 className="wf-section-title">O que uma experiência motivacional pode despertar?</h2>
          <p className="wf-section-subtitle">
            O objetivo das palestras é estimular mudanças que possam refletir tanto no comportamento individual quanto na convivência coletiva.
          </p>
        </div>

        <div className="wf-grid-3">
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Mais disposição</h3>
            <p className="wf-card-text">Colaboradores mais envolvidos e dispostos a participar.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Mais consciência</h3>
            <p className="wf-card-text">Profissionais estimulados a refletir sobre suas atitudes e responsabilidades.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Mais motivação</h3>
            <p className="wf-card-text">Recuperação do entusiasmo e da disposição para enfrentar desafios.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Melhor relacionamento</h3>
            <p className="wf-card-text">Reflexão sobre convivência, comunicação e respeito.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Mais produtividade</h3>
            <p className="wf-card-text">Pessoas mais conscientes e comprometidas podem contribuir para um ambiente profissional mais produtivo.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <h3 className="wf-card-title">Melhores resultados</h3>
            <p className="wf-card-text">Uma equipe mais engajada pode contribuir para o desempenho e os resultados da organização.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '48px auto 0' }}>
          <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#555', lineHeight: '1.8' }}>
            "Motivação não substitui gestão, planejamento ou estratégia. Mas pode ajudar pessoas a reencontrarem o propósito necessário para colocar tudo isso em prática."
          </p>
        </div>
      </section>

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
