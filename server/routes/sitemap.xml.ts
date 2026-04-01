export default defineEventHandler(async (event) => {
  const baseUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://nex-power.com'
  
  const routes = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/en/', priority: '1.0', changefreq: 'daily' },
    { loc: '/products', priority: '0.9', changefreq: 'weekly' },
    { loc: '/en/products', priority: '0.9', changefreq: 'weekly' },
    { loc: '/solutions', priority: '0.9', changefreq: 'weekly' },
    { loc: '/en/solutions', priority: '0.9', changefreq: 'weekly' },
    { loc: '/news', priority: '0.8', changefreq: 'daily' },
    { loc: '/en/news', priority: '0.8', changefreq: 'daily' },
    { loc: '/about', priority: '0.7', changefreq: 'monthly' },
    { loc: '/en/about', priority: '0.7', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.7', changefreq: 'monthly' },
    { loc: '/en/contact', priority: '0.7', changefreq: 'monthly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.loc}</loc>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return xml
})
