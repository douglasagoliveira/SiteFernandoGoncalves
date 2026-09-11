import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="wf-hero">
        <div className="wf-hero-content">
          <p className="wf-tagline">Storyteller & Palestrante Motivacional</p>
          <h1 className="wf-hero-title">
            Transforme adversidades em força. Transforme pessoas em protagonistas.
          </h1>
          <p className="wf-hero-subtitle">
            Desde 1992, Fernando Gonçalves utiliza sua própria história de vida para inspirar pessoas, despertar a autoconsciência e estimular mudanças de atitude.
          </p>
          <div className="wf-hero-buttons">
            <Link to="/palestras" className="wf-btn-primary">Conheça Meu Trabalho</Link>
            <Link to="/contato" className="wf-btn-secondary">Solicite Uma Palestra</Link>
          </div>
        </div>
        <div className="wf-hero-image">
          <span className="wf-hero-image-label">FOTO HERO — Fernando Gonçalves</span>
        </div>
      </section>

      {/* ============================================
          NÚMEROS / STATS — Autoridade
          ============================================ */}
      <section className="wf-stats">
        <div>
          <p className="wf-stat-number">+30</p>
          <p className="wf-stat-label">Anos de Palestras</p>
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
          SOBRE RESUMIDO — Gerar curiosidade
          ============================================ */}
      <section className="wf-section">
        <div className="wf-grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <p className="wf-section-label">Quem é Fernando</p>
            <h2 className="wf-section-title">Uma história real. Uma mensagem que conecta.</h2>
            <p className="wf-section-subtitle">
              Sua trajetória é marcada por desafios que poderiam ter determinado um destino completamente diferente. Pobreza, doenças na infância, bullying, violência e dificuldades familiares fizeram parte de sua caminhada. Mas a história não terminou aí.
            </p>
            <p className="wf-section-subtitle" style={{ marginTop: '-32px' }}>
              Fernando decidiu que as circunstâncias não determinariam quem ele seria. Hoje, leva às empresas uma mensagem direta: <strong>"Você não escolhe todas as circunstâncias da vida. Mas pode escolher como irá enfrentá-las."</strong>
            </p>
            <Link to="/sobre" className="wf-btn-secondary">Conheça a Trajetória</Link>
          </div>
          <div className="wf-card-image" style={{ height: '350px' }}>
            <span className="wf-annotation">FOTO — Fernando em ação</span>
          </div>
        </div>
      </section>

      {/* ============================================
          AS PALESTRAS — 3 Módulos
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
          {/* Módulo 1 */}
          <div className="wf-card">
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">Módulo 1</span>
            <h3 className="wf-card-title">A História</h3>
            <p className="wf-card-text">
              Fernando apresenta os principais momentos de sua trajetória. Uma história real de dificuldades, quedas, recomeços e superação — criando identificação com os participantes.
            </p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </div>

          {/* Módulo 2 */}
          <div className="wf-card">
            <div className="wf-card-image"></div>
            <span className="wf-palestra-tag">Módulo 2</span>
            <h3 className="wf-card-title">As Estratégias</h3>
            <p className="wf-card-text">
              Atitudes e estratégias desenvolvidas ao longo da vida para enfrentar situações limitantes: resiliência, perseverança, autoconhecimento, responsabilidade pessoal, otimismo e capacidade de adaptação.
            </p>
            <Link to="/palestras" className="wf-card-link">Saiba mais →</Link>
          </div>

          {/* Módulo 3 */}
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
          PARA EMPRESAS — Foco corporativo
          ============================================ */}
      <section className="wf-section">
        <div className="wf-section-center">
          <p className="wf-section-label">Para Empresas</p>
          <h2 className="wf-section-title">Pessoas motivadas fazem a diferença nos resultados</h2>
          <p className="wf-section-subtitle">
            Colaboradores mais conscientes de seu papel e mais dispostos a contribuir fortalecem o ambiente de trabalho e favorecem melhores resultados.
          </p>
        </div>

        <div className="wf-grid-4">
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Motivação</h3>
            <p className="wf-card-text">Recuperação do entusiasmo e disposição para enfrentar desafios.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Comprometimento</h3>
            <p className="wf-card-text">Consciência profissional e responsabilidade pelas próprias escolhas.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Relacionamento</h3>
            <p className="wf-card-text">Reflexão sobre convivência, comunicação e respeito no ambiente de trabalho.</p>
          </div>
          <div className="wf-card" style={{ textAlign: 'center' }}>
            <div className="wf-card-icon" style={{ margin: '0 auto 20px' }}>★</div>
            <h3 className="wf-card-title">Resultados</h3>
            <p className="wf-card-text">Uma equipe mais engajada contribui para o desempenho da organização.</p>
          </div>
        </div>
      </section>

      {/* ============================================
          DEPOIMENTOS
          ============================================ */}
      <section className="wf-section wf-section-dark">
        <div className="wf-section-center">
          <p className="wf-section-label">Depoimentos</p>
          <h2 className="wf-section-title">Quem vive a experiência pode contar melhor</h2>
        </div>

        <div className="wf-grid-3">
          <div className="wf-testimonial">
            <p className="wf-testimonial-quote">
              A experiência foi muito além de uma palestra motivacional. Fernando conseguiu fazer nossa equipe refletir sobre atitudes que podemos mudar no dia a dia.
            </p>
            <div className="wf-testimonial-author">
              <div className="wf-testimonial-avatar">FOTO</div>
              <div>
                <p className="wf-testimonial-name">[Nome — Cargo — Empresa]</p>
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
                <p className="wf-testimonial-name">[Nome — Cargo — Instituição]</p>
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
                <p className="wf-testimonial-name">[Nome — Cargo — Empresa]</p>
              </div>
            </div>
          </div>
        </div>
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
          CTA FINAL
          ============================================ */}
      <section className="wf-cta-section">
        <h2 className="wf-cta-title">Sua equipe precisa de motivação? Vamos conversar.</h2>
        <p className="wf-cta-text">
          Se sua empresa deseja proporcionar uma experiência motivacional capaz de estimular reflexão, participação e mudança de atitude, entre em contato.
        </p>
        <Link to="/contato" className="wf-btn-primary">Solicite Uma Palestra</Link>
      </section>
    </div>
  );
}
