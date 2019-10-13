import React from "react";

export default function ProductList(props) {
  const { products, addProduct, imgHeight, imgWidth } = props;

  return products.map((product, index) => {
    return (
      <section key={index} className="product-card">
        <img
          src={product.imgUrl}
          alt={product.name}
          height={imgHeight}
          width={imgWidth}
        />
        <div className="product-text">
          <h2>{product.name}</h2>
          <h2>€ {product.price}</h2>
        </div>

        {addProduct && (
          <button
            className="button buy-button"
            type="button"
            onClick={() => addProduct(product)}
          >
            Köp
          </button>
        )}
      </section>
    );
  });
}
