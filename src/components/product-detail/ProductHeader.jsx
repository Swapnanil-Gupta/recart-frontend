import React from "react";
import { Heading, Text } from "@chakra-ui/react";

function ProductHeader({ product }) {
  return (
    <>
      <Heading size="2xl">{product.name}</Heading>
      <Text fontSize="2xl" mt={4}>
        &#x20b9; {product.price}
      </Text>
      {product.countInStock > 0 && (
        <Text fontSize="2xl" color="green.700" mt={4}>
          In stock ({product.countInStock} left)
        </Text>
      )}
      {product.countInStock === 0 && (
        <Text fontSize="2xl" color="red.700" mt={8}>
          Out of stock
        </Text>
      )}
    </>
  );
}

export default ProductHeader;
