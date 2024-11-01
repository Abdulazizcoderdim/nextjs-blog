import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MenuIcon, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';
import { items } from './items';

export function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="lg:hidden flex" variant={'ghost'} size={'icon'}>
          <MenuIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>abdulazizblog.com</DialogTitle>
          <DialogDescription>
            <div className="flex w-full items-center justify-between">
              <ModeToggle />
              <Button variant={'ghost'} size={'icon'}>
                <SearchIcon />
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
        <nav className="flex flex-col items-center">
          {items.map((item, i) => {
            return (
              <Button
                className="w-full"
                key={i}
                size={'lg'}
                variant="ghost"
                asChild
              >
                <Link href={item.path}>{item.name}</Link>
              </Button>
            );
          })}
        </nav>
        <DialogFooter>
          <Button asChild className="w-full">
            <Link href={'/sign-in'}>Login</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
