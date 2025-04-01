"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [contrast, setContrast] = useState(100)
  const [notifications, setNotifications] = useState({
    studyReminders: true,
    achievements: true,
    weeklyProgress: true,
  })

  const handleDarkModeToggle = () => {
    setDarkMode(darkMode)
    // In a real application, this would update the theme
    document.documentElement.classList.toggle("dark")
  }

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] })
  }

  const saveSettings = () => {
    // This is a placeholder for saving settings
    // In a real application, this would update user preferences in the backend
    console.log("Saving settings...")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <Switch id="dark-mode" checked={darkMode} onCheckedChange={handleDarkModeToggle} />
          </div>
          <div>
            <Label htmlFor="font-size">Font Size</Label>
            <Slider
              id="font-size"
              min={12}
              max={24}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
            />
            <span>{fontSize}px</span>
          </div>
          <div>
            <Label htmlFor="contrast">Contrast</Label>
            <Slider
              id="contrast"
              min={75}
              max={125}
              step={1}
              value={[contrast]}
              onValueChange={(value) => setContrast(value[0])}
            />
            <span>{contrast}%</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="study-reminders">Study Reminders</Label>
            <Switch
              id="study-reminders"
              checked={notifications.studyReminders}
              onCheckedChange={() => handleNotificationChange("studyReminders")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="achievements">Achievements</Label>
            <Switch
              id="achievements"
              checked={notifications.achievements}
              onCheckedChange={() => handleNotificationChange("achievements")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="weekly-progress">Weekly Progress</Label>
            <Switch
              id="weekly-progress"
              checked={notifications.weeklyProgress}
              onCheckedChange={() => handleNotificationChange("weeklyProgress")}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={saveSettings}>Save Settings</Button>
    </div>
  )
}

