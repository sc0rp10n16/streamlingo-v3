"use client";
import Hero from "@/components/Hero";
import { WavyBackground } from "@/components/ui/wavy-background";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full flex-col gap-8 row-start-2 items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40 text-center">
            <Hero />
        </WavyBackground>
      </main>
      
    </div>
  );
}
