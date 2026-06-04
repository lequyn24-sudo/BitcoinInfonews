import { CategoryPage } from '@/components/layout/CategoryPage';
import { altcoinNewsArticles } from '@/lib/mock-articles';

export default function AltcoinNewsPage() {
  return <CategoryPage eyebrow="Category" title="Alt Coin News" description="Coverage of Ethereum, Solana, BNB, XRP and the broader altcoin ecosystem from a Bitcoin-first perspective." articles={altcoinNewsArticles} accentColor="#3B9EFF" />;
}
