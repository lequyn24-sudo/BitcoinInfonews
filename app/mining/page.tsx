import type { Metadata } from "next";
import { CategoryPage } from "@/components/sections/CategoryPage";
import { getArticlesByCategory, mockArticles } from "@/lib/mock-articles";

export const metadata: Metadata = {
  title: "Bitcoin Mining",
  description: "Bitcoin mining news, hardware analysis, and miner economics.",
};

export default function MiningPage() {
  const articles = getArticlesByCategory("mining");
  const extra = mockArticles.filter(
    (a) => a.category === "bitcoin-news"
  ).slice(0, 2);

  return (
    <CategoryPage
      title="Mining"
      description="Bitcoin mining news, hashrate analysis, hardware releases, and miner economics."
      articles={[...articles, ...extra]}
      accentColor="#A0A0A0"
    />
  );
}
