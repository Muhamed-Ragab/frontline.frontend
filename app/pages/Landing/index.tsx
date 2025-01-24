import NavLink from "@/components/shared/NavLink";
import TypingAnimation from "@/components/ui/typing-animation";
import LandingNavbar from "@/layouts/MainLayout/Navbar";
import { cn } from "@nextui-org/theme";
import { useRafTimeout } from "ahooks";
import { motion, type Target } from "framer-motion";
import { useState } from "react";

export default function Landing() {
  const [textColor, setTextColor] = useState("text-white");
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  const animate: Target = {
    width: "100%",
    height: "100%",
    borderRadius: "0",
    visibility: "visible",
  };
  const initial: Target = {
    width: "50px",
    height: "50px",
    visibility: "hidden",
  };

  useRafTimeout(() => {
    setTextColor("text-black");
    setIsAnimationCompleted(true);
  }, 5500);

  return (
    <main className='min-h-screen flex flex-col overflow-hidden w-full relative'>
      <header>
        <LandingNavbar />
      </header>
      <motion.div
        initial={{ backgroundColor: "black" }}
        animate={{ backgroundColor: "white" }}
        transition={{ delay: 6.5 }}
        className='bg-black flex-1 w-full'
      >
        <section className='container mx-auto relative flex flex-col justify-start items-center'>
          <div
            className={cn(
              "flex flex-col w-full text-center z-50 translate-y-10 px-20",
              textColor
            )}
          >
            <div className='flex w-full z-50'>
              <TypingAnimation className='text-nowrap font-basement-grotesque font-extrabold text-[110px]'>
                Elevate your
              </TypingAnimation>

              <motion.div
                initial={{ visibility: "visible" }}
                animate={{ visibility: "hidden" }}
                transition={{ delay: 1.3 }}
                className='translate-y-2 w-4 h-32 bg-blue-500 animate-pulse'
              />
            </div>

            <div className='flex justify-end w-full'>
              <div className='flex w-[817px]'>
                <div className='flex'>
                  <TypingAnimation
                    delay={2500}
                    className='text-nowrap font-basement-grotesque font-extrabold text-[110px] w-fit'
                  >
                    Sales Le
                  </TypingAnimation>
                  <TypingAnimation
                    delay={2800}
                    duration={500}
                    className='text-nowrap font-basement-grotesque font-extrabold text-[110px] w-fit'
                  >
                    gacy
                  </TypingAnimation>
                </div>
                <motion.div
                  initial={{ visibility: "hidden", opacity: 0 }}
                  animate={{ visibility: "visible", opacity: 100 }}
                  transition={{ delay: 1.5, duration: 200 }}
                  className={cn(
                    "translate-y-2 min-w-4 h-32 bg-blue-500 animate-pulse",
                    {
                      hidden: isAnimationCompleted,
                    }
                  )}
                />
              </div>
            </div>

            <motion.div
              initial={{ visibility: "hidden", opacity: 0 }}
              animate={{ visibility: "visible", opacity: 100 }}
              transition={{
                delay: 8,
              }}
              className='z-50 translate-y-8 w-full space-y-7'
            >
              <div className='w-full text-start flex justify-start items-center'>
                <p className='text-[32px] font-clash-display font-normal w-7/12'>
                  Unleashing the potential of sales professionals to stand out,
                  thrive, and succeed
                </p>
              </div>

              <div className='flex justify-start items-center space-x-10'>
                <NavLink
                  to={"/auth/register"}
                  variant='primary'
                  className='bg-customPrimary font-clash-display font-medium text-sm w-[151px] h-[57px] rounded-[41px] outline-none'
                >
                  Get Started
                </NavLink>
                <span className='font-clash-display font-medium text-sm'>
                  Contact Sales
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      <motion.div
        className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-customPrimary'
        initial={initial}
        animate={animate}
        transition={{ duration: 0.5, delay: 5.5 }}
      />
      <motion.div
        className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background'
        initial={initial}
        animate={animate}
        transition={{ duration: 0.5, delay: 6.5 }}
      />
    </main>
  );
}
