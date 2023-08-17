import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main>
      <h1>My Homepage</h1>
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
    </main>
  );
};
export default Homepage;
