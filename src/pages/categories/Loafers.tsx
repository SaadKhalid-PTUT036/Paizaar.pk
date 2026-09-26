import CategoryPage from "./CategoryPage";
import { CATEGORIES, getProductsByCategory } from "@/lib/catalog";

const Loafers = () => {
  const info = CATEGORIES.find((c) => c.slug === "loafers")!;

  return (
    <CategoryPage
      title={info.title}
      description={info.description}
      heroImage={info.heroImage}
      products={getProductsByCategory("Loafers")}
    />
  );
};

export default Loafers;