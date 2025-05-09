"use client"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DataSourceTooltip } from "@/components/data-source-tooltip"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { TooltipProvider } from "@/components/ui/tooltip"

export function LearningActivity() {
  // 模拟数据
  const kpiData = {
    totalLearningTime: "1,245 小时",
    totalCompletions: "328 课程",
    activeLearnersCount: "156 人",
    averageCompletionRate: "67%",
  }

  const trendData = [
    { name: "1月", 学习时长: 120, 完成数: 15, 活跃用户: 45 },
    { name: "2月", 学习时长: 150, 完成数: 20, 活跃用户: 50 },
    { name: "3月", 学习时长: 180, 完成数: 25, 活跃用户: 60 },
    { name: "4月", 学习时长: 170, 完成数: 22, 活跃用户: 55 },
    { name: "5月", 学习时长: 200, 完成数: 30, 活跃用户: 65 },
    { name: "6月", 学习时长: 220, 完成数: 35, 活跃用户: 70 },
  ]

  const topContentData = [
    { name: "数据分析基础", views: 245, duration: 1200, completions: 85 },
    { name: "领导力与团队管理", views: 210, duration: 980, completions: 72 },
    { name: "项目管理专业技能", views: 195, duration: 850, completions: 68 },
    { name: "有效沟通技巧", views: 180, duration: 780, completions: 63 },
    { name: "Excel高级应用", views: 165, duration: 720, completions: 57 },
  ]

  const learnerLeaderboardData = [
    { rank: 1, name: "张三", email: "zhangsan@example.com", group: "工程部", duration: "45 小时", completions: 12 },
    { rank: 2, name: "李四", email: "lisi@example.com", group: "市场部", duration: "38 小时", completions: 10 },
    { rank: 3, name: "王五", email: "wangwu@example.com", group: "销售部", duration: "32 小时", completions: 9 },
    { rank: 4, name: "赵六", email: "zhaoliu@example.com", group: "人力资源部", duration: "29 小时", completions: 8 },
    { rank: 5, name: "钱七", email: "qianqi@example.com", group: "财务部", duration: "25 小时", completions: 7 },
  ]

  const contentTypeData = [
    { name: "课程", value: 45, color: "#0088FE" },
    { name: "视频", value: 30, color: "#00C49F" },
    { name: "学习路径", value: 15, color: "#FFBB28" },
    { name: "文章", value: 10, color: "#FF8042" },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* KPI 卡片 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "总学习时长",
              value: kpiData.totalLearningTime,
              change: "+12%",
              icon: "fa-solid fa-clock",
              color: "text-blue-500",
              endpoint: "/v2/learningActivityReports",
              fields: "activities[].engagementValue (engagementType: SECONDS_VIEWED)",
            },
            {
              title: "总完成课程数",
              value: kpiData.totalCompletions,
              change: "+8%",
              icon: "fa-solid fa-graduation-cap",
              color: "text-green-500",
              endpoint: "/v2/learningActivityReports",
              fields: "activities[].engagementValue (engagementType: COMPLETIONS)",
            },
            {
              title: "活跃学习者数",
              value: kpiData.activeLearnersCount,
              change: "+5%",
              icon: "fa-solid fa-users",
              color: "text-purple-500",
              endpoint: "/v2/learningActivityReports",
              fields: "learnerDetails.uniqueUserId",
            },
            {
              title: "平均完成率",
              value: kpiData.averageCompletionRate,
              change: "+3%",
              icon: "fa-solid fa-chart-pie",
              color: "text-amber-500",
              endpoint: "/v2/learningActivityReports",
              fields: "activities[].engagementValue (engagementType: PROGRESS_PERCENTAGE)",
            },
          ].map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rounded-full bg-muted opacity-20"></div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                  <DataSourceTooltip source="Reporting API" endpoint={kpi.endpoint} fields={kpi.fields} />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">{kpi.value}</div>
                      <p className="text-xs text-muted-foreground">较上月增长 {kpi.change}</p>
                    </div>
                    <div className={`rounded-full bg-muted p-3 ${kpi.color}`}>
                      <i className={`${kpi.icon}`}></i>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 学习活动趋势图 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>学习活动趋势</CardTitle>
                <CardDescription>按月查看学习活动趋势</CardDescription>
              </div>
              <DataSourceTooltip
                source="Reporting API"
                endpoint="/v2/learningActivityReports"
                fields="activities[].engagementValue, firstEngagedAt/lastEngagedAt"
              />
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="duration">
                <TabsList className="mb-4">
                  <TabsTrigger value="duration">学习时长</TabsTrigger>
                  <TabsTrigger value="completions">完成数</TabsTrigger>
                  <TabsTrigger value="active-users">活跃用户</TabsTrigger>
                </TabsList>
                <TabsContent value="duration">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="学习时长" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="completions">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="完成数" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="active-users">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="活跃用户" stroke="#ffc658" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 最受欢迎内容 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>最受欢迎内容</CardTitle>
                  <CardDescription>按观看次数排序的热门内容</CardDescription>
                </div>
                <DataSourceTooltip
                  source="Reporting API"
                  endpoint="/v2/learningActivityReports"
                  fields="contentDetails.name, contentDetails.contentUrn, activities[]"
                />
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="views">
                  <TabsList className="mb-4">
                    <TabsTrigger value="views">观看次数</TabsTrigger>
                    <TabsTrigger value="duration">观看时长</TabsTrigger>
                    <TabsTrigger value="completions">完成次数</TabsTrigger>
                  </TabsList>
                  <TabsContent value="views">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        layout="vertical"
                        data={topContentData}
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="views" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="duration">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        layout="vertical"
                        data={topContentData}
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="duration" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="completions">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        layout="vertical"
                        data={topContentData}
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="completions" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* 内容类型参与度 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>内容类型参与度</CardTitle>
                  <CardDescription>按内容类型查看学习时长分布</CardDescription>
                </div>
                <DataSourceTooltip
                  source="Reporting API"
                  endpoint="/v2/learningActivityReports"
                  fields="activities[].assetType, engagementValue"
                />
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={contentTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {contentTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 学习者排行榜 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>学习者排行榜</CardTitle>
                <CardDescription>按学习时长排序的前 5 名学习者</CardDescription>
              </div>
              <DataSourceTooltip
                source="Reporting API"
                endpoint="/v2/learningActivityReports"
                fields="learnerDetails (name, email, enterpriseGroups), activities[]"
              />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">排名</TableHead>
                    <TableHead>学习者姓名</TableHead>
                    <TableHead>邮箱</TableHead>
                    <TableHead>所属群组</TableHead>
                    <TableHead>总学习时长</TableHead>
                    <TableHead>总完成课程数</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {learnerLeaderboardData.map((learner) => (
                    <TableRow key={learner.rank} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        {learner.rank <= 3 ? (
                          <span
                            className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                              learner.rank === 1
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-500"
                                : learner.rank === 2
                                  ? "bg-gray-100 text-gray-700 dark:bg-gray-700/20 dark:text-gray-400"
                                  : "bg-amber-100 text-amber-700 dark:bg-amber-700/20 dark:text-amber-500"
                            }`}
                          >
                            {learner.rank}
                          </span>
                        ) : (
                          learner.rank
                        )}
                      </TableCell>
                      <TableCell>{learner.name}</TableCell>
                      <TableCell>{learner.email}</TableCell>
                      <TableCell>{learner.group}</TableCell>
                      <TableCell>{learner.duration}</TableCell>
                      <TableCell>{learner.completions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* 详细活动日志 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>详细活动日志</CardTitle>
                <CardDescription>最近的学习活动记录</CardDescription>
              </div>
              <DataSourceTooltip
                source="Reporting API"
                endpoint="/v2/learningActivityReports"
                fields="learnerDetails, contentDetails, activities[]"
              />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>时间戳</TableHead>
                    <TableHead>学习者</TableHead>
                    <TableHead>内容</TableHead>
                    <TableHead>内容类型</TableHead>
                    <TableHead>活动类型</TableHead>
                    <TableHead>活动值</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell>2023-06-15 14:30:22</TableCell>
                    <TableCell>张三</TableCell>
                    <TableCell>数据分析基础</TableCell>
                    <TableCell>
                      <Badge variant="outline">课程</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">观看</Badge>
                    </TableCell>
                    <TableCell>45 分钟</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell>2023-06-15 13:15:10</TableCell>
                    <TableCell>李四</TableCell>
                    <TableCell>领导力与团队管理</TableCell>
                    <TableCell>
                      <Badge variant="outline">学习路径</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">完成</Badge>
                    </TableCell>
                    <TableCell>100%</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell>2023-06-15 11:45:33</TableCell>
                    <TableCell>王五</TableCell>
                    <TableCell>项目管理专业技能</TableCell>
                    <TableCell>
                      <Badge variant="outline">课程</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">进度</Badge>
                    </TableCell>
                    <TableCell>75%</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell>2023-06-15 10:20:45</TableCell>
                    <TableCell>赵六</TableCell>
                    <TableCell>有效沟通技巧</TableCell>
                    <TableCell>
                      <Badge variant="outline">视频</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">观看</Badge>
                    </TableCell>
                    <TableCell>15 分钟</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell>2023-06-15 09:05:18</TableCell>
                    <TableCell>钱七</TableCell>
                    <TableCell>Excel高级应用</TableCell>
                    <TableCell>
                      <Badge variant="outline">课程</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">开始</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </TooltipProvider>
  )
}
