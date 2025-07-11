"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Calendar, Users, Maximize2, Mic, Square, Circle, Globe } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [selectedSource, setSelectedSource] = useState(["领英"])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  const topCategories = ["类别", "全部", "技", "专业精进", "德合", "文化与价值观", "领", "领导力提升"]

  const academies = [
    "全部",
    "程长学园",
    "大住宿",
    "机票学院",
    "旅游学院",
    "火车票",
    "商旅学院",
    "金融学院",
    "IBU",
    "技术学院",
    "大市场学院",
  ]

  const secondRowAcademies = ["职能学院", "产品学院", "内容学院", "外区"]

  const languages = ["中文", "英语", "法语", "日语", "韩语", "其他语言"]

  const hotTopics = [
    "领导力",
    "技术创新",
    "数据科学",
    "项目管理",
    "数字化转型",
    "人工智能",
    "商业策略",
    "沟通技巧",
    "网络安全",
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        {/* Category buttons */}
        

        {/* Action-icon buttons */}
        
      </div>

      {/* Academy Navigation */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-700 font-medium">学院</span>
          {academies.map((academy, index) => (
            <Button
              key={academy}
              variant={index === 0 ? "default" : "ghost"}
              className={`rounded-full px-4 py-2 text-sm ${
                index === 0 ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } ${academy.includes("住宿") || academy.includes("火车票") || academy === "IBU" ? "flex items-center gap-1" : ""}`}
            >
              {academy}
              {(academy.includes("住宿") || academy.includes("火车票") || academy === "IBU") && (
                <ChevronDown className="h-3 w-3" />
              )}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-12">
          {secondRowAcademies.map((academy) => (
            <Button
              key={academy}
              variant="ghost"
              className="rounded-full px-4 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {academy}
            </Button>
          ))}
        </div>
      </div>

      {/* Source Filter */}
      <div className="mb-4">
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">来源</span>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="internal"
              checked={selectedSource.includes("内部")}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedSource([...selectedSource, "内部"])
                } else {
                  setSelectedSource(selectedSource.filter((s) => s !== "内部"))
                }
              }}
            />
            <label htmlFor="internal" className="text-sm text-gray-700">
              内部
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="linkedin"
              checked={selectedSource.includes("领英")}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedSource([...selectedSource, "领英"])
                } else {
                  setSelectedSource(selectedSource.filter((s) => s !== "领英"))
                }
              }}
            />
            <label htmlFor="linkedin" className="text-sm text-gray-700">
              领英
            </label>
          </div>
        </div>
      </div>

      {/* Language Filter */}
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">语言</span>
          {languages.map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox
                id={language}
                checked={selectedLanguages.includes(language)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedLanguages([...selectedLanguages, language])
                  } else {
                    setSelectedLanguages(selectedLanguages.filter((l) => l !== language))
                  }
                }}
              />
              <label htmlFor={language} className="text-sm text-gray-700">
                {language}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Topics */}
      <div className="mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">热推</span>
            <Badge className="bg-red-500 text-white text-xs px-2 py-1">HOT</Badge>
          </div>
          {hotTopics.map((topic) => (
            <Button
              key={topic}
              variant="ghost"
              className="rounded-full px-4 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex items-center gap-4 mb-8">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          更新日期
          <ChevronDown className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="text-gray-700 flex items-center gap-2">
          <Users className="h-4 w-4" />
          学习人数
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Meeting Room Card */}
        <Card className="overflow-hidden relative">
          <CardContent className="p-0">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Meeting room with people around conference table"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <div className="bg-blue-600 rounded-full p-2">
                  <div className="text-white text-xs font-bold">in</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Microsoft AI-900 Card */}
        <Card className="overflow-hidden bg-green-600 text-white">
          <CardContent className="p-6 flex flex-col items-center justify-center h-48">
            <div className="flex gap-1 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
              <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Microsoft</h3>
            <h4 className="text-xl font-semibold mb-2">AI-900</h4>
            <p className="text-sm opacity-90">Microsoft Press</p>
          </CardContent>
        </Card>

        {/* Server Room Card */}
        <Card className="overflow-hidden relative">
          <CardContent className="p-0">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Person working in server room with computer equipment"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <div className="bg-blue-600 rounded-full p-2">
                  <div className="text-white text-xs font-bold">in</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Assistant Button */}
      <div className="fixed bottom-6 right-6">
        
      </div>
    </div>
  )
}
