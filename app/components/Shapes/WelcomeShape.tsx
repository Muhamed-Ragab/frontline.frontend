type Props = {
  name?: string;
  isEmpty?: boolean;
  isReverse?: boolean;
};

export default function WelcomeShape({ name, isEmpty, isReverse }: Props) {
  return (
    <main className='w-fit h-fit flex rounded-3xl relative z-20 overflow-hidden'>
      {isReverse ? (
        <>
          <div className='flex flex-col justify-center items-center z-30'>
            <div className='bg-white rounded-full h-[100px] w-[102.5%]' />
            <div className='bg-customPrimary w-[307px] h-[80px] capitalize right-5 font-basement-grotesque font-bold rounded-full py-5 text-[42px]' />
          </div>

          <div className='h-24 w-24 z-20 absolute left-[250px] top-[47px] bg-customPrimary' />

          <div className='flex flex-col justify-center items-center z-30'>
            <div className='bg-customPrimary w-[307px] h-[80px] uppercase left-5 top-28 font-basement-grotesque font-bold rounded-full text-nowrap text-center py-5 text-[42px]' />
            <div className='bg-white rounded-full h-[50px] w-[100%] rounded-bl-xl' />
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col justify-center items-center z-30'>
            <div className='bg-customPrimary w-[307px] h-[80px] text-center capitalize font-basement-grotesque font-extrabold rounded-full flex items-center justify-center text-[42px]'>
              {isEmpty ? "" : "Welcome"}
            </div>
            <div className='bg-white rounded-full h-[80px] w-[100%]' />
          </div>

          <div className='h-[80px] w-24 z-20 absolute left-[250px] top-[38px] bg-customPrimary' />

          <div className='flex flex-col justify-center items-center z-30'>
            <div className='bg-white rounded-full h-[80px] w-[100%]' />
            <div className='bg-customPrimary w-[307px] h-[80px] uppercase font-basement-grotesque font-extrabold rounded-full text-nowrap text-center flex items-center justify-center z-30 text-[42px]'>
              {isEmpty ? "" : name + "!!!"}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
