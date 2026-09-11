import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* ============================================
          DOBRA 1 — HERO
          Missão: em 5 segundos, o visitante entende
          o que é, para quem, o que ganha e o que fazer.
          ============================================ */}
      <section className="wf-hero">
        <div className="wf-hero-content">
          <p className="wf-tagline">Storyteller & Palestrante Motivacional</p>
          <h1 className="wf-hero-title">
            Transforme adversidades em força. Transforme pessoas em protagonistas.
          </h1>
          <p className="wf-hero-subtitle">
            Desde 1992, Fernando Gonçalves utiliza sua própria história de vida para inspirar pessoas, despertar a autoconsciência e estimular mudanças de atitude — em empresas, equipes e instituições de todo o Brasil.
          </p>
          <div className="wf-hero-buttons">
            <Link to="/contato" className="wf-btn-primary">Solicite Uma Palestra</Link>
            <Link to="/palestras" className="wf-btn-secondary">Conheça Meu Trabalho</Link>
          </div>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>
            Proposta personalizada em até 24h · Palestras em todo o Brasil
          </p>
        </div>
        <div className="wf-hero-image">
          <span className="wf-hero-image-label">FOTO HERO — Fernando Gonçalves</span>
        </div>
      </section>

      {/* ============================================
          DOBRA 2 — BARRA DE CREDIBILIDADE
          Missão: "posso confiar" em 2 segundos.
          ============================================ */}
      <section className="wf-stats">
        <div>
          <p className="wf-stat-number">+30</p>
          <p className="wf-stat-label">Anos de Palestras (desde 1992)</p>
        </div>
        <div>
          <p className="wf-stat-number">+3</p>
          <p className="wf-stat-label">Livros Publicados</p>
        </div>
        <div>
          <p className="wf-stat-number">1000+</p>
          <p className="wf-stat-label">Palestras Realizadas</p>
        </div>
        <div>
          <p className="wf-stat-number">10+</p>
          <p className="wf-stat-label">Segmentos Atendidos</p>
        </div>
      </section>

      {/* ============================================
          DOBRA 3 — PROBLEMA / IDENTIFICAÇÃO (NOVA)
          Missão: o leitor pensa "eles me entendem".
          ============================================ */}
      <section className="wf-section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="wf-section-label">O desafio das equipes hoje</p>
          <h2 className="wf-section-title">Sua equipe está desmotivada — e você sente isso todos os dias</h2>
          <p className="wf-section-subtitle" style={{ marginBottom: '32px' }}>
            Uma equipe desmotivada pode apresentar queda de produtividade, menor envolvimento, dificuldades de relacionamento e redução do comprometimento com os objetivos da organização.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '40px' }}>
            <div style={{ padding: '20px', borderLeft: '3px solid #333', backgroundColor: '#f9f9f9' }}>
              <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7' }}>
                Colaboradores que chegam, cumprem horário, mas não se envolvem.
              </p>
            </div>
            <div style={{ padding: '20px', borderLeft: '3px solid #333', backgroundColor: '#f9f9f9' }}>
              <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7' }}>
                Reuniões que não geram compromisso — só mais tarefas.
              </p>
            </div>
            <div style={{ padding: '20px', borderLeft: '3px solid #333', backgroundColor: '#f9f9f9' }}>
              <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7' }}>
                Conflitos de convivência que desgastam o ambiente de trabalho.
              </p>
            </div>
            <div style={{ padding: '20px', borderLeft: '3px solid #333', backgroundColor: '#f9f9f9' }}>
              <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7' }}>
                Falta de disposição para recomeçar após um período difícil.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.8', fontStyle: 'italic', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            Não é falta de esforço. É falta de <strong>conexão com o próprio propósito</strong>.
          </p>
        </div>
      </section>

      {/* ============================================
          SOBRE RESUMIDO — Gerar curiosidade
          (Dobra 12 — Autoridade)
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <p className="wf-section-label">Quem é Fernando</p>
            <h2 className="wf-section-title">Uma história real. Uma mensagem que conecta.</h2>
            <p className="wf-section-subtitle">
              Sua trajetória é marcada por desafios que poderiam ter determinado um destino completamente diferente. Pobreza, doenças na infância, bullying, violência, dificuldades familiares, limitações educacionais e inúmeras adversidades fizeram parte de sua caminhada.
            </p>
            <p className="wf-section-subtitle" style={{ marginTop: '-32px' }}>
              Mas a história não terminou aí. Fernando decidiu que as circunstâncias não determinariam quem ele seria. Hoje, leva às empresas uma mensagem direta: <strong>"Você não escolhe todas as circunstâncias da vida. Mas pode escolher como irá enfrentá-las."</strong>
            </p>
            <Link to="/sobre" className="wf-btn-secondary">Conheça a Trajetória</Link>
          </div>
          <div className="wf-card-image" style={{ height: '350px' }}>
            <span className="wf-annotation">FOTO — Fernando em ação</span>
          </div>
        </div>
      </section>

      {/* ============================================
          DOBRA 4 — SOLUÇÃO / MECANISMO ÚNICO (NOVA)
          Missão: apresentar o produto como o caminho
          e explicar por que funciona.
          ============================================ */}
      <section className="wf-section">
        <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div className="wf-card-image" style={{ height: '350px' }}>
            <span className="wf-annotation">LOGO / IMAGEM SIMPLEX</span>
          </div>
          <div>
            <p className="wf-section-label">O Método</p>
            <h2 className="wf-section-title">SIMPLEX — Sistema Motivacional para Performances de Excelência</h2>
            <p className="wf-section-subtitle" style={{ marginBottom: '24px' }}>
              Uma palestra não precisa ser igual para todas as empresas. O Simplex é uma metodologia desenvolvida para estruturar a experiência motivacional de acordo com as características e necessidades de cada contratante.
            </p>
            <p className="wf-section-subtitle">
              Diferente de palestras genéricas, o Simplex considera o <strong>perfil da organização, o perfil da equipe, os objetivos da contratação e os conteúdos prioritários</strong> — do planejamento à avaliação.
            </p>
            <Link to="/palestras" className="wf-btn-secondary">Conheça o Método</Link>
          </div>
        </div>
      </section>

      {/* ============================================
          AS PALESTRAS — 3 Módulos
          (Dobra 7 — Demonstração)
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Palestras</p>
          <h2 className="wf-section-title">Uma experiência dividida em três momentos</h2>
          <p className="wf-section-subtitle">
            As palestras podem ser adaptadas ao perfil, objetivo e disponibilidade de cada contratante.
          </p>
        </div>

        <div className="wf-grid-3">
          <div className="wf-card">
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">Módulo 1</span>
            <h3 className="wf-card-title">A História</h3>
            <p className="wf-card-text">
              Fernando apresenta os principais momentos de sua trajetória. Uma história real de dificuldades, quedas, recomeços e superação — criando identificação com os participantes.
            </p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </div>

          <div className="wf-card">
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">Módulo 2</span>
            <h3 className="wf-card-title">As Estratégias</h3>
            <p className="wf-card-text">
              Atitudes e estratégias desenvolvidas ao longo da vida para enfrentar situações limitantes: resiliência, perseverança, autoconhecimento, responsabilidade pessoal, otimismo e capacidade de adaptação.
            </p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </div>

          <div className="wf-card">
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">Módulo 3</span>
            <h3 className="wf-card-title">Reflexão e Autoconscientização</h3>
            <p className="wf-card-text">
              Participação direta do público com perguntas estratégicas sobre comportamento e convivência. Os participantes estabelecem metas e determinam datas para colocá-las em prática.
            </p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/palestras" className="wf-btn-primary">Ver Detalhes das Palestras</Link>
        </div>
      </section>

      {/* ============================================
          DOBRA 6 — COMO FUNCIONA (NOVA)
          Missão: reduzir a percepção de esforço.
          ============================================ */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Como contratar</p>
          <h2 className="wf-section-title">Sua palestra em 3 passos</h2>
          <p className="wf-section-subtitle">
            Do primeiro contato à realização do evento, o processo é simples e personalizado.
          </p>
        </div>

        <div className="wf-grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', padding: '32px 20px' }}>
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
            }}>1</div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>
              Solicite uma proposta
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
              Preencha o formulário com os dados do seu evento. Nossa equipe retorna em até 24h.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '32px 20px' }}>
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
            }}>2</div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>
              Personalizamos o conteúdo
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
              Pelo método SIMPLEX, estruturamos a palestra de acordo com o perfil da sua equipe e seus objetivos.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '32px 20px' }}>
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
            }}>3</div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#333' }}>
              Viva a experiência
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
              No dia do evento, sua equipe vive uma experiência de história, emoção, reflexão, interação e atitude.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '13px', color: '#888' }}>
            Sem burocracia · Proposta personalizada · Atendimento humano
          </p>
        </div>
      </section>

      {/* ============================================
          PARA EMPRESAS — Benefícios
          (Dobra 5 — Benefícios)
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Para Empresas</p>
          <h2 className="wf-section-title">O que muda quando a equipe reencontra o propósito</h2>
          <p className="wf-section-subtitle">
            Colaboradores mais conscientes de seu papel e mais dispostos a contribuir podem fortalecer o ambiente de trabalho e favorecer melhores resultados.
          </p>
        </div>

        <div className="wf-grid-4">
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Mais Disposição</h3>
            <p className="wf-card-text">Colaboradores mais envolvidos e dispostos a participar.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Mais Consciência</h3>
            <p className="wf-card-text">Profissionais estimulados a refletir sobre suas atitudes e responsabilidades.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Melhor Relacionamento</h3>
            <p className="wf-card-text">Reflexão sobre convivência, comunicação e respeito no ambiente de trabalho.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Melhores Resultados</h3>
            <p className="wf-card-text">Uma equipe mais engajada contribui para o desempenho da organização.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
            "Motivação não substitui gestão, planejamento ou estratégia. Mas pode ajudar pessoas a reencontrarem o propósito necessário para colocar tudo isso em prática."
          </p>
        </div>
      </section>

      {/* ============================================
          DOBRA 9 — OFERTA / FORMATOS (NOVA)
          Missão: deixar claro o que recebe.
          ============================================ */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Formatos Disponíveis</p>
          <h2 className="wf-section-title">Escolha o formato ideal para sua empresa</h2>
          <p className="wf-section-subtitle">
            Cada contratação pode ser estruturada de acordo com o perfil e a disponibilidade do contratante.
          </p>
        </div>

        <div className="wf-grid-3">
          <div className="wf-card" style={{ border: '2px solid #333' }}>
            <div className="wf-card-icon">⏱</div>
            <h3 className="wf-card-title">Palestra Essencial</h3>
            <p style={{ fontSize: '24px', fontWeight: 700, color: '#333', marginBottom: '12px' }}>
              A partir de 2h
            </p>
            <p className="wf-card-text">
              Formato indicado para eventos, encontros corporativos e grupos que desejam uma experiência motivacional objetiva e dinâmica.
            </p>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '16px', borderTop: '1px solid #eee', paddingTop: '12px' }}>
              Ideal para: eventos rápidos, SIPAT, reuniões de equipe
            </p>
          </div>

          <div className="wf-card" style={{ border: '2px solid #333', position: 'relative' }}>
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
            }}>Mais Popular</span>
            <div className="wf-card-icon">⏱</div>
            <h3 className="wf-card-title">Palestra Ampliada</h3>
            <p style={{ fontSize: '24px', fontWeight: 700, color: '#333', marginBottom: '12px' }}>
              De 3 a 4h
            </p>
            <p className="wf-card-text">
              Possibilita aprofundar os conteúdos, ampliar as dinâmicas e desenvolver maior interação com os participantes.
            </p>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '16px', borderTop: '1px solid #eee', paddingTop: '12px' }}>
              Ideal para: convenções, treinamentos, eventos de liderança
            </p>
          </div>

          <div className="wf-card" style={{ border: '2px solid #333' }}>
            <div className="wf-card-icon">⏱</div>
            <h3 className="wf-card-title">Experiência Completa</h3>
            <p style={{ fontSize: '24px', fontWeight: 700, color: '#333', marginBottom: '12px' }}>
              Até 6h
            </p>
            <p className="wf-card-text">
              Divididas em duas ou três etapas. Para organizações que desejam uma experiência mais aprofundada, com maior tempo dedicado à reflexão e interação.
            </p>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '16px', borderTop: '1px solid #eee', paddingTop: '12px' }}>
              Ideal para: programas de desenvolvimento, jornadas corporativas
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            Todos os formatos podem ser personalizados conforme os objetivos e necessidades do contratante.
          </p>
          <Link to="/contato" className="wf-btn-primary">Solicitar Proposta Personalizada</Link>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '12px' }}>
            Proposta em até 24h · Sem compromisso
          </p>
        </div>
      </section>

      {/* ============================================
          DEPOIMENTOS
          (Dobra 8 — Prova Social)
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Depoimentos</p>
          <h2 className="wf-section-title">Quem vive a experiência pode contar melhor</h2>
          <p className="wf-section-subtitle">
            Veja o que gestores e participantes dizem sobre as palestras.
          </p>
        </div>

        <div className="wf-grid-3">
          <div className="wf-testimonial">
            <p className="wf-testimonial-quote">
              A experiência foi muito além de uma palestra motivacional. Fernando conseguiu fazer nossa equipe refletir sobre atitudes que podemos mudar no dia a dia.
            </p>
            <div className="wf-testimonial-author">
              <div className="wf-testimonial-avatar">FOTO</div>
              <div>
                <p className="wf-testimonial-name">[Nome]</p>
                <p className="wf-testimonial-role">[Cargo — Empresa — Cidade]</p>
              </div>
            </div>
          </div>

          <div className="wf-testimonial">
            <p className="wf-testimonial-quote">
              Uma história de vida que gera identificação e mostra que é possível recomeçar, mesmo diante de grandes dificuldades.
            </p>
            <div className="wf-testimonial-author">
              <div className="wf-testimonial-avatar">FOTO</div>
              <div>
                <p className="wf-testimonial-name">[Nome]</p>
                <p className="wf-testimonial-role">[Cargo — Instituição — Cidade]</p>
              </div>
            </div>
          </div>

          <div className="wf-testimonial">
            <p className="wf-testimonial-quote">
              A participação da equipe foi muito positiva. A dinâmica fez com que todos se envolvessem e refletissem sobre seu papel dentro da empresa.
            </p>
            <div className="wf-testimonial-author">
              <div className="wf-testimonial-avatar">FOTO</div>
              <div>
                <p className="wf-testimonial-name">[Nome]</p>
                <p className="wf-testimonial-role">[Cargo — Empresa — Cidade]</p>
              </div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '24px' }}>
          * Depoimentos serão substituídos por versões reais e autorizadas.
        </p>
      </section>

      {/* ============================================
          LIVROS — Prova de autoridade
          ============================================ */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Obras Publicadas</p>
          <h2 className="wf-section-title">Livros de Fernando Gonçalves</h2>
          <p className="wf-section-subtitle">
            Com vocação nata para a escrita, Fernando é um legítimo autor de peças motivacionais.
          </p>
        </div>

        <div className="wf-grid-3">
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-image" style={{ height: '250px' }}></div>
            <h3 className="wf-card-title">O Desafio Conjugal</h3>
            <p className="wf-card-text">
              Estratégias práticas e reflexões essenciais para o aprimoramento da convivência mútua e o fortalecimento dos relacionamentos.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-image" style={{ height: '250px' }}></div>
            <h3 className="wf-card-title">Meu Degrau de Hoje</h3>
            <p className="wf-card-text">
              365 diretrizes práticas em frases curtas de conscientização. Mensagens de alto impacto para o desenvolvimento pessoal contínuo.
            </p>
          </div>

          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-image" style={{ height: '250px' }}></div>
            <h3 className="wf-card-title">Um Mendigo, Uma Órfã e Eu</h3>
            <p className="wf-card-text">
              Narrativa autobiográfica sobre resiliência na superação de grandes obstáculos e traumas, rumo ao êxito.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          DOBRA 11 — FAQ / OBJEÇÕES (NOVA)
          Missão: responder o que ainda impede o clique.
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="wf-section-center">
            <p className="wf-section-label">Perguntas Frequentes</p>
            <h2 className="wf-section-title">Tudo o que você precisa saber antes de contratar</h2>
          </div>

          <div style={{ marginTop: '40px' }}>
            <div style={{ marginBottom: '24px', padding: '24px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
                A palestra funciona para o meu segmento?
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                Sim. Fernando já atuou em indústria, comércio, serviços, cooperativas, terceiro setor, instituições religiosas e eventos corporativos. Pelo método SIMPLEX, o conteúdo é personalizado ao perfil da sua equipe.
              </p>
            </div>

            <div style={{ marginBottom: '24px', padding: '24px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
                Quanto tempo leva até a palestra acontecer?
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                Após o primeiro contato, a proposta personalizada é enviada em até 24h. A data do evento é combinada conforme a disponibilidade da agenda — recomendamos antecipar o agendamento.
              </p>
            </div>

            <div style={{ marginBottom: '24px', padding: '24px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
                É possível personalizar o conteúdo para minha empresa?
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                Sim. Essa é a essência do método SIMPLEX. São considerados: perfil da organização, perfil da equipe, objetivos da contratação, tempo disponível e conteúdos prioritários.
              </p>
            </div>

            <div style={{ marginBottom: '24px', padding: '24px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
                Qual o diferencial em relação a outros palestrantes?
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                A principal ferramenta é a própria experiência de vida do palestrante — mais de 30 anos de atuação. A abordagem parte da identificação, gera reflexão e estimula atitudes concretas de mudança. Não é apenas inspiração: é compromisso com a ação.
              </p>
            </div>

            <div style={{ marginBottom: '24px', padding: '24px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
                A palestra atende presencialmente ou online?
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                Fernando atende em todo o Brasil, presencialmente. Para saber sobre formatos online ou híbridos, entre em contato para avaliarmos juntos a melhor opção.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
                Como começo?
              </p>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                Preencha o formulário de contato ou fale diretamente pelo WhatsApp (31) 99847-5453. Nossa equipe retorna em até 24h com uma proposta personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          DOBRA 13 — URGÊNCIA (NOVA)
          Missão: dar um motivo honesto para agir agora.
          ============================================ */}
      <section className="wf-section" style={{ backgroundColor: '#f2f2f2', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className="wf-section-label">Agenda</p>
          <h2 className="wf-section-title">Agenda limitada — garanta sua data</h2>
          <p className="wf-section-subtitle" style={{ margin: '0 auto 32px' }}>
            Fernando Gonçalves atende um número limitado de eventos por mês para manter a qualidade e a personalização de cada palestra. Datas de congressos, convenções e SIPAT costumam ser preenchidas com antecedência.
          </p>
          <div style={{
            display: 'inline-block',
            padding: '16px 32px',
            border: '2px solid #333',
            backgroundColor: '#fff',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#333', fontWeight: 600 }}>
              📅 Antecipe o agendamento do seu evento
            </p>
            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              Entre em contato com pelo menos 30 dias de antecedência
            </p>
          </div>
          <p style={{ fontSize: '13px', color: '#888' }}>
            Cada mês sem resolver a desmotivação da equipe custa produtividade, clima e resultados.
          </p>
        </div>
      </section>

      {/* ============================================
          DOBRA 14 — CTA FINAL
          Missão: fechar para quem rolou até o fim.
          ============================================ */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">Sua próxima semana com uma equipe mais engajada começa com uma conversa.</h2>
        <p className="wf-cta-text">
          Uma apresentação que combina: <strong>História + emoção + reflexão + interação + atitude.</strong> Proposta personalizada em até 24h · Palestras em todo o Brasil · Sem compromisso.
        </p>
        <Link to="/contato" className="wf-btn-primary">Solicite Uma Palestra</Link>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>
          Ainda com dúvida? Fale diretamente pelo WhatsApp (31) 99847-5453
        </p>
      </section>
    </div>
  );
}
