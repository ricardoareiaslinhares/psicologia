import React from 'react'
import {client} from "@/lib/contentful"
import { BlogPost } from '@/types'
import CardMain from '@/components/cards/CardMain'


 
export const dynamic = "auto",
dynamicParams = true,
revalidate = 0,
fetchCache = "auto",
runtime = "nodejs",
preferredRegion = "auto"


const get = async () => {
  const res = await client.getEntries({ content_type: "blogPost" });
  const posts = res.items;
  return posts;
}



const Blogs = async ({}) => {
  const blogPosts: any = await get();


  //console.log(blogPosts[0])
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  w-full z-0 overflow-hidden py-12 bg-muted  ">
      <div className='flex flex-col gap-y-4 items-center justify-center mb-12'>
      <h1 className='text-2xl font-bold text-foreground'>Livro Aberto de Psicologia</h1>
      <h3 className='text-lg font-bold text-primary px-6 text-center'>Artigos sobre psicologia, psicoterapia e saúde mental</h3>

      </div>
      <section className="flex flex-1 w-full max-w-screen-2xl  px-8 md:px-24  flex-wrap gap-6 justify-center items-center ">

          {blogPosts.map((post:any, index:number) => {
            const poster = post.fields as BlogPost;

            const imageLink = poster.media.fields.file.url as string
            //console.log(imageLink)
            const modifiedI = "https:" + imageLink
            const slug = poster.slug
          
            
            return (
            

           
                <CardMain
                  key={`${post.sys.id}-${index}`}
                  title={poster.titulo}
                  desc={poster.shortDesc}
                  link={`/blog/${slug}`}
                  //link={`/blog/${post.sys.id}`}
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
