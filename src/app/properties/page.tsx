import Link from "next/link"
import { Search, Home, DollarSign, MapPin } from "lucide-react"

export default function PropertiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Properties</h1>

      {/* Search and Filters */}
      <div className="mb-8 bg-gray-100 p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="location" className="block mb-1">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                placeholder="Enter city or zip code"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <label htmlFor="type" className="block mb-1">
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
          <div>
            <label htmlFor="price" className="block mb-1">
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
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Search className="inline mr-2" />
              Search Properties
            </button>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={`/placeholder.svg?height=200&width=300`} alt="Property" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Beautiful Home {i}</h3>
              <p className="text-gray-600 mb-2">
                <MapPin className="inline mr-1" />
                123 Main St, City, State
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">
                  <DollarSign className="inline" />
                  299,000
                </span>
                <span className="text-gray-600">
                  <Home className="inline mr-1" />3 bed, 2 bath
                </span>
              </div>
              <Link
                href={`/properties/${i}`}
                className="mt-4 block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Previous
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            1
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            2
          </a>
          <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            3
          </a>
          <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            Next
          </a>
        </nav>
      </div>
    </div>
  )
}

