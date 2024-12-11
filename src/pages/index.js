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
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const itemsPerPage = 8;

  useEffect(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) =>
        p.category.toLowerCase().includes(selectedCategory.toLowerCase())
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
  }, [searchQuery, sortOption, products, selectedCategory]);

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
        {/* Dynamic Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.selectFilter}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>

        {/* Sort Options */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className={styles.selectFilter}
        >
          <option value="">Sort by</option>
          <option value="newest-first">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="price-desc">PRICE: HIGH TO LOW</option>
          <option value="price-asc">PRICE: LOW TO HIGH</option>
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
      categories: categoriesRes.data, // Pass categories from the API
    },
  };
}
