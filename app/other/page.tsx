import type { Metadata } from "next";
import { CategoryPage } from "@/components/sections/CategoryPage";
import { getArticlesByCategory, mockArticles } from "@/lib/mock-articles";

export const metadata: Metadata = {
  title: "Other",
  description: "Macroeconomics, regulation, and broader context for Bitcoin investors.",
};

export default function OtherPage() {
  const articles = getArticlesByCategory("other");
  const extra = mockArticles.filter(
    (a) => a.category === "bitcoin-news"
  ).slice(0, 3);

  return (
    <CategoryPage
      title="Other"
      description="Macro analysis, regulatory coverage, and broader context that impacts the Bitcoin market."
      articles={[...articles, ...extra]}
      accentColor="#A0A0A0"
    />
  );
}
