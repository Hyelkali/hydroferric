"use client"

import { Link } from "react-router-dom"
import { ArrowRight } from "react-feather"
import { useLanguage } from "../../contexts/LanguageContext"

const ServiceCard = ({ title, description, icon, link, onClick }) => {
  const { t } = useLanguage()

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div className="p-6 transition-transform bg-white rounded-lg shadow-md dark:bg-gray-800 hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
      <Link
        to={link}
        onClick={handleClick}
        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {t("common.learnMore")}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  )
}

export default ServiceCard
