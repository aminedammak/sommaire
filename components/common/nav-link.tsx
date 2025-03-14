import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={`${cn(
        'transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500',
        className
      )}`}
    >
      {children}
    </Link>
  );
}
