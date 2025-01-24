import { image } from "@/constants/images";
import { cn } from "@nextui-org/theme";

type QuestionProps = {
  text: string;
  textColor?: string;
};

export default function Question({
  text = "What&rsquo;s Your Full name?",
  textColor = "customBlue",
}: QuestionProps) {
  const imgHeight = 80;
  return (
    <div className='w-fit h-fit flex rounded-3xl relative z-20 overflow-hidden'>
      <div className='flex flex-col relative z-30'>
        <div className='w-full h-full rounded-br-[30px] bg-white' />
        <img
          src={image}
          alt='image'
          className='p-3 aspect-square rounded-full bg-customSecondary'
          style={{ height: imgHeight + "px" }}
        />
      </div>

      <div className='w-4/12 max-h-[150px] h-[50%] absolute bottom-10 left-10 bg-customSecondary z-20' />

      <div className=' flex flex-col relative z-30 rounded-3xl'>
        <h2
          className={cn(
            "text-2xl font-clash-display p-5 px-16 font-medium rounded-[84px] bg-customSecondary max-w-[50vw]",
            `text-${textColor}`
          )}
        >
          {text}
        </h2>
        <div
          className='rounded-tl-[30px] bg-white w-full h-full'
          style={{ height: imgHeight + "px" }}
        />
      </div>
    </div>
  );
}
