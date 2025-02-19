import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
          url: 'https://bentraje.com',
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        },
        {
          url: 'https://bentraje.com/about',
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
            url: 'https://www.bentraje.com/tokyomap',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://www.bentraje.com/tokyomuseum',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://www.bentraje.com/tokyofestival',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://www.bentraje.com/phmapfestival',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },        
        {
            url: 'https://www.bentraje.com/tokyodaytrip',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        }                      
      ]


}

export const dynamic = 'force-static'
export const revalidate = false