"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Minus, Plus, Share2, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "./cart-provider"

// Mock product data with Unsplash images
const getProductById = (id: string) => {
  const products = {
    "1": {
      id: "1",
      name: "Classic White T-Shirt",
      price: 29.99,
      description:
        "This premium cotton t-shirt is crafted with high-quality materials for durability and style. Perfect for everyday wear with a comfortable fit and timeless design.",
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=987&auto=format&fit=crop",
      ],
      colors: ["White", "Black", "Gray", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      rating: 4.5,
      reviewCount: 127,
      features: [
        "100% premium cotton",
        "Comfortable fit",
        "Durable construction",
        "Easy to care for",
        "Versatile design",
      ],
      specifications: {
        Material: "100% Cotton",
        Weight: "0.3 kg",
        Dimensions: "Standard sizing",
        Care: "Machine wash cold",
        Origin: "Made in Portugal",
      },
    },
    "2": {
      id: "2",
      name: "Slim Fit Jeans",
      price: 59.99,
      description:
        "These premium slim fit jeans offer the perfect balance of style and comfort. Made with high-quality denim that provides just the right amount of stretch for all-day comfort.",
      images: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1026&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=987&auto=format&fit=crop",
      ],
      colors: ["Blue", "Black", "Gray", "Light Wash"],
      sizes: ["28", "30", "32", "34", "36", "38"],
      rating: 4.2,
      reviewCount: 98,
      features: [
        "Premium denim with stretch",
        "Slim fit design",
        "Reinforced stitching",
        "Classic 5-pocket styling",
        "Versatile for casual or dressy occasions",
      ],
      specifications: {
        Material: "98% Cotton, 2% Elastane",
        Weight: "0.6 kg",
        Dimensions: "Standard sizing",
        Care: "Machine wash cold, inside out",
        Origin: "Made in Turkey",
      },
    },
    "3": {
      id: "3",
      name: "Leather Crossbody Bag",
      price: 89.99,
      description:
        "This elegant leather crossbody bag combines style and functionality. Crafted from genuine leather with a spacious interior and adjustable strap for comfortable all-day wear.",
      images: [
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1171&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1035&auto=format&fit=crop",
      ],
      colors: ["Black", "Brown", "Tan", "Red"],
      sizes: ["One Size"],
      rating: 4.8,
      reviewCount: 156,
      features: [
        "Genuine leather construction",
        "Adjustable shoulder strap",
        "Multiple interior compartments",
        "Secure zipper closure",
        "Stylish gold-tone hardware",
      ],
      specifications: {
        Material: "100% Genuine Leather",
        Weight: "0.5 kg",
        Dimensions: "22 x 15 x 6 cm",
        Care: "Wipe clean with damp cloth",
        Origin: "Made in Italy",
      },
    },
  }

  // Return the product if it exists, otherwise return a default product
  return (
    products[id] || {
      id,
      name: `Product ${id}`,
      price: 59.99,
      description:
        "This premium product is crafted with high-quality materials for durability and style. Perfect for everyday use or special occasions.",
      images: [
        `https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1170&auto=format&fit=crop`,
        `https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1064&auto=format&fit=crop`,
        `https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1170&auto=format&fit=crop`,
        `https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1005&auto=format&fit=crop`,
      ],
      colors: ["Black", "White", "Navy", "Red"],
      sizes: ["XS", "S", "M", "L", "XL"],
      rating: 4.5,
      reviewCount: 127,
      features: [
        "Premium quality materials",
        "Comfortable fit",
        "Durable construction",
        "Easy to care for",
        "Versatile design",
      ],
      specifications: {
        Material: "100% Cotton",
        Weight: "0.5 kg",
        Dimensions: "30 x 20 x 10 cm",
        Care: "Machine wash cold",
        Origin: "Made in Portugal",
      },
    }
  )
}

export default function ProductDetails({ id }: { id: string }) {
  const product = getProductById(id)
  const { addItem } = useCart()
  const { toast } = useToast()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]) // Default to Medium
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      color: selectedColor,
      size: selectedSize,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}, ${selectedColor}) has been added to your cart.`,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="aspect-square overflow-hidden rounded-lg bg-muted"
        >
          <img
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={`${product.name} - Image ${selectedImage + 1}`}
            className="h-full w-full object-cover product-image-zoom"
          />
        </motion.div>

        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                selectedImage === i ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} - Thumbnail ${i + 1}`}
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 flex items-center">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : i < product.rating
                          ? "text-yellow-400 fill-yellow-400/50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
        </div>

        <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

        <p className="text-muted-foreground">{product.description}</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Color</Label>
            <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <RadioGroupItem value={color} id={`color-${color}`} className="sr-only" />
                  <Label
                    htmlFor={`color-${color}`}
                    className={`cursor-pointer rounded-md border px-3 py-2 text-sm transition-colors ${
                      selectedColor === color ? "border-primary bg-primary/10" : "border-input hover:bg-muted"
                    }`}
                  >
                    {color}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Size</Label>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className={`cursor-pointer rounded-md border px-3 py-2 text-sm transition-colors ${
                      selectedSize === size ? "border-primary bg-primary/10" : "border-input hover:bg-muted"
                    }`}
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Quantity</Label>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="flex-1" onClick={handleAddToCart}>
            <ShoppingBag className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          <Button variant="outline" size="lg">
            <Heart className="mr-2 h-5 w-5" />
            Add to Wishlist
          </Button>
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>

        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="pt-4">
            <p className="text-muted-foreground">
              {product.description} This product is designed to provide maximum comfort and style. It features a modern
              design that complements any outfit and is suitable for various occasions. The high-quality materials
              ensure durability and long-lasting performance.
            </p>
          </TabsContent>
          <TabsContent value="features" className="pt-4">
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specs" className="pt-4">
            <div className="space-y-2 text-muted-foreground">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 border-b py-2">
                  <span className="font-medium">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
