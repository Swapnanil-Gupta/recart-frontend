import { useMemo } from "react";
import { Stack, Text, Avatar, Divider } from "@chakra-ui/react";
import moment from "moment";
import RatingStars from "../shared/RatingStars";

function Review({ review, users }) {
  const userName = useMemo(() => {
    return users.find((u) => u._id === review.userId)?.name || "Unknown user";
  }, [review, users]);

  return (
    <>
      <Stack direction="row" alignItems="center">
        <Avatar size="sm" />
        <Text fontWeight="medium" textTransform="capitalize">
          {userName}
        </Text>
      </Stack>
      <Text mt={1}>
        Reviewed on {moment(review.updatedAt).format("DD MMM YYYY")}
      </Text>
      <RatingStars size={24} value={review.rating} edit={false} />
      <Text textTransform="capitalize">{review.review}</Text>
      <Divider my={4} />
    </>
  );
}

export default Review;
