"use client"
import React, { useState, useMemo } from "react"
import {
  Search,
  ArrowUpDown,
  MoveUpRight,
  Clock,
  SendHorizontal,
  Settings2,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

// Mock data for the table
const mockData = [
  {
    id: 1,
    authorizationName: "Export License A-123",
    type: "Standard Export",
    number: "EXP-2024-001",
    startDate: "2024-01-15",
    expiringDate: "2024-07-15",
    status: "Active",
  },
  {
    id: 2,
    authorizationName: "Import Permit B-456",
    type: "Temporary Import",
    number: "IMP-2024-002",
    startDate: "2024-02-01",
    expiringDate: "2024-05-01",
    status: "Expiring Soon",
  },
  // Add 8 more rows with different realistic data...
  {
    id: 3,
    authorizationName: "Transit Authorization C-789",
    type: "Transit Permit",
    number: "TRA-2024-003",
    startDate: "2024-01-20",
    expiringDate: "2024-12-20",
    status: "Active",
  },
  {
    id: 4,
    authorizationName: "Special License D-012",
    type: "Special Export",
    number: "SPE-2024-004",
    startDate: "2024-03-01",
    expiringDate: "2024-09-01",
    status: "Pending",
  },
  {
    id: 5,
    authorizationName: "General Permit E-345",
    type: "General Trade",
    number: "GEN-2024-005",
    startDate: "2024-02-15",
    expiringDate: "2024-08-15",
    status: "Active",
  },
  {
    id: 6,
    authorizationName: "Restricted Items F-678",
    type: "Restricted Export",
    number: "RES-2024-006",
    startDate: "2024-01-10",
    expiringDate: "2024-04-10",
    status: "Expiring Soon",
  },
  {
    id: 7,
    authorizationName: "Temporary Permit G-901",
    type: "Temporary Export",
    number: "TEM-2024-007",
    startDate: "2024-02-20",
    expiringDate: "2024-05-20",
    status: "Active",
  },
  {
    id: 8,
    authorizationName: "Commercial License H-234",
    type: "Commercial Export",
    number: "COM-2024-008",
    startDate: "2024-03-05",
    expiringDate: "2024-09-05",
    status: "Pending",
  },
  {
    id: 9,
    authorizationName: "Dual-Use Items I-567",
    type: "Dual-Use Export",
    number: "DUA-2024-009",
    startDate: "2024-01-25",
    expiringDate: "2024-07-25",
    status: "Active",
  },
  {
    id: 10,
    authorizationName: "Emergency Permit J-890",
    type: "Emergency Export",
    number: "EME-2024-010",
    startDate: "2024-02-10",
    expiringDate: "2024-04-10",
    status: "Expiring Soon",
  },
]

export default function Test() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" })
  const [showAll, setShowAll] = useState(false)

  // Sort function
  const sortData = (data, key, direction) => {
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1
      return 0
    })
  }

  // Handle sort
  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc"
    setSortConfig({ key, direction })
  }

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let result = mockData.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )

    if (sortConfig.key) {
      result = sortData(result, sortConfig.key, sortConfig.direction)
    }

    return result
  }, [searchTerm, sortConfig])

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800"
      case "Pending":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Authorization</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            + New Authorization
          </button>
        </div> */}

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Authorization List
              </h2>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search authorizations..."
                  className="outline-0 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div> */}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "authorizationName",
                    "type",
                    "number",
                    "startDate",
                    "expiringDate",
                    "status",
                  ].map((key) => (
                    <th
                      key={key}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort(key)}
                    >
                      <div className="flex items-center gap-2">
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                        <ArrowUpDown className="w-4 h-4" />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(showAll
                  ? filteredAndSortedData
                  : filteredAndSortedData.slice(0, 10)
                ).map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.authorizationName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.startDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.expiringDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredAndSortedData.length > 10 && (
            <div className="p-4 border-t border-gray-100">
              <button
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show All
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
