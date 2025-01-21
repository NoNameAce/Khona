import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Khona
        </Link>
        <div className="space-x-4">
          <Link href="/properties">Properties</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
    </header>
  )
}

