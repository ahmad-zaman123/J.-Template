import React from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

// Fetches products from the backend and lays them out in a responsive grid.
// Pass `category` and/or `featured`.
function ProductGrid({ category, featured }) {
  const params = {};
  if (category) params.category = category;
  if (featured) params.featured = "true";

  const { products, loading, error } = useProducts(params);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="warning" className="my-4 text-center">
          Couldn't load products. Make sure the API server is running.
        </Alert>
      </Container>
    );
  }

  if (products.length === 0) {
    return <p className="text-center text-muted my-4">No products found.</p>;
  }

  return (
    <Container>
      <Row className="my-4 justify-content-evenly">
        {products.map((product) => (
          <Col
            key={product._id}
            xs={6}
            sm={6}
            md={3}
            lg={2}
            className="d-flex flex-column align-items-center mb-4"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductGrid;
