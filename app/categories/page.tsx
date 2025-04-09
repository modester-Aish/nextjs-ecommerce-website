"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Mock data for categories with Unsplash images
const categories = [
  {
    id: "women",
    name: "Women",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=986&auto=format&fit=crop",
    count: 153,
    description:
      "Discover our latest collection of women's clothing, from casual everyday wear to elegant evening attire.",
  },
  {
    id: "men",
    name: "Men",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1073&auto=format&fit=crop",
    count: 142,
    description: "Explore our men's collection featuring modern designs and classic styles for every occasion.",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=987&auto=format&fit=crop",
    count: 86,
    description: "Complete your look with our range of accessories, from statement pieces to everyday essentials.",
  },
  {
    id: "footwear",
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1012&auto=format&fit=crop",
    count: 76,
    description: "Step out in style with our collection of footwear, designed for comfort and fashion.",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=987&auto=format&fit=crop",
    count: 58,
    description: "Add a touch of elegance with our curated selection of fine and fashion jewelry.",
  },
  {
    id: "beauty",
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop",
    count: 42,
    description: "Discover our range of beauty products, from skincare essentials to makeup must-haves.",
  },
  {
    id: "home",
    name: "Home",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=987&auto=format&fit=crop",
    count: 37,
    description: "Transform your space with our collection of home decor, textiles, and accessories.",
  },
  {
    id: "sale",
    name: "Sale",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1115&auto=format&fit=crop",
    count: 95,
    description: "Shop our sale items and discover great deals on a wide range of products.",
  },
]

export default function CategoriesPage() {
  return (
    <div className="container px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop by Category</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our wide range of categories and find exactly what you're looking for.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/categories/${category.id}`}>
              <div className="group relative overflow-hidden rounded-lg border hover:shadow-md transition-all duration-300">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 category-card-overlay flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-2">{category.count} products</p>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:underline">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
