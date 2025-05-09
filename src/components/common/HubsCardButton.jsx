import { Link } from "react-router-dom"
import { ArrowRight } from "react-feather"

const HubsCardButton = ({ title, description, icon, link, className = "" }) => {
  return (
    <Link
      to={link}
      className={`block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all hover:shadow-lg ${className}`}
    >
      <div className="flex items-start">
        <div className="mr-4 text-blue-600 dark:text-blue-400">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
          <div className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HubsCardButton
