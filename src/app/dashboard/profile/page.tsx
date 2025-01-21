import { User, Mail, Phone, Lock } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              placeholder="John Doe"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              placeholder="johndoe@example.com"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">
            Phone
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              placeholder="(123) 456-7890"
            />
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            New Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              placeholder="Leave blank to keep current password"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Update Profile
        </button>
      </form>
    </div>
  );
}
