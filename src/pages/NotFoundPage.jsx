"use client"
import { Link } from "react-router-dom"
import { Home, ArrowLeft } from "react-feather"

const NotFoundPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-gray-50 dark:bg-gray-900"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-10 text-center bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="font-bold text-blue-600 text-9xl dark:text-blue-400">404</h1>
        <h2 className="mt-4 mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Page Not Found</h2>
        <p className="max-w-md mx-auto mb-8 text-lg text-gray-600 dark:text-gray-400">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 font-medium text-gray-800 transition-colors bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
