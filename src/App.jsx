import React from 'react';

// 1. Mock Data: An array of object items
const PRODUCTS_DATA = [
  { id: 'p1', name: 'Wireless Headphones', price: 99.99, category: 'Electronics' },
  { id: 'p2', name: 'Ergonomic Desk Chair', price: 189.50, category: 'Furniture' },
  { id: 'p3', name: 'Stainless Steel Water Bottle', price: 25.00, category: 'Accessories' },
  { id: 'p4', name: 'Mechanical Keyboard', price: 75.00, category: 'Electronics' },
];

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Catalog</h1>
      <p style={styles.subtitle}>Rendering lists in React using <code>.map()</code></p>
      
      <div style={styles.grid}>
        {/* 2. The .map() method loop */}
        {PRODUCTS_DATA.map((product) => {
          return (
            // 3. Always provide a unique 'key' to the top-level element in the map
            <div key={product.id} style={styles.card}>
              <span style={styles.badge}>{product.category}</span>
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.price}>\${product.price.toFixed(2)}</p>
              <button 
                style={styles.button}
                onClick={() => alert(`Added ${product.name} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Basic inline styles so it looks nice out-of-the-box
const styles = {
  container: {
    fontFamily: 'system-ui, sans-serif',
    padding: '24px',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
  },
  title: {
    color: '#111827',
    marginBottom: '4px',
  },
  subtitle: {
    color: '#4b5563',
    marginBottom: '32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eff6ff',
    color: '#1d4ed8',
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  productName: {
    fontSize: '18px',
    margin: '12px 0 8px 0',
    color: '#1f2937',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#059669',
    margin: '0 0 16px 0',
  },
  button: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
  },
};
