import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image src="/images/services-hero.webp" alt="Luxora Villa Services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white max-w-2xl">
            Discover our accommodations, amenities, and exclusive experiences
          </p>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src="/images/deluxe-suite.webp" alt="Deluxe Suite" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Deluxe Suite</h3>
                <p className="text-gray-600 mb-4">
                  Our spacious 60m² suites feature a king-size bed, private balcony with panoramic views, luxurious
                  bathroom with rainfall shower and soaking tub, and elegant Tuscan-inspired décor.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>King-size bed with premium linens</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Private balcony with countryside views</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Marble bathroom with rainfall shower</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src="/images/family-suite.webp" alt="Family Villa" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Family Villa</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for families, our 120m² villas offer two bedrooms, a spacious living area, fully-equipped
                  kitchen, and a private garden with outdoor dining space.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Two bedrooms with en-suite bathrooms</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Fully-equipped kitchen</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Private garden with outdoor dining</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src="/images/presidential-suite.webp" alt="Presidential Suite" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Presidential Suite</h3>
                <p className="text-gray-600 mb-4">
                  Our exclusive 200m² presidential suite offers unparalleled luxury with a spacious living room, private
                  terrace with infinity pool, and dedicated butler service.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Private terrace with infinity pool</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Dedicated butler service</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-amber-600 mr-2" />
                    <span>Complimentary wine cellar access</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-stone-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-6">World-Class Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Infinity Pool</h4>
                    <p className="text-gray-600">Overlooking the Tuscan hills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Wellness Spa</h4>
                    <p className="text-gray-600">Featuring thermal baths and treatments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Gourmet Restaurant</h4>
                    <p className="text-gray-600">Farm-to-table Italian cuisine</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Wine Cellar</h4>
                    <p className="text-gray-600">Featuring local and international selections</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Tennis Courts</h4>
                    <p className="text-gray-600">Professional clay courts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Yoga Pavilion</h4>
                    <p className="text-gray-600">Daily classes with certified instructors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Organic Garden</h4>
                    <p className="text-gray-600">Supplying our kitchen with fresh produce</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Helipad</h4>
                    <p className="text-gray-600">For convenient arrivals and departures</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden order-1 md:order-2">
              <Image src="/images/restaurant.webp" alt="Luxora Villa Restaurant" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Curated Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Culinary Adventures</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Cooking classes with our executive chef</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Truffle hunting expeditions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Wine tasting tours to local vineyards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Olive oil production workshops</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cultural Immersion</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Private tours of historic Tuscan towns</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Art and architecture tours with expert guides</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Traditional craft workshops</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Local festival participation</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Outdoor Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Horseback riding through vineyards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Hot air balloon rides at sunrise</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Mountain biking on scenic trails</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-amber-600 mr-2 mt-1" />
                  <span>Guided hiking excursions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-stone-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Special Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Celebrations & Events</h3>
              <p className="text-gray-600 mb-4">
                From intimate weddings to milestone anniversaries, our dedicated event planning team will create a
                bespoke celebration tailored to your vision. Our picturesque grounds and elegant venues provide the
                perfect backdrop for your special occasion.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">Inquire About Events</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Personalized Concierge</h3>
              <p className="text-gray-600 mb-4">
                Our attentive concierge team is available 24/7 to fulfill any request, from arranging private
                transportation and exclusive excursions to securing reservations at the region's finest restaurants and
                cultural attractions.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">Contact Concierge</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-amber-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Luxora Villa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to book your stay or inquire about our services and special packages.
          </p>
          <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-amber-100">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
