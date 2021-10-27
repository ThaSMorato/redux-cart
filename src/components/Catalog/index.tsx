import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "../../store/modules/cart/types";
import { CatalogItem } from "../CatalogItem";

export const Catalog = () => {
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    api.get<Product[]>("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};
