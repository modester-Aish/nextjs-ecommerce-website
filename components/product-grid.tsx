"use client"
import { motion } from "framer-motion"
import ProductCard from "./product-card"

// Mock data for products
const mockProducts = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop",
    category: "clothing",
    rating: 4.5,
    isNew: true,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1026&auto=format&fit=crop",
    category: "clothing",
    rating: 4.2,
    isNew: false,
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
    category: "accessories",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "4",
    name: "Minimalist Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=988&auto=format&fit=crop",
    category: "accessories",
    rating: 4.6,
    isNew: false,
  },
  {
    id: "5",
    name: "Oversized Sweater",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1064&auto=format&fit=crop",
    category: "clothing",
    rating: 4.3,
    isNew: true,
  },
  {
    id: "6",
    name: "Canvas Sneakers",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=998&auto=format&fit=crop",
    category: "footwear",
    rating: 4.4,
    isNew: false,
  },
  {
    id: "7",
    name: "Patterned Scarf",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1601370552761-3c14bbc3eccc?q=80&w=987&auto=format&fit=crop",
    category: "accessories",
    rating: 4.1,
    isNew: true,
  },
  {
    id: "8",
    name: "Denim Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=987&auto=format&fit=crop",
    category: "clothing",
    rating: 4.7,
    isNew: false,
  },
  {
    id: "9",
    name: "Floral Summer Dress",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1065&auto=format&fit=crop",
    category: "clothing",
    rating: 4.5,
    isNew: true,
  },
  {
    id: "10",
    name: "Leather Wallet",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=987&auto=format&fit=crop",
    category: "accessories",
    rating: 4.3,
    isNew: false,
  },
  {
    id: "11",
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop",
    category: "footwear",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "12",
    name: "Casual Blazer",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1598808503746-f34faef0e719?q=80&w=987&auto=format&fit=crop",
    category: "clothing",
    rating: 4.6,
    isNew: false,
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  )
}
