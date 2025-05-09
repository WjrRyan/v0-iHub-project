"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Link2, BookOpen, Search, Bot, ChevronDown, ChevronRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Task {
  id: string
  name: string
  category: "video" | "integration" | "learning" | "ai" | "search"
  startDate: Date
  endDate: Date
}

// 定义任务数据
const tasks: Task[] = [
  {
    id: "task-1",
    name: "短视频的时间埋点",
    category: "video",
    startDate: new Date(2024, 3, 25), // 4月25日
    endDate: new Date(2024, 3, 30), // 4月30日
  },
  {
    id: "task-2",
    name: "短视频视觉稿",
    category: "video",
    startDate: new Date(2024, 3, 25), // 4月25日
    endDate: new Date(2024, 4, 7), // 5月7日
  },
  {
    id: "task-3",
    name: "领英的接入 xAPI",
    category: "integration",
    startDate: new Date(2024, 4, 1), // 5月1日
    endDate: new Date(2024, 4, 7), // 5月7日
  },
  {
    id: "task-4",
    name: "学习路径改造",
    category: "learning",
    startDate: new Date(2024, 4, 1), // 5月1日
    endDate: new Date(2024, 4, 14), // 5月14日
  },
  {
    id: "task-5",
    name: "领英接入完成",
    category: "integration",
    startDate: new Date(2024, 4, 8), // 5月8日
    endDate: new Date(2024, 4, 14), // 5月14日
  },
  {
    id: "task-6",
    name: "章节总结进入短视频",
    category: "video",
    startDate: new Date(2024, 4, 8), // 5月8日
    endDate: new Date(2024, 4, 14), // 5月14日
  },
  {
    id: "task-7",
    name: "短视频搜索启动",
    category: "search",
    startDate: new Date(2024, 4, 15), // 5月15日
    endDate: new Date(2024, 4, 21), // 5月21日
  },
  {
    id: "task-8",
    name: "学习路径改造完成",
    category: "learning",
    startDate: new Date(2024, 4, 15), // 5月15日
    endDate: new Date(2024, 4, 21), // 5月21日
  },
  {
    id: "task-9",
    name: "AI 陪练上移动端，准备收尾",
    category: "ai",
    startDate: new Date(2024, 4, 15), // 5月15日
    endDate: new Date(2024, 4, 21), // 5月21日
  },
]

// 按类别对任务进行分组
const tasksByCategory = tasks.reduce(
  (acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = []
    }
    acc[task.category].push(task)
    return acc
  },
  {} as Record<string, Task[]>,
)

const categoryColors = {
  video: { bg: "bg-pink-500", light: "bg-pink-200", text: "text-pink-800", border: "border-pink-200" },
  integration: { bg: "bg-blue-500", light: "bg-blue-200", text: "text-blue-800", border: "border-blue-200" },
  learning: { bg: "bg-purple-500", light: "bg-purple-200", text: "text-purple-800", border: "border-purple-200" },
  ai: { bg: "bg-emerald-500", light: "bg-emerald-200", text: "text-emerald-800", border: "border-emerald-200" },
  search: { bg: "bg-amber-500", light: "bg-amber-200", text: "text-amber-800", border: "border-amber-200" },
}

const categoryIcons = {
  video: <Video className="w-4 h-4" />,
  integration: <Link2 className="w-4 h-4" />,
  learning: <BookOpen className="w-4 h-4" />,
  ai: <Bot className="w-4 h-4" />,
  search: <Search className="w-4 h-4" />,
}

const categoryNames = {
  video: "短视频",
  integration: "集成",
  learning: "学习路径",
  ai: "AI 功能",
  search: "搜索",
}

export default function GanttChart() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    video: true,
    integration: true,
    learning: true,
    ai: true,
    search: true,
  })

  // 定义甘特图的时间范围
  const startDate = new Date(2024, 3, 25) // 4月25日
  const endDate = new Date(2024, 4, 28) // 5月28日

  // 计算总天数
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  // 定义周的开始日期
  const weeks = [
    { start: new Date(2024, 3, 25), end: new Date(2024, 4, 1) }, // 4月25日 - 5月1日
    { start: new Date(2024, 4, 2), end: new Date(2024, 4, 8) }, // 5月2日 - 5月8日
    { start: new Date(2024, 4, 9), end: new Date(2024, 4, 15) }, // 5月9日 - 5月15日
    { start: new Date(2024, 4, 16), end: new Date(2024, 4, 22) }, // 5月16日 - 5月22日
    { start: new Date(2024, 4, 23), end: new Date(2024, 4, 29) }, // 5月23日 - 5月29日
  ]

  // 计算任务在甘特图中的位置和宽度
  const calculateTaskPosition = (task: Task) => {
    const taskStart = Math.max(task.startDate.getTime(), startDate.getTime())
    const taskEnd = Math.min(task.endDate.getTime(), endDate.getTime())

    const startOffset = (taskStart - startDate.getTime()) / (1000 * 60 * 60 * 24)
    const duration = (taskEnd - taskStart) / (1000 * 60 * 60 * 24) + 1

    const startPercent = (startOffset / totalDays) * 100
    const widthPercent = (duration / totalDays) * 100

    return {
      left: `${startPercent}%`,
      width: `${widthPercent}%`,
    }
  }

  // 切换类别展开/折叠状态
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col">
          {/* 甘特图头部 - 周时间线 */}
          <div className="flex mb-4 border-b pb-2">
            <div className="w-1/4 flex-shrink-0"></div>
            <div className="w-3/4 flex">
              {weeks.map((week, index) => (
                <div
                  key={index}
                  className="flex-1 text-center font-medium text-sm text-slate-700 border-l first:border-l-0 border-slate-200"
                >
                  {index === 0 ? "4月末" : `第${index}周`}
                  <div className="text-xs text-slate-500">
                    {week.start.getDate()}/{week.start.getMonth() + 1} - {week.end.getDate()}/{week.end.getMonth() + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 甘特图内容 */}
          {Object.entries(tasksByCategory).map(([category, categoryTasks]) => (
            <div key={category} className="mb-4">
              {/* 类别标题 */}
              <div
                className="flex items-center py-2 px-2 bg-slate-50 rounded cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                <div className="flex items-center space-x-2 w-1/4">
                  {expandedCategories[category] ? (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  )}
                  <div
                    className={`w-3 h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors].bg}`}
                  ></div>
                  <span className="font-medium text-slate-700">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </span>
                  <Badge className="ml-2">{categoryTasks.length}</Badge>
                </div>
              </div>

              {/* 类别任务 */}
              {expandedCategories[category] &&
                categoryTasks.map((task) => (
                  <div key={task.id} className="flex items-center py-2 hover:bg-slate-50">
                    <div className="w-1/4 pl-8 pr-4 flex items-center space-x-2">
                      <span className="text-sm text-slate-700 truncate">{task.name}</span>
                    </div>
                    <div className="w-3/4 relative h-8">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className={`absolute top-1 h-6 rounded-md ${categoryColors[task.category].light} border ${categoryColors[task.category].border} flex items-center justify-center text-xs font-medium ${categoryColors[task.category].text}`}
                              style={calculateTaskPosition(task)}
                            >
                              <span className="truncate px-2">{task.name}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div>
                              <div className="font-medium">{task.name}</div>
                              <div className="text-xs text-slate-500">
                                {task.startDate.toLocaleDateString()} - {task.endDate.toLocaleDateString()}
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                ))}
            </div>
          ))}

          {/* 今天的指示线 */}
          <div className="relative h-full">
            <div
              className="absolute top-0 bottom-0 w-px bg-red-500 z-10"
              style={{
                left: `${((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) / totalDays) * 100}%`,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-red-500 -ml-1"></div>
              <div className="text-xs text-red-500 -ml-6 mt-1">今天</div>
            </div>
          </div>

          {/* 图例 */}
          <div className="mt-6 flex flex-wrap gap-3">
            {Object.entries(categoryColors).map(([category, colors]) => (
              <div key={category} className="flex items-center space-x-1">
                <div className={`w-3 h-3 rounded-full ${colors.bg}`}></div>
                <span className="text-xs text-slate-600">{categoryNames[category as keyof typeof categoryNames]}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
