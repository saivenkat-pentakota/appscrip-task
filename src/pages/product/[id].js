import axios from "axios";
import Image from "next/image";
import styles from "../../styles/ProductCardDetails.module.css";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className={styles.productImage}
        />
      </div>
      <div className={styles.detailsSection}>
        <h2 className={styles.category}>{product.category.toUpperCase()}</h2>
        <h1 className={styles.title}>{product.title}</h1>
        <p>{product.description}</p>

        <p className={styles.price}>€{product.price}</p>
        <button className={styles.buyNow}>BUY NOW</button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return { props: { product: res.data } };
  } catch {
    return { props: { product: null } };
  }
}

export default ProductDetails;
