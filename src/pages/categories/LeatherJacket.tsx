import CategoryPage from "./CategoryPage";
import { CATEGORIES, getProductsByCategory } from "@/lib/catalog";

const LeatherJacket = () => {
  const info = CATEGORIES.find((c) => c.slug === "jackets")!;

  return (
    <CategoryPage
      title={info.title}
      description={info.description}
      heroImage={info.heroImage}
      products={getProductsByCategory("Leather Jacket")}
    />
  );
};

export default LeatherJacket;