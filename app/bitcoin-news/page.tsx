import type { Metadata } from "next";
import { CategoryPage } from "@/components/sections/CategoryPage";
import { getArticlesByCategory, mockArticles } from "@/lib/mock-articles";

export const metadata: Metadata = {
  title: "Bitcoin News",
  description: "Latest Bitcoin news, analysis, and market updates from BitcoinInfoNews.",
};

export default function BitcoinNewsPage() {
  const articles = getArticlesByCategory("bitcoin-news");
  // Add some variety from other categories
  const extra = mockArticles.filter(
    (a) => a.category !== "bitcoin-news" && !a.isSponsored
  ).slice(0, 3);

  return (
    <CategoryPage
      title="Bitcoin News"
      description="Latest Bitcoin news, market movements, and on-chain analysis."
      articles={[...articles, ...extra]}
      accentColor="#F7931A"
    />
  );
}
