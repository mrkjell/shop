import React from "react";

export default function ProductList(props) {
  const { products, addProduct, imgHeight, imgWidth } = props;

  return products.map((product, index) => {
    let p = product.id ? product : product.product;
    return (
      <section key={index} className="product-card">
        <img
          src={p.imgUrl}
          alt={p.name}
          height={imgHeight}
          width={imgWidth}
        />
        <div className="product-text">
          <h2>{p.name}</h2>
          <h2>€ {p.price}</h2>
        </div>

        {addProduct ? (
          <button
            className="button buy-button"
            type="button"
            onClick={() => addProduct(p)}
          >
            Köp
          </button>
        ): (
          <div className="product-text">
            <h2> x {product.qty}</h2>
          </div>
        )}
      </section>
    );
  });
}
