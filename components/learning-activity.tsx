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
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DataSourceTooltip } from "@/components/data-source-tooltip"

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
    { name: "课程", value: 45 },
    { name: "视频", value: 30 },
    { name: "学习路径", value: 15 },
    { name: "文章", value: 10 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <div className="space-y-6">
      {/* KPI 卡片 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">总学习时长</CardTitle>
            <DataSourceTooltip
              source="Reporting API"
              endpoint="/v2/learningActivityReports"
              fields="activities[].engagementValue (engagementType: SECONDS_VIEWED)"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.totalLearningTime}</div>
            <p className="text-xs text-muted-foreground">较上月增长 12%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">总完成课程数</CardTitle>
            <DataSourceTooltip
              source="Reporting API"
              endpoint="/v2/learningActivityReports"
              fields="activities[].engagementValue (engagementType: COMPLETIONS)"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.totalCompletions}</div>
            <p className="text-xs text-muted-foreground">较上月增长 8%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">活跃学习者数</CardTitle>
            <DataSourceTooltip
              source="Reporting API"
              endpoint="/v2/learningActivityReports"
              fields="learnerDetails.uniqueUserId"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.activeLearnersCount}</div>
            <p className="text-xs text-muted-foreground">较上月增长 5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">平均完成率</CardTitle>
            <DataSourceTooltip
              source="Reporting API"
              endpoint="/v2/learningActivityReports"
              fields="activities[].engagementValue (engagementType: PROGRESS_PERCENTAGE)"
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.averageCompletionRate}</div>
            <p className="text-xs text-muted-foreground">较上月增长 3%</p>
          </CardContent>
        </Card>
      </div>

      {/* 学习活动趋势图 */}
      <Card>
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
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="学习时长" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="completions">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="完成数" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="active-users">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="活跃用户" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 最受欢迎内容 */}
        <Card>
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

        {/* 内容类型参与度 */}
        <Card>
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
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* 学习者排行榜 */}
      <Card>
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
                <TableRow key={learner.rank}>
                  <TableCell className="font-medium">{learner.rank}</TableCell>
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

      {/* 详细活动日志 */}
      <Card>
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
              <TableRow>
                <TableCell>2023-06-15 14:30:22</TableCell>
                <TableCell>张三</TableCell>
                <TableCell>数据分析基础</TableCell>
                <TableCell>课程</TableCell>
                <TableCell>观看</TableCell>
                <TableCell>45 分钟</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-15 13:15:10</TableCell>
                <TableCell>李四</TableCell>
                <TableCell>领导力与团队管理</TableCell>
                <TableCell>学习路径</TableCell>
                <TableCell>完成</TableCell>
                <TableCell>100%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-15 11:45:33</TableCell>
                <TableCell>王五</TableCell>
                <TableCell>项目管理专业技能</TableCell>
                <TableCell>课程</TableCell>
                <TableCell>进度</TableCell>
                <TableCell>75%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-15 10:20:45</TableCell>
                <TableCell>赵六</TableCell>
                <TableCell>有效沟通技巧</TableCell>
                <TableCell>视频</TableCell>
                <TableCell>观看</TableCell>
                <TableCell>15 分钟</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-15 09:05:18</TableCell>
                <TableCell>钱七</TableCell>
                <TableCell>Excel高级应用</TableCell>
                <TableCell>课程</TableCell>
                <TableCell>开始</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
