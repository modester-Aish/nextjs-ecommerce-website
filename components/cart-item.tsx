"use client"
import Link from "next/link"
import { Minus, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, type CartItem } from "./cart-provider"

export default function CartItemComponent({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(item.id, newQuantity)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 border-b pb-6">
      <Link href={`/products/${item.id}`} className="flex-shrink-0">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-24 w-24 rounded-md object-cover" />
      </Link>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <Link href={`/products/${item.id}`} className="font-medium hover:underline">
            {item.name}
          </Link>
          <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
        </div>

        {(item.size || item.color) && (
          <div className="mt-1 text-sm text-muted-foreground">
            {item.size && <span>Size: {item.size}</span>}
            {item.size && item.color && <span> / </span>}
            {item.color && <span>Color: {item.color}</span>}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => removeItem(item.id)}
          >
            <Trash className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
