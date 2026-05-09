import { ComponentProps } from "react";
import Link from "next/link";

type ButtonProps = ComponentProps<"button"> & {
  href?: string;
  variant?: "solid" | "outline" | "ghost";
};

export default function Button({
  href,
  variant = "solid",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";
  const variants: Record<string, string> = {
    solid: "bg-emerald-500 text-slate-900 hover:bg-emerald-400",
    outline: "border border-white/50 text-white hover:border-white",
    ghost: "border border-slate-200 text-slate-700 hover:border-slate-300",
  };

  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className ?? ""}`.trim()}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${variants[variant]} ${className ?? ""}`.trim()} {...props} />
  );
}
