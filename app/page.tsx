import { Hero } from "@/components/layout/Hero";
import { DashboardCards } from "@/components/sections/DashboardCards";
import { ArticleFeed } from "@/components/sections/ArticleFeed";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  mockArticles,
  getFeaturedArticles,
  getBreakingArticle,
  getRecentArticles,
  getArticlesByCategory,
} from "@/lib/mock-articles";
import { FALLBACK_PRICE_DATA, getMarketStatus } from "@/lib/api";

export const revalidate = 60;

export default async function HomePage() {
  // Use fallback data — CoinGecko can be integrated server-side
  const priceData = FALLBACK_PRICE_DATA;
  const marketStatus = getMarketStatus(priceData.change24h);

  const allArticles = getRecentArticles(10);
  const breakingArticle = getBreakingArticle();
  const recentArticles = allArticles;
  const bitcoinArticles = getArticlesByCategory("bitcoin-news");
  const miningArticles = getArticlesByCategory("mining");
  const altcoinArticles = getArticlesByCategory("altcoin-news");

  // Featured article = second bitcoin article (avoid duplicating the breaking article in Card A)
  const featuredArticle =
    bitcoinArticles.find((a) => !a.isBreaking) ?? bitcoinArticles[0] ?? allArticles[1];

  // Breaking card = the actual breaking article (different from featured)
  const breakingCard = breakingArticle ?? allArticles[0];

  return (
    <>
      {/* Zone 2: Hero */}
      <Hero priceData={priceData} marketStatus={marketStatus} />

      {/* Zone 3: Dashboard Cards — overlaps hero by 40px */}
      <div className="bg-[#060608] pb-0 overflow-visible">
        <DashboardCards
          featuredArticle={featuredArticle}
          breakingArticle={breakingCard}
          priceData={priceData}
          recentArticles={recentArticles}
        />
      </div>

      {/* Zone 4: Main Content Grid */}
      <section className="bg-[#060608] mt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: Article Feed */}
            <div className="lg:col-span-8">
              {/* Bitcoin News section */}
              <div className="mb-12">
                <ArticleFeed
                  articles={bitcoinArticles}
                  sectionTitle="Bitcoin News"
                  sectionHref="/bitcoin-news"
                />
              </div>

              {/* Mining section */}
              {miningArticles.length > 0 && (
                <div className="mb-12">
                  <ArticleFeed
                    articles={miningArticles}
                    sectionTitle="Mining"
                    sectionHref="/mining"
                  />
                </div>
              )}

              {/* Altcoin section */}
              {altcoinArticles.length > 0 && (
                <div className="mb-12">
                  <ArticleFeed
                    articles={altcoinArticles}
                    sectionTitle="Altcoin News"
                    sectionHref="/altcoin-news"
                  />
                </div>
              )}
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[88px]">
                <Sidebar priceData={priceData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
