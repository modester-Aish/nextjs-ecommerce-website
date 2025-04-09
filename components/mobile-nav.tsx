"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/products",
    submenu: [
      { title: "All Products", href: "/products" },
      { title: "New Arrivals", href: "/products?filter=new" },
      { title: "Best Sellers", href: "/products?filter=bestsellers" },
      { title: "Sale", href: "/sale" },
    ],
  },
  {
    title: "Categories",
    href: "/categories",
    submenu: [
      { title: "Men", href: "/categories/men" },
      { title: "Women", href: "/categories/women" },
      { title: "Accessories", href: "/categories/accessories" },
      { title: "Footwear", href: "/categories/footwear" },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function MobileNav() {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <div className="flex flex-col gap-6 p-1">
      <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
        StyleHub
      </Link>

      <nav className="flex flex-col space-y-1">
        {menuItems.map((item) => (
          <div key={item.title} className="flex flex-col">
            {item.submenu ? (
              <button
                onClick={() => toggleSubmenu(item.title)}
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
                  pathname === item.href ? "bg-muted" : "hover:bg-muted/50",
                )}
              >
                {item.title}
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", openSubmenu === item.title && "rotate-180")}
                />
              </button>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  pathname === item.href ? "bg-muted" : "hover:bg-muted/50",
                )}
              >
                {item.title}
              </Link>
            )}

            {item.submenu && openSubmenu === item.title && (
              <div className="ml-4 mt-1 space-y-1 border-l pl-2">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.title}
                    href={subitem.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm",
                      pathname === subitem.href ? "font-medium" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {subitem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <Link href="/auth/login" className="block w-full">
          <button className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
            Sign In
          </button>
        </Link>
        <Link href="/auth/register" className="block w-full">
          <button className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-medium">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  )
}
