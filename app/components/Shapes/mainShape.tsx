import { image } from "@/constants/images";
import { cn } from "@nextui-org/theme";

type MainShapeProps = {
  dir?: "rtl" | "ltr";
  text?: string;
  textColor?: string;
};

export default function MainShape({
  dir = "ltr",
  text,
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
            "w-full h-full bg-white",
            dir === "ltr" ? "rounded-br-[30px]" : "rounded-bl-[30px]"
          )}
        />
        <img
          src={image}
          alt='image'
          className='p-3 aspect-square rounded-full bg-customSecondary'
          style={{ height: imgHeight + "px" }}
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
            "text-2xl font-clash-display p-5 px-8 font-medium rounded-[84px] bg-customSecondary max-w-[50vw]",
            `text-${textColor}`
          )}
        >
          {text}
        </h2>
        <div
          className={cn(
            "rounded-tr-[30px] bg-white w-full h-full",
            dir === "ltr" ? "rounded-tl-[30px]" : "rounded-tr-[30px]"
          )}
          style={{ height: imgHeight + "px" }}
        />
      </div>
    </div>
  );
}
