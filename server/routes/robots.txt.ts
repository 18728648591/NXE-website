export default defineEventHandler(async (event) => {
  const robots = `User-agent: *
Allow: /
Allow: /products/
Allow: /solutions/
Allow: /news/
Allow: /about
Allow: /contact
Disallow: /admin/
Sitemap: ${process.env.NUXT_PUBLIC_SITE_URL || 'https://nex-power.com'}/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
`
  return robots
})
