"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, X, ZoomIn, ZoomOut, RotateCcw } from "react-feather"
import { Link } from "react-router-dom"

const PanoramaViewer = ({ imageUrl, title, description, onClose }) => {
  const canvasRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const image = new Image()
    image.crossOrigin = "anonymous"

    image.onload = () => {
      setIsLoading(false)
      drawPanorama(canvas, ctx, image, longitude, latitude, zoom)
    }

    image.src = imageUrl

    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
      drawPanorama(canvas, ctx, image, longitude, latitude, zoom)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [imageUrl])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const image = new Image()
    image.crossOrigin = "anonymous"

    image.onload = () => {
      drawPanorama(canvas, ctx, image, longitude, latitude, zoom)
    }

    image.src = imageUrl
  }, [longitude, latitude, zoom, imageUrl])

  const drawPanorama = (canvas, ctx, image, lon, lat, zoom) => {
    const width = canvas.width
    const height = canvas.height

    ctx.clearRect(0, 0, width, height)

    // Fill with black background
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, width, height)

    // Simple panorama rendering - in a real app, you'd use a library like Three.js
    const aspectRatio = image.width / image.height
    const imgWidth = Math.min(width, height * aspectRatio) * zoom
    const imgHeight = imgWidth / aspectRatio

    // Calculate position based on longitude and latitude
    const x = width / 2 - imgWidth / 2 + (lon * imgWidth) / 360
    const y = height / 2 - imgHeight / 2 + (lat * imgHeight) / 180

    // Draw the image
    ctx.drawImage(image, x, y, imgWidth, imgHeight)

    // Add overlay text for demonstration
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
    ctx.fillRect(10, height - 60, 280, 50)
    ctx.fillStyle = "#fff"
    ctx.font = "14px Arial"
    ctx.fillText("Drag to look around | Scroll to zoom", 20, height - 30)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return

    const deltaX = e.clientX - startX
    setStartX(e.clientX)

    // Update longitude based on drag distance
    setLongitude((prevLon) => {
      let newLon = prevLon + deltaX * 0.5
      // Normalize to 0-360
      while (newLon < 0) newLon += 360
      while (newLon >= 360) newLon -= 360
      return newLon
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    setZoom((prevZoom) => {
      const newZoom = prevZoom + delta
      return Math.min(Math.max(newZoom, 0.5), 3) // Limit zoom between 0.5 and 3
    })
  }

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.2, 0.5))
  }

  const handleReset = () => {
    setLongitude(0)
    setLatitude(0)
    setZoom(1)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/gallery#tours" className="text-white mr-4 hover:text-gray-300">
            <ArrowLeft />
          </Link>
          <h2 className="text-white text-xl font-semibold">{title}</h2>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          <X />
        </button>
      </div>

      {/* Canvas Container */}
      <div className="relative flex-grow overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
            <div className="text-white">Loading panorama...</div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        ></canvas>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          <button
            onClick={handleZoomIn}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            title="Zoom in"
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            title="Zoom out"
          >
            <ZoomOut size={20} />
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            title="Reset view"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-900 p-4">
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default PanoramaViewer
