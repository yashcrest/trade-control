"use client"
import React from "react"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { Paperclip, Upload } from "lucide-react"
import { Button } from "../ui/button"
import { toast } from "sonner"

export const AuthorizationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.message("Form submitted!")
  }

  // for dragging file into DOM
  const handleDragover = (e) => {
    //
  }

  return (
    <div className="max-w-4xl mx-auto space-y-2">
      <h4>Create new license form</h4>
      <form onSubmit={handleSubmit}>
        <Card className="p-6 space-y-4">
          <h5>Basic License Information</h5>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label>License Type *</label>
              <select
                className="border rounded-lg p-1.5 outline-none"
                defaultValue="DSP-5 (Permanent Export)"
              >
                <option>DSP-5 (Permanent Export)</option>
                <option>DSP-73 (Temporary Export)</option>
                <option>EAR (Re-export)</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label>License Number *</label>
              <input
                type="text"
                className="border rounded-lg p-1 outline-none"
                placeholder="e.g. DSP-5 2024"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Issue Date *</label>
              <input
                className="outline-none p-1 border rounded-lg"
                type="date"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Expiry Date *</label>
              <input
                type="date"
                className="outline-none p-1 border rounded-lg"
              />
            </div>
          </div>
          <h5>Associated Parties</h5>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label>Authorization Name *</label>
              <input
                type="text"
                required
                className="rounded-lg border outline-none p-1"
                placeholder="Exmple Pty Ltd."
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Consignee *</label>
              <input
                type="text"
                required
                className="rounded-lg border outline-none p-1"
                placeholder="Joe Doe"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>End User *</label>
              <input
                type="text"
                required
                className="rounded-lg border outline-none p-1"
                placeholder="Jane Doe"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Intermediaries</label>
              <input
                type="text"
                required
                className="rounded-lg border outline-none p-1"
                placeholder="Separate multiple entries with commas"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h5>Product Information</h5>
            <div className="flex flex-col">
              <label>Product or Technology Descrption *</label>
              <textarea
                rows={5}
                cols={10}
                className="border outline-none rounded-md p-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label>Value (USD) *</label>
              <input
                type="number"
                max={40}
                className="rounded-lg border outline-none p-1"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Quality *</label>
              <input
                type="number"
                max={40}
                className="rounded-lg border outline-none p-1"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h5>License Conditions</h5>
            <div className="flex flex-col">
              <label> Special Conditions and Restrictions</label>
              <textarea
                rows={5}
                cols={10}
                className="border outline-none rounded-md p-1"
                placeholder="Enter any special conditions, restrictions or notes about this license"
              />
            </div>
          </div>

          <h4>Document Attachments</h4>
          <div className="space-y-2 bg-slate-100 p-4">
            <h6>Add New Document</h6>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label>Document name</label>
                <input
                  type="text"
                  className="border rounded-lg p-1 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label>Document Name</label>
                <select className="border rounded-lg p-1.5 outline-none">
                  <option>Contract</option>
                  <option>Agreement</option>
                  <option>Certificate</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label>Description</label>
              <textarea
                rows={4}
                cols={10}
                className="border outline-none rounded-md p-1"
              />
            </div>
            <div onDragOverCapture={handleDragover}>
              <div className="px-6 pt-5 pb-6 mt-1 flex justify-center border-2 border-gray-300 rounded-md border-dashed">
                <div className="space-y-1 text-center">
                  <div className="flex flex-col items-center">
                    <label htmlFor="file-upload">
                      <Upload className=" h-12 w-12 hover:text-blue-600" />
                      <input type="file" id="file-upload" className="sr-only" />
                    </label>
                    <p className="text-gray-600">
                      Upload a file or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button className="w-full">
                <Paperclip />
                Attach docs
              </Button>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="ghost" className="border border-gray-300">
              Cancel
            </Button>
            <Button>Create License</Button>
          </div>
        </Card>
      </form>
    </div>
  )
}
