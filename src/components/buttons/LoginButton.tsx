'use client';

import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link href="/login">
      <button className="btn btn-primary btn-sm">Sign in</button>
    </Link>
  );
}
