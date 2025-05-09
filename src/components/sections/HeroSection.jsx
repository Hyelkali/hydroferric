"use client"

import { Link } from "react-router-dom"
import { ArrowRight } from "react-feather"
import { useLanguage } from "../../contexts/LanguageContext"

const HeroSection = () => {
  const { t } = useLanguage()

  return (
    <section className="relative flex items-center h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/80 to-black/50" />
        <img src="/images/silverline-3.png" alt="Pacific Silverline Fleet" className="object-cover w-full h-full" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 mx-auto">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {t("home.hero.title")}
          </h1>
          <p className="max-w-2xl mb-8 text-xl text-blue-100">{t("home.hero.subtitle")}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="px-8 py-4 font-bold text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {t("home.hero.cta1")}
            </Link>
            <Link
              to="/contact"
              className="flex items-center px-8 py-4 font-bold text-blue-600 transition-colors bg-white rounded-md hover:bg-gray-100"
            >
              {t("home.hero.cta2")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute z-20 transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
        <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
