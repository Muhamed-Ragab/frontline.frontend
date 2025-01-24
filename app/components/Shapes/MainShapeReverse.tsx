export default function MainShapeReverse() {
  const imgHeight = 80;
  return (
    <div className='w-fit h-fit flex rounded-3xl relative z-20 overflow-hidden'>
      <div className='flex flex-col relative z-30 rounded-3xl'>
        <h2 className='text-2xl font-clash-display text-customBlue p-5 px-16 font-semibold rounded-[84px] bg-primary max-w-[50vw]'>
          Typing.....
        </h2>
        <div
          className='rounded-tr-[30px] bg-white w-full h-full'
          style={{ height: imgHeight + "px" }}
        />
      </div>

      <div className='w-4/12 max-h-[150px] h-[50%] absolute bottom-10 right-10 bg-primary z-20' />

      <div className='flex flex-col relative z-30'>
        <div className='w-full h-full rounded-bl-[30px] bg-white' />
        <div
          className='p-3 aspect-square rounded-full bg-primary'
          style={{ height: imgHeight + "px" }}
        />
      </div>
    </div>
  );
}
