import type { Metadata } from "next";
import { CategoryPage } from "@/components/sections/CategoryPage";
import { getArticlesByCategory, mockArticles } from "@/lib/mock-articles";

export const metadata: Metadata = {
  title: "Sponsored Articles",
  description: "Sponsored content and press releases from Bitcoin ecosystem companies.",
};

export default function SponsoredPage() {
  const sponsored = getArticlesByCategory("sponsored");
  const extra = mockArticles.filter((a) => a.category === "top-projects").slice(0, 2);

  return (
    <div className="bg-[#0A0A0A] pt-[64px] lg:pt-[80px] min-h-screen">
      {/* Disclosure banner */}
      <div className="bg-[rgba(247,147,26,0.08)] border-b border-[rgba(247,147,26,0.2)]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-3">
          <p className="text-[12px] text-[#A0A0A0]">
            <span className="text-[#FFB800] font-[500]">DISCLOSURE:</span> The following content is sponsored or press release material. BitcoinInfoNews received compensation for its publication. Views expressed are those of the sponsor and do not represent our editorial position.
          </p>
        </div>
      </div>

      <div className="border-b border-[#2A2A2A] bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[3px] h-[28px] rounded-full bg-[#FFB800]" />
            <h1 className="text-[32px] lg:text-[40px] font-[700] text-white leading-[1.1] tracking-[-0.02em]">
              Sponsored Articles
            </h1>
          </div>
          <p className="text-[16px] text-[#A0A0A0] ml-6">
            Paid content and press releases from Bitcoin ecosystem companies. Always clearly labeled.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
        <CategoryPage
          title=""
          description=""
          articles={[...sponsored, ...extra]}
          accentColor="#FFB800"
        />
      </div>
    </div>
  );
}
