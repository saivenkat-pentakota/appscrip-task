AppScrip-Task App
Overview
The AppScrip-Task app is a React.js and Next.js based application that fetches product data from the Fake Store API and displays it on the website. The app is fully hosted on Netlify.

Features:

Display a list of products from the Fake Store API
Product detail page for individual items
Responsive design
Pagination for navigating through products
Footer and Header components for consistent layout
Table of Contents
Installation
Usage
Folder Structure
Technologies Used
Hosted on Netlify
Installation

To run the project locally, follow these steps:

Clone the repository:


git clone https://github.com/saivenkat-pentakota/appscrip-task.git
Navigate to the project directory:

cd AppScrip-task
Install dependencies: If you have npm installed, run the following:


npm install
Start the development server:

npm run dev
Visit the app in your browser at: http://localhost:3000.

Usage
After starting the server, the app will display a list of products fetched from the Fake Store API. You can click on individual products to see their detailed view. Pagination is implemented to navigate through the product list.

Pages:
Home (/): Displays a list of products with pagination.
Product Detail (/product/[id]): Displays detailed information about a specific product when clicked.
Folder Structure
Here is the structure of the project:

src/
├── components/
│   ├── Footer.js         # Footer component
│   ├── Header.js         # Header component
│   ├── Pagination.js     # Pagination component
│   └── ProductCard.js    # Product card component to display each product
├── pages/
│   ├── product/
│   │   ├── [id].js       # Dynamic route for individual product details
│   │   └── index.js      # Home page listing all products
│   ├── _app.js           # Custom App for Next.js
├── styles/
│   ├── global.css        # Global styles for the app
│   └── Home.module.css   # Module specific styles for the homepage

Explanation of Key Files:

components/Header.js: Contains the navigation bar at the top of the page.
components/Footer.js: Contains the footer with basic information.
components/Pagination.js: Displays the pagination controls for navigating through products.
components/ProductCard.js: Displays individual product details like title, price, and image.
pages/product/[id].js: Dynamic route page to show the details of a specific product.
pages/product/index.js: The main product listing page that displays a paginated list of products.
Technologies Used
React.js: JavaScript library for building user interfaces.
Next.js: React framework for building server-rendered applications.
Fake Store API: API used to fetch fake product data for the app.
CSS Modules: For styling components with scoped styles.
Netlify: Platform used for deploying and hosting the app.
Hosted on Netlify
The app is live and hosted on Netlify. You can access the deployed version here:

AppScrip-Task App on Netlify:
https://appscriptask-90521.netlify.app/