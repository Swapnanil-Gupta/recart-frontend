import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import AddReview from "./AddReview";

function AddReviewPage({ product }) {
  return (
    <>
      <Heading textAlign="center">Add a review for</Heading>
      <Heading textAlign="center" mt={4}>
        "{product.name}"
      </Heading>
      <Image
        mx="auto"
        mt={4}
        src={product.imageUrl}
        alt={product.name}
        height={{ base: "150px", md: "200px" }}
      />
      <Box
        maxW="50rem"
        mx="auto"
        boxShadow="lg"
        p={4}
        borderWidth="medium"
        borderColor="gray.200"
        borderRadius="lg"
        mt={8}
      >
        <AddReview product={product} />
      </Box>
    </>
  );
}

export default AddReviewPage;
