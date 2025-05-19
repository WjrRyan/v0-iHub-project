import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-cube text-rose-600 dark:text-rose-400 text-2xl"></i>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">iHub 领域模型</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              首页
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              模型文档
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              API参考
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              关于
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
