import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, BookOpen, Trophy } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Image
          src="/images/male-pfp.png"
          alt="User Avatar"
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Chris!</h1>
          <p className="text-gray-600 dark:text-gray-300">Visual learner | ADHD</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <Progress value={68} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 Days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Study Session</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2:30 PM</div>
            <p className="text-xs text-muted-foreground">Mathematics</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Completed 5 lessons in a row</span>
              </li>
              <li className="flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Mastered Basic Algebra</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Learning Paths Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Mathematics</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Science</span>
                <span>60%</span>
              </div>
              <Progress value={60} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Language Arts</span>
                <span>80%</span>
              </div>
              <Progress value={80} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Button size="lg">Start Today's Study Session</Button>
      </div>
    </div>
  )
}

