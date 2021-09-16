import { SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

function ProductsGrid({ products }) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </SimpleGrid>
  );
}

export default ProductsGrid;
