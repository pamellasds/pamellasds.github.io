/**
 * Industry / applied blockchain portfolio.
 * Industry portfolio fronts (tokenisation, API, quality).
 */
export const portfolioItems = [
  {
    id: 'contracts',
    icon: 'Cube',
    name: {
      pt: 'Tokenização',
      en: 'Tokenisation',
    },
    label: {
      pt: 'Solidity · ERC-20 / 721 / 1155',
      en: 'Solidity · ERC-20 / 721 / 1155',
    },
    description: {
      pt: 'Protocolo multi-token upgradeável, redemption, liquidação assinada e operação de deploy.',
      en: 'Upgradeable multi-token protocol, redemption, signed settlement and deploy ops.',
    },
    technologies: ['Solidity', 'OpenZeppelin', 'ERC-20', 'ERC-721', 'ERC-1155', 'EIP-2535', 'UUPS', 'Hardhat', 'Foundry'],
    features: [
      {
        icon: 'DiamondsFour',
        title: { pt: 'Diamond (EIP-2535)', en: 'Diamond (EIP-2535)' },
        text: {
          pt: 'Módulos upgradeáveis sem migrar saldos.',
          en: 'Upgradeable modules without migrating balances.',
        },
      },
      {
        icon: 'LockKey',
        title: { pt: 'Soulbound', en: 'Soulbound' },
        text: {
          pt: 'Token não transferível.',
          en: 'Non-transferable token.',
        },
      },
      {
        icon: 'ArrowsClockwise',
        title: { pt: 'Redemption', en: 'Redemption' },
        text: {
          pt: 'Burn ou colateral com confirmação do emissor.',
          en: 'Burn or collateral with issuer confirmation.',
        },
      },
      {
        icon: 'Signature',
        title: { pt: 'EIP-712', en: 'EIP-712' },
        text: {
          pt: 'Lotes atômicos com assinatura tipada.',
          en: 'Atomic batches with typed signatures.',
        },
      },
      {
        icon: 'Vault',
        title: { pt: 'Escrow / DvP', en: 'Escrow / DvP' },
        text: {
          pt: 'Bloqueio e liquidação com garantia.',
          en: 'Lock and settlement with collateral.',
        },
      },
      {
        icon: 'ShieldCheck',
        title: { pt: 'Auditoria', en: 'Audit' },
        text: {
          pt: 'Revisão e testes de ataque.',
          en: 'Review and attack tests.',
        },
      },
      {
        icon: 'RocketLaunch',
        title: { pt: 'Deploy upgradeável', en: 'Upgradeable deploy' },
        text: {
          pt: 'Pipeline e registro por ambiente.',
          en: 'Pipeline and per-environment registry.',
        },
      },
      {
        icon: 'Flag',
        title: { pt: 'Feature flags', en: 'Feature flags' },
        text: {
          pt: 'Comportamento por ativo na cunhagem.',
          en: 'Per-asset behavior at mint.',
        },
      },
    ],
  },
  {
    id: 'api',
    icon: 'PlugsConnected',
    name: {
      pt: 'API e integração on-chain',
      en: 'API and on-chain integration',
    },
    label: {
      pt: 'NestJS · multi-tenant',
      en: 'NestJS · multi-tenant',
    },
    description: {
      pt: 'Backend de emissão, marketplace e resgate.',
      en: 'Backend for issuance, marketplace and redemption.',
    },
    technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'ethers.js'],
    features: [
      {
        icon: 'FileArrowUp',
        title: { pt: 'Emissão', en: 'Issuance' },
        text: {
          pt: 'Mint, burn, dry-run e documentos.',
          en: 'Mint, burn, dry-run and documents.',
        },
      },
      {
        icon: 'Hash',
        title: { pt: 'Nonce e ethers.js', en: 'Nonce and ethers.js' },
        text: {
          pt: 'Controle de nonce e receipts.',
          en: 'Nonce control and receipts.',
        },
      },
      {
        icon: 'Storefront',
        title: { pt: 'Marketplace', en: 'Marketplace' },
        text: {
          pt: 'Tarifas e precisão decimal.',
          en: 'Fees and decimal precision.',
        },
      },
    ],
  },
  {
    id: 'quality',
    icon: 'TestTube',
    name: {
      pt: 'Qualidade e testes',
      en: 'Quality and testing',
    },
    label: {
      pt: 'CI · mutação',
      en: 'CI · mutation',
    },
    description: {
      pt: 'Suíte de testes da API e qualidade no CI.',
      en: 'API test suite and CI quality.',
    },
    technologies: ['Bruno', 'SWC', 'Stryker', 'Jest', 'CI'],
    features: [
      {
        icon: 'Flask',
        title: { pt: 'E2E Bruno', en: 'Bruno E2E' },
        text: {
          pt: 'Suíte E2E migrada para Bruno.',
          en: 'E2E suite migrated to Bruno.',
        },
      },
      {
        icon: 'Lightning',
        title: { pt: 'SWC', en: 'SWC' },
        text: {
          pt: 'Testes unitários mais rápidos.',
          en: 'Faster unit tests.',
        },
      },
      {
        icon: 'Bug',
        title: { pt: 'Stryker', en: 'Stryker' },
        text: {
          pt: 'Testes de mutação no CI.',
          en: 'Mutation tests in CI.',
        },
      },
    ],
  }
]
