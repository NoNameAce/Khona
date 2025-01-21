import Link from "next/link"
import { Home, Edit, Trash2, PlusCircle } from "lucide-react"

export default function MyPropertiesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Properties</h1>
        <Link
          href="/dashboard/my-properties/new"
          className="bg-green-500 text-white px-4 py-2 rounded-lg inline-flex items-center hover:bg-green-600"
        >
          <PlusCircle className="mr-2" />
          Add New Property
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow-md">
            <img src={`/placeholder.svg?height=200&width=300`} alt="Property" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Beautiful Home {i}</h3>
              <p className="text-gray-600 mb-2">123 Main St, City, State</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">$299,000</span>
                <span className="text-gray-600">
                  <Home className="inline mr-1" />3 bed, 2 bath
                </span>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <Link href={`/dashboard/my-properties/edit/${i}`} className="text-blue-600 hover:underline">
                  <Edit className="inline mr-1" />
                  Edit
                </Link>
                <button className="text-red-600 hover:underline">
                  <Trash2 className="inline mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

