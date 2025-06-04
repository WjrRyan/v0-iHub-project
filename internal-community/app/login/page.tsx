export default function Login() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Sign in</button>
      </form>
    </main>
  )
}
