"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Anchor, Tool, Users, Shield, Download } from "react-feather"
import FadeIn from "../components/animations/FadeIn"

const VesselDetailPage = () => {
  const { id } = useParams()
  const [vessel, setVessel] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    const vessels = [
      {
        id: "silverline1",
        name: "Silverline 1",
        category: "Crew Transfer Vessel",
        image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
        additionalImages: ["https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg", "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg"],
        description:
          "Silverline 1 is a modern 12-meter crew transfer vessel designed for safe and efficient transportation of personnel to offshore installations. Built in 2021, this vessel features advanced navigation systems, comfortable seating, and excellent seakeeping capabilities.",
        specs: {
          length: "12m",
          beam: "4.5m",
          draft: "1.2m",
          capacity: "12 personnel",
          speed: "25 knots",
          range: "150 nautical miles",
          built: "2021",
          class: "BV",
          flag: "Nigeria",
          engines: "2 x 450 HP Diesel",
          hull: "Aluminum",
        },
        features: [
          "Advanced navigation and communication systems",
          "Comfortable seating with suspension system",
          "Air conditioning throughout",
          "Excellent maneuverability",
          "Fuel-efficient design",
          "Safety equipment exceeding regulatory requirements",
          "Spacious deck area",
          "Dedicated crew rest area",
        ],
        schedule: [
          { date: "Jan 2023", activity: "Routine maintenance" },
          { date: "Mar 2023", activity: "Safety equipment upgrade" },
          { date: "Jun 2023", activity: "Annual survey" },
          { date: "Sep 2023", activity: "Engine overhaul" },
          { date: "Dec 2023", activity: "Dry docking" },
        ],
      },
      {
        id: "silverline2",
        name: "Silverline 2",
        category: "Crew Transfer Vessel",
        image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
        additionalImages: ["https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg", "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg"],
        description:
          "Silverline 2 is a modern 12-meter crew transfer vessel designed for safe and efficient transportation of personnel to offshore installations. Built in 2021, this vessel features advanced navigation systems, comfortable seating, and excellent seakeeping capabilities.",
        specs: {
          length: "12m",
          beam: "4.5m",
          draft: "1.2m",
          capacity: "12 personnel",
          speed: "25 knots",
          range: "150 nautical miles",
          built: "2021",
          class: "BV",
          flag: "Nigeria",
          engines: "2 x 450 HP Diesel",
          hull: "Aluminum",
        },
        features: [
          "Advanced navigation and communication systems",
          "Comfortable seating with suspension system",
          "Air conditioning throughout",
          "Excellent maneuverability",
          "Fuel-efficient design",
          "Safety equipment exceeding regulatory requirements",
          "Spacious deck area",
          "Dedicated crew rest area",
        ],
        schedule: [
          { date: "Feb 2023", activity: "Routine maintenance" },
          { date: "Apr 2023", activity: "Safety equipment upgrade" },
          { date: "Jul 2023", activity: "Annual survey" },
          { date: "Oct 2023", activity: "Engine overhaul" },
          { date: "Jan 2024", activity: "Dry docking" },
        ],
      },
      {
        id: "silverline3",
        name: "Silverline 3",
        category: "Crew Transfer Vessel",
        image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
        additionalImages: ["https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg", "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg"],
        description:
          "Silverline 3 is a modern 12-meter crew transfer vessel designed for safe and efficient transportation of personnel to offshore installations. Built in 2022, this vessel features advanced navigation systems, comfortable seating, and excellent seakeeping capabilities.",
        specs: {
          length: "12m",
          beam: "4.5m",
          draft: "1.2m",
          capacity: "12 personnel",
          speed: "25 knots",
          range: "150 nautical miles",
          built: "2022",
          class: "BV",
          flag: "Nigeria",
          engines: "2 x 450 HP Diesel",
          hull: "Aluminum",
        },
        features: [
          "Advanced navigation and communication systems",
          "Comfortable seating with suspension system",
          "Air conditioning throughout",
          "Excellent maneuverability",
          "Fuel-efficient design",
          "Safety equipment exceeding regulatory requirements",
          "Spacious deck area",
          "Dedicated crew rest area",
        ],
        schedule: [
          { date: "Mar 2023", activity: "Routine maintenance" },
          { date: "May 2023", activity: "Safety equipment upgrade" },
          { date: "Aug 2023", activity: "Annual survey" },
          { date: "Nov 2023", activity: "Engine overhaul" },
          { date: "Feb 2024", activity: "Dry docking" },
        ],
      },
      {
        id: "silverline4",
        name: "Silverline 4",
        category: "Crew Transfer Vessel",
        image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg.png",
        additionalImages: ["https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg.png", "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg"],
        description:
          "Silverline 4 is a modern 12-meter crew transfer vessel designed for safe and efficient transportation of personnel to offshore installations. Built in 2022, this vessel features advanced navigation systems, comfortable seating, and excellent seakeeping capabilities.",
        specs: {
          length: "12m",
          beam: "4.5m",
          draft: "1.2m",
          capacity: "12 personnel",
          speed: "25 knots",
          range: "150 nautical miles",
          built: "2022",
          class: "BV",
          flag: "Nigeria",
          engines: "2 x 450 HP Diesel",
          hull: "Aluminum",
        },
        features: [
          "Advanced navigation and communication systems",
          "Comfortable seating with suspension system",
          "Air conditioning throughout",
          "Excellent maneuverability",
          "Fuel-efficient design",
          "Safety equipment exceeding regulatory requirements",
          "Spacious deck area",
          "Dedicated crew rest area",
        ],
        schedule: [
          { date: "Apr 2023", activity: "Routine maintenance" },
          { date: "Jun 2023", activity: "Safety equipment upgrade" },
          { date: "Sep 2023", activity: "Annual survey" },
          { date: "Dec 2023", activity: "Engine overhaul" },
          { date: "Mar 2024", activity: "Dry docking" },
        ],
      },
    ]

    const foundVessel = vessels.find((v) => v.id === id)

    // Simulate loading
    setTimeout(() => {
      setVessel(foundVessel || null)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading vessel information...</p>
        </div>
      </div>
    )
  }

  if (!vessel) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Vessel Not Found</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            The vessel you are looking for could not be found. It may have been removed or you might have followed an
            incorrect link.
          </p>
          <Link
            to="/fleet"
            className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Fleet
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img src={vessel.image || "/placeholder.svg"} alt={vessel.name} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              to="/fleet"
              className="inline-flex items-center px-4 py-2 mb-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Fleet
            </Link>
            <h1 className="mb-2 text-4xl font-bold text-white">{vessel.name}</h1>
            <div className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
              {vessel.category}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Specifications */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="p-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Vessel Overview</h2>
                  <p className="mb-6 text-gray-600 dark:text-gray-400">{vessel.description}</p>

                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-3">
                    {Object.entries(vessel.specs).map(([key, value]) => (
                      <div key={key} className="pl-3 border-l-2 border-blue-600">
                        <p className="text-sm text-gray-500 capitalize dark:text-gray-400">{key}</p>
                        <p className="font-medium text-gray-900 dark:text-white">{value}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Features</h3>
                  <ul className="grid grid-cols-1 gap-2 mb-6 md:grid-cols-2">
                    {vessel.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Specifications
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-4 py-2 font-medium text-gray-700 transition-colors bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                      Request Charter
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Gallery */}
              <FadeIn delay={0.1}>
                <div className="p-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {vessel.additionalImages.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${vessel.name} - Image ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Maintenance Schedule */}
              <FadeIn delay={0.2}>
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Maintenance Schedule</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="px-4 py-3 text-sm font-semibold text-left text-gray-700 dark:text-gray-300">
                            Date
                          </th>
                          <th className="px-4 py-3 text-sm font-semibold text-left text-gray-700 dark:text-gray-300">
                            Activity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {vessel.schedule.map((item, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                                {item.date}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{item.activity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Quick Info */}
              <FadeIn>
                <div className="p-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Quick Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Anchor className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Vessel Type</p>
                        <p className="text-gray-600 dark:text-gray-400">{vessel.category}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Tool className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Maintenance Status</p>
                        <p className="text-gray-600 dark:text-gray-400">Up to date</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Crew</p>
                        <p className="text-gray-600 dark:text-gray-400">2 crew members + 12 passengers</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Safety Rating</p>
                        <p className="text-gray-600 dark:text-gray-400">5/5 - Excellent</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Contact */}
              <FadeIn delay={0.1}>
                <div className="p-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Charter Inquiry</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Interested in chartering {vessel.name}? Contact our team for availability and rates.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Contact Us
                  </Link>
                </div>
              </FadeIn>

              {/* Similar Vessels */}
              <FadeIn delay={0.2}>
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Similar Vessels</h3>
                  <div className="space-y-4">
                    {["silverline1", "silverline2", "silverline3", "silverline4"]
                      .filter((v) => v !== vessel.id)
                      .slice(0, 3)
                      .map((v, index) => (
                        <Link
                          key={index}
                          to={`/fleet/${v}`}
                          className="flex items-center p-3 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <img
                            src={`https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg`}
                            alt={`Silverline ${index + 1}`}
                            className="object-cover w-16 h-12 mr-3 rounded-md"
                          />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">Silverline {index + 1}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Crew Transfer Vessel</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 dark:bg-blue-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to Charter {vessel.name}?</h2>
            <p className="mb-8 text-xl text-blue-100">
              Contact our team today to discuss how {vessel.name} can support your offshore operations.
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

export default VesselDetailPage
