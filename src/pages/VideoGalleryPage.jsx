"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, X, Filter } from "react-feather"
import FadeIn from "../components/animations/FadeIn"

const VideoGalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef(null)
  const videoPlayerRef = useRef(null)

  const categories = [
    { id: "all", name: "All Videos" },
    { id: "vessels", name: "Vessel Operations" },
    { id: "crew", name: "Crew Activities" },
    { id: "safety", name: "Safety Procedures" },
    { id: "corporate", name: "Corporate" },
  ]

  const videos = [
    {
      id: 1,
      title: "Silverline 1 in Action",
      description:
        "Watch our Silverline 1 crew transfer vessel in operation, transporting personnel to offshore platforms.",
      category: "vessels",
      thumbnail: "/images/silverline-1.png",
      duration: "2:45",
      date: "May 15, 2023",
      views: 1245,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
    {
      id: 2,
      title: "Crew Transfer Operations",
      description: "See how our experienced crew safely transfers personnel from vessels to offshore installations.",
      category: "crew",
      thumbnail: "/images/silverline-2.png",
      duration: "3:20",
      date: "April 3, 2023",
      views: 987,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
    {
      id: 3,
      title: "Safety Drill Demonstration",
      description: "Our crew demonstrates safety procedures and emergency drills conducted regularly on our vessels.",
      category: "safety",
      thumbnail: "/images/silverline-3.png",
      duration: "4:10",
      date: "March 12, 2023",
      views: 756,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
    {
      id: 4,
      title: "Hydroferric Corporate Overview",
      description: "Learn about Hydroferric's history, mission, and our commitment to excellence in marine services.",
      category: "corporate",
      thumbnail: "/images/vessel-fleet.png",
      duration: "5:30",
      date: "February 20, 2023",
      views: 1532,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
    {
      id: 5,
      title: "Silverline Fleet Showcase",
      description: "A comprehensive look at our Silverline fleet of crew transfer vessels and their capabilities.",
      category: "vessels",
      thumbnail: "/images/silverline-3-alt.png",
      duration: "3:45",
      date: "January 15, 2023",
      views: 1089,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
    {
      id: 6,
      title: "Maintenance Procedures",
      description: "Behind the scenes look at how we maintain our vessels to ensure reliability and safety.",
      category: "vessels",
      thumbnail: "/images/silverline-model.png",
      duration: "4:20",
      date: "December 10, 2022",
      views: 876,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
    {
      id: 7,
      title: "Meet Our Crew",
      description: "Get to know the dedicated professionals who operate our Silverline vessels.",
      category: "crew",
      thumbnail: "/images/vessel-fleet.png",
      duration: "3:15",
      date: "November 5, 2022",
      views: 945,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
    {
      id: 8,
      title: "Emergency Response Training",
      description: "Our crew undergoes regular emergency response training to ensure safety in all situations.",
      category: "safety",
      thumbnail: "/images/silverline-1.png",
      duration: "5:10",
      date: "October 20, 2022",
      views: 732,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
    {
      id: 9,
      title: "Client Testimonials",
      description: "Hear what our clients have to say about Hydroferric's services and reliability.",
      category: "corporate",
      thumbnail: "/images/silverline-2.png",
      duration: "4:45",
      date: "September 15, 2022",
      views: 1123,
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
    },
  ]

  const filteredVideos = activeCategory === "all" ? videos : videos.filter((video) => video.category === activeCategory)

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      const video = videoRef.current

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime)
        setDuration(video.duration)
      }

      video.addEventListener("timeupdate", handleTimeUpdate)

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate)
      }
    }
  }, [selectedVideo])

  const openVideoPlayer = (video) => {
    setSelectedVideo(video)
    setIsPlaying(true)
    document.body.style.overflow = "hidden"
  }

  const closeVideoPlayer = () => {
    setSelectedVideo(null)
    setIsPlaying(false)
    document.body.style.overflow = "auto"
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = (e.target.value / 100) * videoRef.current.duration
      videoRef.current.currentTime = seekTime
      setCurrentTime(seekTime)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && videoPlayerRef.current) {
      videoPlayerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00"

    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Video Gallery</h1>
            <p className="text-xl text-blue-100">
              Explore videos of our Silverline fleet, crew operations, and marine services in action.
            </p>
          </div>
        </div>
      </section>

      {/* Video Categories */}
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

      {/* Video Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video, index) => (
              <FadeIn key={video.id} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="relative group cursor-pointer" onClick={() => openVideoPlayer(video)}>
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-blue-600 bg-opacity-80 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{video.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{video.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                      <span>{video.date}</span>
                      <span>{video.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No videos found in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div
            ref={videoPlayerRef}
            className="w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl relative"
          >
            <button
              onClick={closeVideoPlayer}
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>

            <video
              ref={videoRef}
              src={selectedVideo.videoUrl}
              className="w-full"
              autoPlay
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            ></video>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-lg font-semibold mb-1">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{selectedVideo.description}</p>

              <div className="flex items-center mb-2">
                <div className="flex-1 mr-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={(currentTime / (duration || 1)) * 100}
                    onChange={handleSeek}
                    className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                  />
                </div>
                <div className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-blue-400 focus:outline-none"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-blue-400 focus:outline-none"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                  </button>
                </div>
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-blue-400 focus:outline-none"
                  aria-label="Fullscreen"
                >
                  <Maximize className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured Videos Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Videos</h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {videos.slice(0, 2).map((video, index) => (
              <FadeIn key={video.id} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                  <div className="relative group cursor-pointer" onClick={() => openVideoPlayer(video)}>
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 rounded-full bg-blue-600 bg-opacity-80 flex items-center justify-center">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{video.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{video.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{video.date}</span>
                      <span>{video.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 bg-blue-600 dark:bg-blue-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our YouTube channel to receive notifications when we upload new videos.
            </p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 font-bold text-blue-600 transition-colors bg-white rounded-md hover:bg-gray-100"
            >
              Subscribe to Our Channel
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoGalleryPage
