export default function AllDone({
  message,
  customMessage,
}: {
  message?: string;
  customMessage?: React.ReactNode;
}) {
  return (
    <main className='grid place-items-center '>
      <div className='h-20 w-20 mb-7 bg-customPrimary grid place-items-center rounded-[18px]'>
        <img src='/images/VerifyIcon.webp' alt='verify icon' width={29} />
      </div>
      <h3 className='text-[34px] font-medium font-clash-display'>All done!</h3>
      {customMessage ? (
        customMessage
      ) : (
        <p className='text-foreground-secondary text-sm'>{message}</p>
      )}
    </main>
  );
}
