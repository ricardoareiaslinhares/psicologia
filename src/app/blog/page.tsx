import React from 'react'
import {client} from "@/lib/contentful"
import { cache } from 'react'
import { BlogPost } from '@/types'
import CardMain from '@/components/cards/CardMain'
import RichText from '@/components/richText/RichText'

 
export const dynamic = "auto",
dynamicParams = true,
revalidate = 0,
fetchCache = "auto",
runtime = "nodejs",
preferredRegion = "auto"


const get = cache(async () => {
  const res = await client.getEntries({ content_type: "blogPost" });
  const posts = res.items;
  return posts;
})



const Blogs = async ({}) => {
  const blogPosts: any = await get();
  //console.log(blogPosts[0])
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  w-full z-0 overflow-hidden py-12 bg-muted  ">
      <div className='flex flex-col gap-y-4 items-center mb-12'>
      <h1 className='text-2xl font-bold text-foreground'>Livro Aberto de Psicologia</h1>
      <h3 className='text-lg font-bold text-primary px-4'>Artigos sobre psicologia, psicoterapia e saúde mental</h3>

      </div>
      <section className="flex  w-full max-w-screen-2xl  px-8 md:px-24  flex-wrap flex-1 gap-6 justify-center md:justify-start items-center  ">

          {blogPosts.map((post:any, index:number) => {
            const poster = post.fields as BlogPost;
            const imageLink = poster.media.fields.file.url as string
            const modifiedI = "https:" + imageLink
          
            
            return (
            

           
                <CardMain
         key={`${post.sys.id}-${index}`}
                  title={poster.titulo}
                  desc={poster.shortDesc}
                  link={`/blog/${post.sys.id}`}
                  imageUrl={modifiedI}
                  imageName={poster.media.fields.title}
                  isVerticalOnly={true}
                />
             
              
            );
          })}

      </section>
    </main>
  );
}

export default Blogs;
