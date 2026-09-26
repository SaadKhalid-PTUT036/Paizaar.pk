import CategoryPage from "./CategoryPage";
import { CATEGORIES, getProductsByCategory } from "@/lib/catalog";

const PeshawariSandal = () => {
  const info = CATEGORIES.find((c) => c.slug === "peshawari")!;

  return (
    <CategoryPage
      title={info.title}
      description={info.description}
      heroImage={info.heroImage}
      products={getProductsByCategory("Peshawari Sandal")}
    />
  );
};

export default PeshawariSandal;