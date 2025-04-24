import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image src="/images/hero.webp" alt="Luxora Villa" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
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
      <section className="py-16 md:py-24 px-4 md:px-6 bg-amber-800 text-white">
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
