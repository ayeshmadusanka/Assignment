"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

function HeroImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    { src: "/images/hero.webp", alt: "Luxora Villa" },
    { src: "/images/garden.webp", alt: "Luxora Villa Garden" },
    { src: "/images/Contact_Us.webp", alt: "Contact Luxora Villa" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? "bg-amber-600 w-6" : "bg-white/70"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <HeroImageSlider />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Luxora Villa</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Experience tranquil luxury in the hills of Tuscany
          </p>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/contact">Book Your Stay</Link>
          </Button>
        </div>
      </section>

      {/* Villa Highlights */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-stone-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Villa Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Luxurious Suites</h3>
              <p className="text-gray-600 mb-4">
                Our elegantly appointed suites offer panoramic views of the Tuscan countryside, featuring premium
                bedding and private terraces.
              </p>
              <Link href="/services" className="text-amber-600 hover:text-amber-700 inline-flex items-center">
                Explore Suites <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Gourmet Dining</h3>
              <p className="text-gray-600 mb-4">
                Savor authentic Italian cuisine prepared by our master chef using locally-sourced ingredients from our
                own garden and nearby farms.
              </p>
              <Link href="/services" className="text-amber-600 hover:text-amber-700 inline-flex items-center">
                View Dining Options <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Wellness Spa</h3>
              <p className="text-gray-600 mb-4">
                Rejuvenate your body and mind in our state-of-the-art spa featuring thermal pools, massage treatments,
                and yoga sessions.
              </p>
              <Link href="/services" className="text-amber-600 hover:text-amber-700 inline-flex items-center">
                Discover Wellness <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience Luxora</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square">
              <Image src="/images/experience-1.webp" alt="Villa Terrace" fill className="object-cover rounded-lg" />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/experience-2.webp"
                alt="Luxury Living Space"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image src="/images/experience-3.webp" alt="Luxury Suite" fill className="object-cover rounded-lg" />
            </div>
            <div className="relative aspect-square">
              <Image src="/images/experience-4.webp" alt="Infinity Pool" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-amber-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Guest Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Our stay at Luxora Villa exceeded all expectations. The attention to detail, impeccable service, and
                breathtaking views made our anniversary truly special."
              </p>
              <p className="font-semibold">- Maria & Paolo, Rome</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "A hidden gem in Tuscany! The villa's tranquil setting, combined with world-class amenities and
                exceptional staff, created an unforgettable experience."
              </p>
              <p className="font-semibold">- James & Elizabeth, London</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-amber-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Unforgettable Escape?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at Luxora Villa and immerse yourself in the beauty and tranquility of Tuscany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-amber-100">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-amber-100">
              <Link href="/contact">Book Your Stay</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
