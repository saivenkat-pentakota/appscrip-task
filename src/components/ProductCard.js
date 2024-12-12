import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          width={150} 
          height={150}
          className={styles.productImage}
        />
      </div>
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>
        <strong>Price:</strong> ${product.price}
      </p>
      <p className={styles.productRating}>
        <strong>Rating:</strong> {product.rating.rate} / 5
      </p>
      {/* <button className={styles.addToCart}>
      <Image src="/images/shopping-bag.png" alt="cart" width={20} height={20} />
        Add to Cart
      </button> */}
    </div>
  );
};

export default ProductCard;
