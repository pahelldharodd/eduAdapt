"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

// Weekly data (daily study hours)
const weeklyData = [
  { name: "Mon", hours: 2 },
  { name: "Tue", hours: 3 },
  { name: "Wed", hours: 4 },
  { name: "Thu", hours: 2.5 },
  { name: "Fri", hours: 3.5 },
  { name: "Sat", hours: 5 },
  { name: "Sun", hours: 4 },
]

// Monthly data (random average weekly hours for the past four weeks)
const monthlyData = [
  { name: "Week 1", hours: Math.floor(Math.random() * 6) + 2 },
  { name: "Week 2", hours: Math.floor(Math.random() * 6) + 2 },
  { name: "Week 3", hours: Math.floor(Math.random() * 6) + 2 },
  { name: "Week 4", hours: Math.floor(Math.random() * 6) + 2 },
]

export default function ProgressTracker() {
  const [timeframe, setTimeframe] = useState<"week" | "month">("week")

  const exportProgress = (format: "pdf" | "csv") => {
    console.log(`Exporting progress as ${format}...`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Progress Tracker</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Study Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Button
              variant={timeframe === "week" ? "default" : "outline"}
              onClick={() => setTimeframe("week")}
              className="mr-2"
            >
              Week
            </Button>
            <Button
              variant={timeframe === "month" ? "default" : "outline"}
              onClick={() => setTimeframe("month")}
            >
              Month
            </Button>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            {timeframe === "week" ? (
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#8884d8" />
              </LineChart>
            ) : (
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#82ca9d" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Study Streak</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-center">7 Days</p>
          <p className="text-center text-gray-600 dark:text-gray-300">Keep up the great work!</p>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button onClick={() => exportProgress("pdf")}>Export as PDF</Button>
        <Button onClick={() => exportProgress("csv")}>Export as CSV</Button>
      </div>
    </div>
  )
}
