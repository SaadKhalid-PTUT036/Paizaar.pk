import CategoryPage from "./categories/CategoryPage";
import { CATEGORIES, allProducts, searchProducts } from "@/lib/catalog";
import { useSearchParams } from "react-router-dom";

const AllProducts = () => {
  const hero = CATEGORIES[0];
  const [params] = useSearchParams();
  const query = params.get("q")?.trim() ?? "";

  const storeProducts = allProducts.filter((p) => !p.badge);
  const products = query ? searchProducts(query).filter((p) => !p.badge) : storeProducts;

  return (
    <CategoryPage
      title={query ? `Results for "${query}"` : "All Products"}
      description={
        query
          ? `${products.length} ${products.length === 1 ? "product" : "products"} found for your search.`
          : "Explore the complete Paizaar collection — footwear and leather goods for every occasion."
      }
      heroImage={hero.heroImage}
      products={products}
    />
  );
};

export default AllProducts;