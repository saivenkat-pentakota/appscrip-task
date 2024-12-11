const ProductCard = ({ product }) => {
    return (
      <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
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
  