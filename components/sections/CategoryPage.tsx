import { ArticleFeed } from "@/components/sections/ArticleFeed";
import { Sidebar } from "@/components/layout/Sidebar";
import { FALLBACK_PRICE_DATA } from "@/lib/api";
import type { Article } from "@/types";

interface CategoryPageProps {
  title: string;
  description: string;
  articles: Article[];
  accentColor?: string;
}

export function CategoryPage({
  title,
  description,
  articles,
  accentColor = "#F7931A",
}: CategoryPageProps) {
  return (
    <div className="bg-[#0A0A0A] pt-[64px] lg:pt-[80px] min-h-screen">
      {/* Page header */}
      <div className="border-b border-[#2A2A2A] bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-[3px] h-[28px] rounded-full"
              style={{ background: accentColor }}
            />
            <h1
              className="text-[32px] lg:text-[40px] font-[700] text-white leading-[1.1] tracking-[-0.02em]"
            >
              {title}
            </h1>
          </div>
          <p className="text-[16px] text-[#A0A0A0] ml-6">{description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Feed */}
          <div className="lg:col-span-8">
            <ArticleFeed
              articles={articles}
              showSection={false}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[88px]">
              <Sidebar priceData={FALLBACK_PRICE_DATA} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
