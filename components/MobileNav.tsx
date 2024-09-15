'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from '@/lib/utils';
import { IconCalendarStats, IconHistory, IconHome, IconMenu2, IconUserCircle } from '@tabler/icons-react';

const MobileNav = () => {
  const pathname = usePathname();
  const links = [
    {
      title: 'Home',
      icon: (<IconHome className="h-full w-full text-white dark:text-neutral-300" />),
      href: '/'
    },
    {
      title: 'Upcoming Meetings',
      icon: (<IconCalendarStats className="h-full w-full text-white dark:text-neutral-300" />),
      href:'/upcoming-meetings'
    },
    {
      title: 'Meetings History',
      icon: (<IconHistory className="h-full w-full text-white dark:text-neutral-300" />),
      href:'/meetings-history'
    },
    {
      title: 'Profile',
      icon: (<IconUserCircle className="h-full w-full text-white dark:text-neutral-300" />),
      href: '/profile'
    }
    
  ]

  return (
    <section className="w-full max-w-[264px] text-white fixed top-3 left-3">
      <Sheet>
        <SheetTrigger asChild>
          <IconMenu2 className='h-10 w-10 text-neutral-500 dark:text-neutral-300'/>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 text-white">
          <Link href="/" className="flex items-center gap-1">
            
            <p className="text-[26px] font-extrabold text-white">STREAMLINGO</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                {links.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        key={item.title}
                        className={cn(
                          'flex gap-4 cursor-pointer items-center p-4 rounded-lg w-full max-w-60',
                          {
                            'bg-blue-1': isActive,
                          }
                        )}
                      >
                        <div className="h-4 w-4 text-white">{item.icon}</div>
                        <p className="font-normal">{item.title}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;