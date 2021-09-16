import { useMemo } from "react";
import { Stack, Box, Text, Progress } from "@chakra-ui/react";

function RatingGraph({ totalRatings, ratingAggregate }) {
  const ratingMap = useMemo(() => {
    let map = new Map();
    for (let rating of ratingAggregate) {
      map.set(rating.rating, (rating.count / totalRatings).toFixed(1) * 100);
    }
    return map;
  }, [totalRatings, ratingAggregate]);

  return (
    <Stack mt={8} direction="column" spacing={4}>
      {[5, 4, 3, 2, 1].map((r) => (
        <Stack direction="row" alignItems="center" key={r}>
          <Text>{r} star</Text>
          <Box flexGrow="1">
            <Progress
              value={ratingMap.get(r) || 0}
              borderRadius="lg"
              h={5}
              colorScheme="teal"
            />
          </Box>
          <Text minW="50px">{ratingMap.get(r) || 0}%</Text>
        </Stack>
      ))}
    </Stack>
  );
}

export default RatingGraph;
