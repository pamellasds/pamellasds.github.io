/** Other projects. `tracks` limits visibility: industry = Portfolio page, research = Projects page. */
export const projects = [
  {
    icon: 'Buildings',
    name: 'Ceará Vale',
    company: {
      pt: 'FUNCAP · SDE',
      en: 'FUNCAP · SDE',
    },
    description: {
      pt: 'UX/UI e qualidade na plataforma digital Ceará Vale, sob bolsa de inovação tecnológica FUNCAP (BIT).',
      en: 'UX/UI and quality assurance for the Ceará Vale digital platform, under a FUNCAP technological innovation grant (BIT).',
    },
    technologies: ['Figma', 'UX/UI', 'QA'],
    url: 'https://cearavale.sde.ce.gov.br/',
    tracks: ['industry'],
  },
  {
    icon: 'Books',
    name: {
      pt: 'Registro e validação de documentos em múltiplas blockchains',
      en: 'Document registration and validation in multiple blockchains',
    },
    company: {
      pt: 'Docstone · Blockchain One / pesquisa aplicada',
      en: 'Docstone · Blockchain One / applied research',
    },
    description: {
      pt: 'API blockchain para registro e gestão de documentos, integrável a outros sistemas. Terceiro melhor artigo no SBCARS 2022; extensão publicada na JSERD 2023.',
      en: 'Blockchain API for document registration and management, integrable with other systems. Third Best Paper at SBCARS 2022; extension published in JSERD 2023.',
    },
    technologies: ['RESTful API', 'JavaScript', 'Node.js', 'Express.js', 'Solidity', 'Web3.js'],
    url: null,
    tracks: ['industry', 'research'],
  },
  {
    icon: 'Buildings',
    name: 'Sis.integra',
    company: {
      pt: 'Urbe.digital',
      en: 'Urbe.digital',
    },
    description: {
      pt: 'Primeira solução municipal em blockchain para validação de licenças e alvarás, com contratos e API ligadas aos sistemas da prefeitura.',
      en: 'First municipal blockchain solution for license and permit validation, with contracts and API tied to city systems.',
    },
    technologies: ['RESTful API', 'JavaScript', 'Node.js', 'Express.js', 'Solidity', 'Web3.js'],
    url: null,
    tracks: ['industry'],
  },
  {
    icon: 'PaintBrush',
    name: {
      pt: 'Registro de autoria',
      en: 'Authorship registration',
    },
    company: {
      pt: 'Arqué · Blockchain One',
      en: 'Arqué · Blockchain One',
    },
    description: {
      pt: 'Plataforma de registro de obras autorais com blockchain para proveniência e autenticidade. UX/UI; top 3 no Demoday Corredores Digitais 2020.',
      en: 'Authorship registration platform using blockchain for provenance and authenticity. UX/UI; top 3 at Demoday Corredores Digitais 2020.',
    },
    technologies: ['Figma', 'RESTful API', 'Next.js', 'Solidity', 'Docker'],
    url: null,
    tracks: ['industry', 'research'],
  },
  {
    icon: 'Image',
    name: {
      pt: 'Coleção NFT "Uma Breve História do Ceará"',
      en: '"A Brief History of Ceará" NFT Collection',
    },
    company: {
      pt: 'Blockchain One',
      en: 'Blockchain One',
    },
    description: {
      pt: 'Coleção de NFTs com momentos da história do Ceará em arte digital, da xilogravura ao pixel art, publicada no OpenSea.',
      en: 'NFT collection of moments in Ceará\'s history as digital art, from woodcuts to pixel art, published on OpenSea.',
    },
    technologies: ['OpenSea', 'NFT', 'Solidity'],
    url: null,
    tracks: ['industry'],
  },
  {
    icon: 'Database',
    name: 'Web3BlockSet',
    company: {
      pt: 'MSR 2026 · pesquisa',
      en: 'MSR 2026 · research',
    },
    description: {
      pt: 'Dataset e dashboard para engenharia de software orientada a blockchain, com issues e PRs de repositórios oficiais e da comunidade.',
      en: 'Dataset and dashboard for blockchain-oriented software engineering, with issues and PRs from official and community repositories.',
    },
    technologies: ['UI', 'React', 'Vite', 'Tailwind', 'Python', 'GitHub', 'LLMs', 'Empirical SE'],
    url: 'https://pamellasds.github.io/web3blockset-dashboard/',
    tracks: ['industry', 'research'],
  },
  {
    icon: 'Cube',
    name: 'BcDEx Framework',
    company: {
      pt: 'Tese · pesquisa',
      en: 'PhD thesis · research',
    },
    description: {
      pt: 'Ferramenta web de diagnóstico do framework multidimensional de Blockchain Developer Experience (BcDEx).',
      en: 'Web diagnostic tool for the multidimensional Blockchain Developer Experience (BcDEx) framework.',
    },
    technologies: ['UI', 'React', 'Vite', 'Tailwind', 'Research', 'DX'],
    url: 'https://bcdex-framework.fly.dev/',
    tracks: ['industry', 'research'],
  },
  {
    icon: 'FileText',
    name: {
      pt: 'Ethereum Request for Comments (ERC) Observed Practices',
      en: 'Ethereum Request for Comments (ERC) Observed Practices',
    },
    company: {
      pt: 'SBES 2026 · material suplementar',
      en: 'SBES 2026 · supplementary material',
    },
    description: {
      pt: 'Pacote de replicação do estudo sobre adoção de padrões Ethereum Request for Comments (ERC): planilhas de práticas observadas, dados de validação semântica com LLM e scripts das RQs.',
      en: 'Replication package for the Ethereum Request for Comments (ERC) standard adoption study: observed-practices workbooks, LLM semantic validation data and RQ scripts.',
    },
    technologies: ['Python', 'LLMs', 'Ethereum ERC', 'Empirical SE', 'Zenodo'],
    url: 'https://zenodo.org/records/19989812',
    tracks: ['industry', 'research'],
  },
]

export function projectsFor(track) {
  return projects.filter(p => !p.tracks || p.tracks.includes(track))
}
