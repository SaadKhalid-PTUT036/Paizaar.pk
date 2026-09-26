import CategoryPage from "./CategoryPage";
import { CATEGORIES, getProductsByCategory } from "@/lib/catalog";

const LadiesFootwear = () => {
  const info = CATEGORIES.find((c) => c.slug === "ladies")!;

  return (
    <CategoryPage
      title={info.title}
      description={info.description}
      heroImage={info.heroImage}
      products={getProductsByCategory("Ladies Footwear")}
    />
  );
};

export default LadiesFootwear;