import FeaturedSection from '../components/sections/FeaturedSection';
import FeaturingListSection from '../components/sections/FeaturingListSection';
import HeroSection from '../components/sections/HeroSection';
import ListingsByRegionSection from '../components/sections/ListingsByRegionSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import { allListings } from '../utils/queries';

function Home({ listings }) {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <FeaturingListSection listings={listings} />
      <FeaturedSection />
      <ListingsByRegionSection />
    </>
  );
}

export async function getStaticProps(context) {
  const listings = await allListings({});

  return {
    props: { listings },
  };
}

export default Home;
