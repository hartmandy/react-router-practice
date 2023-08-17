import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <main>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </main>
  );
};
export default ProductDetail;
