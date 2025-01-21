import { Search, Edit, Trash2 } from "lucide-react"

export default function AdminPropertiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Properties</h1>

      <div className="mb-6 flex justify-between items-center">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Add New Property</button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">Beautiful Home {i}</td>
                <td className="px-6 py-4 whitespace-nowrap">John Doe {i}</td>
                <td className="px-6 py-4 whitespace-nowrap">$299,000</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${i % 2 === 0 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                  >
                    {i % 2 === 0 ? "Active" : "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:underline mr-2">
                    <Edit className="inline mr-1" />
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    <Trash2 className="inline mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            2
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            3
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Next
          </a>
        </nav>
      </div>
    </div>
  )
}

