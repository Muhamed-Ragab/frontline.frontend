import { cn } from "@nextui-org/theme";
import { Link, type LinkProps } from "react-router";

type Props = LinkProps & {
  variant?: "primary" | "secondary";
};

export default function NavLink({
  children,
  variant = "secondary",
  className,
  ...props
}: Props) {
  const baseStyles =
    "h-[47px] duration-300 grid place-content-center font-clash-display font-medium rounded-[41px] text-xs outline-none";
  const variantStyles =
    variant === "primary"
      ? "bg-customPrimary"
      : "bg-customSecondary hover:bg-black hover:text-white";

  return (
    <Link className={cn(baseStyles, variantStyles, className)} {...props}>
      {children}
    </Link>
  );
}
