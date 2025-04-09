"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Different filter options based on category
const categoryFilters = {
  women: {
    types: ["Dresses", "Tops", "Bottoms", "Outerwear", "Activewear"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Blue", "Red", "Green", "Pink", "Yellow"],
    brands: ["StyleHub", "Elegance", "Urban Chic", "Athleisure", "Vintage Vibes"],
  },
  men: {
    types: ["Shirts", "T-Shirts", "Pants", "Jeans", "Outerwear", "Activewear"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Blue", "Gray", "Green", "Brown", "Navy"],
    brands: ["StyleHub", "Modern Man", "Urban Edge", "Athletic Pro", "Classic Cuts"],
  },
  accessories: {
    types: ["Bags", "Hats", "Scarves", "Belts", "Sunglasses", "Watches"],
    colors: ["Black", "Brown", "White", "Silver", "Gold", "Multi"],
    brands: ["StyleHub", "Luxe Accessories", "Urban Carry", "Timeless", "Modern Edge"],
  },
  footwear: {
    types: ["Sneakers", "Boots", "Sandals", "Heels", "Flats", "Loafers"],
    sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Brown", "Blue", "Red", "Multi"],
    brands: ["StyleHub", "Comfort Step", "Urban Walker", "Athletic Edge", "Classic Stride"],
  },
  jewelry: {
    types: ["Necklaces", "Earrings", "Bracelets", "Rings", "Watches"],
    materials: ["Gold", "Silver", "Rose Gold", "Platinum", "Gemstones", "Pearls"],
    brands: ["StyleHub", "Precious Gems", "Modern Metals", "Timeless", "Luxe Collection"],
  },
  beauty: {
    types: ["Skincare", "Makeup", "Haircare", "Fragrance", "Bath & Body"],
    concerns: ["Anti-aging", "Hydration", "Acne", "Sensitive Skin", "Sun Protection"],
    brands: ["StyleHub", "Natural Glow", "Luxe Beauty", "Pure Skin", "Vibrant Color"],
  },
  home: {
    types: ["Decor", "Textiles", "Kitchen", "Bath", "Furniture"],
    rooms: ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office"],
    colors: ["White", "Black", "Gray", "Beige", "Blue", "Green"],
    brands: ["StyleHub Home", "Cozy Living", "Modern Space", "Natural Home", "Luxe Interiors"],
  },
  sale: {
    discount: ["10% Off", "20% Off", "30% Off", "40% Off", "50% Off or more"],
    categories: ["Women", "Men", "Accessories", "Footwear", "Beauty", "Home"],
    types: ["Clothing", "Shoes", "Bags", "Jewelry", "Beauty", "Home Decor"],
  },
}

// Default filters if category doesn't exist
const defaultFilters = {
  types: ["Clothing", "Accessories", "Footwear", "Beauty", "Home"],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Black", "White", "Blue", "Red", "Green"],
  brands: ["StyleHub", "Premium", "Casual", "Luxury", "Basics"],
}

export default function CategoryFilters({ categoryId }: { categoryId: string }) {
  const [priceRange, setPriceRange] = useState([0, 200])

  // Get filters based on category or use default
  const filters = categoryFilters[categoryId as keyof typeof categoryFilters] || defaultFilters

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Button variant="outline" size="sm" className="w-full">
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["category", "price", "color", "size"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {(filters.types || defaultFilters.types).map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={`type-${type}`} />
                  <Label htmlFor={`type-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 200]} max={500} step={10} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {(filters.colors || defaultFilters.colors).map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox id={`color-${color}`} />
                  <Label htmlFor={`color-${color}`} className="flex items-center">
                    <span
                      className="h-4 w-4 rounded-full mr-2"
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border: color.toLowerCase() === "white" ? "1px solid #e2e8f0" : "none",
                      }}
                    ></span>
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {filters.sizes && (
          <AccordionItem value="size">
            <AccordionTrigger>Size</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-3 gap-2">
                {filters.sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {filters.brands && (
          <AccordionItem value="brand">
            <AccordionTrigger>Brand</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {filters.brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={`brand-${brand}`} />
                    <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {filters.materials && (
          <AccordionItem value="material">
            <AccordionTrigger>Material</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {filters.materials.map((material) => (
                  <div key={material} className="flex items-center space-x-2">
                    <Checkbox id={`material-${material}`} />
                    <Label htmlFor={`material-${material}`}>{material}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {filters.discount && (
          <AccordionItem value="discount">
            <AccordionTrigger>Discount</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {filters.discount.map((discount) => (
                  <div key={discount} className="flex items-center space-x-2">
                    <Checkbox id={`discount-${discount}`} />
                    <Label htmlFor={`discount-${discount}`}>{discount}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  )
}
