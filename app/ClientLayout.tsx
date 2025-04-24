"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Menu, X, Phone, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold">
          Luxora Villa
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-amber-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-amber-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-amber-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="tel:+390123456789"
            className="flex items-center text-sm font-medium hover:text-amber-600 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            +39 0123 456 789
          </Link>
          <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="text-black" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white">
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            <Link href="/" className="font-serif text-2xl font-bold text-black" onClick={() => setIsOpen(false)}>
              Luxora Villa
            </Link>
            <Button variant="ghost" size="icon" className="text-black" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 p-4 bg-white">
            <Link
              href="/"
              className="text-lg font-medium p-2 rounded-md text-black hover:bg-amber-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium p-2 rounded-md text-black hover:bg-amber-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium p-2 rounded-md text-black hover:bg-amber-50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium p-2 rounded-md text-black hover:bg-amber-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <Link
                href="tel:+390123456789"
                className="flex items-center text-lg font-medium p-2 rounded-md text-black hover:bg-amber-50"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                +39 0123 456 789
              </Link>
              <Button
                asChild
                className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}


function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Luxora Villa</h3>
            <p className="text-stone-300 mb-4">
              Experience tranquil luxury in the hills of Tuscany, where elegance meets nature.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-stone-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-stone-300 hover:text-white transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-300 hover:text-white transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-300 hover:text-white transition-colors">
                  Wellness Spa
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-300 hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-stone-300 space-y-2">
              <p>Via del Chianti, 123</p>
              <p>53011 Castellina in Chianti</p>
              <p>Siena, Italy</p>
              <p className="mt-4">
                <Link href="tel:+390123456789" className="hover:text-white transition-colors">
                  +39 0123 456 789
                </Link>
              </p>
              <p>
                <Link href="mailto:info@luxoravilla.com" className="hover:text-white transition-colors">
                  info@luxoravilla.com
                </Link>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Luxora Villa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
