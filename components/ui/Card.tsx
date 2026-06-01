import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "graphite" | "glass";
  accentTop?: "amber" | "blue" | "green" | "none";
  hover?: boolean;
}

export function Card({
  children,
  variant = "default",
  accentTop = "none",
  hover = true,
  className,
  ...props
}: CardProps) {
  const base = "rounded-[12px] p-[16px] border transition-all duration-200";

  const variants = {
    default: "bg-[#1A1A1A] border-[#2A2A2A]",
    graphite: "bg-[#242424] border-[#2A2A2A]",
    glass:
      "bg-[rgba(17,17,17,0.75)] backdrop-blur-[12px] border-[rgba(255,255,255,0.12)]",
  };

  const hoverClass = hover
    ? "hover:border-[rgba(247,147,26,0.4)] hover:shadow-[0_0_24px_rgba(247,147,26,0.08)] cursor-pointer"
    : "";

  const accents = {
    amber: "border-t-[2px] border-t-[#F7931A] rounded-t-none",
    blue: "border-t-[2px] border-t-[#3B9EFF] rounded-t-none",
    green: "border-t-[2px] border-t-[#00C896] rounded-t-none",
    none: "",
  };

  return (
    <div
      className={cn(base, variants[variant], hoverClass, accents[accentTop], className)}
      {...props}
    >
      {children}
    </div>
  );
}
