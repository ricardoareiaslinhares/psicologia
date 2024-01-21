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

const getPost = cache(async (id: string) => {
  const res = await client.getEntry(id);
  const posts = res.fields as BlogPost;
  return posts;
});

type Props = {
  params: any;
};

const Blog = async ({ params }: Props) => {
  let id = params.id;
  const post = await getPost(id);
  console.log(post);

  return (
    <main
      key={id}
      className="flex min-h-screen flex-col items-center justify-center  w-full z-0 overflow-hidden bg-muted py-12 "
    >
      <section className="flex  w-full max-w-screen-xl  px-8 md:px-24  flex-wrap flex-1 gap-6 justify-center items-start  ">
        <h1 className="text-xl font-bold">{post.titulo}</h1>
        <p>{post.intro}</p>
        <div className="flex text-left flex-1 flex-col ">
          <RichText
            content={post.desc}
         
          />
        </div>
      </section>
    </main>
  );
};

export default Blog;
