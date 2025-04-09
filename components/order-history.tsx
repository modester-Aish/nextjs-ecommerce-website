"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for order history
const orders = [
  {
    id: "ORD-12345",
    date: "April 3, 2023",
    status: "Delivered",
    total: 129.99,
    items: [
      { name: "Classic White T-Shirt", quantity: 1, price: 29.99 },
      { name: "Slim Fit Jeans", quantity: 1, price: 59.99 },
      { name: "Canvas Sneakers", quantity: 1, price: 49.99 },
    ],
  },
  {
    id: "ORD-12344",
    date: "March 15, 2023",
    status: "Delivered",
    total: 89.99,
    items: [{ name: "Leather Crossbody Bag", quantity: 1, price: 89.99 }],
  },
  {
    id: "ORD-12343",
    date: "February 28, 2023",
    status: "Delivered",
    total: 104.98,
    items: [
      { name: "Minimalist Watch", quantity: 1, price: 129.99 },
      { name: "Patterned Scarf", quantity: 1, price: 34.99 },
    ],
  },
]

export default function OrderHistory() {
  return (
    <div className="space-y-6">
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
          <Link href="/products">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      ) : (
        orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border rounded-lg overflow-hidden"
          >
            <div className="bg-muted/50 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{order.id}</h3>
                  <Badge variant={order.status === "Delivered" ? "outline" : "default"}>{order.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{order.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">${order.total.toFixed(2)}</span>
                <Link href={`/account/orders/${order.id}`}>
                  <Button variant="outline" size="sm">
                    View Order
                  </Button>
                </Link>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span>
                    {item.name} <span className="text-muted-foreground">× {item.quantity}</span>
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))
      )}
    </div>
  )
}
