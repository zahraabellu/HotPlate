"use client";
import products from "../ProductInfo.js";
import Image from "next/image";
import Link from "next/link";
import classes from "./productcard.module.css";
import { useContext } from "react";
import { AppContext } from "../AppContext.js";
export default function ProductCard() {
  const { selectedType, addToCart } = useContext(AppContext);

  const filteredProducts =
    selectedType === "All"
      ? products
      : products.filter((p) => p.type === selectedType);
  console.log("addtocart");

  return (
    <div className={classes.products}>
      {filteredProducts.map((product) => (
        <div key={product.id} className={classes.item}>
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={100}
            style={{ objectFit: "cover" }}
            className={classes.productimg}
          />
          <button className={classes.buy} onClick={() => addToCart(product)}>
            <Image
              src="/images/icon-add-to-cart.svg"
              height={20}
              width={20}
              alt={"add to cart icon"}
              style={{ marginLeft: "15px" }}
              className={classes.addtocarticon}
            />
            <span className={classes.addtocart}>Add To Cart</span>
          </button>
          <h6
            className={classes.infos}
            style={{
              marginTop: "1.7rem",
              color: "hsl(12, 20%, 44%)",
              fontSize: "0.9rem",
            }}
          >
            {product.type}
          </h6>
          <Link
            key={product.id}
            className={classes.item}
            href={`/products/${product.id}`}
          >
            <h2
              className={classes.infos}
              style={{
                fontWeight: "600",
                // color: "hsl(12, 20%, 44%)",
                // fontSize: "1rem",
              }}
            >
              {product.name}
            </h2>
          </Link>
          <p
            className={classes.infos}
            style={{
              fontWeight: "600",
              color: "hsl(14, 86%, 42%)",
              // fontSize: "1rem",
            }}
          >
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
}
