import { cn } from "@nextui-org/theme";

type Props = { title: string; className?: string };

export default function FormHeader({ title, className }: Props) {
  return (
    <h2
      className={cn(
        "text-4xl font-clash-display text-center mb-5 z-50 font-medium",
        className
      )}
    >
      {title}
    </h2>
  );
}
