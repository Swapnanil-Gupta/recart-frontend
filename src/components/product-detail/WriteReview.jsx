import { Text, Button, Alert } from "@chakra-ui/react";
import { useHistory, useRouteMatch } from "react-router";

function WriteReview() {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <>
      <Alert
        borderRadius="lg"
        mt={4}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text fontWeight="medium" mr={{ base: 0, sm: 4 }}>
          Already own the product?
        </Text>
        <Button
          mt={{ base: 4, sm: 0 }}
          onClick={() => history.push(`${url}/add-review`)}
        >
          Write a review
        </Button>
      </Alert>
    </>
  );
}

export default WriteReview;
