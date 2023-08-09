import React from "react";
import PageHeader from "../components/page-header";

function Products() {
  document.title = "Products Me";
  return (
    <div>
      <PageHeader label="Products" />
      <div className="p-6">
        <p>Products</p>
      </div>
    </div>
  );
}

export default Products;
