import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Products = () => {
  return (
    <main>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => {
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>;
        })}
        <li>
          <Link to="product-1">Product 1</Link>
        </li>
        <li>
          <Link to="product-2">Product 2</Link>
        </li>
        <li>
          <Link>Product 3</Link>
        </li>
      </ul>
    </main>
  );
};

export default Products;
