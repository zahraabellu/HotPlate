import products from "../../ProductInfo.js";
import Image from "next/image.js";
import classess from "./page.module.css";
import AddtoCard from "@/app/components/AddtoCard.jsx";
export default async function ProductPage({ params }) {
  console.log("params.id:", params.id);
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <div className={classess.product__design}>
      <span>
        <Image
          src={product.image}
          width={900}
          height={900}
          alt={product.name}
          className={classess.productimg}
        />
      </span>
      <div className={classess.product__description}>
        <h1 className={classess.product__header}>{product.name}</h1>
        <p className={classess.product__combinations}>{product.combinations}</p>
        <h3 className={classess.product__price}>${product.price}</h3>
        <AddtoCard product={product} />
      </div>
    </div>
  );
}
