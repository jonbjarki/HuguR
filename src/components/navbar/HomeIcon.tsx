import Link from 'next/link';
import Image from 'next/image';

export function HomeIcon() {
  return (
    <div className="relative h-12 w-12">
      <Link href="/">
        <Image
          src="/images/RU.png"
          fill
          alt="Reykjavik University Logo"
          className=""
        />
      </Link>
    </div>
  );
}
