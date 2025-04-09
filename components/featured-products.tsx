"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "./product-card"

// Mock data for featured products
const mockProducts = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop",
    category: "clothing",
    rating: 4.5,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1026&auto=format&fit=crop",
    category: "clothing",
    rating: 4.2,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
    category: "accessories",
    rating: 4.8,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "4",
    name: "Minimalist Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=988&auto=format&fit=crop",
    category: "accessories",
    rating: 4.6,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "5",
    name: "Oversized Sweater",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1064&auto=format&fit=crop",
    category: "clothing",
    rating: 4.3,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "6",
    name: "Canvas Sneakers",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=998&auto=format&fit=crop",
    category: "footwear",
    rating: 4.4,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "7",
    name: "Patterned Scarf",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1601370552761-3c14bbc3eccc?q=80&w=987&auto=format&fit=crop",
    category: "accessories",
    rating: 4.1,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "8",
    name: "Denim Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=987&auto=format&fit=crop",
    category: "clothing",
    rating: 4.7,
    isNew: false,
    isFeatured: true,
  },
]

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProducts =
    activeFilter === "all" ? mockProducts : mockProducts.filter((product) => product.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="flex justify-center flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            activeFilter === "all" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("clothing")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            activeFilter === "clothing" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          }`}
        >
          Clothing
        </button>
        <button
          onClick={() => setActiveFilter("accessories")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            activeFilter === "accessories" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          }`}
        >
          Accessories
        </button>
        <button
          onClick={() => setActiveFilter("footwear")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            activeFilter === "footwear" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
          }`}
        >
          Footwear
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
