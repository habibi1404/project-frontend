import { Abel } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cook = Abel({ subsets: ["latin"], weight:'400' });

export const metadata = {
  title: "Blogging Platform",
  description: "A web development platform for web developers",
  keywords: 'html,tailwind,css,js,javascript,react,next,vite'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cook.className}>
      <Navbar/>
      <div className="min-h-screen">
        {children}

      </div>
      <Footer/>
        </body>
    </html>
  );
}
