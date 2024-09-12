"use client";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import { FloatingDock } from "@/components/ui/floating-dock";
import { WavyBackground } from "@/components/ui/wavy-background";
import { IconCalendarStats, IconHistory, IconHome, IconUserCircle } from "@tabler/icons-react";



export default function Home() {
  const links = [
    {
      title: 'Home',
      icon: (<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
      href: '/'
    },
    {
      title: 'Upcoming Meetings',
      icon: (<IconCalendarStats className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
      href:'/upcoming-meetings'
    },
    {
      title: 'Meetings History',
      icon: (<IconHistory className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
      href:'/upcoming-meetings'
    },
    {
      title: 'Profile',
      icon: (<IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
      href: '/profile'
    }
    
  ]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full flex-col gap-8 row-start-2 items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40 text-center">
            <Hero />
            <MobileNav/>
            <div className="lg:flex items-center justify-center w-full hidden">
          <FloatingDock
            desktopClassName="fixed bottom-3"
            mobileClassName="translate-y-20 fixed left-3"
            items={links}
          />
        </div>
        </WavyBackground>
      </main>
      
    </div>
  );
}
