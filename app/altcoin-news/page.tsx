import type { Metadata } from "next";
import { CategoryPage } from "@/components/sections/CategoryPage";
import { getArticlesByCategory, mockArticles } from "@/lib/mock-articles";

export const metadata: Metadata = {
  title: "Altcoin News",
  description: "Altcoin market news and analysis from a Bitcoin-first perspective.",
};

export default function AltcoinNewsPage() {
  const articles = getArticlesByCategory("altcoin-news");
  const extra = mockArticles.filter(
    (a) => a.category === "bitcoin-news"
  ).slice(0, 2);

  return (
    <CategoryPage
      title="Altcoin News"
      description="Altcoin and broader crypto market coverage, viewed through a Bitcoin-first lens."
      articles={[...articles, ...extra]}
      accentColor="#3B9EFF"
    />
  );
}
