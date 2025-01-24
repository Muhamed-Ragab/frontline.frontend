import * as Icons from "@/constants/images";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { cn } from "@nextui-org/theme";

const avatars = [Icons.avatar1, Icons.avatar2, Icons.avatar3, Icons.avatar4];

type AvatarShapeProps = React.HTMLAttributes<HTMLDivElement> & {
  color: string;
  textColor: string;
};

export default function AvatarShape({
  color,
  textColor,
  className,
  ...props
}: AvatarShapeProps) {
  const imgHeight = 55;

  return (
    <div
      className={cn(
        "w-fit h-fit flex flex-col rounded-3xl relative z-20 overflow-hidden",
        className
      )}
      {...props}
    >
      <section className='flex relative z-30 ml-5'>
        <div
          className='rounded-br-[30px] bg-white w-full h-full aspect-square'
          style={{ height: imgHeight + "px" }}
        />
        <h2
          className={cn(
            "text-xl text-nowrap font-clash-display py-3 px-5 font-medium rounded-full max-w-[50vw]",
            `bg-${color}`,
            `text-${textColor}`
          )}
        >
          Document, Grow, and Shine
        </h2>
      </section>

      <div
        className={cn(
          "w-4/12 max-h-[150px] h-[50%] absolute bottom-7 left-7 z-20",
          `bg-${color}`
        )}
      />
      <div
        className={cn(
          "w-4/12 max-h-[150px] h-[50%] absolute bottom-7 left-28 z-20",
          `bg-${color}`
        )}
      />

      <section className='flex relative z-30 rounded-3xl overflow-hidden'>
        <AvatarGroup
          className={cn(
            "rounded-full px-2 *:border-2 *:border-white",
            `bg-${color}`
          )}
        >
          {avatars.map((Icon, i) => (
            <Avatar key={i} src={Icon} data-hover={false} />
          ))}
        </AvatarGroup>
        <div
          className='w-full rounded-tl-[30px] bg-white'
          style={{ height: imgHeight + "px" }}
        />
      </section>
    </div>
  );
}
