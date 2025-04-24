import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-amber-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        We're sorry, the page you requested could not be found. Please check the URL or navigate back to the homepage.
      </p>
      <Button asChild className="mt-8 bg-amber-600 hover:bg-amber-700 text-white">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}
