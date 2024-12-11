import axios from "axios";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500} 
        objectFit="contain"
      />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> {product.rating.rate} / 5</p>
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
