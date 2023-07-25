import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link href="/login">
      <button className="btn btn-accent">Sign In</button>
    </Link>
  );
}
