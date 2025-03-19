import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from './nav-link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
export default function Header() {
  const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 px-2 lg:px-8 mx-auto">
      <div className="flex flex-1">
        <NavLink
          href="/"
          className="flex items-center gap-1 lg:gap-2 shrink-0 group"
        >
          <FileText className="w-5 h-5 lg:w-8 text-gray-900 lg:h-8 group-hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Sommaire
          </span>
        </NavLink>
      </div>
      <div className="flex gap-4 lg:gap-12 lg:justify-center lg:items-center">
        <NavLink href={'/#pricing'}>Pricing</NavLink>
        <SignedIn>
          <NavLink href={'/#dashboard'}>Your summaries</NavLink>
        </SignedIn>
      </div>
      <div className="flex lg:flex-1 lg:justify-end">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href={'/upload'}>Upload a PDF</NavLink>
            <div>Pro</div>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <NavLink href={'/sign-in'}>Sign In</NavLink>
        </SignedOut>
      </div>
    </nav>
  );
}
