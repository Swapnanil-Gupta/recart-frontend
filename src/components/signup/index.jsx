import { useRef } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import useApiService from "../../hooks/useApiService";
import AuthService from "../../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth-slice";
import { useHistory } from "react-router";

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loading, fetchData } = useApiService();
  const dispatch = useDispatch();
  const history = useHistory();

  function submitHandler(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetchData(AuthService.signup({ name, email, password }), (data) => {
      dispatch(setUser({ user: data, isAuthenticated: true }));
      history.replace("/products");
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControl id="name" isRequired>
        <FormLabel>Name:</FormLabel>
        <Input type="text" ref={nameRef} />
      </FormControl>

      <FormControl id="email" mt={4} isRequired>
        <FormLabel>Email:</FormLabel>
        <Input type="email" ref={emailRef} />
      </FormControl>

      <FormControl id="password" mt={4} isRequired>
        <FormLabel>Password:</FormLabel>
        <Input type="password" ref={passwordRef} />
      </FormControl>

      <Button type="submit" isLoading={loading} colorScheme="teal" mt={4}>
        Sign up
      </Button>
    </form>
  );
}

export default Signup;
