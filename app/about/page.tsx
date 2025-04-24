import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image src="/images/hero-about.webp" alt="About Luxora Villa" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white max-w-2xl">The story of Luxora Villa, our mission, and our values</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Nestled in the rolling hills of Tuscany, Luxora Villa was born from a dream to create a sanctuary where
                luxury meets nature. The estate dates back to the 18th century when it served as a summer residence for
                Italian nobility.
              </p>
              <p className="text-gray-600 mb-4">
                In 2010, the Bianchi family acquired the property and embarked on an ambitious restoration project.
                Their vision was to preserve the villa's historic charm while integrating modern luxuries and
                sustainable practices.
              </p>
              <p className="text-gray-600">
                Today, Luxora Villa stands as a testament to timeless elegance, offering guests an authentic Tuscan
                experience enhanced by world-class amenities and personalized service.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/about-story.webp" alt="Luxora Villa History" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-stone-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg mb-6">
              At Luxora Villa, our mission is to provide an unparalleled retreat that celebrates the beauty of Tuscany
              while offering the highest standards of luxury and comfort.
            </p>
            <p className="text-gray-600 text-lg">
              We strive to create meaningful experiences that connect our guests with the rich cultural heritage,
              culinary traditions, and natural splendor of the region, all while ensuring our operations respect and
              protect the environment for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Authentic Luxury</h3>
              <p className="text-gray-600">
                We believe true luxury lies in authenticity. From our locally-sourced materials to our
                regionally-inspired cuisine, every aspect of Luxora Villa reflects the genuine character of Tuscany.
              </p>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainable Practices</h3>
              <p className="text-gray-600">
                We are committed to environmental stewardship. Our villa operates on renewable energy, practices water
                conservation, sources ingredients from local organic farms, and implements waste reduction initiatives.
              </p>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Exceptional Service</h3>
              <p className="text-gray-600">
                We believe in creating meaningful connections with our guests. Our dedicated staff provides personalized
                attention to ensure every stay is tailored to individual preferences and exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-stone-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/team-marco.webp" alt="Marco Bianchi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Marco Bianchi</h3>
              <p className="text-gray-600">Owner & Director</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/team-sofia.webp" alt="Sofia Rossi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Sofia Rossi</h3>
              <p className="text-gray-600">Head of Hospitality</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/team-antonio.webp" alt="Chef Antonio" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Chef Antonio</h3>
              <p className="text-gray-600">Executive Chef</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/team-elena.webp" alt="Elena Conti" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Elena Conti</h3>
              <p className="text-gray-600">Wellness Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-amber-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Luxora Villa</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our range of accommodations and services designed to make your stay unforgettable.
          </p>
          <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-amber-100">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}