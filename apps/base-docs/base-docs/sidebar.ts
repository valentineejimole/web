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
  '/app-tools': [
    {
      text: 'Overview',
      link: '/app-tools/',
    },
    {
        text: 'OnchainKit',
        collapsed: true,
        items: [
            {
                text: 'Quickstart', 
                items: [
                    { text: 'Quickstart Guide', link: '/app-tools/onchainkit/quickstart-guide' },
                ],
            },
            { 
                text: 'Introduction',
                items: [
                    { text: 'Why OnchainKit?', link: '/app-tools/onchainkit/introduction' },
                    { text: 'Tutorials', link: '/app-tools/onchainkit/tutorials' },
                    { text: 'Templates', link: '/app-tools/onchainkit/templates' },
                    { text: 'Documentation', link: '/app-tools/onchainkit/documentation' },
                    { text: 'FAQ & Troubleshooting', link: '/app-tools/onchainkit/faq-troubleshooting' },
                    { text: 'Support & Contribution', link: '/app-tools/onchainkit/support-contribution' },
                ],
            },
            {
                text: 'Tutorials',
                items: [
                    { text: 'Tutorial 1', link: '/app-tools/onchainkit/tutorials/tutorial-1' },
                ],
            },
            {
                text: 'Templates',
                items: [
                    { text: 'Template 1', link: '/app-tools/onchainkit/templates/template-1' },
                ],
            },
            {
                text: 'Documentation',
                items: [
                    { text: 'Documentation 1', link: '/app-tools/onchainkit/documentation/documentation-1' },
                ],
            },
            {
                text: 'FAQ & Troubleshooting',
                items: [
                    { text: 'FAQ & Troubleshooting 1', link: '/app-tools/onchainkit/faq-troubleshooting/faq-troubleshooting-1' },
                ],
            },
            {
                text: 'Support & Contribution',
                items: [
                    { text: 'Support & Contribution 1', link: '/app-tools/onchainkit/support-contribution/support-contribution-1' },
                ],
            },
        ],
    },
    {
        text: 'Basenames',
        collapsed: true,
        items: [
            { 
                text: 'Quickstart', 
                items: [
                    { text: 'Quickstart Guide', link: '/app-tools/basenames/quickstart-guide' },
                ],
            },
            {
                text: 'Introduction',
                items: [
                    { text: 'Introduction 1', link: '/app-tools/basenames/introduction-1' },
                ],
            },
            {
                text: 'Tutorials',
                items: [
                    { text: 'Tutorial 1', link: '/app-tools/basenames/tutorials/tutorial-1' },
                ],
            },
            {
                text: 'Documentation',
                items: [
                    { text: 'Documentation 1', link: '/app-tools/basenames/documentation/documentation-1' },
                ],
            },
            {
                text: 'FAQ & Troubleshooting',
                items: [
                    { text: 'FAQ & Troubleshooting 1', link: '/app-tools/basenames/faq-troubleshooting/faq-troubleshooting-1' },
                ],
            },
            {
                text: 'Support & Contribution',
                items: [
                    { text: 'Support & Contribution 1', link: '/app-tools/basenames/support-contribution/support-contribution-1' },
                ],
            },
        ]
    },
    {
        text: 'Verifications',
        collapsed: true,
        items: [
            {
                text: 'Quickstart',
                items: [
                    { text: 'Quickstart Guide', link: '/app-tools/verifications/quickstart-guide' },
                ],
            },
            {
                text: 'Introduction',
                items: [
                    { text: 'Introduction 1', link: '/app-tools/verifications/introduction-1' },
                ],
            },
            {
                text: 'Tutorials',
                items: [
                    { text: 'Tutorial 1', link: '/app-tools/verifications/tutorials/tutorial-1' },
                ],
            },
            {
                text: 'Documentation',
                items: [
                    { text: 'Documentation 1', link: '/app-tools/verifications/documentation/documentation-1' },
                ],
            },
            {
                text: 'FAQ & Troubleshooting',
                items: [
                    { text: 'FAQ & Troubleshooting 1', link: '/app-tools/verifications/faq-troubleshooting/faq-troubleshooting-1' },
                ],
            },
            {
                text: 'Support & Contribution',
                items: [
                    { text: 'Support & Contribution 1', link: '/app-tools/verifications/support-contribution/support-contribution-1' },
                ],
            },
        ]
    },
  ],
  '/wallet-tools': [
    {
      text: 'Overview',
      link: '/wallet-tools/',
    },
    {
      text: 'Wallet SDK',
      collapsed: true,
      items: [
        {
            text: 'Quickstart',
            items: [
                { text: 'Quickstart Guide', link: '/wallet-tools/wallet-sdk/quickstart-guide' },
            ],
        },
        {
            text: 'Introduction',
            items: [
                { text: 'Introduction 1', link: '/wallet-tools/wallet-sdk/introduction-1' },
            ],
        },
        {
            text: 'Tutorials',
            items: [
                { text: 'Tutorial 1', link: '/wallet-tools/wallet-sdk/tutorials/tutorial-1' },
            ],
        },
        {
            text: 'Documentation',
            items: [
                { text: 'Documentation 1', link: '/wallet-tools/wallet-sdk/documentation/documentation-1' },
            ],
        },
        {
            text: 'FAQ & Troubleshooting',
            items: [
                { text: 'FAQ & Troubleshooting 1', link: '/wallet-tools/wallet-sdk/faq-troubleshooting/faq-troubleshooting-1' },
            ],
        },
      ]
    },
    {
      text: 'Smart Wallet (Base Wallet)',
      collapsed: true,
      items: [
        { 
            text: 'Quickstart', 
            items: [
                { text: 'Quickstart Guide', link: '/wallet-tools/smart-wallet/quickstart-guide' },
            ]
        },
        {
            text: 'Introduction',
            items: [
                { text: 'Introduction 1', link: '/wallet-tools/smart-wallet/introduction-1' },
            ],
        },
        {
            text: 'Tutorials',
            items: [
                { text: 'Tutorial 1', link: '/wallet-tools/smart-wallet/tutorials/tutorial-1' },
            ],
        },
        {
            text: 'Documentation',
            items: [
                { text: 'Documentation 1', link: '/wallet-tools/smart-wallet/documentation/documentation-1' },
            ],
        },
        {
            text: 'FAQ & Troubleshooting',
            items: [
                { text: 'FAQ & Troubleshooting 1', link: '/wallet-tools/smart-wallet/faq-troubleshooting/faq-troubleshooting-1' },
            ],
        },
      ]
    },
    {
        text: 'Mobile Wallet Protocol',
        collapsed: true,
        items: [
            {
                text: 'Quickstart',
                items: [
                    { text: 'Quickstart Guide', link: '/wallet-tools/mobile-wallet-protocol/quickstart-guide' },
                ],
            },
            {
                text: 'Introduction',
                items: [
                    { text: 'Introduction 1', link: '/wallet-tools/mobile-wallet-protocol/introduction-1' },
                ],
            },
            {
                text: 'Tutorials',
                items: [
                    { text: 'Tutorial 1', link: '/wallet-tools/mobile-wallet-protocol/tutorials/tutorial-1' },
                ],
            },
            {
                text: 'Documentation',
                items: [
                    { text: 'Documentation 1', link: '/wallet-tools/mobile-wallet-protocol/documentation/documentation-1' },
                ],
            },
            {
                text: 'FAQ & Troubleshooting',
                items: [
                    { text: 'FAQ & Troubleshooting 1', link: '/wallet-tools/mobile-wallet-protocol/faq-troubleshooting/faq-troubleshooting-1' },
                ],
            },
        ]
    },
    {
        text: 'Magic Spend',
        collapsed: true,
        items: [
            {
                text: 'Quickstart',
                items: [
                    { text: 'Quickstart Guide', link: '/wallet-tools/magic-spend/quickstart-guide' },
                ],
            },
            {
                text: 'Introduction',
                items: [
                    { text: 'Introduction 1', link: '/wallet-tools/magic-spend/introduction-1' },
                ],
            },
            {
                text: 'Tutorials',
                items: [
                    { text: 'Tutorial 1', link: '/wallet-tools/magic-spend/tutorials/tutorial-1' },
                ],
            },
            {
                text: 'Documentation',
                items: [
                    { text: 'Documentation 1', link: '/wallet-tools/magic-spend/documentation/documentation-1' },
                ],
            },
            {
                text: 'FAQ & Troubleshooting',
                items: [
                    { text: 'FAQ & Troubleshooting 1', link: '/wallet-tools/magic-spend/faq-troubleshooting/faq-troubleshooting-1' },
                ],
            },
        ]
    },
    {
        text: 'Support & Contribution', 
        collapsed: true,
        items: [
            { text: 'Support & Contribution 1', link: '/wallet-tools/support-contribution/support-contribution-1' },
        ],
    }
  ],
  '/chain-tools': [
    {
        text: 'Overview',
        link: '/chain-tools/',
    },
    {
        text: 'Paymaster',
        collapsed: true,
        items: [
            {
                text: 'Quickstart',
                items: [
                    { text: 'Quickstart Guide', link: '/chain-tools/paymaster/quickstart-guide' },
                ],
            },
            {
                text: 'Introduction',
                items: [
                    { text: 'Introduction 1', link: '/chain-tools/paymaster/introduction-1' },
                ],
            },
            {
                text: 'Tutorials',
                items: [
                    { text: 'Tutorial 1', link: '/chain-tools/paymaster/tutorials/tutorial-1' },
                ],
            },
            {
                text: 'Documentation',
                items: [
                    { text: 'Documentation 1', link: '/chain-tools/paymaster/documentation/documentation-1' },
                ],
            },
            {
                text: 'FAQ & Troubleshooting',
                items: [
                    { text: 'FAQ & Troubleshooting 1', link: '/chain-tools/paymaster/faq-troubleshooting/faq-troubleshooting-1' },
                ],
            },
            {
                text: 'Support & Contribution',
                items: [
                    { text: 'Support & Contribution 1', link: '/chain-tools/paymaster/support-contribution/support-contribution-1' },
                ],
            },
        ],
    },
    {
        text: 'L3 Launcher',
        collapsed: true,
        items: [
            {
                text: 'Quickstart',
                items: [
                    { text: 'Quickstart Guide', link: '/chain-tools/l3-launcher/quickstart-guide' },
                ],
            },
            {
                text: 'Introduction',
                items: [
                    { text: 'Introduction 1', link: '/chain-tools/l3-launcher/introduction-1' },
                ],
            },
            {
                text: 'Tutorials',
                items: [
                    { text: 'Tutorial 1', link: '/chain-tools/l3-launcher/tutorials/tutorial-1' },
                ],
            },
            {
                text: 'Documentation',
                items: [
                    { text: 'Documentation 1', link: '/chain-tools/l3-launcher/documentation/documentation-1' },
                ],
            },
            {
                text: 'FAQ & Troubleshooting',
                items: [
                    { text: 'FAQ & Troubleshooting 1', link: '/chain-tools/l3-launcher/faq-troubleshooting/faq-troubleshooting-1' },
                ],
            },
            {
                text: 'Support & Contribution',
                items: [
                    { text: 'Support & Contribution 1', link: '/chain-tools/l3-launcher/support-contribution/support-contribution-1' },
                ],
            },
        ],
    }
  ],
  '/base-chain': [
    {
      text: 'Overview',
      link: '/base-chain/',
    },
    {
        text: 'Quickstart', 
        items: [
            { text: 'Quickstart Guide', link: '/base-chain/quickstart/quickstart-guide' },
        ],
    },
    {
        text: 'Introduction',
        items: [
            { text: 'Introduction 1', link: '/base-chain/introduction/introduction-1' },
        ],
    },
    {
        text: 'Tutorials',
        items: [
            { text: 'Tutorial 1', link: '/base-chain/tutorials/tutorial-1' },
        ],
    },
    {
        text: 'Documentation',
        items: [
            { text: 'Documentation 1', link: '/base-chain/documentation/documentation-1' },
        ],
    },
    {
        text: 'FAQ & Troubleshooting',
        items: [
            { text: 'FAQ & Troubleshooting 1', link: '/base-chain/faq-troubleshooting/faq-troubleshooting-1' },
        ],
    },
    {
        text: 'Support & Contribution',
        items: [
            { text: 'Support & Contribution 1', link: '/base-chain/support-contribution/support-contribution-1' },
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