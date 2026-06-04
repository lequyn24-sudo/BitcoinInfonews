import { CategoryPage } from '@/components/layout/CategoryPage';
import { sponsoredArticles } from '@/lib/mock-articles';

export default function SponsoredPage() {
  return <CategoryPage eyebrow="Sponsored" title="Sponsored Articles" description="Partner-sponsored educational content covering custody, portfolio allocation, mining economics, and Bitcoin financial products." articles={sponsoredArticles} accentColor="#FFB800" />;
}
