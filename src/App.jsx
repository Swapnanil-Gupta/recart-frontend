import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/auth-slice";

import { Container } from "@chakra-ui/react";

import Navbar from "./components/shared/Navbar";
import AllProductsPage from "./components/all-products";
import ProductDetailPage from "./components/product-detail";
import LoginSignupTab from "./components/shared/LoginSignupTab";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <Switch>
          <Route path="/login">
            <LoginSignupTab activeTabIndex={0} />
          </Route>
          <Route path="/signup">
            <LoginSignupTab activeTabIndex={1} />
          </Route>
          <Route path="/products" component={AllProductsPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/">
            <Redirect to="/products" />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
