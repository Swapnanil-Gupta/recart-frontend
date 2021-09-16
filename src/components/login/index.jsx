import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth-slice";
import { useRef } from "react";
import useApiService from "../../hooks/useApiService";
import { useHistory } from "react-router";
import AuthService from "../../services/auth";

function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loading, fetchData } = useApiService();
  const history = useHistory();

  function submitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetchData(AuthService.login({ email, password }), (data) => {
      dispatch(setUser({ user: data, isAuthenticated: true }));
      history.replace("/products");
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControl id="email" mt={4} isRequired>
        <FormLabel>Email:</FormLabel>
        <Input ref={emailRef} type="email" />
      </FormControl>

      <FormControl id="password" mt={4} isRequired>
        <FormLabel>Password:</FormLabel>
        <Input ref={passwordRef} type="password" />
      </FormControl>

      <Button type="submit" isLoading={loading} colorScheme="teal" mt={4}>
        Log in
      </Button>
    </form>
  );
}

export default Login;
