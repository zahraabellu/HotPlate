"use client";

import classess from "./AddtoCard.module.css";

import { useContext } from "react";
import { AppContext } from "../AppContext.js";

export default function AddtoCard({ product }) {
  const { addToCart } = useContext(AppContext);

  return (
    <>
      <button className={classess.addtocard} onClick={() => addToCart(product)}>
        ADD TO CARD
      </button>
    </>
  );
}
