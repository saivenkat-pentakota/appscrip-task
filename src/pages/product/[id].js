import axios from "axios";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
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
  } catch (error) {
    return { props: { product: null } };
  }
}

export default ProductDetails;
