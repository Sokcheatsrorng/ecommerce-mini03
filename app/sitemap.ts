import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ecommerce-mini03-8ecj1pc31-sokcheats-projects.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ecommerce-mini03-8ecj1pc31-sokcheats-projects.vercel.app/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ecommerce-mini03-8ecj1pc31-sokcheats-projects.vercel.app/cart',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://ecommerce-mini03-8ecj1pc31-sokcheats-projects.vercel.app/policy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://ecommerce-mini03-8ecj1pc31-sokcheats-projects.vercel.app/my-shop',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}