import {
  Image,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

function ProductItem({ product }) {
  const history = useHistory();

  function viewDetailsHandler() {
    history.push(`/product/${product._id}`);
  }

  return (
    <LinkBox
      borderWidth="medium"
      borderColor="gray.200"
      borderRadius="lg"
      p={4}
      transition="0.2s all"
      _hover={{
        boxShadow: "2xl",
      }}
      _active={{
        boxShadow: "2xl",
      }}
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        h={64}
        w="100%"
        objectFit="contain"
        mb={6}
      />

      <Heading size="sm" mb={2}>
        <LinkOverlay as={Link} to={"/product/" + product._id}>
          {product.name}
        </LinkOverlay>
      </Heading>
      <Text mb={4}>&#x20b9; {product.price}</Text>

      <Stack direction={{ base: "column", md: "row" }}>
        <Button onClick={viewDetailsHandler}>View details</Button>
        <Button colorScheme="teal">Add to cart</Button>
      </Stack>
    </LinkBox>
  );
}

export default ProductItem;
