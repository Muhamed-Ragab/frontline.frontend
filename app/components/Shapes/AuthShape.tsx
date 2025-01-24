import { image } from "@/constants/images";
import { cn } from "@nextui-org/theme";

type MainShapeProps = {
  dir?: "rtl" | "ltr";
  text?: string;
  textColor?: string;
};

export default function MainShape({
  dir = "ltr",
  text = "How can i help you today ?",
  textColor = "customBlue",
}: MainShapeProps) {
  const imgHeight = 70;
  return (
    <div
      className={cn(
        "w-fit h-fit flex rounded-3xl relative z-20 overflow-hidden",
        dir === "ltr" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div className='flex flex-col relative z-30'>
        <div
          className={cn(
            "aspect-square bg-white",
            dir === "ltr" ? "rounded-br-[25px]" : "rounded-bl-[25px]"
          )}
          style={{ width: imgHeight + "px" }}
        />
        <img
          src={image}
          alt='image'
          className='w-full h-full p-3 rounded-full bg-customSecondary'
        />
      </div>

      <div
        className={cn(
          "w-4/12 max-h-[150px] h-[50%] absolute bottom-10 bg-customSecondary z-20",
          dir === "ltr" ? "left-10" : "right-10"
        )}
      />

      <div className=' flex flex-col relative z-30 rounded-3xl'>
        <h2
          className={cn(
            "text-2xl font-clash-display text-nowrap p-4 px-8 font-medium rounded-[25px] bg-customSecondary max-w-[50vw]",
            `text-${textColor}`
          )}
        >
          {text}
        </h2>
        <div
          className={cn(
            "rounded-tr-[25px] bg-white w-full h-full",
            dir === "ltr" ? "rounded-tl-[25px]" : "rounded-tr-[25px]"
          )}
          style={{ height: imgHeight + "px" }}
        />
      </div>
    </div>
  );
}
