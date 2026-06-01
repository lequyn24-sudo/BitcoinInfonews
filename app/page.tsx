import { Hero } from "@/components/layout/Hero";
import { DashboardCards } from "@/components/sections/DashboardCards";
import { ArticleFeed } from "@/components/sections/ArticleFeed";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  getBreakingArticle,
  getRecentArticles,
  getArticlesByCategory,
} from "@/lib/mock-articles";
import { FALLBACK_PRICE_DATA, getMarketStatus } from "@/lib/api";

export const revalidate = 60;

export default async function HomePage() {
  const priceData = FALLBACK_PRICE_DATA;
  const marketStatus = getMarketStatus(priceData.change24h);

  const allArticles = getRecentArticles(10);
  const breakingArticle = getBreakingArticle();
  const bitcoinArticles = getArticlesByCategory("bitcoin-news");
  const miningArticles = getArticlesByCategory("mining");
  const altcoinArticles = getArticlesByCategory("altcoin-news");

  const featuredArticle =
    bitcoinArticles.find((a) => !a.isBreaking) ?? bitcoinArticles[0] ?? allArticles[1];
  const breakingCard = breakingArticle ?? allArticles[0];

  return (
    <>
      {/* Zone 2: Hero — has its own atmospheric background image */}
      <Hero priceData={priceData} marketStatus={marketStatus} />

      {/* Zone 3: Dashboard Cards — NO solid bg, floats over fixed backdrop
          The -40px overlap + transparent bg lets the hero image bleed through,
          making glassmorphism on cards visible against the image below        */}
      <div className="pb-0 overflow-visible">
        <DashboardCards
          featuredArticle={featuredArticle}
          breakingArticle={breakingCard}
          priceData={priceData}
          recentArticles={allArticles}
        />
      </div>

      {/* Zone 4: Content Grid — NO solid bg, glass panels float over fixed backdrop */}
      <section className="mt-16 pb-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            <div className="lg:col-span-8">
              <div className="mb-14">
                <ArticleFeed
                  articles={bitcoinArticles}
                  sectionTitle="Bitcoin News"
                  sectionHref="/bitcoin-news"
                />
              </div>
              {miningArticles.length > 0 && (
                <div className="mb-14">
                  <ArticleFeed
                    articles={miningArticles}
                    sectionTitle="Mining"
                    sectionHref="/mining"
                  />
                </div>
              )}
              {altcoinArticles.length > 0 && (
                <div className="mb-14">
                  <ArticleFeed
                    articles={altcoinArticles}
                    sectionTitle="Altcoin News"
                    sectionHref="/altcoin-news"
                  />
                </div>
              )}
            </div>

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
