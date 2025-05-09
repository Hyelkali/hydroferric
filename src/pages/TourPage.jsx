"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import PanoramaViewer from "../components/tours/PanoramaViewer"

const TourPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tourData, setTourData] = useState(null)

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const tours = [
      {
        id: "1",
        title: "Silverline 1 Vessel Tour",
        description:
          "Explore our Silverline 1 crew transfer vessel with this interactive 360° tour. Navigate through different areas of the vessel including the bridge, deck, and passenger area.",
        imageUrl: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      },
      {
        id: "2",
        title: "Silverline 2 Vessel Tour",
        description:
          "Take a virtual tour of our Silverline 2 crew transfer vessel. See the bridge, passenger area, and deck space of this modern vessel.",
        imageUrl: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      },
      {
        id: "3",
        title: "Silverline 3 Vessel Tour",
        description:
          "Experience our Silverline 3 crew transfer vessel with this 360° panorama showing the vessel's features and capabilities.",
        imageUrl: "https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg",
      },
    ]

    const tour = tours.find((t) => t.id === id)
    if (tour) {
      setTourData(tour)
    } else {
      // If tour not found, redirect to gallery
      navigate("/gallery#tours")
    }
  }, [id, navigate])

  const handleClose = () => {
    navigate("/gallery#tours")
  }

  if (!tourData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="text-xl text-white">Loading tour...</div>
      </div>
    )
  }

  return (
    <PanoramaViewer
      imageUrl={tourData.imageUrl}
      title={tourData.title}
      description={tourData.description}
      onClose={handleClose}
    />
  )
}

export default TourPage
