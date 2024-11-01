import { Button } from '@/components/ui/button';
import { Code, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';
import { items } from './items';
import { MobileNav } from './mobile-nav';

const Navbar = () => {
  return (
    <header className="flex xl:px-36 border-b items-center justify-between bg-background p-6">
      <Link className="text-3xl flex items-center gap-1" href="/">
        <span className="mt-1.5 text-blue">
          <Code />
        </span>
        <h2>
          abdulaiz.
          <span className="font-bold text-lg text-blue">dev</span>{' '}
        </h2>
      </Link>

      <nav className="lg:flex hidden items-center">
        {items.map((item, i) => {
          return (
            <Button key={i} size={'lg'} variant="link" asChild>
              <Link href={item.path}>{item.name}</Link>
            </Button>
          );
        })}
      </nav>

      <div className="lg:flex hidden items-center gap-4">
        <Button asChild size={'icon'}>
          <ModeToggle />
        </Button>
        <Button variant={'ghost'} size={'icon'}>
          <SearchIcon />
        </Button>
        <Button asChild>
          <Link href={'/sign-in'}>Login</Link>
        </Button>
      </div>
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Navbar;
