import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
// import styles from './page.module.css'
import hamburgerIcon from "/public/images/hamburger.svg"



const inter = Inter({ subsets: ['latin'] })

interface MetadataProps {
  title: string,
  description: string
}

export const metadata: MetadataProps = {
  title: 'HuguR',
  description: 'HuguR Mental Health Support',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky bg-lm-very-light top-0 z-40 flex flex-row flex-nowrap justify-between items-center px-4 shadow-md">
          <Link href="/">
            <Image
              src="/images/RU.png"
              width={87}
              height={87}
              alt="Reykjavik University Logo"
              className=""
              />
          </Link>


          <nav className="hidden md:flex flex-row flex-nowrap text-lg gap-6">
            <Link href="/" className="">Reading</Link>
            <Link href="/courses" className="">Courses</Link>
            <Link href="/" className="">Exercises</Link>
            <Link href="/" className="">Diary</Link>
          </nav>

          <menu className="hidden md:flex flex-row flex-nowrap gap-6">
            <li><button className="">Get Support</button></li>
            <li><button className="">EN v</button></li>
          </menu>
        

        {/* Mobile Nav */}

        <h1 className='text-3xl md:hidden'>HuguR</h1>
        <Image
        className='md:hidden' 
        src={hamburgerIcon}
        alt='navigation menu toggle'
        />
        <nav className='hidden'>
        </nav>

        </header>
      <div className='w-full relative z-10'>
        {children}
      </div>
      </body>
    </html>
  )
}
