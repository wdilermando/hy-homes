import FeaturedSection from '../components/sections/FeaturedSection';
import FeaturingListSection from '../components/sections/FeaturingListSection';
import HeroSection from '../components/sections/HeroSection';
import ListingsByRegionSection from '../components/sections/ListingsByRegionSection';
import PortfolioSection from '../components/sections/PortfolioSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <FeaturingListSection />
      <FeaturedSection />
      <ListingsByRegionSection />
    </>
  );
}
