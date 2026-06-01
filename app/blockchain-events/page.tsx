import type { Metadata } from "next";
import { CategoryPage } from "@/components/sections/CategoryPage";
import { getArticlesByCategory, mockArticles } from "@/lib/mock-articles";

export const metadata: Metadata = {
  title: "Blockchain Events",
  description: "Major blockchain conferences, summits, and industry events.",
};

export default function BlockchainEventsPage() {
  const articles = getArticlesByCategory("blockchain-events");
  const extra = mockArticles.filter(
    (a) => a.category === "bitcoin-news"
  ).slice(0, 2);

  return (
    <CategoryPage
      title="Blockchain Events"
      description="Coverage of major Bitcoin and blockchain conferences, summits, and industry events worldwide."
      articles={[...articles, ...extra]}
      accentColor="#FFB800"
    />
  );
}
