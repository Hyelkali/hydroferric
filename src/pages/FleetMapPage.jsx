"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { MapPin, Anchor, Info, Layers, Navigation, RefreshCw } from "react-feather"
import FadeIn from "../components/animations/FadeIn"

const FleetMapPage = () => {
  const mapRef = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedVessel, setSelectedVessel] = useState(null)
  const [mapType, setMapType] = useState("satellite")
  const [loading, setLoading] = useState(true)
  const [vessels, setVessels] = useState([
    {
      id: "silverline1",
      name: "Silverline 1",
      position: { lat: 4.789, lng: 7.012 }, // Near Port Harcourt
      status: "active",
      lastUpdated: "10 minutes ago",
      destination: "Bonny Island",
      eta: "2 hours",
      speed: "18 knots",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
    },
    {
      id: "silverline2",
      name: "Silverline 2",
      position: { lat: 4.805, lng: 7.052 }, // Near Port Harcourt
      status: "active",
      lastUpdated: "5 minutes ago",
      destination: "Brass Terminal",
      eta: "3 hours",
      speed: "20 knots",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
    },
    {
      id: "silverline3",
      name: "Silverline 3",
      position: { lat: 6.431, lng: 3.412 }, // Near Lagos
      status: "docked",
      lastUpdated: "1 hour ago",
      destination: "N/A",
      eta: "N/A",
      speed: "0 knots",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
    },
    {
      id: "silverline4",
      name: "Silverline 4",
      position: { lat: 5.351, lng: 5.124 }, // Near Warri
      status: "maintenance",
      lastUpdated: "2 hours ago",
      destination: "N/A",
      eta: "N/A",
      speed: "0 knots",
      image: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
    },
  ])

  // Initialize map
  useEffect(() => {
    // In a real implementation, you would use a mapping library like Leaflet or Google Maps
    // For this demo, we'll create a simulated map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Simulate vessel movement every 30 seconds
  useEffect(() => {
    if (!mapLoaded) return

    const interval = setInterval(() => {
      setVessels((prevVessels) =>
        prevVessels.map((vessel) => {
          if (vessel.status === "active") {
            // Simulate small movement for active vessels
            return {
              ...vessel,
              position: {
                lat: vessel.position.lat + (Math.random() * 0.01 - 0.005),
                lng: vessel.position.lng + (Math.random() * 0.01 - 0.005),
              },
              lastUpdated: "Just now",
            }
          }
          return vessel
        }),
      )
    }, 30000)

    return () => clearInterval(interval)
  }, [mapLoaded])

  const handleVesselClick = (vessel) => {
    setSelectedVessel(vessel)
  }

  const handleMapTypeChange = (type) => {
    setMapType(type)
  }

  const refreshVesselPositions = () => {
    setLoading(true)
    // Simulate refreshing vessel positions
    setTimeout(() => {
      setVessels((prevVessels) =>
        prevVessels.map((vessel) => ({
          ...vessel,
          position: {
            lat: vessel.position.lat + (Math.random() * 0.02 - 0.01),
            lng: vessel.position.lng + (Math.random() * 0.02 - 0.01),
          },
          lastUpdated: "Just now",
        })),
      )
      setLoading(false)
    }, 1000)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "docked":
        return "bg-blue-500"
      case "maintenance":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-blue-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">Interactive Fleet Map</h1>
            <p className="text-xl text-blue-100">
              Track the real-time locations and status of our Silverline fleet vessels.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Vessel List Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn>
                <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Fleet Vessels</h2>
                    <button
                      onClick={refreshVesselPositions}
                      className="p-2 text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800"
                      title="Refresh vessel positions"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {vessels.map((vessel) => (
                      <div
                        key={vessel.id}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedVessel?.id === vessel.id
                            ? "bg-blue-50 dark:bg-blue-900/30"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => handleVesselClick(vessel)}
                      >
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(vessel.status)}`}></div>
                          <h3 className="font-medium text-gray-900 dark:text-white">{vessel.name}</h3>
                        </div>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>
                              {vessel.position.lat.toFixed(3)}, {vessel.position.lng.toFixed(3)}
                            </span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Anchor className="w-3 h-3 mr-1" />
                            <span>Status: {vessel.status.charAt(0).toUpperCase() + vessel.status.slice(1)}</span>
                          </div>
                          <div className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                            Updated: {vessel.lastUpdated}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Status Legend</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 mr-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Active</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Docked</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 mr-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Maintenance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Map Container */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Live Map</h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleMapTypeChange("satellite")}
                        className={`px-3 py-1 text-sm rounded-md ${
                          mapType === "satellite"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Satellite
                      </button>
                      <button
                        onClick={() => handleMapTypeChange("terrain")}
                        className={`px-3 py-1 text-sm rounded-md ${
                          mapType === "terrain"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Terrain
                      </button>
                      <button
                        onClick={() => handleMapTypeChange("standard")}
                        className={`px-3 py-1 text-sm rounded-md ${
                          mapType === "standard"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Standard
                      </button>
                    </div>
                  </div>

                  <div
                    ref={mapRef}
                    className="relative w-full h-[600px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                  >
                    {loading && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 dark:bg-gray-800/80">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                          <p className="mt-3 text-gray-600 dark:text-gray-400">Loading map data...</p>
                        </div>
                      </div>
                    )}

                    {/* Simulated Map - In a real implementation, you would use a mapping library */}
                    {mapLoaded && (
                      <>
                        {/* Map Background */}
                        <div className="absolute inset-0">
                          <img
                            src={
                              mapType === "satellite"
                                ? "https://i.imgur.com/JXgwMQz.jpg" // Satellite view of Nigeria
                                : mapType === "terrain"
                                  ? "https://i.imgur.com/8zTxpVj.jpg" // Terrain view
                                  : "https://i.imgur.com/QQQj2kF.png" // Standard map view
                            }
                            alt="Map of Nigeria"
                            className="object-cover w-full h-full"
                          />
                        </div>

                        {/* Vessel Markers */}
                        {vessels.map((vessel) => {
                          // Convert lat/lng to pixel positions (simplified for demo)
                          // In a real implementation, you would use the mapping library's projection
                          const x = ((vessel.position.lng - 2.5) / 11) * 100
                          const y = ((vessel.position.lat - 4) / 10) * 100

                          return (
                            <div
                              key={vessel.id}
                              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-20 ${
                                selectedVessel?.id === vessel.id ? "z-30" : ""
                              }`}
                              style={{ left: `${x}%`, top: `${y}%` }}
                              onClick={() => handleVesselClick(vessel)}
                            >
                              <div
                                className={`w-4 h-4 rounded-full border-2 border-white ${getStatusColor(
                                  vessel.status,
                                )} ${selectedVessel?.id === vessel.id ? "animate-ping" : ""}`}
                              ></div>
                              <div
                                className={`absolute top-0 left-0 w-4 h-4 rounded-full ${getStatusColor(
                                  vessel.status,
                                )}`}
                              ></div>
                              <div className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 rounded top-5 left-1/2 bg-black/70 whitespace-nowrap">
                                {vessel.name}
                              </div>
                            </div>
                          )
                        })}
                      </>
                    )}
                  </div>

                  {/* Selected Vessel Info */}
                  {selectedVessel && (
                    <div className="p-4 mt-4 bg-gray-100 rounded-lg dark:bg-gray-700">
                      <div className="flex items-start">
                        <img
                          src={selectedVessel.image || "/placeholder.svg"}
                          alt={selectedVessel.name}
                          className="object-cover w-24 h-16 mr-4 rounded-md"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedVessel.name}</h3>
                          <div className="grid grid-cols-2 mt-2 gap-x-4 gap-y-2">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>
                                {selectedVessel.position.lat.toFixed(4)}, {selectedVessel.position.lng.toFixed(4)}
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Navigation className="w-4 h-4 mr-1" />
                              <span>Speed: {selectedVessel.speed}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Info className="w-4 h-4 mr-1" />
                              <span>
                                Status: {selectedVessel.status.charAt(0).toUpperCase() + selectedVessel.status.slice(1)}
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Layers className="w-4 h-4 mr-1" />
                              <span>Destination: {selectedVessel.destination}</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Link
                              to={`/fleet/${selectedVessel.id}`}
                              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              View Vessel Details
                              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Information Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">About Our Fleet Tracking</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Our interactive fleet map provides real-time tracking of all Silverline vessels managed by Hydroferric.
                The map is updated every few minutes to show the current location, status, and destination of each
                vessel.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                This tracking system helps us maintain operational efficiency and provides our clients with transparency
                regarding vessel locations and availability. The system uses advanced GPS technology and satellite
                communications to ensure accurate positioning even in offshore environments.
              </p>
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Privacy Note</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For security reasons, vessel positions shown on the public map may be slightly offset from their
                  actual locations. Clients with active contracts can access precise vessel positions through our secure
                  client portal.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FleetMapPage
