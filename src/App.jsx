"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import FleetPage from "./pages/FleetPage"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import TourPage from "./pages/TourPage"
import VesselDetailPage from "./pages/VesselDetailPage"
import NewsDetailPage from "./pages/NewsDetailPage"
import CareersPage from "./pages/CareersPage"
import FleetMapPage from "./pages/FleetMapPage"
import VideoGalleryPage from "./pages/VideoGalleryPage"
import ResourcesPage from "./pages/ResourcesPage"
import QHSEDashboardPage from "./pages/QHSEDashboardPage"
import { ThemeProvider } from "./components/theme/ThemeProvider"
import { LanguageProvider } from "./contexts/LanguageContext"
import FloatingHubsCard from "./components/common/FloatingHubsCard"
import LiveChatWidget from "./components/common/LiveChatWidget"
import "./styles/globals.css"

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/fleet" element={<FleetPage />} />
                <Route path="/fleet/:id" element={<VesselDetailPage />} />
                <Route path="/fleet-map" element={<FleetMapPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/videos" element={<VideoGalleryPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/qhse-dashboard" element={<QHSEDashboardPage />} />
                <Route path="/news/:id" element={<NewsDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/tours/:id" element={<TourPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
            <FloatingHubsCard />
            <LiveChatWidget />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
