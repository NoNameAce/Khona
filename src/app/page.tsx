import Link from "next/link"
import { Search, Home, DollarSign, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="mb-8">Discover the perfect property in your desired location</p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter location, property type, or keywords"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600">
                <Search />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={`/placeholder.svg?height=200&width=300`} alt="Property" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Beautiful Home {i}</h3>
                <p className="text-gray-600 mb-4">123 Main St, City, State</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">$299,000</span>
                  <Link href={`/properties/${i}`} className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Property Filters */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Property Search</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="location" className="block mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter city or zip code"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2">
                Price Range
              </label>
              <select
                id="price"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Price</option>
                <option value="0-100000">$0 - $100,000</option>
                <option value="100000-250000">$100,000 - $250,000</option>
                <option value="250000-500000">$250,000 - $500,000</option>
                <option value="500000+">$500,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block mb-2">
                Property Type
              </label>
              <select
                id="type"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Search Properties</button>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 bg-yellow-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="mb-8">Sign up now to access exclusive listings and save your favorite properties.</p>
          <Link href="/register" className="bg-white text-yellow-500 px-6 py-2 rounded-lg hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={`/placeholder.svg?height=50&width=50`} alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-gray-600">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I found my dream home thanks to Real Estate Marketplace. The process was smooth and the team was
                incredibly helpful throughout."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

