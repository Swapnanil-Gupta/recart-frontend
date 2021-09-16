import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import Signup from "../signup";
import Login from "../login";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/auth-slice";
import { Redirect } from "react-router-dom";

function LoginSignupTab({ activeTabIndex }) {
  const history = useHistory();
  const auth = useSelector(authSelector);

  function tabChangeHandler(index) {
    if (index === 0) {
      history.replace("/login");
    }
    if (index === 1) {
      history.replace("/signup");
    }
  }

  if (auth.isAuthenticated) {
    return <Redirect to="/products" />;
  }

  return (
    <>
      <Heading textAlign="center">Welcome to Recart</Heading>
      <Tabs
        index={activeTabIndex}
        onChange={tabChangeHandler}
        variant="solid-rounded"
        isFitted
        isLazy
        maxW="35rem"
        mx="auto"
        mt={12}
        colorScheme="teal"
        borderWidth="medium"
        borderColor="gray.200"
        borderRadius="lg"
        p={4}
        boxShadow="lg"
      >
        <TabList pb={4} mb={4}>
          <Tab>Log in</Tab>
          <Tab>Sign up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <Login />
          </TabPanel>
          <TabPanel p={0}>
            <Signup />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default LoginSignupTab;
