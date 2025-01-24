import WelcomeShape from "@/components/Shapes/WelcomeShape";
import type { ReactNode } from "react";

export default function LoginWrapper({ children }: { children: ReactNode }) {
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='absolute bottom-[20%] -right-[20%]'>
        <WelcomeShape isEmpty isReverse />
      </div>
      <div className='flex flex-col gap-6 relative z-30'>{children}</div>
      <div className='absolute top-[10%] -left-[20%]'>
        <WelcomeShape isEmpty />
      </div>
    </section>
  );
}
