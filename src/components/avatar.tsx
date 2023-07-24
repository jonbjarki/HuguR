import Image from 'next/image';
import Logout from '@/components/buttons/Logout';
import Link from 'next/link';

export default function Avatar() {
  return (
    <div className="dropdown dropdown-end">
      <div className="avatar" tabIndex={0}>
        <div className="w-50 rounded-full">
          <Image
            src="/images/user-icon.svg"
            alt="user icon"
            width={50}
            height={50}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu shadow bg-base-100 w-56 p-0 [&_li>*]:rounded-none"
      >
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <div className="btn-error">
            <Logout>Sign Out</Logout>
          </div>
        </li>
      </ul>
    </div>
  );
}
