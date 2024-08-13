import Catlinks from "./Catlinks"
import SocialIcons from "./SocialIcons"
import Pagelinks from "./Pagelinks"
import Link from "next/link"
import Subscribelinks from "./Subscribelinks"


export default function Footer() {
  return (
    <footer className="flex gap-28 items-start h-[60vh] bg-slate-950 text-white mt-8">

    <div className="">
        <div className="text-3xl p-8"> </div>
        <p className="p-5">Your gateway to dynamic insights <br />
          and versatile perspectives</p>
        


        <SocialIcons />
    </div> 

  <div className="capitalize">
    <h2 className="capitalize text-xl font-bold p-8 inline-block">Category</h2>
    <div className="hover:underline inline-block">
        <Link href='/'>
        <Catlinks title="Sport" bg="bg-pink-700"/>
        </Link>
        <Link href='/'>
        <Catlinks title="Entertainment" bg="bg-yellow-700"/><br/>
        </Link>
        <Link href='/'>
        <Catlinks title="Education" bg="bg-red-700"/>
        </Link>
        <Link href='/'>
        <Catlinks title="Travel" bg="bg-yellow-700"/> <br />
        </Link>
        <Link href='/'>
        <Catlinks title="Technology" bg="bg-blue-700"/>
        </Link>
        <Link href='/'>
        <Catlinks title="Fashion" bg="bg-red-700"/>
        </Link>

    </div>
  </div>
  <div className="capitalize">
    <h2 className="capitalize text-xl font-bold p-8">Pages</h2>
    <div className="flex justify-start items-start gap-4 m-5">

    <ol>
        <Pagelinks title='Home' link='/'/>  
        <Pagelinks title='Author' link='//author'/> 
        <Pagelinks title='Pricing' link='/pricing'/> 
        <Pagelinks title='About us' link='/about'/> 
        <Pagelinks title='Subscribe' link='/'/> 
        <Pagelinks title='Privacy Policy' link='/privacypolicy'/> 
    </ol>
    <ol>
        <Pagelinks title='Style Guide' link='/styleguide'/> 
        <Pagelinks title='Instruction' link='/instruction'/> 
        <Pagelinks title='Licenses' link='/licenses'/> 
        <Pagelinks title='Changelog' link='/changelog'/> 
        <Pagelinks title='Coming Soon' link='/comingsoon'/>  
        <Pagelinks title='Password Protected' link='/'/> 
    </ol>
    </div>
  </div>

  <div className="capitalize">
    <h2 className="capitalize text-xl font-bold p-8">Subscribe For more</h2>
    <div className="">
        <Subscribelinks/>
    </div>
    <p className="p-5 ">Designed by habeeb,Powered by webflow</p>

  </div>
  


   </footer>
  )
  
}
