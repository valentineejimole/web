import type { Sidebar } from 'vocs'

// Note: careful of name clashing between sidebar items and docs pages. 
// For example, 'Quickstart' is used for both sidebar and page names.
// If docs are part of a sidebar collection, they should be in a subfolder
export const sidebar: Sidebar = {
  '/getting-started':[
    {
      text: 'Overview',
      link: '/getting-started/',
    },
    {
      text: 'Quickstart',
      items: [
        { text: 'Deploy On Base', link: '/getting-started/quickstart/deploy-on-base' },
      ],
    },
    {
      text: 'Introduction', 
      items: [
        { text: 'Why Base?', link: '/getting-started/introduction/why-base' },
        { text: 'Explore All Tools', link: '/getting-started/introduction/all-tools' },
        { text: 'Building Onchain', link: '/getting-started/introduction/building-onchain' },
        { text: 'Onchain Dev Lifecycle', link: '/getting-started/introduction/onchain-dev-lifecycle' },
      ],
    },
    {
      text: 'Get Setup',
      items: [
        { text: 'Setting Up Your Dev Environment', link: '/getting-started/get-setup/setting-up-your-dev-environment' },
        { text: 'Docs Tour', link: '/getting-started/get-setup/docs-tour' },
      ],
    },
    {
      text: 'Migrating to Base',
      items: [
        { text: 'Migrate Tokens', link: '/getting-started/migrate-to-base/migrate-tokens' },
      ],
    },
  ],
  '/app-tools/': [
    {
      text: 'App Tools',
      link: '/app-tools',
    },
    {
        text: 'OnchainKit',
        items: [
        { text: 'Quickstart Guide', link: '/app-tools/onchainkit/quickstart-guide' },
        { text: 'Overview', link: '/app-tools/onchainkit/overview' },
        { text: 'Tutorials', link: '/app-tools/onchainkit/tutorials' },
        { text: 'Templates', link: '/app-tools/onchainkit/templates' },
        { text: 'Documentation', link: '/app-tools/onchainkit/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/app-tools/onchainkit/faq-troubleshooting' },
        { text: 'Support & Contribution', link: '/app-tools/onchainkit/support-contribution' },
        ],
    },
    {
        text: 'Basenames',
        items: [
        { text: 'Quickstart Guide', link: '/app-tools/basenames/quickstart-guide' },
        { text: 'Overview', link: '/app-tools/basenames/overview' },
        { text: 'Tutorials', link: '/app-tools/basenames/tutorials' },
        { text: 'Documentation', link: '/app-tools/basenames/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/app-tools/basenames/faq-troubleshooting' },
        { text: 'Support & Contribution', link: '/app-tools/basenames/support-contribution' },
        ],
    },
    {
        text: 'Verifications',
        items: [
        { text: 'Quickstart Guide', link: '/app-tools/verifications/quickstart-guide' },
        { text: 'Overview', link: '/app-tools/verifications/overview' },
        { text: 'Tutorials', link: '/app-tools/verifications/tutorials' },
        { text: 'Documentation', link: '/app-tools/verifications/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/app-tools/verifications/faq-troubleshooting' },
        { text: 'Support & Contribution', link: '/app-tools/verifications/support-contribution' },
        ],
    },
  ],
  '/wallet-tools/wallet-sdk/': [
    {
      text: 'Wallet SDK',
      items: [
        { text: 'Quickstart Guide', link: '/wallet-tools/wallet-sdk/quickstart-guide' },
        { text: 'Overview', link: '/wallet-tools/wallet-sdk/overview' },
        { text: 'Tutorials', link: '/wallet-tools/wallet-sdk/tutorials' },
        { text: 'Documentation', link: '/wallet-tools/wallet-sdk/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/wallet-tools/wallet-sdk/faq-troubleshooting' },
        { text: 'Support & Contribution', link: '/wallet-tools/wallet-sdk/support-contribution' },
      ],
    },
  ],
  '/wallet-tools/smart-wallet/': [
    {
      text: 'Smart Wallet (Base Wallet)',
      items: [
        { text: 'Quickstart Guide', link: '/wallet-tools/smart-wallet/quickstart-guide' },
        { text: 'Overview', link: '/wallet-tools/smart-wallet/overview' },
        { text: 'Tutorials', link: '/wallet-tools/smart-wallet/tutorials' },
        { text: 'Documentation', link: '/wallet-tools/smart-wallet/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/wallet-tools/smart-wallet/faq-troubleshooting' },
      ],
    },
  ],
  '/wallet-tools/mobile-wallet-protocol/': [
    {
      text: 'Mobile Wallet Protocol',
      items: [
        { text: 'Quickstart Guide', link: '/wallet-tools/mobile-wallet-protocol/quickstart-guide' },
        { text: 'Overview', link: '/wallet-tools/mobile-wallet-protocol/overview' },
        { text: 'Tutorials', link: '/wallet-tools/mobile-wallet-protocol/tutorials' },
        { text: 'Documentation', link: '/wallet-tools/mobile-wallet-protocol/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/wallet-tools/mobile-wallet-protocol/faq-troubleshooting' },
      ],
    },
  ],
  '/wallet-tools/magic-spend/': [
    {
      text: 'Magic Spend',
      items: [
        { text: 'Quickstart Guide', link: '/wallet-tools/magic-spend/quickstart-guide' },
        { text: 'Overview', link: '/wallet-tools/magic-spend/overview' },
        { text: 'Tutorials', link: '/wallet-tools/magic-spend/tutorials' },
        { text: 'Documentation', link: '/wallet-tools/magic-spend/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/wallet-tools/magic-spend/faq-troubleshooting' },
      ],
    },
  ],
  '/chain-tools/paymaster/': [
    {
      text: 'Paymaster',
      items: [
        { text: 'Quickstart Guide', link: '/chain-tools/paymaster/quickstart-guide' },
        { text: 'Overview', link: '/chain-tools/paymaster/overview' },
        { text: 'Tutorials', link: '/chain-tools/paymaster/tutorials' },
        { text: 'Documentation', link: '/chain-tools/paymaster/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/chain-tools/paymaster/faq-troubleshooting' },
        { text: 'Support & Contribution', link: '/chain-tools/paymaster/support-contribution' },
      ],
    },
  ],
  '/chain-tools/l3-launcher/': [
    {
      text: 'L3 Launcher',
      items: [
        { text: 'Quickstart Guide', link: '/chain-tools/l3-launcher/quickstart-guide' },
        { text: 'Product Overview', link: '/chain-tools/l3-launcher/product-overview' },
        { text: 'Tutorials', link: '/chain-tools/l3-launcher/tutorials' },
        { text: 'Documentation', link: '/chain-tools/l3-launcher/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/chain-tools/l3-launcher/faq-troubleshooting' },
        { text: 'Support & Contribution', link: '/chain-tools/l3-launcher/support-contribution' },
      ],
    },
  ],
  '/base-chain/': [
    {
      text: 'Base Chain',
      items: [
        { text: 'Quickstart Guide', link: '/base-chain/quickstart-guide' },
        { text: 'Overview', link: '/base-chain/overview' },
        { text: 'Tutorials', link: '/base-chain/tutorials' },
        { text: 'Documentation', link: '/base-chain/documentation' },
        { text: 'FAQ & Troubleshooting', link: '/base-chain/faq-troubleshooting' },
        { text: 'Support & Contribution', link: '/base-chain/support-contribution' },
      ],
    },
  ],
  '/guides/getting-started-building-onchain/': [
    {
      text: 'Getting Started Building Onchain',
      items: [
        // Add sub-items if applicable
      ],
    },
  ],
  '/guides/use-case-guides/': [
    {
      text: 'Use Case Guides',
      items: [
        { text: 'OnchainKit', link: '/guides/use-case-guides/onchainkit' },
        { text: 'Wallet Guides', link: '/guides/use-case-guides/wallet-guides' },
        { text: 'Integration Guides', link: '/guides/use-case-guides/integration-guides' },
        { text: 'eCommerce', link: '/guides/use-case-guides/ecommerce' },
        { text: 'Trading', link: '/guides/use-case-guides/trading' },
        { text: 'General Development Guides', link: '/guides/use-case-guides/general-development-guides' },
        // Add more use case guides as needed
      ],
    },
  ],
}