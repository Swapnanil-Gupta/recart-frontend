import { Stack, Text } from "@chakra-ui/react";
import RatingStars from "../shared/RatingStars";

function AverageRating({ avgRating }) {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={4} mt={4}>
        <RatingStars size={32} value={avgRating} edit={false} />
        <Text fontSize="xl">{avgRating} out of 5</Text>
      </Stack>
    </>
  );
}

export default AverageRating;
