// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const config = {
  title: 'Botpress Documentation',
  tagline: 'Making Machines Understand Humans',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/BlackSymbol.svg',
  organizationName: 'Botpress/documentation', // Usually your GitHub org/user name.
  projectName: 'botpress/documentation', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        metadata: [{name: 'botpress, chatbot', content: 'documentation, docs'}],
        algolia: {
          apiKey: '570227d66d130d069630e7226c740158',
          indexName: 'botpress'
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
          switchConfig: {
            darkIcon: '\u{1F319}',
            darkIconStyle: {
              marginLeft: '2px',
            },
            // Unicode icons such as '\u2600' will work
            // Unicode with 5 chars require brackets: '\u{1F602}'
            lightIcon: '\u{1F602}',
            lightIconStyle: {
              marginLeft: '1px',
            },
          },
        },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 6,
        },
      navbar: {
        title: '| Docs',
        logo: { 
          alt: 'Botpress logo',
          src: 'img/bp-logo-black.svg',
          srcDark: 'img/bp-logo-white.png'
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'overview/what-is-botpress',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'building-chatbots/creating-a-new-bot',
            position: 'left',
            label: 'Building Chatbots',
          },
          {
            type: 'doc',
            docId: 'messaging-channels/supported-channels',
            position: 'left',
            label: 'Messaging Channels',
          },
          {
            type: 'doc',
            docId: 'going-to-production/deploy/linux',
            position: 'left',
            label: 'Going to Production',
          },
          {
            type: 'doc',
            docId: 'chatbot-management/chatbot-analytics/built-in-analytics',
            position: 'left',
            label: 'Chatbot Management',
          },
          {
            type: 'doc',
            docId: 'enterprise/licensing/enterprise-licensing',
            position: 'left',
            label: 'Enterprise',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview/what-is-botpress',
              },
              {
                label: 'Features',
                to: '/docs/overview/features',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/botpress',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/getbotpress',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/botpress/botpress',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Botpress, Inc.`,
      },
    }),
};

module.exports = config;