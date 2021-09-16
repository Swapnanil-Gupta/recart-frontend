import React from "react";
import { Box, Image } from "@chakra-ui/react";

function ProductImage({ product }) {
  return (
    <Box borderWidth="medium" borderColor="gray.200" borderRadius="lg" p={4}>
      <Image
        src={product.imageUrl}
        alt={product.name}
        h={{ base: "xs", md: "sm", lg: "md" }}
        w="100%"
        objectFit="contain"
      ></Image>
    </Box>
  );
}

export default ProductImage;
