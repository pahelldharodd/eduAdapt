import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Brain, Clock, Award } from "lucide-react"

const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Personalized Learning Paths",
    description: "Tailored content based on your unique learning style and preferences.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Adaptive Study Techniques",
    description: "AI-powered recommendations to optimize your study sessions.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Scheduling",
    description: "Create study plans that fit your lifestyle and peak productivity hours.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Achievement System",
    description: "Earn badges and track your progress to stay motivated.",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Learn Your Way with AdaptEd
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Empowering neurodivergent students with personalized, adaptive learning experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/learning-paths">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Learning Now
            </Button>
          </Link>
          <Link href="/personalized-test">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-indigo-600">
              Give Personalized Test
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-250 transform hover:-translate-y-2"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2"
            >
              <Image
                src={"/image/male2-pfp.png"}
                alt={`User ${i}`}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4">
                "AdaptEd has transformed my learning experience. I feel more confident and capable than ever before!"
              </p>
              <p className="font-semibold">- Student {i}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
