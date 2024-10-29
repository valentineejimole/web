import type { Sidebar } from 'vocs'

export const sidebar: Sidebar = {
    '/getting-started':[{
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Guide 1',
          link: '/guides/guide-1',
        },
      ]
    }],
    '/onchainkit': [{
      text: 'Onchainkit',
      link: '/onchainkit/quickstart',
    },
    {
      text: 'Quickstart',
      link: '/onchainkit/quickstart',
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Guide 1',
          link: '/onchainkit/guide-1',
        },
      ]
    }],
}   