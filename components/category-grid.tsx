"use client"

import Link from "next/link"
import { motion } from "framer-motion"

// Mock data for categories
const categories = [
  {
    id: "women",
    name: "Women",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=986&auto=format&fit=crop",
    count: 153,
  },
  {
    id: "men",
    name: "Men",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1073&auto=format&fit=crop",
    count: 142,
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=987&auto=format&fit=crop",
    count: 86,
  },
  {
    id: "footwear",
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1012&auto=format&fit=crop",
    count: 76,
  },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/categories/${category.id}`}>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3] w-full">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 category-card-overlay p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count} products</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
