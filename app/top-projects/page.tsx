import type { Metadata } from "next";
import { CategoryPage } from "@/components/sections/CategoryPage";
import { getArticlesByCategory, mockArticles } from "@/lib/mock-articles";

export const metadata: Metadata = {
  title: "Top Projects",
  description: "Analysis of leading Bitcoin ecosystem projects and protocols.",
};

export default function TopProjectsPage() {
  const articles = getArticlesByCategory("top-projects");
  const extra = mockArticles.filter(
    (a) => a.category === "altcoin-news"
  ).slice(0, 2);

  return (
    <CategoryPage
      title="Top Projects"
      description="In-depth coverage of the leading Bitcoin ecosystem projects, Layer 2 protocols, and infrastructure."
      articles={[...articles, ...extra]}
      accentColor="#00C896"
    />
  );
}
