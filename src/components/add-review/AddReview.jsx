import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import RatingStars from "../shared/RatingStars";
import axiosInstance from "../../config/axios-instance";
import { useHistory } from "react-router";

function AddReview({ product }) {
  const [rating, setRating] = useState(3);
  const [headline, setHeadline] = useState("");
  const [review, setReview] = useState("");
  const history = useHistory();

  //  TODO: Review service
  function submitHandler(e) {
    e.preventDefault();
    axiosInstance
      .post(`/review/${product._id}`, {
        review,
        rating,
      })
      .then((res) => res.data)
      .then((data) => {
        history.push(`/product/${product._id}`);
      });
    // .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControl id="headline">
        <FormLabel mb={0}>Overall Rating</FormLabel>
        <RatingStars size={32} value={rating} onChange={(r) => setRating(r)} />
      </FormControl>

      <FormControl id="headline" isRequired mt={4}>
        <FormLabel>Add a headline</FormLabel>
        <Input
          type="text"
          placeholder="What's most important to know?"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </FormControl>

      <FormControl id="review" mt={4} isRequired>
        <FormLabel>Add a written review</FormLabel>
        <Textarea
          placeholder="What did you like or dislike? What did you use this product for?"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </FormControl>

      <Box mt={4}>
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default AddReview;
