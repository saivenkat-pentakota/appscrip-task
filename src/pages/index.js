import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import styles from "../styles/Home.module.css";

export default function Home({ initialProducts, categories }) {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      result.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(result);
  }, [searchQuery, sortOption, products]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.container}>
      <Header/>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.inputSearch}
      />
      <div className={styles.filterAndSortComponent}>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className={styles.selectFilter}
      >
        <option value="">Show Filter</option>
        <option value="all">ALL</option>
        <option value="men">MEN</option>
        <option value="women">women</option>
        <option value="baby & kids">kids</option>
        
      </select>

      {/* Recommended Option */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className={styles.selectFilter}
      >
        <option value="">RECOMMENDED</option>
        <option value="newest-first">NEWEST FIRST</option>
        <option value="popular">POPULAR</option>
        <option value="price-desc">PRICE:HIGH TO LOW</option>
        <option value="price-asc">PRICE:LOW TO HIGH</option>
      </select>
      </div>

      {/* Products Grid */}
      <div className={styles.grid}>
        {paginatedProducts.map((product) => (
          <a key={product.id} href={`/product/${product.id}`}>
            <ProductCard product={product} />
          </a>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

// Server-side data fetching
export async function getServerSideProps() {
  const [productsRes, categoriesRes] = await Promise.all([
    axios.get("https://fakestoreapi.com/products"),
    axios.get("https://fakestoreapi.com/products/categories"),
  ]);

  return {
    props: {
      initialProducts: productsRes.data,
      categories: categoriesRes.data,
    },
  };
}
