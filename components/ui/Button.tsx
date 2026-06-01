"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "amber" | "danger";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-[500] uppercase tracking-[0.04em] rounded-[8px] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[#F7931A]/40";

  const variants = {
    primary:
      "bg-white text-[#0A0A0A] hover:bg-[#F0F0F0] active:bg-[#E0E0E0] active:scale-[0.98] disabled:bg-[#1A1A1A] disabled:text-[#666] disabled:border disabled:border-[#2A2A2A]",
    ghost:
      "bg-transparent text-white border border-[rgba(255,255,255,0.4)] hover:border-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)] active:bg-[rgba(255,255,255,0.1)]",
    amber:
      "bg-[#F7931A] text-[#0A0A0A] hover:bg-[#e8841a] active:scale-[0.98]",
    danger:
      "bg-[#FF4D4D] text-white hover:bg-[#e64444] active:scale-[0.98]",
  };

  const sizes = {
    sm: "h-[32px] px-[16px] text-[11px]",
    md: "h-[40px] px-[20px] text-[13px]",
    lg: "h-[48px] px-[24px] text-[13px]",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
