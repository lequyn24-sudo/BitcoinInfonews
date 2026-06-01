import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

interface ImmersiveFeaturedProps {
  primary: Article;
  secondary: Article[];
}

export function ImmersiveFeatured({ primary, secondary }: ImmersiveFeaturedProps) {
  return (
    <section className="w-full bg-[#060608] py-6 lg:py-8">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        {/* ── Section label — minimal ── */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.14em] text-[#404040]">
            Featured Signal
          </span>
          <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.04)]" />
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.10em] text-[#00C896]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#00C896] pulse-dot" />
            Live
          </span>
        </div>

        {/* ── Asymmetric layout: large + stack ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-3">

          {/* PRIMARY — cinematic large feature */}
          <Link
            href={`/${primary.slug}`}
            className="group relative block overflow-hidden rounded-[12px]"
            style={{ minHeight: "420px" }}
          >
            {/* Full-bleed image */}
            <Image
              src={primary.imageUrl}
              alt={primary.title}
              fill
              sizes="(max-width: 1024px) 100vw, 860px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />

            {/* Deep gradient overlay — bottom-heavy */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,6,8,0.97) 0%, rgba(6,6,8,0.70) 40%, rgba(6,6,8,0.10) 100%)",
              }}
            />

            {/* Top left badge */}
            {primary.isBreaking ? (
              <div className="absolute top-5 left-5 z-10">
                <Badge variant="breaking">Breaking</Badge>
              </div>
            ) : (
              <div className="absolute top-5 left-5 z-10">
                <Badge variant="category">{primary.categoryLabel}</Badge>
              </div>
            )}

            {/* Arrow icon top right */}
            <div className="absolute top-5 right-5 z-10 w-[32px] h-[32px] rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ArrowUpRight size={14} className="text-white" />
            </div>

            {/* Floating glass text panel — bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h2
                className="text-white font-[700] leading-[1.2] tracking-[-0.02em] mb-3 group-hover:text-[#F7931A] transition-colors duration-200"
                style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
              >
                {primary.title}
              </h2>
              <p className="text-[#606060] text-[14px] leading-[1.6] mb-4 line-clamp-2">
                {primary.excerpt}
              </p>
              <div className="flex items-center gap-3 text-[12px] text-[#404040]">
                <span>{primary.author}</span>
                <span className="text-[#2A2A2A]">·</span>
                <span>{formatDate(primary.date)}</span>
                <span className="text-[#2A2A2A]">·</span>
                <span>{primary.readTime} min</span>
              </div>
            </div>
          </Link>

          {/* SECONDARY STACK — 3 smaller stories */}
          <div className="flex flex-col gap-3">
            {secondary.slice(0, 3).map((article, i) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="group relative flex gap-4 glass rounded-[10px] p-4 hover:border-[rgba(247,147,26,0.2)] transition-all duration-200 flex-1"
                style={{ minHeight: "120px" }}
              >
                {/* Thumbnail */}
                <div className="relative w-[80px] h-[80px] rounded-[8px] overflow-hidden flex-shrink-0 bg-[#0F0F12]">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="80px"
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <Badge variant="category" className="mb-2">
                      {article.categoryLabel}
                    </Badge>
                    <p className="text-[13px] font-[600] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors duration-200">
                      {article.title}
                    </p>
                  </div>
                  <p className="text-[11px] text-[#404040] mt-2">
                    {formatDate(article.date)}
                  </p>
                </div>

                <ArrowUpRight
                  size={13}
                  className="text-[#2A2A2A] group-hover:text-[#F7931A] transition-colors flex-shrink-0 mt-[2px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
