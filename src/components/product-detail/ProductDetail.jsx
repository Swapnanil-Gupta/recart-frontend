import { Stack, Box, ScaleFade, Divider } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import ProductHeader from "./ProductHeader";
import AddToCart from "./AddToCart";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import ProductImage from "./ProductImage";

function ProductDetail({ product }) {
  const { inView, ref } = useInView();

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={{ base: 4, lg: 10 }}
    >
      <Box
        minW={{ lg: "96", xl: "lg" }}
        position={{ lg: "sticky" }}
        top="4"
        height="fit-content"
      >
        <ProductImage product={product} />

        <Box display={{ base: "none", lg: "block" }}>
          <ScaleFade initialScale={0.9} in={!inView} unmountOnExit>
            <AddToCart product={product} labelId="side-amount" />
          </ScaleFade>
        </Box>
      </Box>

      <Box>
        <ProductHeader product={product} />
        <AddToCart product={product} labelId="amount" inViewRef={ref} />
        <Divider my={8} />
        <ProductDescription product={product} />
        <Divider my={8} />
        <ProductReviews product={product} />
      </Box>
    </Stack>
  );
}

export default ProductDetail;
