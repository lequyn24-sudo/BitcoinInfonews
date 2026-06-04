import { CategoryPage } from '@/components/layout/CategoryPage';
import { blockchainEventArticles } from '@/lib/mock-articles';

export default function BlockchainEventsPage() {
  return <CategoryPage eyebrow="Category" title="Blockchain Event" description="Key milestones, conference coverage, regulatory decisions, and protocol events shaping the Bitcoin and blockchain ecosystem." articles={blockchainEventArticles} accentColor="#FFB800" />;
}
