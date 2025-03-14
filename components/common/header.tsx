import Link from 'next/link';
import { FileText } from 'lucide-react';
export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-4 px-2 lg:px-8 mx-auto">
      <div className="flex lg:flex-1">
        <Link
          href={'/'}
          className="flex items-center gap-1 lg:gap-2 shrink-0 group"
        >
          <FileText className="w-5 h-5 lg:w-8 text-gray-900 lg:h-8 group-hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Sommaire
          </span>
        </Link>
      </div>
      <div>
        <Link href={'/#pricing'}>Pricing</Link>
      </div>
      <div>
        <Link href={'/sign-in'}>Sign In</Link>
      </div>
    </nav>
  );
}
