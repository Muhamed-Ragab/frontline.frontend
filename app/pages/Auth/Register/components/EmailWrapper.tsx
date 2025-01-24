import AuthShape from "@/components/Shapes/AuthShape";
import AvatarShape from "@/components/Shapes/AvatarShape";
import { type ReactNode } from "react";

export default function EmailWrapper({ children }: { children: ReactNode }) {
  return (
    <section className='w-full flex justify-center items-center h-full'>
      <div className='flex flex-col gap-6 relative'>
        <div className='absolute right-[60%] bottom-full'>
          <AuthShape />
        </div>
        <div className='flex flex-col items-center content-center'>
          {children}
        </div>
        <AvatarShape
          color='customSecondary'
          textColor='customBlue'
          className='absolute top-full left-full'
        />
      </div>
    </section>
  );
}
