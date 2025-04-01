"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Music, Info, ChevronDown, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function FocusMode() {
  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)")
  const [timer, setTimer] = useState(25 * 60) // 25 minutes in seconds
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedSong, setSelectedSong] = useState("White Noise")
  const [showMenu, setShowMenu] = useState(false)
  const [showPercentage, setShowPercentage] = useState(false)

  const audio = new Audio(`/audio/${selectedSong.toLowerCase().replace(" ", "-")}.mp3`)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
    }
    return () => clearInterval(interval)
  }, [timer])

  const handleColorChange = (values: number[]) => {
    setBackgroundColor(`hsl(${values[0]}, 70%, 90%)`)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-500 relative"
      style={{ backgroundColor }}
    >
      {/* Timer Display */}
      <div className="absolute top-4 left-4 text-4xl font-mono">{formatTime(timer)}</div>

      {/* Eye Icon Button */}
      <div className="absolute top-12 right-6">
        <button
          className="relative p-6 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          onMouseEnter={() => setShowPercentage(true)}
          onMouseLeave={() => setShowPercentage(false)}
        >
          <Eye className="w-8 h-8" />
          {showPercentage && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[-10px] right-[-10px] bg-black text-white text-sm px-2 py-1 rounded-lg"
            >
              75%
            </motion.span>
          )}
        </button>
      </div>

      {/* Focus Mode Title */}
      <h1 className="text-4xl font-bold mb-8">Focus Mode</h1>

      {/* Background Color Slider */}
      <div className="w-64 mb-8 flex items-center space-x-2">
        <Slider defaultValue={[180]} max={360} step={1} onValueChange={handleColorChange} />
        <div className="relative group">
          <Info className="h-4 w-4 text-gray-500 cursor-pointer" />
          <div className="absolute bottom-full mb-2 hidden w-48 p-2 text-sm text-white bg-gray-800 rounded-md shadow-md group-hover:block">
            Adjust background color
          </div>
        </div>
      </div>

      {/* Reset Timer Button */}
      <Button onClick={() => setTimer(25 * 60)}>Reset Timer</Button>

      {/* Theory Notes Section */}
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Theory Notes</h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300">
            Here you can add your theory notes. This section can be used to display course content or any other
            important information you need to focus on.
          </p>
        </div>
      </div>

      {/* Floating Music Button */}
      <div className="absolute bottom-12 right-6">
        <motion.button
          onClick={() => setShowMenu(!showMenu)}
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition duration-300 flex items-center justify-center"
        >
          <Music className="h-8 w-8" />
          <ChevronDown className="w-4 h-4 ml-2" />
        </motion.button>

        {/* Music Dropdown Menu */}
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-900 rounded-lg shadow-md p-2 w-48"
          >
            {["White Noise", "Rain", "Ocean Waves", "Bird Sounds"].map((song) => (
              <Button
                key={song}
                variant="ghost"
                className={`w-full text-left ${selectedSong === song ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                onClick={() => {
                  setSelectedSong(song)
                  setShowMenu(false)
                }}
              >
                {song}
              </Button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
