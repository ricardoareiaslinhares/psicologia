import { client } from '@/lib/contentful';
import { MetadataRoute } from 'next'

const get = async () => {
    const res = await client.getEntries({ content_type: "blogPost" });
    const posts = res.items;
    return posts;
  }
 //@ts-ignore
export default async function sitemap(): MetadataRoute.Sitemap {
    const posts: any = await get()
   

    const baseURL = "https://ricardolinharespsicologo.pt/"

    const postsURL = posts.map((post:any) => {
        return     {
            url: `${baseURL}blog/${post.fields.slug}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
          }
        
    }) ?? []
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseURL}sobre/psicologo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseURL}sobre/psicologia`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
        url: `${baseURL}servicos/consultas`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: `${baseURL}servicos/preparacao`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: `${baseURL}blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${baseURL}referencias`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
      },
    //dinamico
    ...postsURL
]}