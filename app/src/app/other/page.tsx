import { CategoryPage } from '@/components/layout/CategoryPage';
import { otherArticles } from '@/lib/mock-articles';

export default function OtherPage() {
  return <CategoryPage eyebrow="Category" title="Other" description="Enforcement actions, security research, macroeconomic developments, and broader financial news relevant to Bitcoin investors." articles={otherArticles} accentColor="#FF4D4D" />;
}
