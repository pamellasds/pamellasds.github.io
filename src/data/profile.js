export const profile = {
  name: 'Pamella Soares, PhD',
  fullName: 'Pamella Soares de Sousa, PhD',
  title: 'Blockchain Developer & Researcher',
  location: 'Fortaleza, Ceará, Brazil',
  photo: 'pamella.jpeg',

  summary: {
    pt: 'Desenvolvedora blockchain e pesquisadora com mais de 6 anos construindo smart contracts e aplicações descentralizadas com Solidity, JavaScript e TypeScript. Doutora em Ciência da Computação (2026), com pesquisa em Blockchain Developer Experience publicada em MSR, SBES e IEEE/ACM CHASE. Na indústria, atua em blockchain e smart contracts (contratos, API e testes) e liderou entregas para governo e empresas.',
    en: 'Blockchain developer and researcher with 6+ years building smart contracts and decentralized applications with Solidity, JavaScript, and TypeScript. PhD in Computer Science (2026), with research on blockchain developer experience published at MSR, SBES and IEEE/ACM CHASE. In industry, works on blockchain and smart contracts (contracts, API and tests) and has led deliveries for government and enterprise.',
  },

  heroIndustry: {
    pt: 'Desenvolvedora blockchain e pesquisadora com mais de 6 anos construindo smart contracts e aplicações descentralizadas com Solidity, JavaScript e TypeScript. Na indústria, atua em blockchain e smart contracts (contratos, API e testes) e liderou entregas para governo e empresas.',
    en: 'Blockchain developer and researcher with 6+ years building smart contracts and decentralized applications with Solidity, JavaScript, and TypeScript. In industry, works on blockchain and smart contracts (contracts, API and tests) and has led deliveries for government and enterprise.',
  },

  heroResearch: {
    pt: 'Doutora em Ciência da Computação (2026), com pesquisa em Blockchain Developer Experience publicada em MSR, SBES e IEEE/ACM CHASE. Foco em engenharia de software orientada a blockchain, métodos empíricos e aspectos humanos de sistemas on-chain.',
    en: 'PhD in Computer Science (2026), with research on blockchain developer experience published at MSR, SBES and IEEE/ACM CHASE. Focused on Blockchain-Oriented Software Engineering, empirical methods, and the human aspects of building on-chain systems.',
  },

  education: [
    {
      degree: {
        pt: 'Doutorado em Ciência da Computação (Engenharia de Software)',
        en: 'Ph.D. in Computer Science (Software Engineering)',
      },
      institution: {
        pt: 'Universidade Estadual do Ceará (UECE)',
        en: 'State University of Ceará (UECE)',
      },
      period: 'Mar 2022 - Sep 2026',
      note: {
        pt: 'Tese: A Multidimensional Framework for Blockchain Developer Experience. Pesquisadora visitante CAPES na Brunel University London (out/2024 a abr/2025).',
        en: 'Thesis: A Multidimensional Framework for Blockchain Developer Experience. CAPES visiting PhD researcher at Brunel University London (Oct 2024 to Apr 2025).',
      },
    },
    {
      degree: {
        pt: 'Mestrado em Ciência da Computação',
        en: 'M.Sc. in Computer Science',
      },
      institution: {
        pt: 'Universidade Estadual do Ceará (UECE)',
        en: 'State University of Ceará (UECE)',
      },
      period: 'Mar 2019 - Sep 2021',
      note: {
        pt: 'Dissertação sobre prontuário eletrônico baseado em blockchain.',
        en: 'Dissertation on a blockchain-based electronic patient record.',
      },
    },
    {
      degree: {
        pt: 'Bacharelado em Ciência da Computação',
        en: 'B.Sc. in Computer Science',
      },
      institution: {
        pt: 'Universidade Estadual do Ceará (UECE)',
        en: 'State University of Ceará (UECE)',
      },
      period: '2013 - Dec 2018',
      note: null,
    },
  ],

  researchInterests: [
    {
      pt: 'Aspectos humanos na engenharia de software',
      en: 'Human aspects in software engineering',
    },
    {
      pt: 'Engenharia de software empírica',
      en: 'Empirical Software Engineering',
    },
    {
      pt: 'Mineração de repositórios de software',
      en: 'Mining Software Repositories',
    },
    {
      pt: 'Blockchain-Oriented Software Engineering (BOSE)',
      en: 'Blockchain-Oriented Software Engineering (BOSE)',
    },
    {
      pt: 'Blockchain Developer Experience (BcDEx)',
      en: 'Blockchain Developer Experience (BcDEx)',
    },
    {
      pt: 'Engenharia e segurança de smart contracts',
      en: 'Smart Contract Engineering & Security',
    },
    {
      pt: 'Análise de SE assistida por NLP/LLM',
      en: 'NLP/LLM-assisted SE analysis',
    },
  ],

  skills: {
    blockchain: [
      'Solidity', 'OpenZeppelin', 'EIP-2535', 'EIP-712', 'Hardhat', 'Foundry',
      'Ethereum/EVM', 'ERC-20', 'ERC-721', 'ERC-1155', 'ethers.js', 'web3.js',
      'Slither', 'Mythril', 'IPFS',
    ],
    webDev: [
      'TypeScript', 'JavaScript', 'NestJS', 'Node.js', 'Express.js',
      'Next.js', 'React.js', 'PostgreSQL', 'TypeORM', 'Redis', 'Keycloak',
      'MySQL', 'MongoDB', 'Python (NLP/dados)',
    ],
    tools: [
      'Git', 'GitHub', 'CI/CD', 'Docker', 'Bruno', 'Postman', 'Stryker',
      'Jira', 'ClickUp', 'Figma', 'JMeter',
    ],
    research: ['LaTeX', 'Scientific Writing', 'BERTopic', 'Statistical Analysis', 'LLMs'],
    other: ['RESTful APIs', 'Agile/Scrum', 'RWA Tokenisation'],
  },

  social: {
    email: 'pamella.soaresds@gmail.com',
    linkedin: 'https://linkedin.com/in/pamellasoaresds',
    github: 'https://github.com/pamellasds',
    googleScholar: 'https://scholar.google.com/citations?user=ZWmLWIAAAAAJ&hl=pt-BR&authuser=1',
    orcid: 'https://orcid.org/0000-0002-8691-7180',
    lattes: 'http://lattes.cnpq.br/2415050920835932',
  },

  languages: [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'B2' },
  ],
}

/** Localized string helper for bilingual data fields */
export function loc(value, lang) {
  if (value == null) return null
  if (typeof value === 'string') return value
  return value[lang] || value.en || value.pt || ''
}
