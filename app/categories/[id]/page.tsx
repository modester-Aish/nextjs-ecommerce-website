"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CategoryFilters from "@/components/category-filters"

// Mock data for category products with Unsplash images
const categoryProducts = {
  women: [
    {
      id: "w1",
      name: "Floral Summer Dress",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1065&auto=format&fit=crop",
      category: "clothing",
      rating: 4.5,
      isNew: true,
    },
    {
      id: "w2",
      name: "Casual Blouse",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=987&auto=format&fit=crop",
      category: "clothing",
      rating: 4.3,
      isNew: false,
    },
    {
      id: "w3",
      name: "High Waist Jeans",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=987&auto=format&fit=crop",
      category: "clothing",
      rating: 4.7,
      isNew: true,
    },
    {
      id: "w4",
      name: "Leather Handbag",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
      category: "accessories",
      rating: 4.8,
      isNew: false,
    },
    {
      id: "w5",
      name: "Ankle Boots",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1160&auto=format&fit=crop",
      category: "footwear",
      rating: 4.6,
      isNew: true,
    },
    {
      id: "w6",
      name: "Statement Earrings",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1064&auto=format&fit=crop",
      category: "accessories",
      rating: 4.4,
      isNew: false,
    },
  ],
  men: [
    {
      id: "m1",
      name: "Classic White T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop",
      category: "clothing",
      rating: 4.5,
      isNew: true,
    },
    {
      id: "m2",
      name: "Slim Fit Jeans",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1026&auto=format&fit=crop",
      category: "clothing",
      rating: 4.2,
      isNew: false,
    },
    {
      id: "m3",
      name: "Casual Blazer",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1598808503746-f34faef0e719?q=80&w=987&auto=format&fit=crop",
      category: "clothing",
      rating: 4.6,
      isNew: false,
    },
    {
      id: "m4",
      name: "Leather Watch",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=988&auto=format&fit=crop",
      category: "accessories",
      rating: 4.8,
      isNew: true,
    },
    {
      id: "m5",
      name: "Leather Wallet",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=987&auto=format&fit=crop",
      category: "accessories",
      rating: 4.3,
      isNew: false,
    },
    {
      id: "m6",
      name: "Canvas Sneakers",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=998&auto=format&fit=crop",
      category: "footwear",
      rating: 4.4,
      isNew: true,
    },
  ],
  accessories: [
    {
      id: "a1",
      name: "Leather Crossbody Bag",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
      category: "accessories",
      rating: 4.8,
      isNew: true,
    },
    {
      id: "a2",
      name: "Minimalist Watch",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=988&auto=format&fit=crop",
      category: "accessories",
      rating: 4.6,
      isNew: false,
    },
    {
      id: "a3",
      name: "Patterned Scarf",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1601370552761-3c14bbc3eccc?q=80&w=987&auto=format&fit=crop",
      category: "accessories",
      rating: 4.1,
      isNew: true,
    },
    {
      id: "a4",
      name: "Statement Earrings",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1064&auto=format&fit=crop",
      category: "accessories",
      rating: 4.4,
      isNew: false,
    },
    {
      id: "a5",
      name: "Leather Wallet",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=987&auto=format&fit=crop",
      category: "accessories",
      rating: 4.3,
      isNew: false,
    },
    {
      id: "a6",
      name: "Sunglasses",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1160&auto=format&fit=crop",
      category: "accessories",
      rating: 4.7,
      isNew: true,
    },
  ],
  footwear: [
    {
      id: "f1",
      name: "Canvas Sneakers",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=998&auto=format&fit=crop",
      category: "footwear",
      rating: 4.4,
      isNew: false,
    },
    {
      id: "f2",
      name: "Running Shoes",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop",
      category: "footwear",
      rating: 4.8,
      isNew: true,
    },
    {
      id: "f3",
      name: "Leather Boots",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=987&auto=format&fit=crop",
      category: "footwear",
      rating: 4.6,
      isNew: false,
    },
    {
      id: "f4",
      name: "Ankle Boots",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1160&auto=format&fit=crop",
      category: "footwear",
      rating: 4.6,
      isNew: true,
    },
    {
      id: "f5",
      name: "Casual Loafers",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1169&auto=format&fit=crop",
      category: "footwear",
      rating: 4.3,
      isNew: false,
    },
    {
      id: "f6",
      name: "Sandals",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=987&auto=format&fit=crop",
      category: "footwear",
      rating: 4.2,
      isNew: true,
    },
  ],
  jewelry: [
    {
      id: "j1",
      name: "Gold Necklace",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=987&auto=format&fit=crop",
      category: "jewelry",
      rating: 4.9,
      isNew: true,
    },
    {
      id: "j2",
      name: "Silver Bracelet",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=988&auto=format&fit=crop",
      category: "jewelry",
      rating: 4.7,
      isNew: false,
    },
    {
      id: "j3",
      name: "Diamond Earrings",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1064&auto=format&fit=crop",
      category: "jewelry",
      rating: 4.8,
      isNew: true,
    },
    {
      id: "j4",
      name: "Pearl Necklace",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?q=80&w=987&auto=format&fit=crop",
      category: "jewelry",
      rating: 4.6,
      isNew: false,
    },
  ],
  beauty: [
    {
      id: "b1",
      name: "Facial Cleanser",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=987&auto=format&fit=crop",
      category: "beauty",
      rating: 4.5,
      isNew: true,
    },
    {
      id: "b2",
      name: "Moisturizer",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop",
      category: "beauty",
      rating: 4.7,
      isNew: false,
    },
    {
      id: "b3",
      name: "Lipstick Set",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1015&auto=format&fit=crop",
      category: "beauty",
      rating: 4.6,
      isNew: true,
    },
    {
      id: "b4",
      name: "Eyeshadow Palette",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1035&auto=format&fit=crop",
      category: "beauty",
      rating: 4.8,
      isNew: false,
    },
  ],
  home: [
    {
      id: "h1",
      name: "Decorative Pillow",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=987&auto=format&fit=crop",
      category: "home",
      rating: 4.4,
      isNew: true,
    },
    {
      id: "h2",
      name: "Scented Candle",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=987&auto=format&fit=crop",
      category: "home",
      rating: 4.6,
      isNew: false,
    },
    {
      id: "h3",
      name: "Throw Blanket",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1032&auto=format&fit=crop",
      category: "home",
      rating: 4.5,
      isNew: true,
    },
    {
      id: "h4",
      name: "Ceramic Vase",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1612196808214-b7e239e5d5e5?q=80&w=987&auto=format&fit=crop",
      category: "home",
      rating: 4.3,
      isNew: false,
    },
  ],
  sale: [
    {
      id: "s1",
      name: "Summer Dress",
      price: 39.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1065&auto=format&fit=crop",
      category: "clothing",
      rating: 4.5,
      isNew: false,
      discount: "50% OFF",
    },
    {
      id: "s2",
      name: "Casual Shirt",
      price: 24.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1170&auto=format&fit=crop",
      category: "clothing",
      rating: 4.3,
      isNew: false,
      discount: "50% OFF",
    },
    {
      id: "s3",
      name: "Leather Bag",
      price: 59.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
      category: "accessories",
      rating: 4.7,
      isNew: false,
      discount: "40% OFF",
    },
    {
      id: "s4",
      name: "Sneakers",
      price: 34.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=998&auto=format&fit=crop",
      category: "footwear",
      rating: 4.4,
      isNew: false,
      discount: "50% OFF",
    },
  ],
}

// Category information
const categoryInfo = {
  women: {
    title: "Women's Collection",
    description:
      "Discover our latest collection of women's clothing, from casual everyday wear to elegant evening attire.",
    banner: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop",
  },
  men: {
    title: "Men's Collection",
    description: "Explore our men's collection featuring modern designs and classic styles for every occasion.",
    banner: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1170&auto=format&fit=crop",
  },
  accessories: {
    title: "Accessories",
    description: "Complete your look with our range of accessories, from statement pieces to everyday essentials.",
    banner: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=1087&auto=format&fit=crop",
  },
  footwear: {
    title: "Footwear",
    description: "Step out in style with our collection of footwear, designed for comfort and fashion.",
    banner: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1170&auto=format&fit=crop",
  },
  jewelry: {
    title: "Jewelry",
    description: "Add a touch of elegance with our curated selection of fine and fashion jewelry.",
    banner: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1170&auto=format&fit=crop",
  },
  beauty: {
    title: "Beauty",
    description: "Discover our range of beauty products, from skincare essentials to makeup must-haves.",
    banner: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1187&auto=format&fit=crop",
  },
  home: {
    title: "Home",
    description: "Transform your space with our collection of home decor, textiles, and accessories.",
    banner: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1032&auto=format&fit=crop",
  },
  sale: {
    title: "Sale",
    description: "Shop our sale items and discover great deals on a wide range of products.",
    banner: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1115&auto=format&fit=crop",
  },
}

export default function CategoryPage() {
  const { id } = useParams()
  const categoryId = typeof id === "string" ? id : ""

  // Default to women if category doesn't exist
  const products = categoryProducts[categoryId as keyof typeof categoryProducts] || categoryProducts.women
  const info = categoryInfo[categoryId as keyof typeof categoryInfo] || categoryInfo.women

  const [sortOption, setSortOption] = useState("featured")
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Handle sorting
  const handleSort = (option: string) => {
    setSortOption(option)
    let sorted = [...products]

    switch (option) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "newest":
        sorted = sorted.filter((p) => p.isNew).concat(sorted.filter((p) => !p.isNew))
        break
      case "rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      default:
        // featured - no sorting needed
        break
    }

    setFilteredProducts(sorted)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 lg:py-16">
      <Link
        href="/categories"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to categories
      </Link>

      {/* Category Banner */}
      <div className="relative w-full h-64 md:h-80 mb-8 overflow-hidden rounded-lg">
        <img src={info.banner || "/placeholder.svg"} alt={info.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{info.title}</h1>
            <p className="text-white/80 max-w-2xl">{info.description}</p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-gray-500 mt-2">{filteredProducts.length} products found</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Sort by:</span>
          <select
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="hidden md:block">
          <CategoryFilters categoryId={categoryId} />
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search criteria.</p>
              <Button onClick={() => setFilteredProducts(products)}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
