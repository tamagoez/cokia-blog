import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Neem Pages</span>,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Neem Pages",
      };
    }
  },
  project: {
    link: "https://github.com/tamagoez/neem-web",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/tamagoez/neem-pages",
  footer: {
    text: "Neem Pages (written by @tamagoez)",
  },
};

export default config
