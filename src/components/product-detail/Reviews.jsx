import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Review from "./Review";
import axiosInstance from "../../config/axios-instance";

// TODO: Review service
async function getReviews(product, callback) {
  let response = await axiosInstance.get(`/review/${product._id}`);
  let reviewData = response.data;

  const userids = [];
  for (let res of reviewData.results) {
    if (!userids.includes(res.userId)) {
      userids.push(res.userId);
    }
  }

  let userResponse = await axiosInstance.get("/user", {
    params: {
      ids: userids,
    },
  });
  let userData = userResponse.data;

  callback(reviewData, userData);
}

function Reviews({ product }) {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getReviews(product, (reviewData, userData) => {
      setUsers(userData.results);
      setReviews(reviewData.results);
    });
  }, [product]);

  return (
    <Box mt={8}>
      {reviews.map((review) => (
        <Review review={review} users={users} key={review._id} />
      ))}
    </Box>
  );
}

export default Reviews;
