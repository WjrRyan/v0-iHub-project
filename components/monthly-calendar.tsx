"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, Video, Link2, BookOpen, Search, Bot } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

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

const categoryColors = {
  video: { bg: "bg-pink-100", text: "text-pink-800", border: "border-pink-200", color: "text-pink-500" },
  integration: { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200", color: "text-blue-500" },
  learning: { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200", color: "text-purple-500" },
  ai: { bg: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-200", color: "text-emerald-500" },
  search: { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200", color: "text-amber-500" },
}

const categoryIcons = {
  video: <Video className="w-4 h-4" />,
  integration: <Link2 className="w-4 h-4" />,
  learning: <BookOpen className="w-4 h-4" />,
  ai: <Bot className="w-4 h-4" />,
  search: <Search className="w-4 h-4" />,
}

export default function MonthlyCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 4)) // 5月

  // 获取当前月份的天数
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // 获取当前月份的第一天是星期几
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  // 获取当前月份的名称
  const getMonthName = (date: Date) => {
    return date.toLocaleString("zh-CN", { month: "long" })
  }

  // 获取指定日期的任务
  const getTasksForDate = (date: Date) => {
    return tasks.filter((task) => {
      const taskStartDate = new Date(task.startDate)
      const taskEndDate = new Date(task.endDate)

      // 重置时间部分以便于比较日期
      const compareDate = new Date(date)
      compareDate.setHours(0, 0, 0, 0)
      taskStartDate.setHours(0, 0, 0, 0)
      taskEndDate.setHours(0, 0, 0, 0)

      return compareDate >= taskStartDate && compareDate <= taskEndDate
    })
  }

  // 生成日历网格
  const generateCalendarGrid = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []

    // 添加上个月的天数填充第一周
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    // 添加当前月的天数
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  // 处理月份切换
  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  // 生成日历网格
  const calendarDays = generateCalendarGrid()

  // 获取今天的日期
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        {/* 日历头部 */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={handlePreviousMonth} className="p-2 rounded-full hover:bg-slate-100">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>

          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl font-medium text-slate-800">
              {currentMonth.getFullYear()}年{getMonthName(currentMonth)}
            </h3>
          </div>

          <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-slate-100">
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* 星期标题 */}
        <div className="grid grid-cols-7 mb-2">
          {["日", "一", "二", "三", "四", "五", "六"].map((day, index) => (
            <div key={index} className="text-center font-medium text-slate-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* 日历网格 */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="h-24 bg-slate-50 rounded-md"></div>
            }

            const isToday = date.toDateString() === today.toDateString()
            const tasksForDate = getTasksForDate(date)
            const isWeekend = date.getDay() === 0 || date.getDay() === 6

            return (
              <div
                key={date.toString()}
                className={cn(
                  "h-24 p-1 rounded-md border transition-all",
                  isToday ? "border-indigo-400 bg-indigo-50" : "border-slate-200",
                  isWeekend ? "bg-slate-50" : "bg-white",
                  "hover:border-indigo-300 hover:shadow-sm",
                )}
              >
                <div className="flex justify-between items-start">
                  <span
                    className={cn(
                      "inline-flex items-center justify-center w-6 h-6 rounded-full text-sm",
                      isToday ? "bg-indigo-600 text-white" : "text-slate-700",
                    )}
                  >
                    {date.getDate()}
                  </span>

                  {tasksForDate.length > 0 && (
                    <Badge className="bg-indigo-100 text-indigo-800 text-xs">{tasksForDate.length}</Badge>
                  )}
                </div>

                <div className="mt-1 space-y-1 overflow-y-auto max-h-[calc(100%-24px)]">
                  <TooltipProvider>
                    {tasksForDate.map((task) => (
                      <Tooltip key={task.id}>
                        <TooltipTrigger asChild>
                          <div
                            className={`flex items-center space-x-1 text-xs ${categoryColors[task.category].color} truncate`}
                          >
                            <span>{categoryIcons[task.category]}</span>
                            <span className="truncate">{task.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-sm">
                            <div className="font-medium">{task.name}</div>
                            <div className="text-xs text-slate-500">
                              {task.startDate.toLocaleDateString()} - {task.endDate.toLocaleDateString()}
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
            )
          })}
        </div>

        {/* 图例 */}
        <div className="mt-6 flex flex-wrap gap-3">
          {Object.entries(categoryColors).map(([category, colors]) => (
            <div key={category} className="flex items-center space-x-1">
              <div className={`w-3 h-3 rounded-full ${colors.bg} ${colors.border}`}></div>
              <span className="text-xs text-slate-600">
                {category === "video" && "短视频"}
                {category === "integration" && "集成"}
                {category === "learning" && "学习路径"}
                {category === "ai" && "AI 功能"}
                {category === "search" && "搜索"}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
