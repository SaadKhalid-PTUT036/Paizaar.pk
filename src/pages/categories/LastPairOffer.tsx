import CategoryPage from "./CategoryPage";
import { getLastPairOffers } from "@/lib/catalog";
import heroImage from "@/assets/hero-banner-1.jpg";

const LastPairOffer = () => (
  <CategoryPage
    title="Last Pair Offer"
    description="Final pieces at unbeatable prices - Limited stock available!"
    heroImage={heroImage}
    products={getLastPairOffers()}
  />
);

export default LastPairOffer;