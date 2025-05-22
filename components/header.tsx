"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Notre Histoire", href: "/notre-histoire" },
  { name: "Leurs Défis", href: "/defis" },
  { name: "Notre Impact", href: "/notre-impact" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <div className="bg-teal-800 text-white py-2">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+221 12 345 67 89</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>contact@femmes-transformatrices.org</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-teal-200">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-teal-200">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-teal-200">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="images/logo.jpg" alt="Logo" width={100} height={100} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-700 hover:text-teal-600 font-medium",
                  pathname === item.href && "text-teal-600 font-semibold",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
              <Link href="/don">Faire un Don</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <span className="text-lg font-bold text-teal-700">Menu</span>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Fermer</span>
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-4 py-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "text-gray-700 hover:text-teal-600 font-medium py-2",
                          pathname === item.href && "text-teal-600 font-semibold",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto py-4">
                    <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      <Link href="/don" onClick={() => setIsOpen(false)}>
                        Faire un Don
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
