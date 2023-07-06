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
          <Link href="/">
            <Image
              src="/images/RU.png"
              width={87}
              height={87}
              alt="Reykjavik University Logo"
              className={styles.logo}
              />
          </Link>
          <nav className={styles.navbar}>
            <Link href="/" className={styles.navItem}>Reading</Link>
            <Link href="courses" className={styles.navItem}>Courses</Link>
            <Link href="/" className={styles.navItem}>Exercises</Link>
            <Link href="/" className={styles.navItem}>Diary</Link>
          </nav>

          <menu className={styles.headerRight}>
            <li><button className={styles.headerBtn}>Get Support</button></li>
            <li><button className={styles.headerBtn}>EN v</button></li>
          </menu>
        
        </header>
      <div className={styles.mainWrapper}>
        {children}
      </div>
      </body>
    </html>
  )
}
