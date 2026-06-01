import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant =
  | "category"
  | "breaking"
  | "sponsored"
  | "press-release"
  | "live"
  | "new"
  | "analysis"
  | "guide"
  | "mining"
  | "ecosystem";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = "category", children, className }: BadgeProps) {
  const base =
    "inline-flex items-center h-[24px] px-[10px] rounded-[4px] text-[11px] font-[500] uppercase tracking-[0.04em] whitespace-nowrap";

  const variants: Record<BadgeVariant, string> = {
    category: "bg-[#1A1A1A] text-[#A0A0A0]",
    breaking: "bg-[#FF4D4D] text-white",
    sponsored: "bg-[#1A1A1A] text-[#FFB800] border border-[#FFB800]/30",
    "press-release": "bg-[#1A1A1A] text-[#3B9EFF]",
    live: "bg-[rgba(0,200,150,0.15)] text-[#00C896]",
    new: "bg-[rgba(0,200,150,0.15)] text-[#00C896]",
    analysis: "bg-[rgba(247,147,26,0.15)] text-[#F7931A]",
    guide: "bg-[rgba(0,200,150,0.15)] text-[#00C896]",
    mining: "bg-[#242424] text-[#A0A0A0]",
    ecosystem: "bg-[rgba(59,158,255,0.15)] text-[#3B9EFF]",
  };

  return (
    <span className={cn(base, variants[variant], className)}>{children}</span>
  );
}

interface StatusPillProps {
  status: "bullish" | "bearish" | "neutral";
  className?: string;
}

export function StatusPill({ status, className }: StatusPillProps) {
  const dotColors = {
    bullish: "#00C896",
    bearish: "#FF4D4D",
    neutral: "#FFB800",
  };
  const labels = {
    bullish: "BULLISH",
    bearish: "BEARISH",
    neutral: "NEUTRAL",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-[4px] h-[28px] px-[14px] rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[11px] font-[500] uppercase tracking-[0.06em] text-white",
        className
      )}
    >
      <span
        className="w-[6px] h-[6px] rounded-full pulse-dot flex-shrink-0"
        style={{ backgroundColor: dotColors[status] }}
      />
      <span className="text-[#A0A0A0]">MARKET STATUS</span>
      <span className="text-[#A0A0A0]">·</span>
      <span style={{ color: dotColors[status] }}>{labels[status]}</span>
    </div>
  );
}
