import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../../config/axios-instance";
import ProductDetail from "./ProductDetail";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddReviewPage from "../add-review";

function ProductDetailPage() {
  const { path } = useRouteMatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/product/${id}`)
      .then((res) => res.data)
      .then((data) => setProduct(data));
  }, [id]);

  // TODO: Error handling
  return (
    <Switch>
      <Route exact path={path}>
        {product && <ProductDetail product={product} />}
      </Route>
      <Route path={`${path}/add-review`}>
        {product && <AddReviewPage product={product} />}
      </Route>
    </Switch>
  );
}

export default ProductDetailPage;
