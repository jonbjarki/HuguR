'use client';

import Link from 'next/link';
import Image from 'next/image';

export function HomeIcon() {
  return (
    <label className="btn btn-ghost btn-circle avatar">
      <Link href="/">
        <Image
          src="/images/RU.png"
          fill
          alt="Reykjavik University Logo"
          className=""
        />
      </Link>
    </label>
  );
}
