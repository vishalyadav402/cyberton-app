export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/images','/components','/fonts'],
      },
      sitemap: 'https://www.cyberton.co.in/sitemap.xml',
    }
  }