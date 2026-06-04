import { CategoryPage } from '@/components/layout/CategoryPage';
import { topProjectArticles } from '@/lib/mock-articles';

export default function TopProjectsPage() {
  return <CategoryPage eyebrow="Category" title="Top Project" description="Deep dives into Bitcoin-native protocols, Layer-2 infrastructure, wallets, and developer tools building on the base chain." articles={topProjectArticles} accentColor="#00C896" />;
}
