import {
  Box,
  Container,
  Heading,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSelector, setUser } from "../../store/auth-slice";
import AuthService from "../../services/auth";

function Navbar() {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  function logoutHandler() {
    AuthService.logout();
    dispatch(setUser({ user: null, isAuthenticated: false }));
  }

  return (
    <Box
      as="header"
      height={16}
      bg="gray.100"
      borderBottomWidth="thick"
      borderBottomColor="teal"
    >
      <Container
        maxW="container.xl"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          size="md"
          color="gray.700"
          textTransform="uppercase"
          letterSpacing="wider"
          as={Link}
          to="/products"
        >
          Recart
        </Heading>
        <Box>
          {!auth.isAuthenticated && (
            <Button as={Link} to="/login">
              Login
            </Button>
          )}
          {auth.isAuthenticated && (
            <>
              <span>{auth.currentUser.name}</span>
              <Menu>
                <MenuButton ml={2} as={Avatar} size="sm" />
                <MenuList>
                  <MenuItem onClick={logoutHandler}>Log out</MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
