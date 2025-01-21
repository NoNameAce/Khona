import Link from "next/link"
import { User, Mail, Lock } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              placeholder="Enter your full name"
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
              placeholder="Enter your email"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              placeholder="Create a password"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              placeholder="Confirm your password"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  )
}

