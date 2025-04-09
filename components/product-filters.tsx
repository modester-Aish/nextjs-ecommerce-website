"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])

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
              <div className="flex items-center space-x-2">
                <Checkbox id="category-all" />
                <Label htmlFor="category-all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="category-men" />
                <Label htmlFor="category-men">Men</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="category-women" />
                <Label htmlFor="category-women">Women</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="category-accessories" />
                <Label htmlFor="category-accessories">Accessories</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="category-footwear" />
                <Label htmlFor="category-footwear">Footwear</Label>
              </div>
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
              <div className="flex items-center space-x-2">
                <Checkbox id="color-black" />
                <Label htmlFor="color-black" className="flex items-center">
                  <span className="h-4 w-4 rounded-full bg-black mr-2"></span>
                  Black
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="color-white" />
                <Label htmlFor="color-white" className="flex items-center">
                  <span className="h-4 w-4 rounded-full bg-white border mr-2"></span>
                  White
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="color-blue" />
                <Label htmlFor="color-blue" className="flex items-center">
                  <span className="h-4 w-4 rounded-full bg-blue-500 mr-2"></span>
                  Blue
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="color-red" />
                <Label htmlFor="color-red" className="flex items-center">
                  <span className="h-4 w-4 rounded-full bg-red-500 mr-2"></span>
                  Red
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="color-green" />
                <Label htmlFor="color-green" className="flex items-center">
                  <span className="h-4 w-4 rounded-full bg-green-500 mr-2"></span>
                  Green
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
