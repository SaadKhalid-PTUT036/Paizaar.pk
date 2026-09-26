import CategoryPage from "./CategoryPage";
import { CATEGORIES, getProductsByCategory } from "@/lib/catalog";

const CasualShoes = () => {
  const info = CATEGORIES.find((c) => c.slug === "casual")!;

  return (
    <CategoryPage
      title={info.title}
      description={info.description}
      heroImage={info.heroImage}
      products={getProductsByCategory("Casual Shoes")}
    />
  );
};

export default CasualShoes;