"use client"

import { motion } from "framer-motion"
import ProductCard from "./product-card"

// Mock data for related products with Unsplash images
const getRelatedProducts = (currentId: string) => {
  return [
    {
      id: `related-1`,
      name: `Casual Linen Shirt`,
      price: 49.99,
      image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1170&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: `related-2`,
      name: `Summer Shorts`,
      price: 39.99,
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1170&auto=format&fit=crop",
      isNew: false,
    },
    {
      id: `related-3`,
      name: `Casual Sneakers`,
      price: 69.99,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1005&auto=format&fit=crop",
      isNew: false,
    },
    {
      id: `related-4`,
      name: `Cotton Socks Set`,
      price: 19.99,
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=1170&auto=format&fit=crop",
      isNew: true,
    },
  ]
}

export default function RelatedProducts({ currentProductId }: { currentProductId: string }) {
  const relatedProducts = getRelatedProducts(currentProductId)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product, index) => (
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
  )
}
