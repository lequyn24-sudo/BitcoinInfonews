import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Share,
  XLogo,
  FacebookLogo,
  Link as LinkIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/Badge";
import { Sidebar } from "@/components/layout/Sidebar";
import { getArticleBySlug, mockArticles } from "@/lib/mock-articles";
import { FALLBACK_PRICE_DATA } from "@/lib/api";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.imageUrl }],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const priceData = FALLBACK_PRICE_DATA;
  const related = mockArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  // Parse content into paragraphs
  const contentSections = article.content.split(/\n\n+/);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Reading progress bar */}
      <div
        className="fixed top-[56px] lg:top-[64px] left-0 right-0 h-[3px] bg-[#F7931A] z-[30]"
        style={{ width: "45%" }}
        role="progressbar"
        aria-label="Reading progress"
      />

      {/* Zone A — Article Header */}
      <div className="relative w-full h-[280px] md:h-[400px] lg:h-[480px] mt-[56px] lg:mt-[64px]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.95) 100%)",
          }}
        />

        {/* Header content */}
        <div className="absolute bottom-0 left-0 right-0 pb-6 lg:pb-8">
          <div className="max-w-[860px] mx-auto px-4 lg:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] text-[#A0A0A0] mb-3" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link
                href={`/${article.category}`}
                className="hover:text-white transition-colors capitalize"
              >
                {article.categoryLabel}
              </Link>
              <span>›</span>
              <span className="text-white truncate max-w-[200px]">{article.title}</span>
            </nav>

            {/* Sponsored disclosure */}
            {article.isSponsored && (
              <div className="mb-3 p-3 border border-[#FFB800]/30 rounded-[8px] bg-[rgba(255,184,0,0.05)]">
                <p className="text-[12px] text-[#FFB800]">
                  SPONSORED — This is sponsored content. BitcoinInfoNews received compensation for its publication.
                </p>
              </div>
            )}

            {/* Badge */}
            <div className="mb-3">
              {article.isBreaking && <Badge variant="breaking">Breaking</Badge>}
              {article.isSponsored && <Badge variant="sponsored">Sponsored</Badge>}
              {!article.isBreaking && !article.isSponsored && (
                <Badge variant="category">{article.categoryLabel}</Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-[700] text-white leading-[1.2] tracking-[-0.02em] mb-3">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#A0A0A0]">
              <span>By {article.author}</span>
              <span>·</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span>·</span>
              <span>{article.readTime} min read</span>
              <button
                className="ml-auto flex items-center gap-1 text-[#A0A0A0] hover:text-white transition-colors"
                aria-label="Share article"
              >
                <Share size={16} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Zone B — Article Body + Sidebar */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Article body — col 1-7 */}
          <article className="lg:col-span-7" aria-label="Article body">
            {/* Analysis disclaimer */}
            {article.category === "other" && (
              <div className="mb-6 px-4 py-3 bg-[rgba(247,147,26,0.08)] border border-[rgba(247,147,26,0.2)] rounded-[8px]">
                <p className="text-[12px] text-[#FFB800] font-[500] uppercase tracking-[0.04em]">
                  ANALYSIS — NOT FINANCIAL ADVICE
                </p>
              </div>
            )}

            {/* Content */}
            <div className="prose-content max-w-[720px]">
              {contentSections.map((section, i) => {
                if (section.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-[24px] font-[700] text-white leading-[1.3] tracking-[-0.01em] mt-[40px] mb-[12px]"
                    >
                      {section.replace("## ", "")}
                    </h2>
                  );
                }
                if (section.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-[20px] font-[600] text-white leading-[1.3] mt-[32px] mb-[12px]"
                    >
                      {section.replace("### ", "")}
                    </h3>
                  );
                }
                if (section.startsWith("- ")) {
                  const items = section.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="my-4 pl-4 space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="text-[17px] text-white leading-[1.75] relative pl-4">
                          <span className="absolute left-0 text-[#F7931A]">·</span>
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (section.startsWith("**")) {
                  return (
                    <div
                      key={i}
                      className="my-4 px-[20px] py-[16px] bg-[#1A1A1A] rounded-[8px]"
                      style={{ borderLeft: "3px solid #F7931A" }}
                    >
                      <p className="text-[17px] text-white leading-[1.75]">
                        {section.replace(/\*\*/g, "")}
                      </p>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-[17px] text-[#FFFFFF] leading-[1.75] mb-[16px]">
                    {section}
                  </p>
                );
              })}
            </div>

            {/* Financial disclaimer */}
            <div className="mt-8 p-4 border border-[#2A2A2A] rounded-[8px] bg-[#111111]">
              <p className="text-[12px] text-[#A0A0A0] italic leading-[1.6]">
                This content is for informational purposes only and does not constitute financial advice. Always conduct your own research before making investment decisions.
              </p>
            </div>

            {/* Zone C — Post-Article */}
            <div className="mt-10 pt-8 border-t border-[#2A2A2A]">
              {/* Share */}
              <div className="mb-8">
                <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-4">
                  Share this article
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "Share on X", icon: <XLogo size={18} />, color: "#1DA1F2" },
                    { label: "Share on Facebook", icon: <FacebookLogo size={18} />, color: "#1877F2" },
                    { label: "Copy Link", icon: <LinkIcon size={18} />, color: "#A0A0A0" },
                  ].map((action) => (
                    <button
                      key={action.label}
                      aria-label={action.label}
                      className="flex items-center gap-2 h-[40px] px-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-[8px] text-[13px] text-[#A0A0A0] hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-all"
                    >
                      {action.icon}
                      {action.label.replace("Share on ", "").replace("Copy ", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="mb-8 flex items-start gap-4 p-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px]">
                <div className="w-[48px] h-[48px] rounded-full bg-[#242424] border border-[#2A2A2A] flex items-center justify-center flex-shrink-0 text-[18px] font-[700] text-[#F7931A]">
                  {article.author[0]}
                </div>
                <div>
                  <p className="text-[14px] font-[600] text-white mb-1">{article.author}</p>
                  <p className="text-[13px] text-[#A0A0A0] leading-[1.5]">{article.authorBio}</p>
                </div>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-4">
                    You might also like
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/${rel.slug}`}
                        className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] overflow-hidden hover:border-[rgba(247,147,26,0.4)] transition-all"
                      >
                        <div className="relative aspect-[16/9] bg-[#242424]">
                          <Image
                            src={rel.imageUrl}
                            alt={rel.title}
                            fill
                            sizes="200px"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-[13px] font-[600] text-white line-clamp-2 group-hover:text-[#F7931A] transition-colors">
                            {rel.title}
                          </p>
                          <p className="text-[11px] text-[#A0A0A0] mt-1">{formatDate(rel.date)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* Sidebar — col 8-12 */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[88px]">
              {/* Table of contents */}
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] p-[16px] mb-4">
                <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-3">
                  In this article
                </p>
                <ul className="space-y-0">
                  {contentSections
                    .filter((s) => s.startsWith("## "))
                    .map((section, i) => (
                      <li key={i}>
                        <button className="flex items-center gap-2 py-[8px] text-[13px] text-[#A0A0A0] hover:text-white transition-colors w-full text-left">
                          <span
                            className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                            style={{ background: i === 0 ? "#F7931A" : "#2A2A2A" }}
                          />
                          <span className={i === 0 ? "text-[#F7931A] font-[500]" : ""}>
                            {section.replace("## ", "")}
                          </span>
                        </button>
                      </li>
                    ))}
                </ul>
              </div>

              <Sidebar priceData={priceData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
