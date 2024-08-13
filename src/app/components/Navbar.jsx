import Image from "next/image";
import Link from "next/link";
import SocialIcons  from "./SocialIcons";
import Buttons from "./Buttons";




export default function Navbar() {
  return (
    <nav className=" text-black h-[10vh] flex justify-between text-3xl capitalize p-5">
        <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ab logo" width='50' height='50' />

            <p>Habeeb</p>
        
        </div>
        <ul className="flex items-center gap-x-5 ">
            <li className="hover:text-blue-400 hover:underline"><Link href='/'>Home</Link></li>
            <li className="hover:text-blue-400 hover:underline"><Link href='/category'>Pages</Link></li>
            <li className="hover:text-blue-400 hover:underline"><Link href='/about'>About us</Link></li>

        </ul>
        
        <SocialIcons />

        <div className="flex items-center">
        <Buttons /> 
        </div>
        
    </nav>
  )
}
