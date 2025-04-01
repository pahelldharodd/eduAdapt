"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function LearningAssessment() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    learningStyle: "",
    difficulties: "",
    pastChallenges: "",
    currentTopics: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleSubmit = async () => {
    // TODO: Implement API call to save assessment results
    console.log("Assessment submitted:", answers)
    // Redirect to dashboard or personalized learning path
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Personalized Learning Assessment</h1>
      {step === 1 && (
        <div>
          <h2 className="text-xl mb-4">Step 1: Preferred Learning Style</h2>
          <RadioGroup
            name="learningStyle"
            value={answers.learningStyle}
            onValueChange={(value) => setAnswers({ ...answers, learningStyle: value })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="visual" id="visual" />
              <Label htmlFor="visual">Visual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="auditory" id="auditory" />
              <Label htmlFor="auditory">Auditory</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kinesthetic" id="kinesthetic" />
              <Label htmlFor="kinesthetic">Kinesthetic</Label>
            </div>
          </RadioGroup>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl mb-4">Step 2: Areas of Difficulty</h2>
          <Label htmlFor="difficulties">Describe any areas you find challenging:</Label>
          <Input
            id="difficulties"
            name="difficulties"
            value={answers.difficulties}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-xl mb-4">Step 3: Past Academic Challenges</h2>
          <Label htmlFor="pastChallenges">Describe any past academic challenges:</Label>
          <Input
            id="pastChallenges"
            name="pastChallenges"
            value={answers.pastChallenges}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
      )}
      {step === 4 && (
        <div>
          <h2 className="text-xl mb-4">Step 4: Current Lecture Topics</h2>
          <Label htmlFor="currentTopics">List your current lecture topics:</Label>
          <Input
            id="currentTopics"
            name="currentTopics"
            value={answers.currentTopics}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
      )}
      <div className="mt-6">
        {step < 4 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit Assessment</Button>
        )}
      </div>
    </div>
  )
}

