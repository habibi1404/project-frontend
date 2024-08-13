import { contents } from "@/app/category/page"
import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function page({params}) {
  const blogpost = contents.find(post => post.title.split(' ').join('-')== params.id)

  const relatedArt = contents.filter(content => content.category == blogpost.
    category && (content.title !== blogpost.title))
  return (
    <article className='w-4/5 m-auto text-3xl'>
      <Image src={`/id${blogpost.id}.jpg`} alt={blogpost.title} width='500' height='500'/>

      <h2>{blogpost.title}</h2>
      <h2>description</h2>
      {
        blogpost.description.map((para,index) => (
          <p key={index}>{para}</p>
        ))
      }

      <section>
        <h2>related articles</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
        {relatedArt.map(content =>(
            <Link key={content.id} href={`/blog/${content.title.split(' ').join('-')}`} title={content.title}>
            <section  className={`text-black bg-cover h-[300px] mt-11`} style={{backgroundImage: `url(/id${content.id}.jpg)`}}>
                <h2>{content.title}</h2>

            </section>
            </Link>

        ))}
      
    </div>
      </section>
    </article>
    
  )
}
