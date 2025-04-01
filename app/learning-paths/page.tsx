"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye } from "lucide-react"

const learningPaths = [
  {
    id: 1,
    title: "Mathematics Fundamentals",
    description: "Master basic math concepts",
    progress: 75,
    category: "Math",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Advanced Algebra",
    description: "Dive deep into algebraic concepts",
    progress: 30,
    category: "Math",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Introduction to Biology",
    description: "Explore the basics of life sciences",
    progress: 50,
    category: "Science",
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Creative Writing",
    description: "Develop your storytelling skills",
    progress: 60,
    category: "Language Arts",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "World History",
    description: "Journey through major historical events",
    progress: 40,
    category: "Social Studies",
    difficulty: "Intermediate",
  },
]

export default function LearningPaths() {
  const [filter, setFilter] = useState({ category: "All", difficulty: "All" })
  const [sort, setSort] = useState("progress")

  const filteredPaths = learningPaths
    .filter(
      (path) =>
        (filter.category === "All" || path.category === filter.category) &&
        (filter.difficulty === "All" || path.difficulty === filter.difficulty),
    )
    .sort((a, b) => {
      if (sort === "progress") return b.progress - a.progress
      if (sort === "title") return a.title.localeCompare(b.title)
      return 0
    })

  const handleStartLearning = (id: number) => {
    window.location.href = `/course/${id}`
  }

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold mb-6">Learning Paths</h1>

      <div className="flex justify-between mb-6">
        <div className="space-x-4">
          <Select value={filter.category} onValueChange={(value) => setFilter({ ...filter, category: value })}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Math">Math</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="Language Arts">Language Arts</SelectItem>
              <SelectItem value="Social Studies">Social Studies</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filter.difficulty} onValueChange={(value) => setFilter({ ...filter, difficulty: value })}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Difficulties</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="progress">Progress</SelectItem>
            <SelectItem value="title">Title</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPaths.map((path) => (
          <Card key={path.id}>
            <CardHeader>
              <CardTitle>{path.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{path.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span>Progress:</span>
                <span>{path.progress}%</span>
              </div>
              <Progress value={path.progress} className="mb-4" />
              <Button className="w-full" onClick={() => handleStartLearning(path.id)}>
                {path.progress > 0 ? "Resume Learning" : "Start Learning Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

