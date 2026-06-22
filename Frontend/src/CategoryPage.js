import React from "react";
import { Container } from "react-bootstrap";
import ProductGrid from "./components/ProductGrid";

// Generic storefront page that lists all products in one category.
function CategoryPage({ title, category }) {
  return (
    <Container fluid className="py-4">
      <h2 className="text-center my-4" style={{ letterSpacing: "2px" }}>
        {title}
      </h2>
      <hr className="w-75 mx-auto" />
      <ProductGrid category={category} />
    </Container>
  );
}

export default CategoryPage;
