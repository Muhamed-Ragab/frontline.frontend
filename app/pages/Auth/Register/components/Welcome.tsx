import WelcomeShape from "@/components/Shapes/WelcomeShape";

export default function Welcome() {
  return (
    <main>
      <section className='h-[85vh] flex justify-center items-center'>
        {/* Top Left */}
        <div className='absolute top-[17%] -left-[24%]'>
          <WelcomeShape isEmpty />
        </div>

        {/* Middle */}
        <div className='z-50'>
          <WelcomeShape name='danny' />
        </div>
      </section>

      {/* Bottom Right */}
      <div className='absolute bottom-[22%] -right-[15%]'>
        <WelcomeShape isEmpty isReverse />
      </div>
    </main>
  );
}
