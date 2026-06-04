import { CategoryPage } from '@/components/layout/CategoryPage';
import { bitcoinNewsArticles } from '@/lib/mock-articles';

export default function BitcoinNewsPage() {
  return <CategoryPage eyebrow="Category" title="Bitcoin News" description="Latest Bitcoin market coverage, ETF flows, institutional adoption, and network fundamentals for Bitcoin-first readers." articles={bitcoinNewsArticles} />;
}
