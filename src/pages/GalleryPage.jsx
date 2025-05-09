"use client"

import { useState } from "react"
import { X } from "react-feather"
import FadeIn from "../components/animations/FadeIn"
import { Link } from "react-router-dom"

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "vessels", name: "Vessels" },
    { id: "operations", name: "Operations" },
    { id: "crew", name: "Crew" },
    { id: "facilities", name: "Facilities" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "vessels",
      title: "Silverline 1",
      description: "Pacific Silverline's crew transfer vessel Silverline 1 operating in the Gulf of Guinea.",
      image: "/images/silverline-1.png",
    },
    {
      id: 2,
      category: "vessels",
      title: "Silverline 2",
      description: "Crew transfer vessel Silverline 2 approaching an offshore platform.",
      image: "/images/silverline-2.png",
    },
    {
      id: 3,
      category: "vessels",
      title: "Silverline 3",
      description: "Silverline 3 during offshore operations.",
      image: "/images/silverline-3.png",
    },
    {
      id: 4,
      category: "vessels",
      title: "Silverline 3 - Side View",
      description: "Side view of Silverline 3 during operations.",
      image: "/images/silverline-3-alt.png",
    },
    {
      id: 5,
      category: "operations",
      title: "Crew Transfer Operations",
      description: "Silverline vessel conducting crew transfer operations to an offshore platform.",
      image: "/images/silverline-2.png",
    },
    {
      id: 6,
      category: "operations",
      title: "Safety Drill",
      description: "Crew participating in a safety drill aboard Silverline 1.",
      image: "/images/silverline-1.png",
    },
    {
      id: 7,
      category: "facilities",
      title: "Port Harcourt Base",
      description: "Our operational base in Port Harcourt.",
      image: "/images/vessel-fleet.png",
    },
    {
      id: 8,
      category: "facilities",
      title: "Maintenance Facility",
      description: "Our state-of-the-art maintenance facility for the Silverline fleet.",
      image: "/images/vessel-fleet.png",
    },
    {
      id: 9,
      category: "vessels",
      title: "Silverline 4",
      description: "The newest addition to the Pacific Silverline fleet managed by Hydroferric.",
      image: "/images/silverline-3-alt.png",
    },
    {
      id: 10,
      category: "operations",
      title: "Night Operations",
      description: "Silverline vessel operations during night time.",
      image: "/images/silverline-1.png",
    },
    {
      id: 11,
      category: "crew",
      title: "Bridge Operations",
      description: "Crew members on the bridge during operations.",
      image: "/images/vessel-fleet.png",
    },
    {
      id: 12,
      category: "crew",
      title: "Maintenance Crew",
      description: "Our dedicated maintenance team ensuring the Silverline fleet is in top condition.",
      image: "/images/vessel-fleet.png",
    },
  ]

  const filteredGallery =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (image) => {
    setCurrentImage(image)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Gallery</h1>
            <p className="text-xl text-blue-100">
              Explore images of our managed fleet, operations, crew, and facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-10 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="container px-4 mx-auto">
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

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGallery.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.05}>
                <div
                  className="overflow-hidden transition-transform bg-white rounded-lg shadow-md cursor-pointer dark:bg-gray-800 hover:scale-105"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative h-48 md:h-56 lg:h-64">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No images found in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
          <button
            className="absolute text-white top-4 right-4 hover:text-gray-300 focus:outline-none"
            onClick={closeLightbox}
          >
            <X size={32} />
            <span className="sr-only">Close</span>
          </button>

          <div className="w-full max-w-4xl">
            <img
              src={currentImage.image || "/placeholder.svg"}
              alt={currentImage.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-white">
              <h3 className="mb-2 text-xl font-semibold">{currentImage.title}</h3>
              <p className="text-gray-300">{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* News Section */}
      <section id="news" className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Latest News</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Stay updated with the latest news and developments from Hydroferric Nigeria Limited.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <FadeIn key={item} delay={(item - 1) * 0.1}>
                <div className="overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
                  <img
                    src={`/images/silverline-${item}.png`}
                    alt={`News ${item}`}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-6">
                    <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">May 15, 2023</div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                      {item === 1
                        ? "Hydroferric Secures Pacific Silverline Fleet Management Contract"
                        : item === 2
                          ? "Silverline Fleet Achieves 100% Operational Uptime"
                          : "Crew Transfer Operations Reach Safety Milestone"}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      {item === 1
                        ? "Hydroferric Nigeria Limited has been awarded the exclusive fleet management contract for Pacific Silverline's vessels."
                        : item === 2
                          ? "The Pacific Silverline fleet managed by Hydroferric has achieved 100% operational uptime for the third consecutive quarter."
                          : "The crew transfer operations conducted by Hydroferric's managed Silverline fleet have reached a significant safety milestone."}
                    </p>
                    <Link
                      to="/news/1"
                      className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">360° Virtual Tours</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Take a virtual tour of our managed Pacific Silverline vessels with our interactive 360° panoramas.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((tour) => (
              <FadeIn key={tour} delay={(tour - 1) * 0.1}>
                <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <div className="relative h-56">
                    <img
                      src={`/images/silverline-${tour}.png`}
                      alt={`360° Tour ${tour}`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full bg-opacity-80">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                      {tour === 1
                        ? "Silverline 1 Vessel Tour"
                        : tour === 2
                          ? "Silverline 2 Vessel Tour"
                          : "Silverline 3 Vessel Tour"}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Explore the{" "}
                      {tour === 1
                        ? "Silverline 1 crew transfer vessel"
                        : tour === 2
                          ? "Silverline 2 crew transfer vessel"
                          : "Silverline 3 crew transfer vessel"}{" "}
                      with this interactive 360° tour.
                    </p>
                    <Link
                      to={`/tours/${tour}`}
                      className="inline-flex items-center px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      Start Tour
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
