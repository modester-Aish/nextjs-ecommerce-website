"use client"

import type { CartItem } from "./cart-provider"
import { Separator } from "@/components/ui/separator"

interface CheckoutSummaryProps {
  items: CartItem[]
  subtotal: number
}

export default function CheckoutSummary({ items, subtotal }: CheckoutSummaryProps) {
  return (
    <div className="border rounded-lg p-6 bg-gray-50 sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <div>
              <span className="font-medium">{item.name}</span>
              <span className="text-muted-foreground"> × {item.quantity}</span>
              {(item.size || item.color) && (
                <div className="text-xs text-muted-foreground">
                  {item.size && <span>Size: {item.size}</span>}
                  {item.size && item.color && <span> / </span>}
                  {item.color && <span>Color: {item.color}</span>}
                </div>
              )}
            </div>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>Calculated at next step</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  )
}
