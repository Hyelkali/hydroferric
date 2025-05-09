"use client"

import { useState, useEffect } from "react"
import {
  Calendar,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  Award,
  Clipboard,
  Shield,
  BarChart2,
  Activity,
} from "react-feather"
import FadeIn from "../components/animations/FadeIn"

// Import chart components
import QHSEBarChart from "../components/charts/QHSEBarChart"
import QHSEPieChart from "../components/charts/QHSEPieChart"
import QHSELineChart from "../components/charts/QHSELineChart"
import QHSEStatsCard from "../components/charts/QHSEStatsCard"
import QHSEIncidentTable from "../components/charts/QHSEIncidentTable"

const QHSEDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [dateRange, setDateRange] = useState("year")
  const [selectedVessel, setSelectedVessel] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)

  // Simulated data loading
  useEffect(() => {
    setIsLoading(true)
    // In a real application, this would be an API call
    setTimeout(() => {
      const data = generateDashboardData(dateRange, selectedVessel)
      setDashboardData(data)
      setIsLoading(false)
    }, 1000)
  }, [dateRange, selectedVessel])

  // Generate mock data for the dashboard
  const generateDashboardData = (period, vessel) => {
    // Mock data for different periods and vessels
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const currentMonth = new Date().getMonth()

    // Generate random data based on period and vessel
    const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    // Safety statistics
    const safetyStats = {
      daysWithoutLTI:
        vessel === "all"
          ? 365
          : vessel === "silverline1"
            ? 412
            : vessel === "silverline2"
              ? 287
              : vessel === "silverline3"
                ? 178
                : 321,
      safetyObservations: vessel === "all" ? 248 : getRandomValue(40, 80),
      nearMisses: vessel === "all" ? 12 : getRandomValue(1, 5),
      totalManHours: vessel === "all" ? 124560 : getRandomValue(20000, 40000),
    }

    // Incident data
    const incidentTypes = ["Near Miss", "First Aid", "Medical Treatment", "Lost Time Injury", "Environmental"]
    const incidents = []

    // Generate random incidents
    for (let i = 0; i < getRandomValue(5, 15); i++) {
      const incidentType = incidentTypes[getRandomValue(0, incidentTypes.length - 1)]
      const vesselName =
        vessel === "all"
          ? ["Silverline 1", "Silverline 2", "Silverline 3", "Silverline 4"][getRandomValue(0, 3)]
          : `Silverline ${vessel.replace("silverline", "")}`

      incidents.push({
        id: i + 1,
        date: `${getRandomValue(1, 28)}/${getRandomValue(1, 12)}/2023`,
        type: incidentType,
        vessel: vesselName,
        location: ["Port", "At Sea", "Offshore Platform", "Dock"][getRandomValue(0, 3)],
        status: ["Open", "Closed", "In Progress"][getRandomValue(0, 2)],
        severity: ["Low", "Medium", "High"][getRandomValue(0, 2)],
      })
    }

    // Monthly data for charts
    const monthlyData = {
      safetyObservations: months.map((_, index) => ({
        month: months[index],
        value: getRandomValue(10, 30),
      })),
      incidents: months.map((_, index) => ({
        month: months[index],
        value: getRandomValue(0, 3),
      })),
      nearMisses: months.map((_, index) => ({
        month: months[index],
        value: getRandomValue(0, 5),
      })),
      manHours: months.map((_, index) => ({
        month: months[index],
        value: getRandomValue(8000, 12000),
      })),
    }

    // Incident distribution by type
    const incidentDistribution = [
      { name: "Near Miss", value: getRandomValue(40, 60) },
      { name: "First Aid", value: getRandomValue(20, 30) },
      { name: "Medical Treatment", value: getRandomValue(5, 15) },
      { name: "Lost Time Injury", value: getRandomValue(0, 5) },
      { name: "Environmental", value: getRandomValue(5, 15) },
    ]

    // Vessel performance data
    const vesselPerformance = [
      {
        name: "Silverline 1",
        safety: getRandomValue(80, 100),
        environmental: getRandomValue(75, 100),
        operational: getRandomValue(85, 100),
      },
      {
        name: "Silverline 2",
        safety: getRandomValue(80, 100),
        environmental: getRandomValue(75, 100),
        operational: getRandomValue(85, 100),
      },
      {
        name: "Silverline 3",
        safety: getRandomValue(80, 100),
        environmental: getRandomValue(75, 100),
        operational: getRandomValue(85, 100),
      },
      {
        name: "Silverline 4",
        safety: getRandomValue(80, 100),
        environmental: getRandomValue(75, 100),
        operational: getRandomValue(85, 100),
      },
    ]

    // Achievements
    const achievements = [
      {
        title: "1,000,000 Man-Hours Without LTI",
        date: "June 2023",
        description: "The fleet achieved 1 million man-hours without a Lost Time Incident.",
      },
      {
        title: "ISO 45001 Certification",
        date: "March 2023",
        description: "Successfully obtained ISO 45001 Occupational Health and Safety certification.",
      },
      {
        title: "Environmental Excellence Award",
        date: "January 2023",
        description: "Received industry recognition for environmental management practices.",
      },
      {
        title: "Safety Culture Improvement",
        date: "November 2022",
        description: "Completed fleet-wide safety culture improvement program.",
      },
    ]

    return {
      safetyStats,
      incidents,
      monthlyData,
      incidentDistribution,
      vesselPerformance,
      achievements,
    }
  }

  const handleDateRangeChange = (range) => {
    setDateRange(range)
  }

  const handleVesselChange = (vessel) => {
    setSelectedVessel(vessel)
  }

  const handleExportData = () => {
    alert("Exporting data... In a real application, this would download a CSV or PDF report.")
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-blue-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">QHSE Analytics Dashboard</h1>
            <p className="text-xl text-blue-100">
              Comprehensive analytics and reporting for Quality, Health, Safety, and Environmental performance.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Controls */}
      <section className="py-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sticky top-16 z-30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Tabs */}
            <div className="flex overflow-x-auto no-scrollbar space-x-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("incidents")}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                  activeTab === "incidents"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Incidents & Reports
              </button>
              <button
                onClick={() => setActiveTab("performance")}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                  activeTab === "performance"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Vessel Performance
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                  activeTab === "achievements"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Achievements
              </button>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={dateRange}
                  onChange={(e) => handleDateRangeChange(e.target.value)}
                  className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                  <option value="all">All Time</option>
                </select>
                <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>

              <div className="relative">
                <select
                  value={selectedVessel}
                  onChange={(e) => handleVesselChange(e.target.value)}
                  className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="all">All Vessels</option>
                  <option value="silverline1">Silverline 1</option>
                  <option value="silverline2">Silverline 2</option>
                  <option value="silverline3">Silverline 3</option>
                  <option value="silverline4">Silverline 4</option>
                </select>
                <Filter className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>

              <button
                onClick={handleExportData}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
              >
                <Download className="h-4 w-4 mr-1" />
                Export
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container px-4 mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div>
                  {/* Key Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <FadeIn>
                      <QHSEStatsCard
                        title="Days Without LTI"
                        value={dashboardData.safetyStats.daysWithoutLTI}
                        icon={<CheckCircle className="h-8 w-8 text-green-500" />}
                        trend="+12% from last period"
                        trendUp={true}
                        color="green"
                      />
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <QHSEStatsCard
                        title="Safety Observations"
                        value={dashboardData.safetyStats.safetyObservations}
                        icon={<Clipboard className="h-8 w-8 text-blue-500" />}
                        trend="+8% from last period"
                        trendUp={true}
                        color="blue"
                      />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <QHSEStatsCard
                        title="Near Misses"
                        value={dashboardData.safetyStats.nearMisses}
                        icon={<AlertTriangle className="h-8 w-8 text-yellow-500" />}
                        trend="-5% from last period"
                        trendUp={false}
                        color="yellow"
                      />
                    </FadeIn>
                    <FadeIn delay={0.3}>
                      <QHSEStatsCard
                        title="Total Man Hours"
                        value={dashboardData.safetyStats.totalManHours.toLocaleString()}
                        icon={<Clock className="h-8 w-8 text-purple-500" />}
                        trend="+15% from last period"
                        trendUp={true}
                        color="purple"
                      />
                    </FadeIn>
                  </div>

                  {/* Charts Row 1 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <FadeIn>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Monthly Safety Observations
                        </h3>
                        <QHSEBarChart
                          data={dashboardData.monthlyData.safetyObservations}
                          xKey="month"
                          yKey="value"
                          color="#3B82F6"
                        />
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Incident Distribution by Type
                        </h3>
                        <QHSEPieChart data={dashboardData.incidentDistribution} />
                      </div>
                    </FadeIn>
                  </div>

                  {/* Charts Row 2 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <FadeIn>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Monthly Incidents Trend
                        </h3>
                        <QHSELineChart
                          data={dashboardData.monthlyData.incidents}
                          xKey="month"
                          yKey="value"
                          color="#EF4444"
                        />
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Monthly Near Misses
                        </h3>
                        <QHSEBarChart
                          data={dashboardData.monthlyData.nearMisses}
                          xKey="month"
                          yKey="value"
                          color="#F59E0B"
                        />
                      </div>
                    </FadeIn>
                  </div>

                  {/* Recent Incidents */}
                  <FadeIn>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Incidents</h3>
                        <button
                          onClick={() => setActiveTab("incidents")}
                          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          View All
                        </button>
                      </div>
                      <QHSEIncidentTable incidents={dashboardData.incidents.slice(0, 5)} />
                    </div>
                  </FadeIn>
                </div>
              )}

              {/* Incidents & Reports Tab */}
              {activeTab === "incidents" && (
                <div>
                  {/* Incident Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <FadeIn>
                      <QHSEStatsCard
                        title="Total Incidents"
                        value={dashboardData.incidents.length}
                        icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
                        trend="-3% from last period"
                        trendUp={false}
                        color="red"
                      />
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <QHSEStatsCard
                        title="Open Incidents"
                        value={dashboardData.incidents.filter((i) => i.status === "Open").length}
                        icon={<Clock className="h-8 w-8 text-yellow-500" />}
                        trend="-2 from last period"
                        trendUp={false}
                        color="yellow"
                      />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <QHSEStatsCard
                        title="Avg. Resolution Time"
                        value="3.2 days"
                        icon={<Activity className="h-8 w-8 text-blue-500" />}
                        trend="-0.5 days from last period"
                        trendUp={false}
                        color="blue"
                      />
                    </FadeIn>
                  </div>

                  {/* Incident Trends */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <FadeIn>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Incident Trend by Month
                        </h3>
                        <QHSELineChart
                          data={dashboardData.monthlyData.incidents}
                          xKey="month"
                          yKey="value"
                          color="#EF4444"
                        />
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Incident Distribution by Type
                        </h3>
                        <QHSEPieChart data={dashboardData.incidentDistribution} />
                      </div>
                    </FadeIn>
                  </div>

                  {/* Incident Table */}
                  <FadeIn>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">All Incidents</h3>
                      <QHSEIncidentTable incidents={dashboardData.incidents} />
                    </div>
                  </FadeIn>
                </div>
              )}

              {/* Vessel Performance Tab */}
              {activeTab === "performance" && (
                <div>
                  {/* Vessel Performance Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <FadeIn>
                      <QHSEStatsCard
                        title="Fleet Safety Score"
                        value="92%"
                        icon={<Shield className="h-8 w-8 text-green-500" />}
                        trend="+3% from last period"
                        trendUp={true}
                        color="green"
                      />
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <QHSEStatsCard
                        title="Environmental Compliance"
                        value="95%"
                        icon={<CheckCircle className="h-8 w-8 text-blue-500" />}
                        trend="+1% from last period"
                        trendUp={true}
                        color="blue"
                      />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <QHSEStatsCard
                        title="Operational Efficiency"
                        value="89%"
                        icon={<BarChart2 className="h-8 w-8 text-purple-500" />}
                        trend="+4% from last period"
                        trendUp={true}
                        color="purple"
                      />
                    </FadeIn>
                  </div>

                  {/* Vessel Performance Comparison */}
                  <FadeIn>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Vessel Performance Comparison
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                          <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                              >
                                Vessel
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                              >
                                Safety Score
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                              >
                                Environmental Score
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                              >
                                Operational Score
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                              >
                                Overall Rating
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {dashboardData.vesselPerformance.map((vessel, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                  {vessel.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center">
                                    <span className="mr-2">{vessel.safety}%</span>
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div className="h-full bg-green-500" style={{ width: `${vessel.safety}%` }}></div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center">
                                    <span className="mr-2">{vessel.environmental}%</span>
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-blue-500"
                                        style={{ width: `${vessel.environmental}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center">
                                    <span className="mr-2">{vessel.operational}%</span>
                                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-purple-500"
                                        style={{ width: `${vessel.operational}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      (vessel.safety + vessel.environmental + vessel.operational) / 3 >= 90
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                        : (vessel.safety + vessel.environmental + vessel.operational) / 3 >= 80
                                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                    }`}
                                  >
                                    {Math.round((vessel.safety + vessel.environmental + vessel.operational) / 3)}%
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Man Hours Trend */}
                  <FadeIn>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Monthly Man Hours Trend
                      </h3>
                      <QHSELineChart
                        data={dashboardData.monthlyData.manHours}
                        xKey="month"
                        yKey="value"
                        color="#8B5CF6"
                      />
                    </div>
                  </FadeIn>

                  {/* Vessel-specific Performance */}
                  {selectedVessel !== "all" && (
                    <FadeIn>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          {`Silverline ${selectedVessel.replace("silverline", "")} Performance Details`}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Inspections</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                                    Quarterly Safety Inspection
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Completed on May 15, 2023</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                                    Environmental Compliance Audit
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Completed on April 3, 2023</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Clock className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                                    Annual Classification Survey
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Scheduled for July 10, 2023
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Outstanding Action Items
                            </h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                                    Update emergency response procedures
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Due by June 30, 2023</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                                    Complete crew safety refresher training
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Due by July 15, 2023</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  )}
                </div>
              )}

              {/* Achievements Tab */}
              {activeTab === "achievements" && (
                <div>
                  {/* Achievement Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <FadeIn>
                      <QHSEStatsCard
                        title="Safety Milestones"
                        value="4"
                        icon={<Award className="h-8 w-8 text-yellow-500" />}
                        trend="+1 from last year"
                        trendUp={true}
                        color="yellow"
                      />
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <QHSEStatsCard
                        title="Certifications"
                        value="3"
                        icon={<Shield className="h-8 w-8 text-blue-500" />}
                        trend="Same as last year"
                        trendUp={null}
                        color="blue"
                      />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <QHSEStatsCard
                        title="Industry Awards"
                        value="2"
                        icon={<Award className="h-8 w-8 text-purple-500" />}
                        trend="+1 from last year"
                        trendUp={true}
                        color="purple"
                      />
                    </FadeIn>
                  </div>

                  {/* Achievements Timeline */}
                  <FadeIn>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                        QHSE Achievements Timeline
                      </h3>
                      <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>

                        {/* Timeline items */}
                        <div className="space-y-8">
                          {dashboardData.achievements.map((achievement, index) => (
                            <div key={index} className="relative pl-10">
                              <div className="absolute left-0 top-1.5 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                  {achievement.title}
                                </h4>
                                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{achievement.date}</p>
                                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Certificates and Recognitions */}
                  <FadeIn>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Certificates and Recognitions
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">ISO 9001:2015</h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">Quality Management System</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">Valid until: December 2024</p>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">ISO 14001:2015</h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">Environmental Management System</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">Valid until: October 2024</p>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <Shield className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mr-3" />
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">ISO 45001:2018</h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Occupational Health and Safety Management
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">Valid until: March 2025</p>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                              Safety Excellence Award
                            </h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">Nigerian Maritime Administration</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">Received: November 2022</p>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <Award className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                              Environmental Stewardship
                            </h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Nigerian Environmental Standards Agency
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">Received: January 2023</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default QHSEDashboardPage
