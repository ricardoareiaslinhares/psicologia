import RichText from "@/components/richText/RichText";
import { client } from "@/lib/contentful";
import { BlogPost } from "@/types";
import React, { cache } from "react";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

const getPost = async (id: string) => {
  const getSlug = await client.getEntries({
    content_type: "blogPost",
    "fields.slug":id,
    limit: 1,
  });
  const posts = getSlug.items[0].fields as BlogPost

  return posts;
};

type Props = {
  params: any;
};

export async function generateMetadata({ params }: Props) {
  let id = params.id;
  //console.log("id is",id)

  try {
    const post = await getPost(id);
    if (!post) {
      return {
        title: "Not found",
        description: "Not found",
        alternates: {
          canonical: `/blog/${id}`,
        },
      };
    }
    else {
      const imageLink = post.media.fields.file.url as string
            const modifiedI = "https:" + imageLink
           
    
    return {
      title: post.titulo,
      description: post.shortDesc,
      alternates: {
        canonical: `/blog/${id}`,
      },
      twitter: {
        card: "summary_large_image",
        title: post.titulo,
        description: post.shortDesc,
        images: [
          {
            url: modifiedI,
            type: "image/jpg",
            width: 1200,
            height: 630,
            alt: post.titulo,
          },
        ],
      },
    }}
  } catch (error) {
    return {
      title: "Not found",
      description: "Not found",
    };
  }
}

const Blog = async ({ params }: Props) => {
  let id = params.id;
  const post = await getPost(id);
  //console.log("post ",post);

  return (
    <main
      key={id}
      className="flex min-h-screen flex-col items-center justify-center  w-full z-0 overflow-hidden bg-muted py-12 "
    >
      <section className="flex  w-full max-w-screen-xl  px-8 md:px-24  flex-wrap flex-1 gap-6 justify-center items-start  ">
        <div>
          <h1 className="text-xl font-bold mb-4">{post.titulo}</h1>
          <p>{post.intro}</p>
          <div className="flex text-left flex-1 flex-col">
            <RichText content={post.desc} />
          </div>
        </div>
        <div className="flex self-start items-start flex-1 gap-x-2 flex-col">
          <p>Até à próxima,</p>
          <p>Ricardo Linhares</p>
        </div>
      </section>
    </main>
  );
};

export default Blog;
