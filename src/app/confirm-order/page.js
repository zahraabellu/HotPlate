"use client";
import { useContext } from "react";
import { AppContext } from "../AppContext.js";
import Image from "next/image.js";
import Link from "next/link";
import classess from "./page.module.css";
import { Trash2 } from "lucide-react";

export default function ProductCard() {
  const { cartItems, totalQuantity, totalPrice, setCartItems } =
    useContext(AppContext);

  function handleDelete(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  }
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <Image
            className={classess.emptypart}
            src="/images/illustration-empty-cart.svg"
            alt="Empty Cart"
            width={300}
            height={300}
          />
          <p className={classess.noproduct}>No products in the cart.</p>
        </div>
      ) : (
        <>
          <h1 className={classess.yourcart}>Your Cart ({totalQuantity})</h1>
          {cartItems.map((item) => (
            <div key={item.id} className={classess.confirmcontainer}>
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
                className={classess.confirmimg}
              />
              <div className={classess.confirm}>
                <h3 className={classess.confirmname}>{item.name}</h3>
                <span className={classess.confirmx}>{`×${item.quantity}`}</span>
                <p className={classess.confirmprice}>${item.price}</p>
                <p
                  style={{
                    fontsize: "1.2rem",
                    fontWeight: "bold",
                    color: "hsl(14, 65%, 9%)",
                  }}
                >
                  ${item.price * item.quantity}
                </p>
              </div>
              <Trash2
                className={classess.trashicon}
                onClick={() => handleDelete(item.id)}
              />
            </div>
          ))}
          <div className={classess.confirmall}>
            <p>
              Order Total:
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginLeft: "1rem",
                }}
              >
                ${totalPrice}
              </span>
            </p>
          </div>
          <button className={classess.confirmbutton}>Confirm Order</button>
        </>
      )}
      <div>
        <Link href="/" className={classess.confirmlink}>
          Back home
        </Link>
      </div>
    </div>
  );
}
