import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
      <Image
        src={product.image}
        alt={product.title}
        width={200} 
        height={200}
        objectFit="contain"
      />
      <h3 style={{ fontSize: "18px", marginTop: "10px" }}>{product.title}</h3>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating.rate} / 5
      </p>
    </div>
  );
};

export default ProductCard;
