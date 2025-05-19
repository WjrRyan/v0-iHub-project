export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <i className="fas fa-cube text-rose-600 dark:text-rose-400"></i>
              <span className="text-gray-800 dark:text-white font-bold">iHub 领域模型</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} iHub. 保留所有权利。
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
