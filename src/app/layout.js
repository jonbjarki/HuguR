import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HuguR',
  description: 'HuguR Mental Health Support',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <Image
            src="/images/RU.png"
            width={87}
            height={87}
            alt="Reykjavik University Logo"
            className={styles.logo}
            />

          <nav className={styles.navbar}>
            <Link href="/" className={styles.navItem}>Reading</Link>
            <Link href="courses" className={styles.navItem}>Courses</Link>
            <Link href="/" className={styles.navItem}>Exercises</Link>
            <Link href="/" className={styles.navItem}>Diary</Link>
          </nav>

          <div>
            <button>Get Support</button>
            <button>EN v</button>
          </div>
          
        </header>

        {children}</body>
    </html>
  )
}
