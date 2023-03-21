/** @type {import('next-translate').I18nConfig} */
const i18nConfig = {
  locales: ['en', 'pt-BR'],
  defaultLocale: 'en',
  localeDetection: false,
  pages: {
    '*': ['common'],
    '/': ['home'],
    // '/blog/[slug]': ['blog'],
    // '/blog': ['blog'],
    // '/dashboard': ['dashboard'],
  },
}

module.exports = i18nConfig
