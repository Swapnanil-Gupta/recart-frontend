import { Heading } from "@chakra-ui/react";
import RatingAggregate from "./RatingAggregate";
import Reviews from "./Reviews";
import WriteReview from "./WriteReview";

function ProductReviews({ product }) {
  return (
    <>
      <Heading size="md">Customer Reviews</Heading>
      <WriteReview />
      <RatingAggregate product={product} />
      <Reviews product={product} />
    </>
  );
}

export default ProductReviews;
