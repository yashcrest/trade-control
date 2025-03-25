"use client"
import { useMemo, useState } from "react"
import { mockData } from "@/data/authorizationData"
import { ArrowUpDown } from "lucide-react"

const LicenseTable = () => {
  const [searchItem, setSearchItem] = useState("")
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" })
  const [showAll, setShowAll] = useState(false)

  //   sort function
  const sortData = (data, key, direction) => {
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1
      if (a[key] > b[key]) return direction === "desc" ? 1 : -1
    })
  }

  // Handle sort
  const handleSort = (key) => {
    const direction =
      sortConfig.key && sortConfig.direction === "asc" ? "desc" : "asc"
    setSortConfig({ key, direction })
  }

  //   filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let result = mockData.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchItem.toLowerCase())
      )
    )

    if (sortConfig.key) {
      result = sortData(result, sortConfig.key, sortConfig.direction)
    }

    return result
  }, [searchItem, sortConfig])

  //   Get status color
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
    <div className="p-8">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md">
        <div className="flex items-center justify-between p-4">
          <h4>Authorization List</h4>
          <input
            type="text"
            placeholder="Search Authorizations..."
            className="p-2 bg-gray-100 outline-0 rounded-lg"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "authorization",
                  "type",
                  "number",
                  "startDate",
                  "expiringDate",
                  "status",
                ].map((key) => (
                  <th
                    key={key}
                    className=" uppercase tracking-wider text-sm font-medium cursor-pointer px-6 py-3 hover:bg-gray-100"
                    onClick={() => handleSort(key)}
                  >
                    <div className="flex items-center gap-2">
                      {key}
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(showAll
                ? filteredAndSortedData
                : filteredAndSortedData.slice(0, 10)
              ).map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.authorization}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item.number}
                  </td>
                  <td className="text-gray-500 px-6 py-4 text-sm">
                    {item.startDate}
                  </td>
                  <td className="text-gray-500 px-6 py-4 text-sm">
                    {item.expiringDate}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
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
      </div>
    </div>
  )
}

export default LicenseTable
