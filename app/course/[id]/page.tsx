"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { Eye } from "lucide-react" // Importing eye icon

const courseData = {
  id: 1,
  title: "TOPIC NAME",
  description: "Master basic concepts",
  videoUrl: "/videos/math-intro.mp4",
  modules: [
    { id: 1, title: "Introduction", duration: "5:00", videoUrl: "/videos/intro.mp4" },
    { id: 2, title: "Basic Concepts", duration: "10:00", videoUrl: "/videos/basic.mp4" },
    { id: 3, title: "Advanced Topics", duration: "15:00", videoUrl: "/videos/advanced.mp4" },
  ],
}

export default function CoursePage() {
  const [currentModule, setCurrentModule] = useState(courseData.modules[0])
  const [showPercentage, setShowPercentage] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
      <p className="mb-6">{courseData.description}</p>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <VideoPlayer src={currentModule.videoUrl} />
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Course Modules</h2>
            <ul>
              {courseData.modules.map((module) => (
                <li key={module.id} className="mb-2">
                  <Button
                    variant={currentModule.id === module.id ? "default" : "ghost"}
                    onClick={() => setCurrentModule(module)}
                    className="w-full text-left"
                    aria-label={`Select ${module.title}`}
                  >
                    {module.title} - {module.duration}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 md:ml-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Current Module</h2>
          <p className="text-lg font-semibold">{currentModule.title}</p>
          <p className="text-gray-600">{currentModule.duration}</p>
        </div>
      </div>
      
      {/* Island Button with Eye Icon */}
      <div className="absolute top-6 right-6">
        <button
          className="relative p-6 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          onMouseEnter={() => setShowPercentage(true)}
          onMouseLeave={() => setShowPercentage(false)}
        >
          <Eye className="w-8 h-8" />
          {showPercentage && (
            <span className="absolute top-[-10px] right-[-10px] bg-black text-white text-sm px-2 py-1 rounded-lg">
              75%
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
