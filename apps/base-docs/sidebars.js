module.exports = {
  gettingStartedSidebar: [
    {
      type: 'doc',
      id: 'getting-started/index',
    },
    {
      type: 'category',
      label: 'Quickstart',
      items: ['getting-started/deploy-on-base-quickstart', 'getting-started/onchainkit-quickstart'],
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'getting-started/why-base',
        'getting-started/explore-all-tools',
        'getting-started/building-onchain',
        'getting-started/onchain-development-lifecycle',
      ],
    },
    {
      type: 'category',
      label: 'Get Setup',
      items: ['getting-started/setting-up-your-dev-environment', 'getting-started/docs-tour'],
    },
    {
      type: 'category',
      label: 'Migrating to Base',
      items: ['getting-started/to-be-built'],
    },
  ],
  appToolsSidebar: [
    {
      type: 'doc',
      id: 'app-tools/index',
    },
    {
      type: 'category',
      label: 'OnchainKit',
      items: [
        {
          type: 'category',
          label: 'Quickstart Guide',
          items: ['app-tools/onchainkit/getting-started'],
        },
        'app-tools/onchainkit/introduction',
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'app-tools/onchainkit/create-a-basename-profile-component',
            'app-tools/onchainkit/lifecycle-status',
            'app-tools/onchainkit/tailwind-css-integration',
            'app-tools/onchainkit/theme-customization',
            'app-tools/onchainkit/use-basenames',
            'app-tools/onchainkit/use-coinbase-smart-wallet-and-eoas',
          ],
        },
        {
          type: 'category',
          label: 'Templates',
          items: ['app-tools/onchainkit/existing-templates'],
        },
        {
          type: 'category',
          label: 'Documentation',
          items: [
            'app-tools/onchainkit/components-section',
            'app-tools/onchainkit/api-section',
            'app-tools/onchainkit/utilities',
            'app-tools/onchainkit/types',
          ],
        },
        {
          type: 'category',
          label: 'FAQ & Troubleshooting',
          items: ['app-tools/onchainkit/to-be-built'],
        },
        {
          type: 'category',
          label: 'Support & Contribution',
          items: ['app-tools/onchainkit/how-to-contribute', 'app-tools/onchainkit/report-a-bug'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Basenames',
      items: [
        'app-tools/basenames/quickstart-guide',
        'app-tools/basenames/introduction',
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'app-tools/basenames/add-frames-to-a-basename',
            'app-tools/basenames/basenames-wagmi-tutorial',
            'app-tools/basenames/basenames-onchainkit-tutorial',
          ],
        },
        {
          type: 'category',
          label: 'Documentation',
          items: ['app-tools/basenames/to-be-built'],
        },
        {
          type: 'category',
          label: 'FAQ & Troubleshooting',
          items: ['app-tools/basenames/basenames-faq'],
        },
        {
          type: 'category',
          label: 'Support & Contribution',
          items: ['app-tools/basenames/how-to-contribute', 'app-tools/basenames/report-a-bug'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Verifications',
      items: [
        {
          type: 'category',
          label: 'Quickstart Guide',
          items: ['app-tools/verifications/existing-quickstart-on-cdp'],
        },
        {
          type: 'category',
          label: 'Introduction',
          items: [
            'app-tools/verifications/welcome-to-coinbase-verifications',
            'app-tools/verifications/use-cases',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: ['app-tools/verifications/to-be-built'],
        },
        {
          type: 'category',
          label: 'Documentation',
          items: ['app-tools/verifications/attestations-document'],
        },
        'app-tools/verifications/faq-troubleshooting',
        {
          type: 'category',
          label: 'Support & Contribution',
          items: ['app-tools/verifications/verifications-discord'],
        },
      ],
    },
  ],
  walletToolsSidebar: [
    {
      type: 'doc',
      id: 'wallet-tools/index',
    },
    {
      type: 'category',
      label: 'Wallet SDK',
      items: [
        {
          type: 'category',
          label: 'Quickstart Guide',
          items: ['wallet-tools/wallet-sdk/wallet-sdk-mobile-sdk'],
        },
        {
          type: 'category',
          label: 'Introduction',
          items: ['wallet-tools/wallet-sdk/existing-welcome-page-features'],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'wallet-tools/wallet-sdk/adding-tokens-to-coinbase-wallet',
            'wallet-tools/wallet-sdk/sample-applications',
          ],
        },
        {
          type: 'category',
          label: 'Documentation',
          items: [
            'wallet-tools/wallet-sdk/wallet-sdk-existing-section',
            'wallet-tools/wallet-sdk/wallet-mobile-sdk',
            'wallet-tools/wallet-sdk/smart-wallet',
            'wallet-tools/wallet-sdk/supported-environments',
            'wallet-tools/wallet-sdk/whitelisted-networks',
            'wallet-tools/wallet-sdk/developer-settings',
            'wallet-tools/wallet-sdk/ux-guidelines',
            'wallet-tools/wallet-sdk/coinbase-wallet-injected-ethereum-provider',
            'wallet-tools/wallet-sdk/xmtp',
          ],
        },
        {
          type: 'category',
          label: 'FAQ & Troubleshooting',
          items: [
            'wallet-tools/wallet-sdk/existing-faq',
            'wallet-tools/wallet-sdk/errors',
            'wallet-tools/wallet-sdk/handling-multiple-injected-extensions',
            'wallet-tools/wallet-sdk/mobile-dapp-integration-via-deep-linking',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Smart Wallet',
      items: [
        {
          type: 'category',
          label: 'Quickstart Guide',
          items: ['wallet-tools/smart-wallet/existing-quick-start'],
        },
        {
          type: 'category',
          label: 'Introduction',
          items: [
            'wallet-tools/smart-wallet/why-smart-wallet',
            'wallet-tools/smart-wallet/launch-ready-checklist',
            'wallet-tools/smart-wallet/wallet-library-support',
            'wallet-tools/smart-wallet/base-gasless-campaign',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'wallet-tools/smart-wallet/existing-guides-section',
            'wallet-tools/smart-wallet/coinbase-smart-wallet-tutorial',
            'wallet-tools/smart-wallet/smart-wallet-and-rainbow-kit',
          ],
        },
        {
          type: 'category',
          label: 'Documentation',
          items: [
            'wallet-tools/smart-wallet/smart-wallet-sdk',
            'wallet-tools/smart-wallet/smart-contracts',
            'wallet-tools/smart-wallet/magic-spend',
          ],
        },
        {
          type: 'category',
          label: 'FAQ & Troubleshooting',
          items: ['wallet-tools/smart-wallet/existing-faq'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Mobile Wallet Protocol',
      items: [
        {
          type: 'category',
          label: 'Quickstart Guide',
          items: ['wallet-tools/mobile-wallet-protocol/to-be-built'],
        },
        {
          type: 'category',
          label: 'Introduction',
          items: ['wallet-tools/mobile-wallet-protocol/existing-overview'],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: ['wallet-tools/mobile-wallet-protocol/to-be-built'],
        },
        {
          type: 'category',
          label: 'Documentation',
          items: ['wallet-tools/mobile-wallet-protocol/existing-docs-other-than-overview'],
        },
        {
          type: 'category',
          label: 'FAQ & Troubleshooting',
          items: ['wallet-tools/mobile-wallet-protocol/to-be-built'],
        },
      ],
    },
  ],
  baseChainSidebar: [
    {
      type: 'doc',
      id: 'base-chain/index',
    },
    {
      type: 'category',
      label: 'Quickstart Guide',
      items: ['base-chain/to-be-built'],
    },
    {
      type: 'category',
      label: 'Introduction',
      items: ['base-chain/to-be-built'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['base-chain/run-a-base-node', 'base-chain/bridge-an-l1-token-to-base'],
    },
    {
      type: 'category',
      label: 'Documentation',
      items: [
        'base-chain/network-information',
        'base-chain/base-contracts',
        'base-chain/fees',
        'base-chain/differences-between-ethereum-and-base',
        'base-chain/decentralizing-base-with-optimism',
        'base-chain/node-providers',
        'base-chain/network-faucets',
        'base-chain/security',
      ],
    },
    {
      type: 'category',
      label: 'FAQ & Troubleshooting',
      items: ['base-chain/to-be-built'],
    },
    {
      type: 'category',
      label: 'Support & Contribution',
      items: ['base-chain/to-be-built'],
    },
  ],
  guidesSidebar: [
    {
      type: 'doc',
      id: 'guides/index',
    },
    {
      type: 'category',
      label: 'Use Case Guides',
      items: [
        {
          type: 'category',
          label: 'Finance',
          items: [
            'guides/use-case-guides/finance/build-a-smart-wallet-funding-app',
            'guides/use-case-guides/finance/access-real-time-asset-data',
          ],
        },
        {
          type: 'category',
          label: 'Creator',
          items: [
            'guides/use-case-guides/creator/nft-minting-with-zora',
            'guides/use-case-guides/creator/convert-farcaster-frame-to-open-frame',
          ],
        },
        {
          type: 'category',
          label: 'Commerce',
          items: [
            'guides/use-case-guides/commerce/build-an-ecommerce-app',
            'guides/use-case-guides/commerce/deploy-a-shopify-storefront',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Life-Cycle Guides',
      items: [
        {
          type: 'category',
          label: 'Onboarding',
          items: ['guides/life-cycle-guides/onboarding/to-be-built'],
        },
        {
          type: 'category',
          label: 'Activating',
          items: [
            'guides/life-cycle-guides/activating/transactions',
            'guides/life-cycle-guides/activating/nft-minting',
            'guides/life-cycle-guides/activating/no-code-minting',
          ],
        },
        {
          type: 'category',
          label: 'Growing',
          items: [
            'guides/life-cycle-guides/growing/frames',
            'guides/life-cycle-guides/growing/cast-actions',
            'guides/life-cycle-guides/growing/gating-and-redirects',
            'guides/life-cycle-guides/growing/deploy-to-vercel',
            'guides/life-cycle-guides/growing/hyperframes',
          ],
        },
        {
          type: 'category',
          label: 'Retaining',
          items: ['guides/life-cycle-guides/retaining/create-email-campaigns'],
        },
        {
          type: 'category',
          label: 'Monetizing',
          items: ['guides/life-cycle-guides/monetizing/to-be-built'],
        },
      ],
    },
    {
      type: 'category',
      label: 'General Development Guides',
      items: [
        {
          type: 'category',
          label: 'Smart Contract Development',
          items: [
            {
              type: 'category',
              label: 'Hardhat',
              items: [
                'guides/general-development-guides/smart-contract-development/hardhat/deploy-with-hardhat',
                'guides/general-development-guides/smart-contract-development/hardhat/debugging-smart-contracts',
                'guides/general-development-guides/smart-contract-development/hardhat/optimizing-gas-usage',
                'guides/general-development-guides/smart-contract-development/hardhat/reducing-contract-size',
                'guides/general-development-guides/smart-contract-development/hardhat/analyzing-test-coverage',
              ],
            },
            {
              type: 'category',
              label: 'Foundry',
              items: [
                'guides/general-development-guides/smart-contract-development/foundry/deploy-with-foundry',
                'guides/general-development-guides/smart-contract-development/foundry/setup-with-base',
                'guides/general-development-guides/smart-contract-development/foundry/testing-smart-contracts',
              ],
            },
            {
              type: 'category',
              label: 'Remix',
              items: [
                'guides/general-development-guides/smart-contract-development/remix/deploy-with-remix',
              ],
            },
            {
              type: 'category',
              label: 'Tenderly',
              items: [
                'guides/general-development-guides/smart-contract-development/tenderly/deploy-with-tenderly',
              ],
            },
            {
              type: 'category',
              label: 'ThirdWeb',
              items: [
                'guides/general-development-guides/smart-contract-development/thirdweb/deploy-with-thirdweb',
                'guides/general-development-guides/smart-contract-development/thirdweb/build-with-thirdweb',
              ],
            },
            'guides/general-development-guides/smart-contract-development/verify-contract-with-basescan',
            'guides/general-development-guides/smart-contract-development/generate-random-numbers-contracts',
          ],
        },
        {
          type: 'category',
          label: 'NFTs',
          items: [
            'guides/general-development-guides/nfts/simple-onchain-nfts',
            'guides/general-development-guides/nfts/complex-onchain-nfts',
            'guides/general-development-guides/nfts/signature-mint',
            'guides/general-development-guides/nfts/thirdweb-unreal-nft-items',
          ],
        },
        {
          type: 'category',
          label: 'Token Gating',
          items: ['guides/general-development-guides/token-gating/gate-irl-events-with-nouns'],
        },
        {
          type: 'category',
          label: 'Client-Side Development',
          items: [
            'guides/general-development-guides/client-side-development/introduction-to-providers',
          ],
        },
        {
          type: 'category',
          label: 'Account Abstraction',
          items: [
            'guides/general-development-guides/account-abstraction/account-abstraction-on-base-using-biconomy',
            'guides/general-development-guides/account-abstraction/account-abstraction-on-base-using-particle-network',
            'guides/general-development-guides/account-abstraction/account-abstraction-on-base-using-privy-and-the-base-paymaster',
          ],
        },
        {
          type: 'category',
          label: 'Cross-Chain',
          items: [
            'guides/general-development-guides/cross-chain/bridge-tokens-with-layerzero',
            'guides/general-development-guides/cross-chain/bridge-tokens-with-axelar',
            'guides/general-development-guides/cross-chain/bridge-tokens-with-hyperlane',
          ],
        },
      ],
    },
  ],
};
