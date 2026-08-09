import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    size === "sm" && "h-9 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm",
    size === "lg" && "h-13 px-7 text-base",
    variant === "primary" &&
      "bg-white text-slate-950 shadow-[0_18px_60px_rgba(255,255,255,0.18)] hover:-translate-y-0.5 hover:bg-teal-100",
    variant === "secondary" &&
      "border border-white/12 bg-white/[0.06] text-white shadow-inner shadow-white/5 hover:-translate-y-0.5 hover:bg-white/[0.1]",
    variant === "ghost" && "text-slate-300 hover:bg-white/[0.06] hover:text-white",
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
