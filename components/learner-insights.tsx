"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DataSourceTooltip } from "@/components/data-source-tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

export function LearnerInsights() {
  const [selectedLearner, setSelectedLearner] = React.useState<string | null>("张三")

  // 模拟学习者数据
  const learners = [
    { id: "1", name: "张三", email: "zhangsan@example.com", group: "工程部", avatar: "Z" },
    { id: "2", name: "李四", email: "lisi@example.com", group: "市场部", avatar: "L" },
    { id: "3", name: "王五", email: "wangwu@example.com", group: "销售部", avatar: "W" },
    { id: "4", name: "赵六", email: "zhaoliu@example.com", group: "人力资源部", avatar: "Z" },
    { id: "5", name: "钱七", email: "qianqi@example.com", group: "财务部", avatar: "Q" },
  ]

  // 模拟已完成课程数据
  const completedCourses = [
    { id: "c1", name: "数据分析基础", completionDate: "2023-06-10", duration: "4 小时 30 分钟" },
    { id: "c2", name: "领导力与团队管理", completionDate: "2023-05-25", duration: "6 小时 15 分钟" },
    { id: "c3", name: "项目管理专业技能", completionDate: "2023-05-12", duration: "5 小时 45 分钟" },
  ]

  // 模拟进行中课程数据
  const inProgressCourses = [
    { id: "p1", name: "有效沟通技巧", progress: 75, lastActivity: "2023-06-15" },
    { id: "p2", name: "Excel高级应用", progress: 45, lastActivity: "2023-06-14" },
    { id: "p3", name: "数据可视化入门", progress: 20, lastActivity: "2023-06-12" },
  ]

  // 模拟技能数据
  const skillsData = [
    { name: "数据分析", count: 4, color: "#0088FE" },
    { name: "领导力", count: 3, color: "#00C49F" },
    { name: "项目管理", count: 3, color: "#FFBB28" },
    { name: "沟通", count: 2, color: "#FF8042" },
    { name: "Excel", count: 2, color: "#8884D8" },
    { name: "数据可视化", count: 1, color: "#82CA9D" },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
      {/* 左侧面板：学习者/群组选择 */}
      <div className="space-y-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">学习者选择</CardTitle>
              <CardDescription>选择要查看的学习者</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="搜索学习者..." className="pl-8" />
              </div>
              <div className="space-y-2">
                {learners.map((learner) => (
                  <div
                    key={learner.id}
                    className={`cursor-pointer rounded-md p-2 transition-colors ${
                      selectedLearner === learner.name ? "bg-muted" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedLearner(learner.name)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground`}
                      >
                        {learner.avatar}
                      </div>
                      <div>
                        <div className="font-medium">{learner.name}</div>
                        <div className="text-xs text-muted-foreground">{learner.email}</div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Badge variant="outline" className="text-xs">
                        {learner.group}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">群组选择</CardTitle>
              <CardDescription>按群组筛选学习者</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="选择群组" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">工程部</SelectItem>
                  <SelectItem value="marketing">市场部</SelectItem>
                  <SelectItem value="sales">销售部</SelectItem>
                  <SelectItem value="hr">人力资源部</SelectItem>
                  <SelectItem value="finance">财务部</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* 右侧主区域：选定学习者/群组的报告 */}
      <div className="space-y-6">
        {selectedLearner ? (
          <>
            {/* 学习者概览 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10"></div>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      {selectedLearner[0]}
                    </div>
                    <div>
                      <CardTitle>{selectedLearner}</CardTitle>
                      <CardDescription>工程部 | zhangsan@example.com</CardDescription>
                    </div>
                  </div>
                  <DataSourceTooltip
                    source="Reporting API"
                    endpoint="/v2/learningActivityReports"
                    fields="learnerDetails, activities[]"
                  />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                          <i className="fa-solid fa-clock"></i>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">总学习时长</div>
                          <div className="text-2xl font-bold">16 小时 30 分钟</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-green-100 p-2 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                          <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">总完成课程</div>
                          <div className="text-2xl font-bold">3 门</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-purple-100 p-2 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                          <i className="fa-solid fa-chart-pie"></i>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">平均进度</div>
                          <div className="text-2xl font-bold">78%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Tabs defaultValue="completed">
              <TabsList className="mb-4">
                <TabsTrigger value="completed">已完成课程</TabsTrigger>
                <TabsTrigger value="in-progress">进行中课程</TabsTrigger>
                <TabsTrigger value="skills">技能习得情况</TabsTrigger>
              </TabsList>

              {/* 已完成课程/学习路径列表 */}
              <TabsContent value="completed">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>已完成课程</CardTitle>
                        <CardDescription>学习者已完成的课程和学习路径</CardDescription>
                      </div>
                      <DataSourceTooltip
                        source="Reporting API + Criteria Finder API"
                        endpoint="/v2/learningActivityReports, /v2/learningAssets"
                        fields="contentDetails.name, activities[], contentDetails.contentUrn"
                      />
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>课程名称</TableHead>
                            <TableHead>完成日期</TableHead>
                            <TableHead>学习时长</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {completedCourses.map((course) => (
                            <TableRow key={course.id} className="hover:bg-muted/50">
                              <TableCell className="font-medium">{course.name}</TableCell>
                              <TableCell>{course.completionDate}</TableCell>
                              <TableCell>{course.duration}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* 正在进行的课程/学习路径列表 */}
              <TabsContent value="in-progress">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>进行中课程</CardTitle>
                        <CardDescription>学习者正在学习的课程和学习路径</CardDescription>
                      </div>
                      <DataSourceTooltip
                        source="Reporting API"
                        endpoint="/v2/learningActivityReports"
                        fields="contentDetails.name, activities[]"
                      />
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>课程名称</TableHead>
                            <TableHead>进度</TableHead>
                            <TableHead>上次活动日期</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {inProgressCourses.map((course) => (
                            <TableRow key={course.id} className="hover:bg-muted/50">
                              <TableCell className="font-medium">{course.name}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Progress
                                    value={course.progress}
                                    className="h-2 w-[100px]"
                                    style={
                                      {
                                        background:
                                          course.progress < 30
                                            ? "rgba(239, 68, 68, 0.2)"
                                            : course.progress < 70
                                              ? "rgba(245, 158, 11, 0.2)"
                                              : "rgba(34, 197, 94, 0.2)",
                                        "--progress-color":
                                          course.progress < 30
                                            ? "rgb(239, 68, 68)"
                                            : course.progress < 70
                                              ? "rgb(245, 158, 11)"
                                              : "rgb(34, 197, 94)",
                                      } as React.CSSProperties
                                    }
                                  />
                                  <span className="text-sm">{course.progress}%</span>
                                </div>
                              </TableCell>
                              <TableCell>{course.lastActivity}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* 技能习得情况 */}
              <TabsContent value="skills">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>技能习得情况</CardTitle>
                        <CardDescription>基于已完成课程的技能分布</CardDescription>
                      </div>
                      <DataSourceTooltip
                        source="Reporting API + Criteria Finder API"
                        endpoint="/v2/learningActivityReports, /v2/learningAssets, /v2/learningClassifications"
                        fields="contentDetails.contentUrn, details.learningClassifications"
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {skillsData.map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.count} 门课程</span>
                            </div>
                            <Progress
                              value={(skill.count / 4) * 100}
                              className="h-2"
                              style={
                                {
                                  "--progress-color": skill.color,
                                } as React.CSSProperties
                              }
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {skillsData.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="text-sm"
                            style={{
                              backgroundColor: `${skill.color}20`,
                              color: skill.color,
                            }}
                          >
                            {skill.name} ({skill.count})
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="flex h-[400px] items-center justify-center rounded-lg border border-dashed">
            <div className="text-center">
              <h3 className="text-lg font-medium">请选择学习者</h3>
              <p className="text-sm text-muted-foreground">从左侧面板选择一个学习者以查看详细信息</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
