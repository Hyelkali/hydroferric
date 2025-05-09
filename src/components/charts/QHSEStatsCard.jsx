import { TrendingUp, TrendingDown } from "react-feather"

const QHSEStatsCard = ({ title, value, icon, trend, trendUp, color }) => {
  const getColorClass = (color) => {
    switch (color) {
      case "green":
        return "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
      case "red":
        return "bg-red-50 dark:bg-red-900/20 var(--color-hydroRed-600) dark:var(--color-hydroRed-400)"
      case "blue":
        return "bg-blue-50 dark:bg-blue-900/20 var(--color-hydroBlue-600) dark:var(--color-hydroBlue-400)"
      case "yellow":
        return "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
      case "purple":
        return "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
      case "hydroBlue":
        return "bg-blue-50 dark:bg-blue-900/20 var(--color-hydroBlue-600) dark:var(--color-hydroBlue-400)"
      case "hydroRed":
        return "bg-red-50 dark:bg-red-900/20 var(--color-hydroRed-600) dark:var(--color-hydroRed-400)"
      case "hydroGray":
        return "bg-gray-50 dark:bg-gray-900/20 var(--color-hydroGray-600) dark:var(--color-hydroGray-400)"
      default:
        return "bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">{title}</h3>
        <div className={`p-2 rounded-full ${getColorClass(color)}`}>{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              {trendUp === true ? (
                <TrendingUp className="w-4 h-4 var(--color-hydroBlue-500) mr-1" />
              ) : trendUp === false ? (
                <TrendingDown className="w-4 h-4 var(--color-hydroRed-500) mr-1" />
              ) : null}
              <span
                className={`text-sm ${
                  trendUp === true
                    ? "var(--color-hydroBlue-500)"
                    : trendUp === false
                      ? "var(--color-hydroRed-500)"
                      : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {trend}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QHSEStatsCard
