"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video, Link2, BookOpen, Search, Bot, Calendar, CheckCircle2 } from "lucide-react"

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

const categoryNames = {
  video: "短视频",
  integration: "集成",
  learning: "学习路径",
  ai: "AI 功能",
  search: "搜索",
}

// 定义时间段
const timePeriods = [
  {
    id: "before-may",
    name: "5/1 之前",
    startDate: new Date(2024, 3, 25), // 4月25日
    endDate: new Date(2024, 3, 30), // 4月30日
  },
  {
    id: "week-1",
    name: "5/1 后第一周",
    startDate: new Date(2024, 4, 1), // 5月1日
    endDate: new Date(2024, 4, 7), // 5月7日
  },
  {
    id: "week-2",
    name: "5/1 后第二周",
    startDate: new Date(2024, 4, 8), // 5月8日
    endDate: new Date(2024, 4, 14), // 5月14日
  },
  {
    id: "week-3",
    name: "5/1 后第三周",
    startDate: new Date(2024, 4, 15), // 5月15日
    endDate: new Date(2024, 4, 21), // 5月21日
  },
]

// 判断任务是否在指定时间段内
const isTaskInPeriod = (task: Task, period: (typeof timePeriods)[0]) => {
  // 任务的开始日期在时间段内
  const startInPeriod = task.startDate >= period.startDate && task.startDate <= period.endDate

  // 任务的结束日期在时间段内
  const endInPeriod = task.endDate >= period.startDate && task.endDate <= period.endDate

  // 任务跨越整个时间段
  const spansPeriod = task.startDate <= period.startDate && task.endDate >= period.endDate

  return startInPeriod || endInPeriod || spansPeriod
}

export default function TimeBasedView() {
  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="timeline">时间轴视图</TabsTrigger>
            <TabsTrigger value="weekly">周视图</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="mt-0">
            <div className="space-y-8">
              {timePeriods.map((period) => {
                const periodTasks = tasks.filter((task) => isTaskInPeriod(task, period))
                return (
                  <div key={period.id} className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-800">{period.name}</h3>
                        <p className="text-sm text-slate-500">
                          {period.startDate.toLocaleDateString()} - {period.endDate.toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className="ml-3">{periodTasks.length} 个任务</Badge>
                    </div>

                    <div className="pl-5 border-l-2 border-indigo-100 space-y-3">
                      {periodTasks.map((task) => (
                        <div
                          key={task.id}
                          className={`p-4 rounded-lg ${categoryColors[task.category].bg} ${categoryColors[task.category].border} border`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex items-center space-x-2">
                              <span className={categoryColors[task.category].color}>
                                {categoryIcons[task.category]}
                              </span>
                              <span className="font-medium text-slate-800">{task.name}</span>
                            </div>
                            <Badge variant="outline" className={categoryColors[task.category].text}>
                              {categoryNames[task.category as keyof typeof categoryNames]}
                            </Badge>
                          </div>
                          <div className="mt-2 text-xs text-slate-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {task.startDate.toLocaleDateString()} - {task.endDate.toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {timePeriods.map((period) => {
                const periodTasks = tasks.filter((task) => isTaskInPeriod(task, period))
                return (
                  <Card key={period.id} className="overflow-hidden">
                    <div className="bg-indigo-50 p-4 border-b">
                      <h3 className="text-lg font-medium text-slate-800">{period.name}</h3>
                      <p className="text-sm text-slate-500">
                        {period.startDate.toLocaleDateString()} - {period.endDate.toLocaleDateString()}
                      </p>
                    </div>
                    <CardContent className="p-0">
                      <ul className="divide-y">
                        {periodTasks.map((task) => (
                          <li key={task.id} className="p-4 hover:bg-slate-50">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-2 h-2 rounded-full ${categoryColors[task.category].border.replace(
                                  "border",
                                  "bg",
                                )}`}
                              ></div>
                              <div className="flex-1">
                                <p className="font-medium text-slate-800">{task.name}</p>
                                <p className="text-xs text-slate-500 mt-1">
                                  {categoryNames[task.category as keyof typeof categoryNames]}
                                </p>
                              </div>
                              <CheckCircle2 className="w-5 h-5 text-slate-200" />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
