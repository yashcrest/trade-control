"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

// Authorization types with their specific fields
const authorizationTypes = {
  australia: {
    "Single-Use Export Permit (SUP)": {
      fields: [
        {
          name: "endUserCertificate",
          label: "End-User Certificate",
          type: "file",
          required: true,
        },
        {
          name: "hsCustomsCode",
          label: "HS/Customs Code",
          type: "text",
          required: true,
        },
      ],
    },
    "Multi-Party (Project) Permit": {
      fields: [
        {
          name: "consortiumParticipants",
          label: "Consortium Participants",
          type: "textarea",
          required: true,
        },
      ],
    },
    "Techonology Sharing Agreements": {
      fields: [
        {
          name: "projectDuration",
          label: "Project Duration",
          type: "date",
          required: true,
        },
      ],
    },
    "Contract-Based Export Permit": {
      fields: [
        {
          name: "linkedContractId",
          label: "Linked Contract ID",
          type: "number",
          required: true,
        },
        {
          name: "contractEndDate",
          label: "Contract End Date",
          type: "Date",
          required: true,
        },
      ],
    },
    "Temporary Export Permit": {
      fields: [
        {
          name: "returnConditions",
          label: "Return Conditions",
          type: "text",
          required: true,
        },
        {
          name: "temporaryStorageDetails",
          label: "Temporary Storage Details",
          type: "text",
          required: true,
        },
        {
          name: "eventDemoDetails",
          label: "Event/Demo Details",
          type: "text",
          required: true,
        },
      ],
    },
    "Brokering Permit": {
      fields: [
        {
          name: "thirdPartyEntitiesInvolved",
          label: "Third-Party Entities Involved",
          type: "textarea",
          required: true,
        },
        {
          name: "noDirectOwnershipCertification",
          label: "No Direct Ownership Certification",
          type: "file",
          required: true,
        },
      ],
    },
    "Intangible Transfer Permit": {
      fields: [
        {
          name: "digitalTransferConfirmation",
          label: "Digital Transfer Confirmation",
          type: "boolean",
          required: true,
        },
        {
          name: "encryptionStandardsUsed",
          label: "Encryption Standard Used",
          type: "select",
          required: true,
        },
      ],
    },
    "DTCT Exemption": {
      fields: [
        {
          name: "preApprovedRecipients",
          label: "Pre-Approved U.S. Recipients List",
          type: "textarea",
          required: true,
        },
        {
          name: "treatyCompliance",
          label: "Treaty Compliance Statement",
          type: "file",
          required: true,
        },
      ],
    },
  },
  usa: {
    "DSP-5": {
      fields: [
        {
          name: "manufacturerName",
          label: "Manufacturer Name",
          type: "text",
          required: true,
        },
        {
          name: "technicalDataClassification",
          label: "Technical Data Classification",
          type: "text",
          required: true,
        },
        {
          name: "endUseStatement",
          label: "End-Use Statement",
          type: "file",
          required: true,
        },
      ],
    },
    "DSP-73": {
      fields: [
        {
          name: "purposeOfTemporaryExport",
          label: "Purpose of Temporary Export",
          type: "textarea",
          required: true,
        },
        {
          name: "expectedReturnDate",
          label: "Expected Return Date",
          type: "date",
          required: true,
        },
        {
          name: "usageRestrictions",
          label: "Usage Restrictions",
          type: "textarea",
          required: true,
        },
      ],
    },
    "BIS Licence": {
      fields: [
        {
          name: "eccnClassification",
          label: "ECCN Classification",
          type: "text",
          required: true,
        },
        {
          name: "reexportRestrictions",
          label: "Reexport Restrictions",
          type: "textarea",
          required: true,
        },
        {
          name: "commerceCountryChart",
          label: "Commerce Country Chart Review",
          type: "textarea",
          required: true,
        },
      ],
    },
  },
}

// Available countries
const countries = [
  { value: "australia", label: "Australia" },
  { value: "usa", label: "U.S" },
  { value: "uk", label: "UK" },
  { value: "france", label: "France" },
  { value: "germany", label: "Germany" },
  { value: "sweden/norway", label: "Sweden/Norway" },
  { value: "spain/italy", label: "Spain/Italy" },
]

// Issuing authorities
const issuingAuthorities = [
  { value: "aus_defence", label: "Australian Department of Defence" },
  { value: "aus_customs", label: "Australian Border Force" },
  { value: "us_state", label: "U.S. Department of State" },
  { value: "us_commerce", label: "U.S. Department of Commerce" },
]

export default function Test1() {
  const router = useRouter()
  const [selectedCountry, setSelectedCountry] = useState("")
  const [formData, setFormData] = useState({
    authorizationOrigin: "",
    authorizationType: "",
    authorizationName: "",
    authorizationNumber: "",
    issuingAuthority: "",
    startDate: "",
    expirationDate: "",
    status: "Draft",
    approvedParties: "",
    approvedQuantities: "",
    conditions: "",
    additionalConditions: "",
    reexportRequirements: "",
    dynamicFields: {},
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === "authorizationOrigin") {
      setSelectedCountry(value)
      setFormData((prev) => ({
        ...prev,
        authorizationOrigin: value,
        authorizationType: "",
        dynamicFields: {},
      }))
    } else if (name === "authorizationType") {
      setFormData((prev) => ({
        ...prev,
        authorizationType: value,
        dynamicFields: {},
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files?.length) {
      setFormData((prev) => ({
        ...prev,
        dynamicFields: {
          ...prev.dynamicFields,
          [name]: files[0],
        },
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    router.push("/authorization")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.push("/authorization")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            New Authorization
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Country Selection */}
              <div>
                <label
                  htmlFor="authorizationOrigin"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Country
                </label>
                <select
                  id="authorizationOrigin"
                  name="authorizationOrigin"
                  value={formData.authorizationOrigin}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Authorization Type */}
              {selectedCountry && (
                <div>
                  <label
                    htmlFor="authorizationType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Authorization Type
                  </label>
                  <select
                    id="authorizationType"
                    name="authorizationType"
                    value={formData.authorizationType}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select authorization type</option>
                    {Object.keys(authorizationTypes[selectedCountry]).map(
                      (type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      )
                    )}
                  </select>
                </div>
              )}

              {/* Authorization Name */}
              <div>
                <label
                  htmlFor="authorizationName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Authorization Name
                </label>
                <input
                  type="text"
                  id="authorizationName"
                  name="authorizationName"
                  value={formData.authorizationName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Authorization Number */}
              <div>
                <label
                  htmlFor="authorizationNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Authorization Number
                </label>
                <input
                  type="text"
                  id="authorizationNumber"
                  name="authorizationNumber"
                  value={formData.authorizationNumber}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Issuing Authority */}
              <div>
                <label
                  htmlFor="issuingAuthority"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Issuing Authority
                </label>
                <select
                  id="issuingAuthority"
                  name="issuingAuthority"
                  value={formData.issuingAuthority}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select issuing authority</option>
                  {issuingAuthorities.map((authority) => (
                    <option key={authority.value} value={authority.value}>
                      {authority.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates */}
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expiration Date
                </label>
                <input
                  type="date"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Additional Information
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="approvedParties"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Approved Parties
                </label>
                <textarea
                  id="approvedParties"
                  name="approvedParties"
                  value={formData.approvedParties}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="approvedQuantities"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Approved Quantities
                </label>
                <input
                  type="number"
                  id="approvedQuantities"
                  name="approvedQuantities"
                  value={formData.approvedQuantities}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="conditions"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Conditions
                </label>
                <textarea
                  id="conditions"
                  name="conditions"
                  value={formData.conditions}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Fields Section */}
          {selectedCountry && formData.authorizationType && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {formData.authorizationType} Specific Information
              </h3>
              <div className="space-y-4">
                {authorizationTypes[selectedCountry][
                  formData.authorizationType
                ].fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "file" ? (
                      <input
                        type="file"
                        id={field.name}
                        name={field.name}
                        onChange={handleFileChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required={field.required}
                      />
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData.dynamicFields[field.name] || ""}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required={field.required}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData.dynamicFields[field.name] || ""}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push("/authorization")}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Authorization
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
