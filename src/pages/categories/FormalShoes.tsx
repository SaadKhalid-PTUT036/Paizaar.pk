import CategoryPage from "./CategoryPage";
import { CATEGORIES, getProductsByCategory } from "@/lib/catalog";

const FormalShoes = () => {
  const info = CATEGORIES.find((c) => c.slug === "formal")!;

  return (
    <CategoryPage
      title={info.title}
      description={info.description}
      heroImage={info.heroImage}
      products={getProductsByCategory("Formal Shoes")}
    />
  );
};

export default FormalShoes;