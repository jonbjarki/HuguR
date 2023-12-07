'use client';

import Link from 'next/link';

export default function SupportButton() {
  return (
    <Link href="/">
      <button className="btn btn-info btn-sm">Get support</button>
    </Link>
  );
}
