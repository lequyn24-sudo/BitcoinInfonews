import { CategoryPage } from '@/components/layout/CategoryPage';
import { miningArticles } from '@/lib/mock-articles';

export default function MiningPage() {
  return <CategoryPage eyebrow="Category" title="Mining" description="Difficulty adjustments, hashrate trends, hardware efficiency, miner economics, and energy integration strategies." articles={miningArticles} accentColor="#F7931A" />;
}
