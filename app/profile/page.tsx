"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion" 
import { FaMedal, FaStar, FaTrophy, FaAward } from "react-icons/fa" 

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    bio: "I'm a passionate learner with a focus on mathematics and science.",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handleSave = () => {
    console.log("Saving profile changes...")
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-6">
            <Image
              src="/images/male2-pfp.png"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <Button variant="outline">Change Picture</Button>
          </div>
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={profile.name} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={profile.email} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" name="bio" value={profile.bio} onChange={handleInputChange} />
              </div>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          ) : (
            <div>
              <p>
                <strong>Name:</strong> {profile.name}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Bio:</strong> {profile.bio}
              </p>
              <Button onClick={() => setIsEditing(true)} className="mt-4">
                Edit Profile
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Badges Earned</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-4">
          {[{ icon: FaMedal, color: "bg-yellow-400" }, { icon: FaStar, color: "bg-green-500" }, { icon: FaTrophy, color: "bg-blue-600" }, { icon: FaAward, color: "bg-red-500" }].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className={`p-4 ${badge.color} text-white rounded-full shadow-md flex items-center justify-center w-16 h-16`}
            >
              {badge.icon({ size: 32 })}
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learning Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Total Study Hours:</strong> 120
          </p>
          <p>
            <strong>Completed Courses:</strong> 5
          </p>
          <p>
            <strong>Current Streak:</strong> 7 days
          </p>
          <p>
            <strong>Favorite Topics:</strong> Algebra, Biology, World History
          </p>
        </CardContent>
      </Card>

      
    </div>
  )
}
