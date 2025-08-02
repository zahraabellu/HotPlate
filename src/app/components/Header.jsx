"use client";

import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";
import { ShoppingCart } from "lucide-react";
import { AppContext } from "./../AppContext";
import { useContext } from "react";

export default function Header() {
  const { totalQuantity, setSelectedType } = useContext(AppContext);
  // console.log("onFilterChange", setSelectedType);

  function handlequantity() {}

  return (
    <header className={classes.header}>
      <h1 className={classes.basename}>
        Hot Plate
        {/* <Pizza /> */}
      </h1>

      <Image src="/images/logo.png" width={80} height={1} alt="Logo" />
      <ul className={classes.filters}>
        <li>
          <button
            onClick={() => setSelectedType("All")}
            className={classes.filter}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={classes.filter}
            onClick={() => setSelectedType("Fast Food")}
          >
            Fast Food
          </button>
        </li>
        <li>
          <button
            className={classes.filter}
            onClick={() => setSelectedType("Healthy Food")}
          >
            Healthy Food
          </button>
        </li>
        <li>
          <button
            className={classes.filter}
            onClick={() => setSelectedType("Dessert")}
          >
            Dessert
          </button>
        </li>
      </ul>
      <Link href={`/confirm-order`}>
        <div className={classes.shoppingCart} onClick={() => handlequantity()}>
          <p className={classes.totalquantity}>{totalQuantity}</p>
          <ShoppingCart className={classes.shoppingCarticon} />
        </div>
      </Link>
    </header>
  );
}
