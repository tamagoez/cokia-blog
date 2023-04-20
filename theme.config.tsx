import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'Neem Pages'} />
      <meta property="og:description" content={frontMatter.description || 'Writting about confidential matters'} />
    </>
  },
  banner: {
    key: '0.0.1-release',
    text: <a href="https://nextra.site" target="_blank">
      ⛏ Neem 0.0.1 will be released. Join Beta →
    </a>,
  },
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
  editLink: {
    text: "Edit on GitHub"
  },
  faviconGlyph: "📝"
};

export default config
