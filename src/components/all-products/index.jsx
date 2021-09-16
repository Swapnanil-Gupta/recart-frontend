import { useEffect, useState } from "react";
import axiosInstance from "../../config/axios-instance";
import ProductsGrid from "./ProductsGrid";
import { Heading, Text } from "@chakra-ui/react";
import useApiService from "../../hooks/useApiService";

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const { loading, fetchData } = useApiService();

  useEffect(() => {
    fetchData(
      axiosInstance.get("/product").then((res) => res.data),
      (data) => {
        setProducts(data.results);
        setTotal(data.total);
      }
    );
  }, [fetchData]);

  // TODO: Add pagination for products
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <Heading mb={4}>All Products</Heading>
          <Text mb={8} color="gray.500">
            {total} total products
          </Text>
          <ProductsGrid products={products} />
        </>
      )}
    </>
  );
}

export default AllProductsPage;
