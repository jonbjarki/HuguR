'use client';

import Link from 'next-intl/link';
import Image from 'next/image';
import hamburgerIcon from '/public/images/hamburger.svg';
import { useRef } from 'react';

export default function HamburgerMenu() {
  const detailRef = useRef(null);

  return (
    <details className="md:hidden dropdown dropdown-end pr-1" ref={detailRef}>
      <summary className="relative h-12 w-8 btn btn-ghost" tabIndex={0}>
        <Image src={hamburgerIcon} alt="navigation menu toggle" fill />
      </summary>
      <nav
        className="dropdown-content z-[1] menu shadow bg-base-100 w-screen h-screen [&_li>*]:rounded-none p-0 content-center py-2"
        tabIndex={0}
      >
        <Link
          href="/profile"
          className="text-2xl h-16 flex place-content-center items-center"
          onClick={() => (detailRef.current.open = false)}
        >
          <span>Profile</span>
        </Link>
        <div className="divider w-11/12 m-2"></div>
        <Link
          href="/reading"
          className="text-2xl h-16 flex place-content-center items-center"
          onClick={() => (detailRef.current.open = false)}
        >
          Reading
        </Link>
      </nav>
    </details>
  );
}
