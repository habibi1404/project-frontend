import Image from 'next/image'
import React from 'react'
import { contents } from '../category/page'

export default function Author() {
  return (
    <div className='py-9 bg-red-300'>
    <div className='font-bold text-3xl text-center'>
        <h1>Author</h1>
        </div>
        <div className='grid grid-cols-3'>
            {contents.map(content => (
                <div key={content.id}>
                    <Image src={`/${content.author.split(' ').join('-')}.jpg`} alt={content.author} width="700" height="500" />
                    <h2>{content.author}</h2>
                </div>
            ))}
    </div>
    </div>
  )
}
