"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Calendar } from "lucide-react"

interface TimelineItem {
  id: string
  period: string
  date: string
  tasks: {
    id: string
    name: string
    category: "video" | "integration" | "learning" | "ai" | "search"
  }[]
}

const timelineData: TimelineItem[] = [
  {
    id: "before-may",
    period: "5/1 之前",
    date: "2024/4/25 - 2024/4/30",
    tasks: [
      { id: "task-1", name: "短视频的时间埋点", category: "video" },
      { id: "task-2", name: "短视频视觉稿", category: "video" },
    ],
  },
  {
    id: "week-1",
    period: "5/1 后第一周",
    date: "2024/5/1 - 2024/5/7",
    tasks: [
      { id: "task-3", name: "领英的接入 xAPI", category: "integration" },
      { id: "task-4", name: "短视频视觉稿", category: "video" },
      { id: "task-5", name: "学习路径改造", category: "learning" },
    ],
  },
  {
    id: "week-2",
    period: "5/1 后第二周",
    date: "2024/5/8 - 2024/5/14",
    tasks: [
      { id: "task-6", name: "学习路径改造", category: "learning" },
      { id: "task-7", name: "领英接入完成", category: "integration" },
      { id: "task-8", name: "章节总结进入短视频", category: "video" },
    ],
  },
  {
    id: "week-3",
    period: "5/1 后第三周",
    date: "2024/5/15 - 2024/5/21",
    tasks: [
      { id: "task-9", name: "短视频搜索启动", category: "search" },
      { id: "task-10", name: "学习路径改造完成", category: "learning" },
      { id: "task-11", name: "AI 陪练上移动端，准备收尾", category: "ai" },
    ],
  },
]

const categoryColors = {
  video: { bg: "bg-pink-100", text: "text-pink-800", border: "border-pink-200" },
  integration: { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" },
  learning: { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200" },
  ai: { bg: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-200" },
  search: { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200" },
}

export default function ProjectTimeline() {
  const [activeItem, setActiveItem] = useState<string>(timelineData[0].id)

  return (
    <div className="space-y-12">
      {/* Timeline navigation */}
      <div className="flex justify-between items-center overflow-x-auto pb-4 md:pb-0">
        {timelineData.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center min-w-[120px]">
            <button
              onClick={() => setActiveItem(item.id)}
              className={`relative flex flex-col items-center group ${
                activeItem === item.id ? "opacity-100" : "opacity-60 hover:opacity-80"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                  activeItem === item.id
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-slate-500 border border-slate-200"
                }`}
              >
                <Calendar className="w-5 h-5" />
              </div>
              <span
                className={`mt-2 text-sm font-medium ${activeItem === item.id ? "text-indigo-600" : "text-slate-600"}`}
              >
                {item.period}
              </span>
            </button>

            {index < timelineData.length - 1 && (
              <div className="hidden md:block absolute h-[2px] bg-slate-200 w-full top-[20px] left-1/2 -z-10" />
            )}
          </div>
        ))}
      </div>

      {/* Timeline content */}
      <div className="relative">
        {timelineData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeItem === item.id ? 1 : 0,
              y: activeItem === item.id ? 0 : 20,
              display: activeItem === item.id ? "block" : "none",
            }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-5 h-5 text-slate-500" />
              <span className="text-slate-600 text-sm">{item.date}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {item.tasks.map((task) => (
                <Card
                  key={task.id}
                  className={`border-l-4 ${categoryColors[task.category].border} hover:shadow-md transition-shadow`}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <Badge
                          className={`${categoryColors[task.category].bg} ${categoryColors[task.category].text} mb-2`}
                        >
                          {task.category === "video" && "短视频"}
                          {task.category === "integration" && "集成"}
                          {task.category === "learning" && "学习路径"}
                          {task.category === "ai" && "AI 功能"}
                          {task.category === "search" && "搜索"}
                        </Badge>
                        <h3 className="font-medium text-slate-800">{task.name}</h3>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-slate-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
