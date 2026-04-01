import { Metadata } from 'next';
import Nav from '@/components/Nav';
import BlogHero from '@/components/pages/blog/BlogHero';
import FeaturedPost from '@/components/pages/blog/FeaturedPost';
import CategoryFilter from '@/components/pages/blog/CategoryFilter';
import ArticleGrid from '@/components/pages/blog/ArticleGrid';
import ContentUpgradeCTA from '@/components/pages/blog/ContentUpgradeCTA';
import GatedAssets from '@/components/pages/blog/GatedAssets';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Resources & Blog | Callvox',
  description: 'Compliance guides, market intelligence, and technical primers for wholesale telecom operators.',
};

export default function ResourcesPage() {
  return (
    <main>
      <Nav />
      <BlogHero />
      <FeaturedPost />
      <CategoryFilter />
      <ArticleGrid />
      <ContentUpgradeCTA />
      <GatedAssets />
      <Footer />
    </main>
  );
}
