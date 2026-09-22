import type { NavItem, Stat, PainPoint, Module, Step, Benefit, Format, Testimonial, Book, FAQItem, ContactInfo, SocialLink } from '../types';

// ============================================
// NAVEGAÇÃO
// ============================================
export const navItems: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Palestras', path: '/palestras' },
  { label: 'Contato', path: '/contato' },
];

// ============================================
// HERO
// ============================================
export const hero = {
  tagline: 'Storyteller & Palestrante Motivacional',
  title: 'Transforme adversidades em força. Transforme pessoas em protagonistas.',
  subtitle: 'Desde 1992, Fernando Gonçalves utiliza sua própria história de vida para inspirar pessoas, despertar a autoconsciência e estimular mudanças de atitude — em empresas, equipes e instituições de todo o Brasil.',
  primaryCta: 'Solicite Uma Palestra',
  secondaryCta: 'Conheça Meu Trabalho',
  microcopy: 'Proposta personalizada em até 24h · Palestras em todo o Brasil',
};

// ============================================
// STATS
// ============================================
export const stats: Stat[] = [
  { number: '+30', label: 'Anos de Palestras (desde 1992)' },
  { number: '+3', label: 'Livros Publicados' },
  { number: '1000+', label: 'Palestras Realizadas' },
  { number: '10+', label: 'Segmentos Atendidos' },
];

// ============================================
// PAIN POINTS (DOBRA 3)
// ============================================
export const painSection = {
  label: 'O desafio das equipes hoje',
  title: 'Sua equipe está desmotivada — e você sente isso todos os dias',
  intro: 'Uma equipe desmotivada pode apresentar queda de produtividade, menor envolvimento, dificuldades de relacionamento e redução do comprometimento com os objetivos da organização.',
  points: [
    'Colaboradores que chegam, cumprem horário, mas não se envolvem.',
    'Reuniões que não geram compromisso — só mais tarefas.',
    'Conflitos de convivência que desgastam o ambiente de trabalho.',
    'Falta de disposição para recomeçar após um período difícil.',
  ],
  bridge: 'Não é falta de esforço. É falta de conexão com o próprio propósito.',
};

// ============================================
// SOBRE RESUMIDO (DOBRA 12)
// ============================================
export const aboutSummary = {
  label: 'Quem é Fernando',
  title: 'Uma história real. Uma mensagem que conecta.',
  paragraphs: [
    'Sua trajetória é marcada por desafios que poderiam ter determinado um destino completamente diferente. Pobreza, doenças na infância, bullying, violência, dificuldades familiares, limitações educacionais e inúmeras adversidades fizeram parte de sua caminhada.',
    'Mas a história não terminou aí. Fernando decidiu que as circunstâncias não determinariam quem ele seria. Hoje, leva às empresas uma mensagem direta: "Você não escolhe todas as circunstâncias da vida. Mas pode escolher como irá enfrentá-las."',
  ],
  cta: 'Conheça a Trajetória',
};

// ============================================
// MÉTODO SIMPLEX (DOBRA 4)
// ============================================
export const method = {
  label: 'O Método',
  title: 'SIMPLEX — Sistema Motivacional para Performances de Excelência',
  paragraphs: [
    'Uma palestra não precisa ser igual para todas as empresas. O Simplex é uma metodologia desenvolvida para estruturar a experiência motivacional de acordo com as características e necessidades de cada contratante.',
    'Diferente de palestras genéricas, o Simplex considera o perfil da organização, o perfil da equipe, os objetivos da contratação e os conteúdos prioritários — do planejamento à avaliação.',
  ],
  cta: 'Conheça o Método',
};

// ============================================
// MÓDULOS DAS PALESTRAS (DOBRA 7)
// ============================================
export const modules: Module[] = [
  {
    tag: 'Módulo 1',
    title: 'A História',
    description: 'Fernando apresenta os principais momentos de sua trajetória. Uma história real de dificuldades, quedas, recomeços e superação — criando identificação com os participantes.',
  },
  {
    tag: 'Módulo 2',
    title: 'As Estratégias',
    description: 'Atitudes e estratégias desenvolvidas ao longo da vida para enfrentar situações limitantes: resiliência, perseverança, autoconhecimento, responsabilidade pessoal, otimismo e capacidade de adaptação.',
  },
  {
    tag: 'Módulo 3',
    title: 'Reflexão e Autoconscientização',
    description: 'Participação direta do público com perguntas estratégicas sobre comportamento e convivência. Os participantes estabelecem metas e determinam datas para colocá-las em prática.',
  },
];

// ============================================
// COMO FUNCIONA (DOBRA 6)
// ============================================
export const steps: Step[] = [
  {
    number: 1,
    title: 'Solicite uma proposta',
    description: 'Preencha o formulário com os dados do seu evento. Nossa equipe retorna em até 24h.',
  },
  {
    number: 2,
    title: 'Personalizamos o conteúdo',
    description: 'Pelo método SIMPLEX, estruturamos a palestra de acordo com o perfil da sua equipe e seus objetivos.',
  },
  {
    number: 3,
    title: 'Viva a experiência',
    description: 'No dia do evento, sua equipe vive uma experiência de história, emoção, reflexão, interação e atitude.',
  },
];

// ============================================
// BENEFÍCIOS (DOBRA 5)
// ============================================
export const benefits: Benefit[] = [
  {
    icon: '★',
    title: 'Mais Disposição',
    description: 'Colaboradores mais envolvidos e dispostos a participar.',
  },
  {
    icon: '★',
    title: 'Mais Consciência',
    description: 'Profissionais estimulados a refletir sobre suas atitudes e responsabilidades.',
  },
  {
    icon: '★',
    title: 'Melhor Relacionamento',
    description: 'Reflexão sobre convivência, comunicação e respeito no ambiente de trabalho.',
  },
  {
    icon: '★',
    title: 'Melhores Resultados',
    description: 'Uma equipe mais engajada contribui para o desempenho da organização.',
  },
];

export const benefitsQuote = '"Motivação não substitui gestão, planejamento ou estratégia. Mas pode ajudar pessoas a reencontrarem o propósito necessário para colocar tudo isso em prática."';

// ============================================
// FORMATOS (DOBRA 9)
// ============================================
export const formats: Format[] = [
  {
    title: 'Palestra Essencial',
    duration: 'A partir de 2h',
    description: 'Formato indicado para eventos, encontros corporativos e grupos que desejam uma experiência motivacional objetiva e dinâmica.',
    ideal: 'Ideal para: eventos rápidos, SIPAT, reuniões de equipe',
  },
  {
    title: 'Palestra Ampliada',
    duration: 'De 3 a 4h',
    description: 'Possibilita aprofundar os conteúdos, ampliar as dinâmicas e desenvolver maior interação com os participantes.',
    ideal: 'Ideal para: convenções, treinamentos, eventos de liderança',
    popular: true,
  },
  {
    title: 'Experiência Completa',
    duration: 'Até 6h',
    description: 'Divididas em duas ou três etapas. Para organizações que desejam uma experiência mais aprofundada, com maior tempo dedicado à reflexão e interação.',
    ideal: 'Ideal para: programas de desenvolvimento, jornadas corporativas',
  },
];

// ============================================
// DEPOIMENTOS (DOBRA 8)
/// ============================================
export const testimonials: Testimonial[] = [
  {
    quote: 'Nossa equipe ficou motivada e proativa após participar da palestra do Fernando. A forma como ele interage com os colaboradores atua como um propulsor profissional e pessoal. Melhoramos nossa produtividade, atendimento e relacionamento entre os colaboradores.',
    name: 'Isac Vieira',
    role: 'Diretor da CME Eventos',
  },
  {
    quote: 'Tive o prazer de conhecer Fernando Gonçalves em 2018, na campanha eleitoral. Suas palestras são excepcionais, com um método diferenciado que cativa o público, fazendo-o refletir sobre mudanças simples que podem surtir grandes resultados. Estive pessoalmente em três de suas palestras, todas voltadas à conscientização e crescimento profissional. Além de ser uma pessoa super carismática, Fernando tem uma técnica diferenciada de abordar seus conteúdos.',
    name: 'Eugênio Pinto',
    role: 'Ex-Prefeito de Itaúna — MG',
  },
  {
    quote: 'Uma palestra leve, mas profunda, que levanta a equipe. Nossa experiência com o palestrante foi surpreendente. A abordagem do Fernando foi de uma precisão cirúrgica, ao relatar suas adversidades profissionais e pessoais. Houve comoção, conscientização, reflexão e, como não poderia ser diferente, ótimos resultados. Nossos colaboradores se tornaram mais conscientes, responsáveis, pontuais, motivados e produtivos.',
    name: 'Fabiana Guimarães',
    role: 'Proprietária da Pérolas Recreações Infantis',
  },
  {
    quote: 'Fernando tem sua expertise fundamentada em experiências diversas ao longo de sua ampla trajetória no ramo político. Recebo consultoria no mandato e suporte para minha equipe através de suas palestras e dicas fundamentais. Recomendo seu excelente trabalho.',
    name: 'Lair Lopes',
    role: 'Vereador de Itatiaiuçu – MG',
  },
  {
    quote: 'Fernando Gonçalves é um comunicador nato. Persuasivo e influente, faz de suas palestras uma verdadeira sessão de conexão entre as pessoas. Numa dinâmica envolvente e introspectiva, leva os participantes a refletir sobre suas posturas e como ser melhores a cada dia. Após sua palestra o ambiente fica leve e os colaboradores se relacionam mais conscientemente com os colegas e superiores.',
    name: 'José Adelmo de Matos',
    role: 'Diretor Executivo da CotaPet',
  },
  {
    quote: 'Conheço o Fernando há três anos e seu trabalho tem feito a diferença em nossa empresa. Sempre que vem à fábrica, oferece algo novo, inspirador e motivador. A interação com nossos colaboradores é muito positiva. Temos colhido grandes resultados com seus conteúdos.',
    name: 'Vinícius Chaves',
    role: 'Diretor da Indústria de Pastéis Vineli — Mateus Leme/MG',
  },
  {
    quote: 'O trabalho que Fernando Gonçalves desenvolve para o Sindicato tem surtido grande efeito. Nossos associados recebem informação de alto nível numa linguagem simples como lhe é peculiar. Suas dicas e orientações têm ajudado não apenas os associados, como também nossos colaboradores e as famílias das zonas rurais.',
    name: 'Mário Sotero Borges',
    role: 'Presidente do Sindicato dos Trabalhadores Rurais — MG',
  },
  {
    quote: 'Acompanho a trajetória de Fernando Gonçalves há mais de 20 anos. Um exímio palestrante que desenvolveu seu próprio método de explanar, interagir e cativar o público. Nenhuma de suas ministrações é igual à outra. Cada uma é única. Ao contextualizar sua explanação, Fernando abre o coração e aplica estratégias que conscientizam e motivam a equipe, que corresponde com grandes resultados.',
    name: 'Dea Lúcia Maia Teixeira',
    role: 'Diretora da G7 Consultoria',
  },
  {
    quote: 'Os resultados do trabalho desenvolvido por Fernando junto à nossa ONG têm sido extremamente positivos e, em muitos aspectos, surpreendentes. Destacamos, especialmente, sua atenção, dedicação e a maneira criativa e comprometida com que conduz cada atendimento. Sua atuação agrega valor às nossas iniciativas e fortalece o propósito de nosso trabalho.',
    name: 'Vanilda Gomes da Silveira Braga',
    role: 'Presidente da ASPRAN',
  },
  {
    quote: 'Conhecer o Projeto SIMPLEX e participar das palestras conduzidas por Fernando Gonçalves representou um importante diferencial para o desenvolvimento e a motivação de nossa equipe. Com uma abordagem inovadora, dinâmica e diferenciada, o trabalho proporcionou uma nova perspectiva sobre empatia, colaboração, cooperação, resiliência e valorização profissional.',
    name: 'Paulo Matos',
    role: 'CEO da Imperium Global Group',
  },
  {
    quote: 'A metodologia utilizada por Fernando Gonçalves, através do método SIMPLEX, contribui para que os colaboradores ampliem a percepção sobre seu próprio valor, suas competências e a importância de sua contribuição para os resultados coletivos. Profissionais que reconhecem seu potencial tendem a apresentar maior engajamento, proatividade, comprometimento e produtividade.',
    name: 'Renato G. Ferreira',
    role: 'Professor da ENT Pampulha – BH',
  },
  {
    quote: 'Recomendamos o Projeto SIMPLEX e as palestras de Fernando Gonçalves com grande satisfação, especialmente às organizações que buscam fortalecer suas equipes, promover uma cultura de valorização das pessoas e estimular melhores resultados por meio do desenvolvimento humano e profissional.',
    name: 'Daniella Cardoso',
    role: 'CEO Vivara Corretora de Seguros',
  },
];

// ============================================
// LIVROS
// ============================================
export const books: Book[] = [
  {
    title: 'O Desafio Conjugal',
    description: 'Estratégias práticas e reflexões essenciais para o aprimoramento da convivência mútua e o fortalecimento dos relacionamentos.',
  },
  {
    title: 'Meu Degrau de Hoje',
    description: '365 diretrizes práticas em frases curtas de conscientização. Mensagens de alto impacto para o desenvolvimento pessoal contínuo.',
  },
  {
    title: 'Um Mendigo, Uma Órfã e Eu',
    description: 'Narrativa autobiográfica sobre resiliência na superação de grandes obstáculos e traumas, rumo ao êxito.',
  },
];

// ============================================
// FAQ (DOBRA 11)
// ============================================
export const faqItems: FAQItem[] = [
  {
    question: 'A palestra funciona para o meu segmento?',
    answer: 'Sim. Fernando já atuou em indústria, comércio, serviços, cooperativas, terceiro setor, instituições religiosas e eventos corporativos. Pelo método SIMPLEX, o conteúdo é personalizado ao perfil da sua equipe.',
  },
  {
    question: 'Quanto tempo leva até a palestra acontecer?',
    answer: 'Após o primeiro contato, a proposta personalizada é enviada em até 24h. A data do evento é combinada conforme a disponibilidade da agenda — recomendamos antecipar o agendamento.',
  },
  {
    question: 'É possível personalizar o conteúdo para minha empresa?',
    answer: 'Sim. Essa é a essência do método SIMPLEX. São considerados: perfil da organização, perfil da equipe, objetivos da contratação, tempo disponível e conteúdos prioritários.',
  },
  {
    question: 'Qual o diferencial em relação a outros palestrantes?',
    answer: 'A principal ferramenta é a própria experiência de vida do palestrante — mais de 30 anos de atuação. A abordagem parte da identificação, gera reflexão e estimula atitudes concretas de mudança. Não é apenas inspiração: é compromisso com a ação.',
  },
  {
    question: 'A palestra atende presencialmente ou online?',
    answer: 'Fernando atende em todo o Brasil, presencialmente. Para saber sobre formatos online ou híbridos, entre em contato para avaliarmos juntos a melhor opção.',
  },
  {
    question: 'Como começo?',
    answer: 'Preencha o formulário de contato ou fale diretamente pelo WhatsApp (31) 99847-5453. Nossa equipe retorna em até 24h com uma proposta personalizada.',
  },
];

// ============================================
// URGÊNCIA (DOBRA 13)
// ============================================
export const urgency = {
  title: 'Agenda limitada — garanta sua data',
  description: 'Fernando Gonçalves atende um número limitado de eventos por mês para manter a qualidade e a personalização de cada palestra. Datas de congressos, convenções e SIPAT costumam ser preenchidas com antecedência.',
  boxTitle: '📅 Antecipe o agendamento do seu evento',
  boxSubtitle: 'Entre em contato com pelo menos 30 dias de antecedência',
  costOfInaction: 'Cada mês sem resolver a desmotivação da equipe custa produtividade, clima e resultados.',
};

// ============================================
// CTA FINAL (DOBRA 14)
// ============================================
export const finalCta = {
  title: 'Sua próxima semana com uma equipe mais engajada começa com uma conversa.',
  description: 'Uma apresentação que combina: História + emoção + reflexão + interação + atitude. Proposta personalizada em até 24h · Palestras em todo o Brasil · Sem compromisso.',
  buttonText: 'Solicite Uma Palestra',
  whatsappNote: 'Ainda com dúvida? Fale diretamente pelo WhatsApp (31) 99847-5453',
};

// ============================================
// SOBRE - BIOGRAFIA
// ============================================
export const biography = {
  headerTitle: 'Uma história real. Uma experiência de vida. Uma mensagem que conecta.',
  headerSubtitle: 'Fernando Gonçalves é storyteller e palestrante motivacional desde 1992. Sua experiência nasceu muito antes dos palcos — nasceu de uma vida marcada por dificuldades, recomeços e pela necessidade de encontrar caminhos quando aparentemente não havia caminhos.',
  sectionLabel: 'Minha História',
  sectionTitle: 'Das dificuldades à decisão de não desistir',
  paragraphs: [
    'Durante a infância e adolescência, enfrentou situações extremamente adversas: problemas de saúde, extrema pobreza, bullying, violência familiar, dificuldades comportamentais e emocionais relacionadas ao TDAH e experiências traumáticas durante sua formação.',
    'Filho de um homem que enfrentou a condição de andarilho e ex-morador de rua e de uma mulher órfã que passou por experiências de extrema exploração durante a infância, Fernando cresceu conhecendo de perto realidades que poderiam facilmente produzir desesperança.',
    'Na adolescência, foi enviado para um internato, onde enfrentou humilhações e diferentes formas de violência. Apesar de tudo isso, decidiu não desistir. Essa decisão tornou-se o ponto de partida de uma trajetória construída com resiliência, perseverança, paciência, otimismo, disposição para recomeçar e, principalmente, responsabilidade pelas próprias escolhas.',
    'Hoje, Fernando transforma essa experiência em conteúdo, reflexão e inspiração para pessoas que precisam recuperar a disposição para seguir em frente. Mais do que contar uma história, Fernando utiliza sua história para provocar novas histórias.',
  ],
};

// ============================================
// SOBRE - TIMELINE
// ============================================
export const timeline = [
  {
    year: 'Infância',
    title: 'Primeiros desafios',
    description: 'Problemas de saúde, extrema pobreza, bullying, violência familiar, dificuldades comportamentais e emocionais relacionadas ao TDAH e experiências traumáticas durante a formação.',
  },
  {
    year: 'Adolescência',
    title: 'Internato e superação',
    description: 'Enviado para um internato, enfrentou humilhações e diferentes formas de violência. Estudou inicialmente até a antiga 6ª série. Apesar de tudo, decidiu não desistir.',
  },
  {
    year: 'Retomada',
    title: 'Volta aos estudos',
    description: 'Anos mais tarde, decidiu retomar os estudos, prestou o ENEM e concluiu o ensino médio. Ingressou posteriormente em um curso superior de Marketing, mas direcionou sua carreira para a comunicação visual e para a comunicação com pessoas.',
  },
  {
    year: '1992',
    title: 'Início como palestrante',
    description: 'Foi em pequenas reuniões e encontros religiosos que começou a desenvolver sua experiência como palestrante. Até que, em determinado momento, simplesmente contou sua própria história a um grupo de pessoas. A reação foi surpreendente.',
  },
  {
    year: 'Década de 1990',
    title: 'Experiência corporativa',
    description: 'Atuou como coordenador de treinamento motivacional de uma das maiores empresas de assistência médica do Brasil, desenvolvendo atividades em Belo Horizonte e em diversas cidades de Minas Gerais.',
  },
  {
    year: 'Evolução',
    title: 'Os convites começaram a surgir',
    description: 'Algumas pessoas se identificaram com suas experiências e passaram a aplicar em suas próprias vidas atitudes que Fernando havia desenvolvido ao longo de sua trajetória: resiliência, perseverança, paciência, otimismo, coragem para recomeçar e responsabilidade pelas próprias escolhas.',
  },
  {
    year: 'Hoje',
    title: '+30 anos transformando vidas',
    description: 'Uma carreira construída não apenas sobre conhecimento teórico, mas sobre experiência, observação, relacionamento humano e vivência prática. Mais de três décadas dedicadas à comunicação, ao desenvolvimento humano e à motivação.',
  },
];

// ============================================
// SOBRE - EXPERIÊNCIA PROFISSIONAL
// ============================================
export const professionalExperience = [
  { title: 'Palestras motivacionais', description: 'Para empresas da indústria, comércio e serviços.' },
  { title: 'Treinamentos para equipes de vendas', description: 'Motivação, atitude, perseverança, relacionamento e foco em resultados.' },
  { title: 'Treinamentos para cooperados', description: 'Grupos de cooperados e associações.' },
  { title: 'Instituições religiosas e terceiro setor', description: 'Igrejas, grupos, ministérios, ONGs, associações e projetos sociais.' },
  { title: 'Grupos familiares', description: 'Encontros, eventos e momentos de reflexão.' },
  { title: 'Eventos motivacionais e políticos', description: 'Congressos, convenções, encontros corporativos e grupos ligados à atividade política.' },
];

export const experienceQuote = 'Conhecer os dois lados da relação profissional faz diferença. Fernando entende que motivação não acontece isoladamente. Ela está relacionada ao ambiente, às relações, à liderança, ao reconhecimento, à comunicação e, principalmente, à maneira como cada pessoa percebe seu papel dentro de um grupo.';

// ============================================
// SOBRE - DIFERENCIAIS
// ============================================
export const differentials = [
  { icon: '★', title: 'Uma história verdadeira', description: 'A principal ferramenta de Fernando é sua própria experiência de vida.' },
  { icon: '★', title: '+30 anos de atuação', description: 'Experiência como palestrante desde 1992.' },
  { icon: '★', title: 'Experiência corporativa', description: 'Atuação junto a empresas e equipes de diferentes segmentos.' },
  { icon: '★', title: 'Vivência dos dois lados', description: 'Experiência tanto como colaborador quanto como gestor.' },
  { icon: '★', title: 'Identificação com o público', description: 'A abordagem parte da realidade de uma pessoa comum enfrentando desafios reais.' },
  { icon: '★', title: 'Interatividade', description: 'Dinâmicas, participação do público, brincadeiras e atividades práticas.' },
  { icon: '★', title: 'Personalização', description: 'O conteúdo pode ser adaptado ao perfil e aos objetivos de cada contratante.' },
  { icon: '★', title: 'Foco em atitude', description: 'A palestra não termina na inspiração. O participante é estimulado a definir atitudes concretas para começar a mudança.' },
];

// ============================================
// SOBRE - CONHECIMENTOS
// ============================================
export const knowledgeAreas = [
  'Relações Humanas',
  'Comunicação Interpessoal',
  'Gerenciamento de Equipes',
  'Oratória',
  'Liderança Organizacional',
  'Análise Comportamental',
  'Comunicação Eleitoral',
  'Assessoria Parlamentar',
];

export const additionalSkills = 'Além de proficiência técnica e criativa em Design Gráfico, Design Digital, Redação e Produção de Mídias.';

// ============================================
// PALESTRAS - MÉTODO
// ============================================
export const palestrasMethod = {
  headerTitle: 'Motivação que começa pela identificação',
  headerSubtitle: 'Para tocar as pessoas, é preciso falar com elas — e não apenas para elas. Fernando não se apresenta como alguém que possui uma fórmula mágica. Ele se apresenta como alguém que também enfrentou limitações, dificuldades e circunstâncias adversas.',
  sectionLabel: 'O Método',
  sectionTitle: 'Conexão, reflexão e atitude',
  paragraphs: [
    'Essa identificação cria uma conexão natural com os participantes. Durante a palestra, sua história serve como ponto de partida para uma reflexão sobre escolhas, comportamento, relacionamentos, responsabilidade, resiliência e capacidade de mudança.',
    'O objetivo não é simplesmente emocionar. É provocar reflexão e transformar reflexão em atitude. A partir de situações reais vivenciadas pelo próprio palestrante, os participantes são estimulados a identificar suas próprias limitações e pensar em estratégias possíveis para melhorar sua relação consigo mesmos, com as pessoas e com os ambientes onde vivem e trabalham.',
  ],
};

// ============================================
// PALESTRAS - MÓDULOS DETALHADOS
// ============================================
export const detailedModules = [
  {
    tag: 'Módulo 1',
    title: 'A História',
    description: 'Fernando apresenta os principais momentos de sua trajetória. Uma história real de dificuldades, quedas, recomeços e superação. O objetivo é criar identificação com os participantes e demonstrar, por meio de experiências concretas, que adversidades não precisam representar o ponto final de uma trajetória.',
  },
  {
    tag: 'Módulo 2',
    title: 'As Estratégias',
    description: 'Depois da história, vem a reflexão: O que foi feito para mudar essa realidade? Fernando apresenta atitudes e estratégias desenvolvidas ao longo de sua vida para enfrentar situações limitantes. São trabalhados temas como:',
    topics: [
      'Resiliência e Perseverança',
      'Autoconhecimento e Responsabilidade pessoal',
      'Paciência e Otimismo',
      'Capacidade de adaptação e Recomeços',
      'Relacionamento interpessoal',
      'Mudança de atitudes e Superação de limitações',
    ],
    conclusion: 'A proposta é levar os participantes a compreender que pequenas mudanças de comportamento podem produzir transformações significativas na vida pessoal e profissional.',
  },
  {
    tag: 'Módulo 3',
    title: 'Reflexão e Autoconscientização',
    description: 'O terceiro momento é construído com a participação direta do público. Os participantes recebem um formulário com perguntas estratégicas que estimulam uma análise individual sobre comportamento e convivência. Entre as reflexões propostas:',
    topics: [
      'Posso ser uma pessoa melhor para aqueles que fazem parte da minha vida? Família, amigos, colegas, vizinhos e demais pessoas do meu convívio.',
      'Posso contribuir para melhorar os ambientes onde vivo? Minha casa, meu trabalho, minha comunidade, minha escola, meu bairro e outros espaços de convivência.',
      'Se posso melhorar, por que ainda não fiz isso?',
      'Quais três atitudes concretas posso tomar para começar essa mudança?',
    ],
    conclusion: 'Os participantes são convidados a estabelecer metas e determinar uma data para colocá-las em prática. O propósito é transformar a palestra em um compromisso pessoal com a mudança.',
  },
];

// ============================================
// PALESTRAS - INTERAÇÃO
// ============================================
export const interaction = {
  label: 'Interação',
  title: 'Uma palestra para participar, não apenas assistir',
  paragraphs: [
    'Motivação não precisa ser sinônimo de formalidade excessiva. Durante as apresentações, são utilizadas dinâmicas interativas, momentos de descontração, brincadeiras e sorteios de brindes. Esses recursos ajudam a criar um ambiente mais leve, aproximar o palestrante dos participantes e reduzir as barreiras naturais existentes em apresentações corporativas.',
    'A interação também favorece a participação do público e contribui para que os conceitos apresentados sejam vivenciados de maneira prática. O objetivo é criar conexão.',
  ],
  quote: '"Porque uma mensagem pode ser ouvida. Mas uma experiência pode ser lembrada."',
};

// ============================================
// PALESTRAS - PÚBLICO
// ============================================
export const audiences = [
  { title: 'Empresas', description: 'Indústria, comércio e serviços.' },
  { title: 'Equipes profissionais', description: 'Colaboradores, gestores, equipes administrativas e operacionais.' },
  { title: 'Equipes de vendas', description: 'Motivação, atitude, perseverança, relacionamento e foco em resultados.' },
  { title: 'Terceiro setor', description: 'ONGs, associações, projetos sociais e instituições.' },
  { title: 'Instituições religiosas', description: 'Igrejas, grupos e ministérios.' },
  { title: 'Grupos familiares', description: 'Encontros, eventos e momentos de reflexão.' },
  { title: 'Eventos', description: 'Congressos, convenções, encontros corporativos e eventos motivacionais.' },
];

// ============================================
// PALESTRAS - RESULTADOS
// ============================================
export const results = [
  { title: 'Mais disposição', description: 'Colaboradores mais envolvidos e dispostos a participar.' },
  { title: 'Mais consciência', description: 'Profissionais estimulados a refletir sobre suas atitudes e responsabilidades.' },
  { title: 'Mais motivação', description: 'Recuperação do entusiasmo e da disposição para enfrentar desafios.' },
  { title: 'Melhor relacionamento', description: 'Reflexão sobre convivência, comunicação e respeito.' },
  { title: 'Mais produtividade', description: 'Pessoas mais conscientes e comprometidas podem contribuir para um ambiente profissional mais produtivo.' },
  { title: 'Melhores resultados', description: 'Uma equipe mais engajada pode contribuir para o desempenho e os resultados da organização.' },
];

export const resultsQuote = '"Motivação não substitui gestão, planejamento ou estratégia. Mas pode ajudar pessoas a reencontrarem o propósito necessário para colocar tudo isso em prática."';

// ============================================
// CONTATO - INFORMAÇÕES
// ============================================
export const contactInfo: ContactInfo[] = [
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '(31) 99847-5453',
  },
  {
    icon: '@',
    label: 'E-mail',
    value: 'contato@fernandosimplex.com.br',
  },
  {
    icon: 'LOC',
    label: 'Localização',
    value: 'Belo Horizonte, MG — Brasil',
    details: ['Atendemos eventos em todo o Brasil.'],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', handle: '@fernandosimplex' },
  { platform: 'Facebook', handle: 'Fernando Simplex' },
  { platform: 'TikTok', handle: '@fernandosimplex' },
  { platform: 'YouTube', handle: '@FernandoSimplexCanal' },
];

// ============================================
// CONTATO - FORMULÁRIO
// ============================================
export const contactForm = {
  sectionLabel: 'Solicite uma Proposta',
  title: 'Preencha os dados abaixo',
  subtitle: 'Informe os dados do evento e nossa equipe entrará em contato para apresentar a melhor proposta.',
  submitButton: 'Solicitar Proposta',
};

// ============================================
// CONTATO - CTA FINAL
// ============================================
export const contactCta = {
  title: 'Pronto para transformar sua equipe?',
  description: 'Uma apresentação que combina: História + emoção + reflexão + interação + atitude.',
  buttonText: 'Falar pelo WhatsApp',
  whatsappUrl: 'https://wa.me/5531998475453',
};
