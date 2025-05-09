"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Download,
  File,
  FileText,
  Image,
  Film,
  Archive,
  Search,
  Filter,
  ChevronDown,
  ExternalLink,
  Mail,
  Globe,
} from "react-feather"
import FadeIn from "../components/animations/FadeIn"
import { useLanguage } from "../contexts/LanguageContext"

const ResourcesPage = () => {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: "all", name: t("resources.categories.all") },
    { id: "brochures", name: t("resources.categories.brochures") },
    { id: "technical", name: t("resources.categories.technical") },
    { id: "safety", name: t("resources.categories.safety") },
    { id: "presentations", name: t("resources.categories.presentations") },
    { id: "images", name: t("resources.categories.images") },
  ]

  const resources = [
    {
      id: 1,
      title: "Hydroferric Company Brochure",
      description: "Comprehensive overview of Hydroferric's services, fleet, and capabilities.",
      category: "brochures",
      fileType: "pdf",
      fileSize: "3.2 MB",
      downloadUrl: "#",
      thumbnail: "/images/hydroferric-logo.png",
      date: "May 15, 2023",
      featured: true,
      relatedLinks: [
        { title: "Marine Industry Association", url: "https://www.maritimeindustry.org" },
        { title: "Offshore Support Journal", url: "https://www.osjonline.com" },
      ],
    },
    {
      id: 2,
      title: "Silverline Fleet Technical Specifications",
      description: "Detailed technical specifications for all vessels in the Silverline fleet.",
      category: "technical",
      fileType: "pdf",
      fileSize: "2.8 MB",
      downloadUrl: "#",
      thumbnail: "/images/silverline-model.png",
      date: "April 3, 2023",
      featured: true,
      relatedLinks: [
        { title: "International Maritime Organization", url: "https://www.imo.org" },
        { title: "Marine Technology Society", url: "https://www.mtsociety.org" },
      ],
    },
    {
      id: 3,
      title: "Safety Management System Overview",
      description: "Overview of Hydroferric's safety management system and procedures.",
      category: "safety",
      fileType: "pdf",
      fileSize: "4.5 MB",
      downloadUrl: "#",
      thumbnail: "/images/vessel-fleet.png",
      date: "March 12, 2023",
      featured: false,
      relatedLinks: [
        {
          title: "International Safety Management Code",
          url: "https://www.imo.org/en/OurWork/HumanElement/Pages/ISMCode.aspx",
        },
        { title: "Maritime Safety Forum", url: "https://www.maritimesafety.org" },
      ],
    },
    {
      id: 4,
      title: "Crew Transfer Operations Presentation",
      description: "Presentation on Hydroferric's crew transfer operations and capabilities.",
      category: "presentations",
      fileType: "pptx",
      fileSize: "5.7 MB",
      downloadUrl: "#",
      thumbnail: "/images/silverline-1.png",
      date: "February 20, 2023",
      featured: false,
      relatedLinks: [
        { title: "Crew Transfer Vessel Forum", url: "https://www.ctvforum.com" },
        { title: "Offshore Wind Journal", url: "https://www.owjonline.com" },
      ],
    },
    {
      id: 5,
      title: "Silverline 1 Vessel Specifications",
      description: "Detailed specifications and capabilities of the Silverline 1 crew transfer vessel.",
      category: "technical",
      fileType: "pdf",
      fileSize: "1.8 MB",
      downloadUrl: "#",
      thumbnail: "/images/silverline-1.png",
      date: "January 15, 2023",
      featured: false,
      relatedLinks: [
        { title: "Ship Technology", url: "https://www.ship-technology.com" },
        { title: "Marine Insight", url: "https://www.marineinsight.com" },
      ],
    },
    {
      id: 6,
      title: "Silverline 2 Vessel Specifications",
      description: "Detailed specifications and capabilities of the Silverline 2 crew transfer vessel.",
      category: "technical",
      fileType: "pdf",
      fileSize: "1.8 MB",
      downloadUrl: "#",
      thumbnail: "/images/silverline-2.png",
      date: "January 15, 2023",
      featured: false,
      relatedLinks: [
        { title: "Naval Technology", url: "https://www.naval-technology.com" },
        { title: "Marine Log", url: "https://www.marinelog.com" },
      ],
    },
    {
      id: 7,
      title: "Silverline 3 Vessel Specifications",
      description: "Detailed specifications and capabilities of the Silverline 3 crew transfer vessel.",
      category: "technical",
      fileType: "pdf",
      fileSize: "1.9 MB",
      downloadUrl: "#",
      thumbnail: "/images/silverline-3.png",
      date: "January 15, 2023",
      featured: false,
      relatedLinks: [
        { title: "Maritime Journal", url: "https://www.maritimejournal.com" },
        { title: "Marine Electronics", url: "https://www.marineelectronics.com" },
      ],
    },
    {
      id: 8,
      title: "Silverline 4 Vessel Specifications",
      description: "Detailed specifications and capabilities of the Silverline 4 crew transfer vessel.",
      category: "technical",
      fileType: "pdf",
      fileSize: "1.9 MB",
      downloadUrl: "#",
      thumbnail: "/images/silverline-3-alt.png",
      date: "January 15, 2023",
      featured: false,
      relatedLinks: [
        { title: "Workboat", url: "https://www.workboat.com" },
        { title: "Marine Propulsion", url: "https://www.rivieramm.com/marine-propulsion" },
      ],
    },
    {
      id: 9,
      title: "Emergency Response Procedures",
      description: "Detailed procedures for emergency response on Hydroferric vessels.",
      category: "safety",
      fileType: "pdf",
      fileSize: "3.2 MB",
      downloadUrl: "#",
      thumbnail: "/images/vessel-fleet.png",
      date: "December 10, 2022",
      featured: false,
      relatedLinks: [
        { title: "Maritime Emergency Response", url: "https://www.maritimeemergency.org" },
        { title: "Safety4Sea", url: "https://safety4sea.com" },
      ],
    },
    {
      id: 10,
      title: "Hydroferric Services Overview",
      description: "Presentation overview of all services offered by Hydroferric.",
      category: "presentations",
      fileType: "pptx",
      fileSize: "6.1 MB",
      downloadUrl: "#",
      thumbnail: "/images/hydroferric-logo.png",
      date: "November 5, 2022",
      featured: false,
      relatedLinks: [
        { title: "Marine Services Association", url: "https://www.marineservices.org" },
        { title: "Offshore Support Journal", url: "https://www.osjonline.com" },
      ],
    },
    {
      id: 11,
      title: "Vessel Maintenance Guidelines",
      description: "Guidelines for maintenance of Silverline vessels to ensure optimal performance.",
      category: "technical",
      fileType: "pdf",
      fileSize: "2.5 MB",
      downloadUrl: "#",
      thumbnail: "/images/vessel-fleet.png",
      date: "October 20, 2022",
      featured: false,
      relatedLinks: [
        { title: "Marine Maintenance Forum", url: "https://www.marinemaintenance.org" },
        { title: "Vessel Maintenance International", url: "https://www.vesselmaintenance.com" },
      ],
    },
    {
      id: 12,
      title: "Hydroferric High-Resolution Image Pack",
      description: "High-resolution images of Hydroferric vessels and operations for media use.",
      category: "images",
      fileType: "zip",
      fileSize: "45.8 MB",
      downloadUrl: "#",
      thumbnail: "/images/silverline-2.png",
      date: "September 15, 2022",
      featured: false,
      relatedLinks: [
        { title: "Maritime Photography", url: "https://www.maritimephotography.com" },
        { title: "Marine Media Resources", url: "https://www.marinemedia.org" },
      ],
    },
  ]

  // Filter resources based on category and search query
  const filteredResources = resources
    .filter((resource) => activeCategory === "all" || resource.category === activeCategory)
    .filter(
      (resource) =>
        searchQuery === "" ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  const featuredResources = resources.filter((resource) => resource.featured)

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "pdf":
        return <FileText className="w-6 h-6 text-red-500" />
      case "pptx":
        return <File className="w-6 h-6 text-orange-500" />
      case "docx":
        return <FileText className="w-6 h-6 text-blue-500" />
      case "xlsx":
        return <FileText className="w-6 h-6 text-green-500" />
      case "jpg":
      case "png":
        return <Image className="w-6 h-6 text-purple-500" />
      case "mp4":
        return <Film className="w-6 h-6 text-blue-500" />
      case "zip":
        return <Archive className="w-6 h-6 text-gray-500" />
      default:
        return <File className="w-6 h-6 text-gray-500" />
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t("resources.pageTitle")}</h1>
            <p className="text-xl text-blue-100">{t("resources.pageSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("common.searchResources")}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
              >
                <div className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  {t("common.filterByCategory")}
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Categories (Desktop) */}
            <div className="flex-wrap hidden gap-2 md:flex">
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

          {/* Categories (Mobile) */}
          {showFilters && (
            <div className="flex flex-wrap gap-2 mt-4 md:hidden">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setShowFilters(false)
                  }}
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
          )}
        </div>
      </section>

      {/* Featured Resources */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <FadeIn>
              <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                {t("resources.featuredResources")}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {featuredResources.map((resource, index) => (
                <FadeIn key={resource.id} delay={index * 0.1}>
                  <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          src={resource.thumbnail || "/placeholder.svg"}
                          alt={resource.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center mb-2">
                          {getFileIcon(resource.fileType)}
                          <span className="ml-2 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                            {resource.fileType}
                          </span>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">{resource.description}</p>

                        {/* Related Links */}
                        {resource.relatedLinks && resource.relatedLinks.length > 0 && (
                          <div className="mb-4">
                            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                              {t("common.relatedResources")}:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {resource.relatedLinks.map((link, i) => (
                                <a
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                >
                                  <Globe className="w-3 h-3 mr-1" />
                                  {link.title}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {resource.fileSize} • {resource.date}
                          </span>
                          <a
                            href={resource.downloadUrl}
                            className="inline-flex items-center px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                            download
                          >
                            <Download className="w-4 h-4 mr-2" />
                            {t("common.downloadNow")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Resources */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              {activeCategory === "all"
                ? t("resources.allResources")
                : categories.find((c) => c.id === activeCategory)?.name}
            </h2>
          </FadeIn>

          {filteredResources.length === 0 ? (
            <div className="py-12 text-center">
              <p className="mb-4 text-gray-600 dark:text-gray-400">{t("resources.noResourcesFound")}</p>
              <button
                onClick={() => {
                  setActiveCategory("all")
                  setSearchQuery("")
                }}
                className="inline-flex items-center px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {t("resources.clearFilters")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource, index) => (
                <FadeIn key={resource.id} delay={index * 0.05}>
                  <div className="overflow-hidden transition-shadow rounded-lg shadow-md bg-gray-50 dark:bg-gray-900 hover:shadow-lg">
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        {getFileIcon(resource.fileType)}
                        <span className="ml-2 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                          {resource.fileType}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {resource.description}
                      </p>

                      {/* Related Links */}
                      {resource.relatedLinks && resource.relatedLinks.length > 0 && (
                        <div className="mb-4">
                          <p className="mb-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                            {t("common.findSimilarOnline")}:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {resource.relatedLinks.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                              >
                                {link.title}
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {resource.fileSize} • {resource.date}
                        </span>
                        <a
                          href={resource.downloadUrl}
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          download
                        >
                          <Download className="w-4 h-4 mr-1" />
                          {t("common.downloadNow")}
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Request Resources Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <FadeIn>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {t("resources.needSpecificResources")}
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">{t("resources.contactMessage")}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  {t("common.contactUs")}
                </Link>
                <a
                  href="mailto:info@hydroferric.com"
                  className="inline-flex items-center justify-center px-6 py-3 text-gray-800 transition-colors bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@hydroferric.com
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Additional Resources Links */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              {t("resources.additionalResources")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FadeIn delay={0.1}>
              <div className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {t("resources.industryGuidelines")}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{t("resources.industryGuidelinesDesc")}</p>
                <a
                  href="https://www.imo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {t("resources.visitWebsite")}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {t("resources.safetyResources")}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{t("resources.safetyResourcesDesc")}</p>
                <a
                  href="https://www.nautinst.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {t("resources.visitWebsite")}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 border border-gray-200 rounded-lg dark:border-gray-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {t("resources.clientPortal")}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{t("resources.clientPortalDesc")}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {t("resources.clientLogin")}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage
