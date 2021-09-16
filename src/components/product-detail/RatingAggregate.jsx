import { useState, useEffect } from "react";
import axiosInstance from "../../config/axios-instance";
import { Text } from "@chakra-ui/react";

import RatingGraph from "./RatingGraph";
import AverageRating from "./AverageRating";

function RatingAggregate({ product }) {
  const [avgRating, setAvgRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [ratingAggregate, setRatingAggregate] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/review/${product._id}/aggregate`)
      .then((res) => res.data)
      .then((data) => {
        const total = data.ratingAggregate.reduce(
          (prev, curr) => prev + curr.count,
          0
        );
        setTotalRatings(total);
        setAvgRating(+(+data.averageRating).toFixed(1));
        setRatingAggregate(data.ratingAggregate);
      });
  }, [product]);

  if (avgRating > 0) {
    return (
      <>
        <AverageRating avgRating={avgRating} />
        <Text color="gray.500">{totalRatings} total ratings</Text>
        <RatingGraph
          totalRatings={totalRatings}
          ratingAggregate={ratingAggregate}
        />
      </>
    );
  } else {
    return (
      <Text fontSize="lg" color="gray.500" mt={8}>
        No reviews yet.
      </Text>
    );
  }
}

export default RatingAggregate;
