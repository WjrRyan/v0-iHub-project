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

export function LearnerInsights() {
  const [selectedLearner, setSelectedLearner] = React.useState<string | null>("张三")

  // 模拟学习者数据
  const learners = [
    { id: "1", name: "张三", email: "zhangsan@example.com", group: "工程部" },
    { id: "2", name: "李四", email: "lisi@example.com", group: "市场部" },
    { id: "3", name: "王五", email: "wangwu@example.com", group: "销售部" },
    { id: "4", name: "赵六", email: "zhaoliu@example.com", group: "人力资源部" },
    { id: "5", name: "钱七", email: "qianqi@example.com", group: "财务部" },
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
    { name: "数据分析", count: 4 },
    { name: "领导力", count: 3 },
    { name: "项目管理", count: 3 },
    { name: "沟通", count: 2 },
    { name: "Excel", count: 2 },
    { name: "数据可视化", count: 1 },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
      {/* 左侧面板：学习者/群组选择 */}
      <div className="space-y-4">
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
                  className={`cursor-pointer rounded-md p-2 ${
                    selectedLearner === learner.name ? "bg-muted" : "hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedLearner(learner.name)}
                >
                  <div className="font-medium">{learner.name}</div>
                  <div className="text-xs text-muted-foreground">{learner.email}</div>
                  <div className="mt-1">
                    <Badge variant="outline" className="text-xs">
                      {learner.group}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
      </div>

      {/* 右侧主区域：选定学习者/群组的报告 */}
      <div className="space-y-6">
        {selectedLearner ? (
          <>
            {/* 学习者概览 */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{selectedLearner}</CardTitle>
                  <CardDescription>工程部 | zhangsan@example.com</CardDescription>
                </div>
                <DataSourceTooltip
                  source="Reporting API"
                  endpoint="/v2/learningActivityReports"
                  fields="learnerDetails, activities[]"
                />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">总学习时长</div>
                    <div className="text-2xl font-bold">16 小时 30 分钟</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">总完成课程</div>
                    <div className="text-2xl font-bold">3 门</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">平均进度</div>
                    <div className="text-2xl font-bold">78%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="completed">
              <TabsList className="mb-4">
                <TabsTrigger value="completed">已完成课程</TabsTrigger>
                <TabsTrigger value="in-progress">进行中课程</TabsTrigger>
                <TabsTrigger value="skills">技能习得情况</TabsTrigger>
              </TabsList>

              {/* 已完成课程/学习路径列表 */}
              <TabsContent value="completed">
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
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">{course.name}</TableCell>
                            <TableCell>{course.completionDate}</TableCell>
                            <TableCell>{course.duration}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 正在进行的课程/学习路径列表 */}
              <TabsContent value="in-progress">
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
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">{course.name}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Progress value={course.progress} className="h-2 w-[100px]" />
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
              </TabsContent>

              {/* 技能习得情况 */}
              <TabsContent value="skills">
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
                          <Progress value={(skill.count / 4) * 100} className="h-2" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {skillsData.map((skill) => (
                        <Badge key={skill.name} variant="secondary" className="text-sm">
                          {skill.name} ({skill.count})
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
