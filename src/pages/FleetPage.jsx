"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Filter, ArrowRight } from "react-feather"
import FadeIn from "../components/animations/FadeIn"

const FleetPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Vessels" },
    { id: "crew", name: "Crew Transfer Vessels" },
  ]

  const vessels = [
    {
      id: "silverline1",
      name: "Silverline 1",
      category: "crew",
      categoryName: "Crew Transfer Vessel",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      specs: {
        length: "12m",
        capacity: "12 personnel",
        built: "2021",
        class: "BV",
        flag: "Nigeria",
      },
    },
    {
      id: "silverline2",
      name: "Silverline 2",
      category: "crew",
      categoryName: "Crew Transfer Vessel",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      specs: {
        length: "12m",
        capacity: "12 personnel",
        built: "2021",
        class: "BV",
        flag: "Nigeria",
      },
    },
    {
      id: "silverline3",
      name: "Silverline 3",
      category: "crew",
      categoryName: "Crew Transfer Vessel",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      specs: {
        length: "12m",
        capacity: "12 personnel",
        built: "2022",
        class: "BV",
        flag: "Nigeria",
      },
    },
    {
      id: "silverline4",
      name: "Silverline 4",
      category: "crew",
      categoryName: "Crew Transfer Vessel",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      specs: {
        length: "12m",
        capacity: "12 personnel",
        built: "2022",
        class: "BV",
        flag: "Nigeria",
      },
    },
  ]

  const filteredVessels =
    activeCategory === "all" ? vessels : vessels.filter((vessel) => vessel.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Our Managed Fleet</h1>
            <p className="text-xl text-blue-100">
              Hydroferric proudly manages the Pacific Silverline fleet of vessels, providing world-class marine services
              with a commitment to safety and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-10 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter by Category</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Listing */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredVessels.map((vessel, index) => (
              <FadeIn key={vessel.id} delay={index * 0.1}>
                <div className="overflow-hidden transition-transform bg-white rounded-lg shadow-md dark:bg-gray-800 hover:scale-105">
                  <div className="relative h-48">
                    <img
                      src={vessel.image || "/placeholder.svg"}
                      alt={vessel.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full top-4 left-4">
                      {vessel.categoryName}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{vessel.name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
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
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Class</p>
                        <p className="font-medium text-gray-900 dark:text-white">{vessel.specs.class}</p>
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

          {filteredVessels.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No vessels found in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Fleet Specifications */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Pacific Silverline Fleet Specifications
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                The Pacific Silverline vessels are built to the highest standards and are regularly maintained by
                Hydroferric to ensure optimal performance and safety.
              </p>
            </div>
          </FadeIn>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-4 py-3 font-semibold text-left text-gray-700 dark:text-gray-300">Vessel Name</th>
                  <th className="px-4 py-3 font-semibold text-left text-gray-700 dark:text-gray-300">Length</th>
                  <th className="px-4 py-3 font-semibold text-left text-gray-700 dark:text-gray-300">Capacity</th>
                  <th className="px-4 py-3 font-semibold text-left text-gray-700 dark:text-gray-300">
                    Special Features
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Silverline 1</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">12m</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">12 personnel</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    High speed, Advanced navigation, Comfortable seating
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Silverline 2</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">12m</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">12 personnel</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    High speed, Advanced navigation, Comfortable seating
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Silverline 3</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">12m</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">12 personnel</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    High speed, Advanced navigation, Comfortable seating
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Silverline 4</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">12m</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">12 personnel</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    High speed, Advanced navigation, Comfortable seating
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                  Our Partnership with Pacific Silverline
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Hydroferric is proud to be the exclusive fleet manager for Pacific Silverline's vessels in Nigeria.
                  Our partnership ensures that these state-of-the-art crew transfer vessels are maintained to the
                  highest standards and operated by experienced crews.
                </p>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  The Silverline fleet consists of four identical 12-meter crew transfer vessels, designed specifically
                  for the challenging conditions of the Gulf of Guinea. Each vessel can transport up to 12 personnel and
                  is equipped with advanced navigation and safety systems.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Our comprehensive management services include crew management, maintenance, regulatory compliance, and
                  operational support, ensuring that the Silverline fleet delivers reliable and safe transportation
                  services to offshore installations.
                </p>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <img
                  src="https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg.png"
                  alt="Silverline Vessel Model"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Need Crew Transfer Services?</h2>
            <p className="mb-8 text-xl text-blue-100">
              Contact our team to discuss how the Pacific Silverline fleet managed by Hydroferric can support your
              offshore personnel transportation needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 font-bold text-blue-600 transition-colors bg-white rounded-md hover:bg-gray-100"
            >
              Request a Quote
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FleetPage
