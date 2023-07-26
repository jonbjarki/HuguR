import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link href="/login">
      <button className="btn btn-primary">Sign In</button>
    </Link>
  );
}
