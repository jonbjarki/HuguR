'use client';

import clsx from 'clsx';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function NavigationLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link
      aria-current={isActive}
      className={clsx(
        'inline-block py-3 lg:mx-8 md:mx-4 mx-2 transition-colors',
        isActive && 'border-b-2 border-primary',
      )}
      href={href}
      {...rest}
    />
  );
}
