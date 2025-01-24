import { cn } from "@nextui-org/theme";

type AnswerProps = {
  text: string;
  maxLength?: number;
  textColor?: string;
};

export default function Answer({
  text = "Typing.....",
  maxLength = 16,
  textColor = "customBlue",
}: AnswerProps) {
  const imgHeight = 80;
  const clampedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className='self-end'>
      <div className='w-fit h-fit flex rounded-3xl relative z-20 overflow-hidden'>
        <div className='flex flex-col relative z-30 rounded-3xl'>
          <h2
            className={cn(
              "text-2xl font-medium font-clash-display p-5 px-16 rounded-[84px] bg-customPrimary max-w-[50vw]",
              `text-${textColor}`
            )}
          >
            {clampedText}
          </h2>
          <div
            className='rounded-tr-[30px] bg-white w-full h-full'
            style={{ height: imgHeight + "px" }}
          />
        </div>
        <div className='w-4/12 max-h-[150px] h-[50%] absolute bottom-10 right-10 bg-customPrimary z-20' />
        <div className='flex flex-col relative z-30'>
          <div className='w-full h-full rounded-bl-[30px] bg-white' />
          <div
            className='p-3 aspect-square rounded-full bg-customPrimary'
            style={{ height: imgHeight + "px" }}
          />
        </div>
      </div>
    </div>
  );
}
