import React from 'react'
import Image from 'next/image'
import Author from '../components/Author'

export default function page() {
  return (
    <section>
        <div className='flex m-auto'>
            <div>
                <h1 className='text-4xl font-bold py-8'>About Us</h1>
                <p>
                 Welcome to Habeeb's Insight! We are a passionate team dedicated to bringing you the <br />
                 latest and most insightful content in the world of Flexography. Our mission is to <br />
                  provide our readers with a one-stop destination for all things Flexo from informative <br />
                  articles to in-depth analyses and engaging discussions. <br />
                </p>

                <div className='flex gap-5'>
                    <div className='h-[90px] w-[90px] border-2 border-red-200 text-center justify-center flex flex-col'>
                        <span>100k</span>
                        <span>Total blogs</span>
                    </div>
                    <div className='h-[90px] w-[90px] border-2 border-yellow-200 text-center justify-center flex flex-col'>
                        <span>6</span>
                        <span>Skilled</span>
                    </div>
                    <div className='h-[90px] w-[90px] border-2 border-red-800 text-center justify-center flex flex-col'>
                        <span>15k+</span>
                        <span>Genuine user</span>
                    </div>
                </div>
            </div>
            <Image src='/woman (2).jpg' alt='a woman' width='800' height='10'/>
        </div>

        <div>
            <h2 className='font-bold text-2xl text-center py-9'>Our Story</h2>
            <p>Our journey into the world of Flexo is deeply rooted in our unwavering passion for Flexography.
                 Founded by a group of dedicated individuals who share a common love for Flexo, our story is one
                  of collective vision and perseverance. Inspired by the profound impact that Flexography has on
                   individuals and communities, we set out to create a platform that not only celebrates the beauty 
                   and intricacies of Flexo, but also fosters a sense of belonging and connection among enthusiasts worldwide.</p>
        </div>
        <div className='flex py-9 gap-4 items-center justify-center'>
            <p className='bg-blue-500'>Community Support</p>
            <p className='bg-yellow-500'>Simple and Affordable</p>
            <p className='bg-red-500'>Standard in Industry Knowledge</p>
        </div>

        <Author/>

    </section>
  )
}
