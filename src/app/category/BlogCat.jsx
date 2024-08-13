import Link from "next/link"
import { contents } from "./page"


const contentCat = contents.map(cat => (
    <h2 key={cat.id} className="border-2 p-4 ">
        <Link href={`/category/${cat.category}`} title={cat.category}> 

        {cat.category}
        </Link>
        </h2>
)).slice(0,5)

export default function BlogCat() {
  return (
    <div className="md:w-[50%] sm:w-4/5 w-full m-auto py-8 bg-cyan-400">
    
        <section className='flex items center justify-center sm:gap-6 gap-2'>
            <h2 className="border-2 p-4" >
            <Link href={`/category/`} title={`All category`}> 
         All
</Link>
            </h2>
            {contentCat}
        </section>
    </div>
  )
}
