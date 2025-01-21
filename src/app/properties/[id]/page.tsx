import { Home, DollarSign, MapPin, BedDouble, Bath, Square, Phone, Mail } from "lucide-react"

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Beautiful Home {params.id}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Property Images */}
        <div>
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Property"
            className="w-full h-96 object-cover rounded-lg mb-4"
          />
          <div className="grid grid-cols-3 gap-4">
            <img
              src="/placeholder.svg?height=100&width=150"
              alt="Property"
              className="w-full h-24 object-cover rounded-lg"
            />
            <img
              src="/placeholder.svg?height=100&width=150"
              alt="Property"
              className="w-full h-24 object-cover rounded-lg"
            />
            <img
              src="/placeholder.svg?height=100&width=150"
              alt="Property"
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Property Details */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">$299,000</h2>
              <p className="text-gray-600">
                <MapPin className="inline mr-1" />
                123 Main St, City, State 12345
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <BedDouble className="mr-2 text-blue-600" />
                <span>3 Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Bath className="mr-2 text-blue-600" />
                <span>2 Bathrooms</span>
              </div>
              <div className="flex items-center">
                <Square className="mr-2 text-blue-600" />
                <span>2,000 sqft</span>
              </div>
              <div className="flex items-center">
                <Home className="mr-2 text-blue-600" />
                <span>Single Family</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 mb-6">
              This beautiful home features modern amenities, spacious rooms, and a prime location. Perfect for families
              or professionals looking for comfort and convenience.
            </p>

            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Hardwood floors</li>
              <li>Granite countertops</li>
              <li>Stainless steel appliances</li>
              <li>Large backyard</li>
              <li>Attached garage</li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Contact Agent</h3>
              <p className="flex items-center mb-2">
                <Phone className="mr-2 text-blue-600" />
                (123) 456-7890
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 text-blue-600" />
                agent@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

