import React from 'react'
import {client} from "@/lib/contentful"
import { cache } from 'react'
 
export const get = cache(async () => {
  const res = await client.getEntries({content_type: "blogPost"})

  return  res.items[0].fields.desc?.content[0]
//return  res.items[0].fields.titulo


}, )







const Blogs = async ({}) => {
const blogPosts: any = await get()

    console.log(blogPosts, "aqui")
  return (
    <div>Blogs</div>
  )
}

export default Blogs