import { contents } from "../page"



export default function CategorySlug({params}) {
    const filteredCat = contents.filter(content => content.category == params.slug)


  return (
    <div className="grid grid-cols-3 gap-4">
    {filteredCat.map(content => (
        <section key={content.id} className={` text-white bg-contain h-[300px]`} style={{backgroundImage: `url(/id${content.id}.jpg)`}}>
            <h2>{content.title}</h2>

        </section>

    ))}

</div>
  )
}
