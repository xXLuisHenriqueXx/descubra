import {
  Atom,
  BadgePlus,
  BatteryCharging,
  BookText,
  Bot,
  BrainCircuit,
  BrainCog,
  Brush,
  Bus,
  ChartNoAxesCombined,
  ChartPie,
  ClipboardPenLine,
  CloudCog,
  CodeSquare,
  Coins,
  Droplet,
  Earth,
  Factory,
  FileAudio,
  FlaskConical,
  Fuel,
  Gamepad2,
  Handshake,
  HardHat,
  Laptop,
  Layers,
  Leaf,
  Lightbulb,
  Music,
  Palette,
  PencilRuler,
  PhoneCall,
  Plane,
  Recycle,
  Rocket,
  Satellite,
  Settings,
  Sprout,
  SquarePlus,
  TestTube,
  UserCog,
  Wallpaper,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface IAffinity {
  id: string;
  title: string;
  Icon: LucideIcon;
}

// interface IAction {
//   id: string;
//   title: string;
//   Icon: LucideIcon;
// }

export interface ICourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  dcg: string;
  acg: string;
  extension: string;
  affinities: IAffinity[];
  actions: string[];
}

interface IAdvantage {
  id: string;
  title: string;
  Icon: LucideIcon;
}

interface IChallenge {
  id: string;
  title: string;
}

export interface ICourses {
  id: string;
  title: string;
  introduction: string;
  service: string;
  advantages: IAdvantage[];
  challenges: IChallenge[];
  icon: LucideIcon;
  color: string;
  courses: ICourse[];
}

export const CoursesData: ICourses[] = [
  {
    id: "process",
    title: "Processos e Produtividade",
    introduction:
      "A área de Processos e Produtividade, que abrange os cursos de Engenharia Química e Engenharia de Produção, é essencial para a transformação eficiente de recursos em produtos de alto valor agregado. Profissionais desta área são responsáveis pelo desenvolvimento, otimização e gestão de processos produtivos, desde a fabricação de materiais químicos até a implementação de sistemas de gestão industrial.",
    service:
      "Desenvolvimento, otimização e gestão de processos produtivos, da fabricação de materiais químicos até a implementação de sistemas de gestão industrial.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
      {
        id: "advantage-4",
        title: "Inovação e eficiência",
        Icon: Lightbulb,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Tecnologia e Inovação (Nanotecnologia, IA e Biotecnologia)",
      },
      {
        id: "challenge-2",
        title: "Sustentabilidade e Meio Ambiente",
      },
      {
        id: "challenge-3",
        title: "Indústria 4.0 e Manufatura Inteligente",
      },
    ],
    icon: Settings,
    color: "process",
    courses: [
      {
        id: "process-1",
        title: "Engenharia da Produção",
        description:
          "Concentra-se na otimização de sistemas produtivos e na gestão eficiente de recursos, processos e pessoas. Profissionais desta área atuam em setores como manufatura, logística, qualidade e gestão de operações, buscando melhorar a produtividade e reduzir custos.",
        duration: "10 semestres",
        dcg: "180 horas",
        acg: "120 horas",
        extension: "415 horas",
        affinities: [
          {
            id: "affinity-1",
            title: "Controle de Qualidade",
            Icon: ClipboardPenLine,
          },
          { id: "affinity-2", title: "Gestão", Icon: UserCog },
          { id: "affinity-3", title: "Matemática", Icon: SquarePlus },
          { id: "affinity-4", title: "Otimização", Icon: ChartNoAxesCombined },
          {
            id: "affinity-5",
            title: "Processos Industriais e Organizacionais",
            Icon: Factory,
          },
        ],
        actions: [
          "Análise de Dados e Sistemas de Informação",
          "Economia e Finanças",
          "Ergonomia e Segurança do Trabalho",
          "Gestão de Projetos",
          "Gestão de Qualidade",
          "Logística e Cadeia de Suprimentos",
          "Otimização de Processos",
          "Planejamento e Controle da Produção",
          "Sustentabilidade e Responsabilidade Social",
          "Tecnologia e Inovação",
        ],
      },
      {
        id: "process-2",
        title: "Engenharia Química",
        description:
          "Foca na concepção, desenvolvimento e operação de processos químicos industriais. Engenheiros químicos trabalham na produção de produtos químicos, materiais, combustíveis e alimentos, além de desenvolverem tecnologias para tratamento de água e controle de poluição.",
        duration: "10 semestres",
        dcg: "270 horas",
        acg: "60 horas",
        extension: "430 horas",
        affinities: [
          { id: "affinity-1", title: "Biocombustíveis", Icon: Fuel },
          { id: "affinity-2", title: "Biologia", Icon: Sprout },
          { id: "affinity-3", title: "Biotecnologia", Icon: FlaskConical },
          { id: "affinity-4", title: "Ecologia", Icon: Leaf },
          { id: "affinity-5", title: "Física", Icon: Atom },
          { id: "affinity-6", title: "Materiais", Icon: Layers },
          { id: "affinity-7", title: "Processos Industriais", Icon: Factory },
          { id: "affinity-8", title: "Química", Icon: TestTube },
        ],
        actions: [
          "Controle e Automação de Processos",
          "Desenvolvimento de Processos",
          "Otimização e Operação de Plantas Industriais",
          "Projetos e Consultoria",
          "Sustentabilidade e Gestão Ambiental",
        ],
      },
    ],
  },

  {
    id: "ecosystem",
    title: "Ambientes e Ecossistemas",
    introduction:
      "A área de Ambientes e Ecossistemas, abrangendo os cursos de Arquitetura e Urbanismo, Engenharia Civil, Engenharia Sanitária e Ambiental e Engenharia Acústica, desempenha um papel fundamental na criação e manutenção de ambientes sustentáveis e funcionais. Profissionais dessa área são responsáveis por projetar e construir estruturas que atendem às necessidades da sociedade, enquanto preservam e protegem o meio ambiente.",
    service:
      "Trabalha com a criação e manutenção de ambientes sustentáveis e funcionais que atendam às necessidades da sociedade enquanto preservam a natureza.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Urbanização",
      },
      {
        id: "challenge-2",
        title: "Sustentabilidade",
      },
      {
        id: "challenge-3",
        title: "Mudanças climáticas",
      },
      {
        id: "challenge-4",
        title: "Crescimento populacional",
      },
      {
        id: "challenge-5",
        title: "Inovação e competitividade",
      },
    ],
    icon: Sprout,
    color: "ecosystem",
    courses: [
      {
        id: "ecosystem-1",
        title: "Arquitetura e Urbanismo",
        description:
          "Foca no planejamento e design de edifícios e espaços urbanos, integrando funcionalidade, estética e sustentabilidade.",
        duration: "10 semestres",
        dcg: "150 horas",
        acg: "390 horas",
        extension: "0 horas",
        affinities: [
          { id: "affinity-1", title: "Arte", Icon: Palette },
          { id: "affinity-2", title: "Construção Civil", Icon: HardHat },
          { id: "affinity-3", title: "Desenho", Icon: Brush },
          { id: "affinity-4", title: "Design", Icon: Wallpaper },
          { id: "affinity-5", title: "História", Icon: BookText },
          { id: "affinity-6", title: "Matemática", Icon: SquarePlus },
        ],
        actions: [
          "Avaliação e Análise",
          "Concepção e projeto",
          "Consultoria e Atendimento ao Cliente",
          "Documentação e Regulamentação",
          "Gestão e Supervisão",
          "Inovação e Desenvolvimento",
          "Planejamento e Coordenação",
        ],
      },
      {
        id: "ecosystem-2",
        title: "Engenharia Acústica",
        description:
          "Trabalha com o controle e melhoria da qualidade sonora em ambientes internos e externos, reduzindo a poluição sonora e melhorando o conforto acústico.",
        duration: "10 semestres",
        dcg: "180 horas",
        acg: "60 horas",
        extension: "365 horas",
        affinities: [
          { id: "affinity-1", title: "Física", Icon: Atom },
          { id: "affinity-2", title: "Matemática", Icon: SquarePlus },
          { id: "affinity-3", title: "Música", Icon: Music },
          { id: "affinity-4", title: "Tecnologias de Áudio", Icon: FileAudio },
        ],
        actions: [
          "Acústica Ambiental",
          "Acústica Arquitetônica",
          "Acústica de Edificações",
          "Acústica Submarina",
          "Consultoria Acústica",
          "Engenharia de Áudio e Som",
          "Pesquisa e Desenvolvimento",
          "Projetos de Controle de Ruído",
        ],
      },
      {
        id: "ecosystem-3",
        title: "Engenharia Ambiental e Sanitária",
        description:
          "Dedica-se à gestão de recursos naturais e ao desenvolvimento de sistemas que protejam o meio ambiente e promovam a saúde pública.",
        duration: "10 semestres",
        dcg: "180 horas",
        acg: "65 horas",
        extension: "345 horas",
        affinities: [
          { id: "affinity-1", title: "Biologia", Icon: Sprout },
          { id: "affinity-2", title: "Ecologia", Icon: Leaf },
          { id: "affinity-3", title: "Química", Icon: TestTube },
          {
            id: "affinity-4",
            title: "Tecnologias Sustentáveis",
            Icon: Recycle,
          },
        ],
        actions: [
          "Abastecimento de Água e Tratamento de Efluentes",
          "Avaliação de Impacto Ambiental",
          "Controle da Poluição",
          "Educação e Consultoria",
          "Gestão de Resíduos Sólidos",
          "Gestão de Recursos Hídricos",
          "Pesquisa e Desenvolvimento",
          "Regulamentação e Conformidade",
          "Supervisão e Manutenção de Sistemas",
          "Sustentabilidade e Energias Renováveis",
        ],
      },
      {
        id: "ecosystem-4",
        title: "Engenharia Cívil",
        description:
          "Envolve o projeto, construção e manutenção de infraestruturas como estradas, pontes, edifícios e sistemas de água e esgoto.",
        duration: "10 semestres",
        dcg: "150 horas",
        acg: "65 horas",
        extension: "360 horas",
        affinities: [
          { id: "affinity-1", title: "Construção Civil", Icon: HardHat },
          { id: "affinity-2", title: "Estradas e Transportes", Icon: Bus },
          { id: "affinity-3", title: "Física", Icon: Atom },
          { id: "affinity-4", title: "Hidráulica", Icon: Droplet },
          { id: "affinity-5", title: "Matemática", Icon: SquarePlus },
        ],
        actions: [
          "Avaliação e Análises",
          "Conformidade com Regulamentos",
          "Consultoria e Atendimento ao Cliente",
          "Gerenciamento de Construção",
          "Gestão de Projetos",
          "Manutenção e Inspeção",
          "Planejamento e Projetos",
          "Pesquisa e Desenvolvimento",
        ],
      },
    ],
  },

  {
    id: "energy",
    title: "Energia e Comunicação",
    introduction:
      "A área de Energia, Controle e Telecom, abrangendo os cursos de Engenharia Elétrica, Engenharia de Controle e Automação e Engenharia de Telecomunicações, é fundamental para o avanço tecnológico e a conectividade global. Profissionais desta área são responsáveis por desenvolver e manter sistemas de energia, automação industrial e comunicação, que são essenciais para a infraestrutura moderna e a sociedade digital.",
    service:
      "Desenvolver e manter sistemas de energia, automação industrial e comunicação, que são essenciais para a infraestrutura moderna e a sociedade digital.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
      {
        id: "advantage-4",
        title: "Inovação e conectividade",
        Icon: Lightbulb,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Integração de Tecnologias Emergentes",
      },
      {
        id: "challenge-2",
        title: "Transição para Energias Renováveis",
      },
      {
        id: "challenge-3",
        title: "5G e Além",
      },
    ],
    icon: Zap,
    color: "energy",
    courses: [
      {
        id: "energy-1",
        title: "Engenharia de Controle e Automação",
        description:
          "Dedica-se ao desenvolvimento de sistemas automatizados para aumentar a eficiência e precisão em processos industriais e comerciais. Envolve o uso de tecnologia avançada para controle e automação de máquinas e processos.",
        duration: "10 semestres",
        dcg: "240 horas",
        acg: "60 horas",
        extension: "420 horas",
        affinities: [
          { id: "affinity-1", title: "Eletromecânica", Icon: BrainCog },
          { id: "affinity-2", title: "Eletrônica", Icon: BatteryCharging },
          { id: "affinity-3", title: "Física", Icon: Atom },
          { id: "affinity-4", title: "Matemática", Icon: SquarePlus },
          { id: "affinity-5", title: "Programação", Icon: CodeSquare },
          { id: "affinity-6", title: "Robótica", Icon: Bot },
        ],
        actions: [
          "Automação Industrial",
          "Educação e Treinamento",
          "Eficiência Energética e Sustentabilidade",
          "Implementação de Sistemas de Automação",
          "Integração de Tecnologias Emergentes",
          "Manutenção e Otimização de Sistemas",
          "Pesquisa e Desenvolvimento",
          "Projeto e Desenvolvimento de Sistemas de Controle",
          "Projetos de Engenharia",
          "Segurança e Confiabilidade",
        ],
      },
      {
        id: "energy-2",
        title: "Engenharia de Telecomunicações",
        description:
          "Envolve o projeto, implementação e manutenção de sistemas de comunicação, como redes de telecomunicações, internet, telefonia e sistemas de satélite.",
        duration: "10 semestres",
        dcg: "120 horas",
        acg: "60 horas",
        extension: "390 horas",
        affinities: [
          { id: "affinity-1", title: "Telecomunicações", Icon: PhoneCall },
          { id: "affinity-2", title: "Redes", Icon: Wifi },
          { id: "affinity-3", title: "TI", Icon: CloudCog },
          { id: "affinity-4", title: "Física", Icon: Atom },
          { id: "affinity-5", title: "Matemática", Icon: SquarePlus },
        ],
        actions: [
          "Consultoria e Gestão de Projetos",
          "Desenvolvimento de Software",
          "Educação e Treinamento",
          "Implementação de Redes",
          "Manutenção e Suporte Técnico",
          "Pesquisa e Desenvolvimento",
          "Projeto de Sistemas de Comunicação",
          "Protocolos e Padrões de Comunicação",
          "Segurança de Redes",
          "Tecnologias de Transmissão",
        ],
      },
      {
        id: "energy-3",
        title: "Engenharia de Elétrica",
        description:
          "Foca no estudo e aplicação da eletricidade, eletrônica e eletromagnetismo. Os engenheiros eletricistas trabalham com geração, transmissão e distribuição de energia elétrica, bem como com sistemas eletrônicos.",
        duration: "10 semestres",
        dcg: "195 horas",
        acg: "60 horas",
        extension: "296 horas",
        affinities: [
          { id: "affinity-1", title: "Eletrônica", Icon: BatteryCharging },
          { id: "affinity-2", title: "Eletrotécnica", Icon: BatteryCharging },
          { id: "affinity-3", title: "Física", Icon: Atom },
          { id: "affinity-4", title: "Matemática", Icon: SquarePlus },
        ],
        actions: [
          "Consultoria e Auditoria Técnica",
          "Instalação e Manutenção",
          "Pesquisa e Desenvolvimento (P&D)",
          "Projeto e Desenvolvimento de Sistemas",
        ],
      },
    ],
  },

  {
    id: "project",
    title: "Projeto e Fabricação",
    introduction:
      "A área de Projeto e Fabricação, que abrange os cursos de Engenharia Mecânica e Engenharia Aeroespacial, é fundamental para o avanço tecnológico e industrial. Profissionais desta área são responsáveis pelo desenvolvimento, design e manutenção de sistemas, máquinas e aeronaves que sustentam a infraestrutura e a mobilidade moderna.",
    service:
      "Desenvolvimento, design e manutenção de sistemas, máquinas e aeronaves que sustentam a infraestrutura e a mobilidade moderna. A área é fundamental para o avanço tecnológico e industrial.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
      {
        id: "advantage-4",
        title: "Inovação e soluções tecnológicas",
        Icon: Lightbulb,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Materiais Avançados",
      },
      {
        id: "challenge-2",
        title: "Sustentabilidade",
      },
      {
        id: "challenge-3",
        title: "Eficiência Energética",
      },
      {
        id: "challenge-4",
        title: "Aeronaves Supersônicas e Hipersônicas",
      },
      {
        id: "challenge-5",
        title: "Exploração Espacial",
      },
    ],
    icon: PencilRuler,
    color: "project",
    courses: [
      {
        id: "project-1",
        title: "Engenharia Aeroespacial",
        description:
          "Dedica-se ao design, construção e manutenção de aeronaves e sistemas espaciais. Este campo abrange desde aviões comerciais e militares até satélites e sondas espaciais, sendo crucial para a exploração e comunicação global.",
        duration: "10 semestres",
        dcg: "180 horas",
        acg: "60 horas",
        extension: "385 horas",
        affinities: [
          { id: "affinity-1", title: "Aeronaves", Icon: Plane },
          { id: "affinity-2", title: "Física", Icon: Atom },
          { id: "affinity-3", title: "Foguetes", Icon: Rocket },
          { id: "affinity-4", title: "Matemática", Icon: SquarePlus },
          { id: "affinity-5", title: "Satélites", Icon: Satellite },
        ],
        actions: [
          "Aerodinâmica",
          "Estruturas",
          "Gestão de Projetos",
          "Manutenção e Inspeção",
          "Pesquisa e Inovação",
          "Planejamento e Desenvolvimento",
          "Propulsão",
          "Sistemas de Controle e Estabilidade",
          "Testes e Certificação",
        ],
      },
      {
        id: "project-2",
        title: "Engenharia Mecânica",
        description:
          "Envolve o projeto, fabricação e manutenção de máquinas e sistemas mecânicos. Profissionais desta área trabalham em setores variados, como automotivo, energia, robótica e manufatura, desenvolvendo tecnologias que melhoram a eficiência e a funcionalidade dos produtos.",
        duration: "10 semestres",
        dcg: "270 horas",
        acg: "60 horas",
        extension: "425 horas",
        affinities: [
          { id: "affinity-1", title: "Análise e Simulação", Icon: ChartPie },
          { id: "affinity-2", title: "Física", Icon: Atom },
          { id: "affinity-3", title: "Inovação e Tecnologia", Icon: BadgePlus },
          { id: "affinity-4", title: "Manufatura e Produção", Icon: Factory },
          { id: "affinity-5", title: "Matemática", Icon: SquarePlus },
          {
            id: "affinity-6",
            title: "Sustentabilidade e Energia",
            Icon: Recycle,
          },
        ],
        actions: [
          "Aerodinâmica",
          "Estruturas",
          "Gestão de Projetos",
          "Manutenção e Inspeção",
          "Pesquisa e Inovação",
          "Planejamento e Desenvolvimento",
          "Testes e Certificação",
        ],
      },
    ],
  },

  {
    id: "tech",
    title: "Tecnologia da Informação",
    introduction:
      "A área de Tecnologia da Informação (TI), que abrange os cursos de Sistemas de Informação, Ciência da Computação e Engenharia de Computação, é crucial para o desenvolvimento e manutenção do mundo digital em que vivemos. Profissionais desta área são os arquitetos do futuro, desenvolvendo software, sistemas e redes que impulsionam a inovação e a eficiência em todos os setores da economia.",
    service:
      "Desenvolvimento e manutenção de softwares, sistemas e redes que impulsionam a inovação e a eficiência em todos os setores da economia.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
      {
        id: "advantage-4",
        title: "Inovação e soluções tecnológicas",
        Icon: Lightbulb,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Análise de Dados",
      },
      {
        id: "challenge-2",
        title: "Computação Quântica",
      },
      {
        id: "challenge-3",
        title: "Sistemas Autônomos",
      },
      {
        id: "challenge-4",
        title: "Privacidade",
      },
      {
        id: "challenge-5",
        title: "Segurança da Informação",
      },
      {
        id: "challenge-6",
        title: "Big Data",
      },
    ],
    icon: CodeSquare,
    color: "tech",
    courses: [
      {
        id: "tech-1",
        title: "Ciência da Computação",
        description:
          "Dedica-se à teoria, desenvolvimento e aplicação de algoritmos e estruturas de dados. Englobando desde a programação e desenvolvimento de software até inteligência artificial e segurança cibernética.",
        duration: "8 semestres",
        dcg: "480 horas",
        acg: "150 horas",
        extension: "330 horas",
        affinities: [
          { id: "affinity-1", title: "Computadores", Icon: Laptop },
          { id: "affinity-2", title: "Jogos Eletrônicos", Icon: Gamepad2 },
          { id: "affinity-3", title: "Lógica", Icon: BrainCircuit },
          { id: "affinity-4", title: "Matemática", Icon: SquarePlus },
          { id: "affinity-5", title: "Programação", Icon: CodeSquare },
        ],
        actions: [
          "Administração de Banco de Dados",
          "Análise de Sistemas",
          "Desenvolvimento de Software",
          "Gestão de Projetos de TI",
          "Inteligência Artificial e Machine Learning",
          "Redes de Computadores e Infraestrutura de TI",
          "Segurança da Informação",
        ],
      },
      {
        id: "tech-2",
        title: "Engenharia da Computação",
        description:
          "Combina conhecimentos de hardware e software para criar sistemas de computação integrados. Envolve o design e desenvolvimento de computadores, sistemas embarcados e redes de comunicação.",
        duration: "10 semestres",
        dcg: "120 horas",
        acg: "60 horas",
        extension: "330 horas",
        affinities: [
          { id: "affinity-1", title: "Computadores", Icon: Laptop },
          { id: "affinity-2", title: "Eletrônica", Icon: BatteryCharging },
          { id: "affinity-3", title: "Lógica", Icon: BrainCircuit },
          { id: "affinity-4", title: "Matemática", Icon: SquarePlus },
          { id: "affinity-5", title: "Programação", Icon: CodeSquare },
        ],
        actions: [
          "Consultoria e Treinamento",
          "Desenvolvimento de Software",
          "Design e Desenvolvimento de Hardware",
          "Pesquisa e Desenvolvimento",
          "Redes de Computadores e Telecomunicações",
          "Robótica e Automação",
          "Sistemas Embarcados",
          "Testes e Manutenção",
        ],
      },
      {
        id: "tech-3",
        title: "Sistemas de Informação",
        description:
          "Foca no estudo e desenvolvimento de sistemas que coletam, armazenam e analisam dados, facilitando a tomada de decisões nas organizações. Profissionais desta área atuam na gestão de projetos de TI, análise de sistemas e suporte a usuários.",
        duration: "8 semestres",
        dcg: "480 horas",
        acg: "300 horas",
        extension: "0 horas",
        affinities: [
          { id: "affinity-1", title: "Computadores", Icon: Laptop },
          { id: "affinity-2", title: "Jogos Eletrônicos", Icon: Gamepad2 },
          { id: "affinity-3", title: "Lógica", Icon: BrainCircuit },
          { id: "affinity-4", title: "Matemática", Icon: SquarePlus },
          { id: "affinity-5", title: "Programação", Icon: CodeSquare },
        ],
        actions: [
          "Análise de Sistemas",
          "Consultoria e Suporte Técnico",
          "Desenvolvimento e Gerenciamento de Aplicativos Web e Móveis",
          "Desenvolvimento de Software",
          "Gerenciamento de Redes e Infraestrutura",
          "Gestão de Banco de Dados",
          "Gestão de TI",
          "Segurança da Informação",
        ],
      },
    ],
  },
];
