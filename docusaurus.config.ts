import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Making Open Source AI Just Work",
  tagline: "Solving open source toughest issues, so that anyone can  build AI.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://1ms.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "1ms-ai", // Usually your GitHub org/user name.
  projectName: "1ms.ai", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {},
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.png",
    navbar: {
      title: "⚡ 1ms.ai",
      items: [
        {
          label: "Products",
          position: "right",
          items: [
            {
              to: "https://github.com/dora-rs/dora",
              label: "dora-rs",
            },
            {
              to: "https://github.com/webonnx/wonnx",
              label: "wonnx",
            },
          ],
        },
        // {
        // to: "/docs/user-stories",
        // position: "right",
        // label: "User Stories",
        // },
        {
          to: "/Team/",
          position: "right",
          label: "Team",
        },
        //     { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Contact",
          items: [
            {
              label: "Email: tao.xavier@1ms.ai",
              to: "mailto:tao.xavier@1ms.ai",
            },
          ],
        },
        //{
        //title: "Community",
        //items: [
        //{
        //label: "Stack Overflow",
        //href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //},
        //{
        //label: "Discord",
        //href: "https://discordapp.com/invite/docusaurus",
        //},
        //{
        //label: "Twitter",
        //href: "https://twitter.com/docusaurus",
        //},
        //],
        //},
        //{
        //title: "More",
        //items: [
        ////{
        ////label: "Blog",
        ////to: "/blog",
        ////},
        //],
        //},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 1ms.ai`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
