import { FiFacebook,FiInstagram,FiLinkedin } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";

export default function SocialIcons() {
  return (

        <div className="flex items-center  gap-x-5 ">
        <div className="rounded-full border-2 border-blue-700 text-2xl p-2 hover:bg-blue-400"><Link href='https://facebook.com'><FiFacebook /></Link></div>
        <div className="rounded-full border-2 border-yellow-300 text-2xl p-2 hover:bg-yellow-200"><Link href='https://instagram.com'><FiInstagram /></Link></div>
        <div className="rounded-full border-2 border-cyan-300 text-2xl p-2 hover:bg-cyan-200"><Link href='https://twitter.com'><RiTwitterXFill /></Link></div>
        <div className="rounded-full border-2 border-purple-700 text-2xl p-2 hover:bg-purple-600"><Link href='https://linkedin.com'><FiLinkedin /></Link></div>

        </div>
  )
}
