import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import moment from "moment";

function ProductDescription({ product }) {
  return (
    <>
      <Heading size="md">Details</Heading>
      <Text mt={4}>{product.description}</Text>
      <Text mt={4}>
        Last updated {moment(product.updatedAt).format("DD MMM YYYY")}
      </Text>
    </>
  );
}

export default ProductDescription;
