import Link from "next/link"
import { Home, Bell, PlusCircle, Eye } from "lucide-react"

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, John Doe</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">My Properties</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Total Views</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">New Messages</h3>
          <p className="text-3xl font-bold">3</p>
        </div>
      </div>

      {/* My Properties */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">My Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="border rounded-lg p-4 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img
                  src={`/placeholder.svg?height=80&width=80`}
                  alt="Property"
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">Beautiful Home {i}</h3>
                <p className="text-gray-600">123 Main St, City, State</p>
                <div className="mt-2">
                  <Link href={`/dashboard/my-properties/${i}`} className="text-blue-600 hover:underline">
                    Edit
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0 text-gray-500">
                <Eye className="inline mr-1" />
                {100 * i} views
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/dashboard/my-properties" className="text-blue-600 hover:underline">
            View all properties
          </Link>
        </div>
      </section>

      {/* Notifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-lg flex items-start">
              <Bell className="flex-shrink-0 mr-3 text-blue-600" />
              <div>
                <p className="font-semibold">New message received</p>
                <p className="text-gray-600">You have a new message about your property at 123 Main St.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Post New Property */}
      <section className="mb-8">
        <Link
          href="/dashboard/my-properties/new"
          className="bg-green-500 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-600"
        >
          <PlusCircle className="mr-2" />
          Post New Property
        </Link>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-b pb-4">
              <p className="font-semibold">Property Viewed</p>
              <p className="text-gray-600">Your property at 456 Elm St was viewed by a potential buyer.</p>
              <p className="text-sm text-gray-500 mt-1">2 hours ago</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

