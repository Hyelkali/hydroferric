import { Link } from "react-router-dom"
import { ArrowRight } from "react-feather"
import FadeIn from "../animations/FadeIn"

const FleetShowcase = () => {
  const vessels = [
    {
      id: "silverline1",
      name: "Silverline 1",
      category: "Crew Transfer Vessel",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      specs: {
        length: "12m",
        capacity: "12 personnel",
        built: "2021",
      },
    },
    {
      id: "silverline2",
      name: "Silverline 2",
      category: "Crew Transfer Vessel",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      specs: {
        length: "12m",
        capacity: "12 personnel",
        built: "2021",
      },
    },
    {
      id: "silverline3",
      name: "Silverline 3",
      category: "Crew Transfer Vessel",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      specs: {
        length: "12m",
        capacity: "12 personnel",
        built: "2022",
      },
    },
    {
      id: "silverline4",
      name: "Silverline 4",
      category: "Crew Transfer Vessel",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      specs: {
        length: "12m",
        capacity: "12 personnel",
        built: "2023",
      },
    },
  ]

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our Managed Fleet</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Hydroferric proudly manages the Pacific Silverline fleet of vessels, operated by experienced crews and
              maintained to the highest standards.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vessels.map((vessel, index) => (
            <FadeIn key={vessel.id} delay={index * 0.1}>
              <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-900">
                <div className="relative h-64">
                  <img
                    src={vessel.image || "/placeholder.svg"}
                    alt={vessel.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full top-4 left-4">
                    {vessel.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{vessel.name}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Length</p>
                      <p className="font-medium text-gray-900 dark:text-white">{vessel.specs.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Capacity</p>
                      <p className="font-medium text-gray-900 dark:text-white">{vessel.specs.capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Built</p>
                      <p className="font-medium text-gray-900 dark:text-white">{vessel.specs.built}</p>
                    </div>
                  </div>
                  <Link
                    to={`/fleet/${vessel.id}`}
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/fleet"
            className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
          >
            View Full Fleet
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FleetShowcase
