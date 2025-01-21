import { Users, Home, DollarSign, Activity } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Users className="mr-2" />
            Total Users
          </h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Home className="mr-2" />
            Total Properties
          </h3>
          <p className="text-3xl font-bold">567</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <DollarSign className="mr-2" />
            Total Revenue
          </h3>
          <p className="text-3xl font-bold">$98,765</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Activity className="mr-2" />
            Active Listings
          </h3>
          <p className="text-3xl font-bold">432</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent User Registrations</h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe {i}</td>
                    <td className="px-6 py-4 whitespace-nowrap">john{i}@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-05-{10 + i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Property Listings</h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Listed
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">Beautiful Home {i}</td>
                    <td className="px-6 py-4 whitespace-nowrap">$299,000</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-05-{15 + i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

