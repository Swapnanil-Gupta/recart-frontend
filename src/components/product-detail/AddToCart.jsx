import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function AddToCart({ product, inViewRef, labelId }) {
  return (
    <>
      <FormControl id={labelId} mt={8}>
        <FormLabel>Amount:</FormLabel>
        <NumberInput
          defaultValue={1}
          min={1}
          max={product.countInStock}
          isDisabled={product.countInStock === 0}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Button
        ref={inViewRef}
        size="lg"
        colorScheme="teal"
        disabled={product.countInStock === 0}
        width="100%"
        mt={2}
      >
        Add to Cart
      </Button>
    </>
  );
}

export default AddToCart;
