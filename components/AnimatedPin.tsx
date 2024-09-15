"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  handleClick?: () => void;
}

export function AnimatedPin({ className, icon, title, description, handleClick }: HomeCardProps) {
  return (
    <div className="w-full flex items-center justify-center mx-10"
      onClick={handleClick}
    >
      <PinContainer
        title={title}
        className={cn(
          ' py-3 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
          className
        )}
        href=""
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight  sm:basis-1/2 w-[20rem] h-[20rem]">
        <div className="isolate aspect-square items-center justify-center bg-white/20 shadow-lg ring-1 ring-black/5 flex glassmorphism size-12 rounded-[10px]">
        {icon}
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="text-lg font-normal text-center">{description}</p>
      </div>
        </div>
      </PinContainer>
    </div>
  );
}