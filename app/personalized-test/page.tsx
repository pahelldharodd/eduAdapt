"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function PersonalizedTest() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    learningStyle: "",
    previousIssues: "",
    learningHistory: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Personalized Test</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="learningStyle" className="block text-gray-700 font-bold mb-2">
            Preferred Learning Style
          </label>
          <select
            id="learningStyle"
            name="learningStyle"
            value={formData.learningStyle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select your learning style</option>
            <option value="visual">Visual</option>
            <option value="auditory">Auditory</option>
            <option value="kinesthetic">Kinesthetic</option>
            <option value="reading/writing">Reading/Writing</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="previousIssues" className="block text-gray-700 font-bold mb-2">
            Previous Learning Issues
          </label>
          <textarea
            id="previousIssues"
            name="previousIssues"
            value={formData.previousIssues}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="learningHistory" className="block text-gray-700 font-bold mb-2">
            Learning History
          </label>
          <textarea
            id="learningHistory"
            name="learningHistory"
            value={formData.learningHistory}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}