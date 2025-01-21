import Link from "next/link"
import { Mail, Lock } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form className="space-y-4">
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
              placeholder="Enter your password"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  )
}

