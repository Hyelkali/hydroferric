"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, Sun, Moon } from "react-feather"
import { useTheme } from "../../components/theme/ThemeProvider"
import LanguageSwitcher from "../common/LanguageSwitcher"
import { useLanguage } from "../../contexts/LanguageContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    closeMenu()
    setActiveDropdown(null)
  }, [location])

  // Add this useEffect to close the mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav") && !event.target.closest("button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const navLinks = [
    { name: t("common.home"), path: "/" },
    {
      name: t("common.about"),
      path: "/about",
      dropdown: [
        { name: "Company", path: "/about#company" },
        { name: "Team", path: "/about#team" },
        { name: "Safety", path: "/about#safety" },
      ],
    },
    {
      name: t("common.services"),
      path: "/services",
      dropdown: [
        { name: "Marine Services", path: "/services#marine" },
        { name: "Offshore Support", path: "/services#offshore" },
        { name: "Logistics", path: "/services#logistics" },
      ],
    },
    {
      name: t("common.fleet"),
      path: "/fleet",
      dropdown: [
        { name: "Silverline 1", path: "/fleet/silverline1" },
        { name: "Silverline 2", path: "/fleet/silverline2" },
        { name: "Silverline 3", path: "/fleet/silverline3" },
        { name: "Silverline 4", path: "/fleet/silverline4" },
        { name: "Fleet Map", path: "/fleet-map" },
      ],
    },
    {
      name: t("common.media"),
      path: "/gallery",
      dropdown: [
        { name: "Gallery", path: "/gallery" },
        { name: "Videos", path: "/videos" },
        { name: "News", path: "/gallery#news" },
        { name: "360° Tours", path: "/gallery#tours" },
      ],
    },
    {
      name: t("common.resources"),
      path: "/resources",
    },
    { name: "QHSE", path: "/qhse-dashboard" },
    { name: t("common.careers"), path: "/careers" },
    { name: t("common.contact"), path: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="https://res.cloudinary.com/devnath/image/upload/v1746789634/hydroferric-logo_yojvov.png" alt="Hydroferric Logo" className="w-auto h-10" />
            <img
              src="/images/hydroferric-logo-white.png"
              alt="Hydroferric Logo"
              className="hidden w-auto h-10 dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center cursor-pointer">
                    <button
                      className={`text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === link.path ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`}
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name}
                      <ChevronDown className="inline-block w-4 h-4 ml-1" />
                    </button>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === link.path ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === link.name ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
                  >
                    <div className="py-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageSwitcher />

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-gray-700 rounded-full dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="p-2 ml-2 text-gray-700 rounded-md md:hidden dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg dark:bg-gray-900">
          {navLinks.map((link) => (
            <div key={link.name} className="py-1">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`mt-1 ml-4 space-y-1 transition-all duration-200 ${activeDropdown === link.name ? "block" : "hidden"}`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
