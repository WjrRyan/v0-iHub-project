"use client"

import * as React from "react"
import { Search, LayoutGrid, List, Filter, BookOpen, PlayCircle, GraduationCap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DataSourceTooltip } from "@/components/data-source-tooltip"
import { motion } from "framer-motion"

export function ContentExplorer() {
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")
  const [selectedContent, setSelectedContent] = React.useState<string | null>(null)

  // 模拟内容数据
  const contentItems = Array.from({ length: 12 }, (_, i) => ({
    id: `content-${i}`,
    title: `LinkedIn 学习课程 ${i + 1}`,
    type: i % 3 === 0 ? "COURSE" : i % 3 === 1 ? "LEARNING_PATH" : "VIDEO",
    difficulty: i % 3 === 0 ? "初级" : i % 3 === 1 ? "中级" : "高级",
    description: "这是一个关于专业技能发展的课程，帮助您提升职场竞争力。",
    publishedAt: new Date(2023, i % 12, (i % 28) + 1).toISOString(),
    skills: ["领导力", "沟通", "项目管理", "数据分析"].slice(0, (i % 4) + 1),
    thumbnail: `/placeholder.svg?height=120&width=200&text=课程${i + 1}`,
  }))

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
      {/* 移动端筛选器按钮 */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              筛选器
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>内容筛选器</SheetTitle>
              <SheetDescription>使用以下选项筛选学习内容</SheetDescription>
            </SheetHeader>
            <div className="mt-4">{renderFilters()}</div>
          </SheetContent>
        </Sheet>
      </div>

      {/* 桌面端筛选器面板 */}
      <div className="hidden md:block">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">内容筛选器</h3>
          {renderFilters()}
        </div>
      </div>

      {/* 内容展示区域 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            显示 <strong>120</strong> 个结果
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="relevance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">相关性</SelectItem>
                <SelectItem value="popularity">受欢迎程度</SelectItem>
                <SelectItem value="newest">最新发布</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex rounded-md border">
              <Button
                variant="ghost"
                size="icon"
                className={viewMode === "grid" ? "bg-muted" : ""}
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid className="h-4 w-4" />
                <span className="sr-only">网格视图</span>
              </Button>
              <Separator orientation="vertical" />
              <Button
                variant="ghost"
                size="icon"
                className={viewMode === "list" ? "bg-muted" : ""}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
                <span className="sr-only">列表视图</span>
              </Button>
            </div>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="relative">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="h-[120px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="absolute bottom-2 right-2 rounded-full bg-black/70 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.type === "COURSE" ? (
                        <BookOpen className="h-4 w-4" />
                      ) : item.type === "LEARNING_PATH" ? (
                        <GraduationCap className="h-4 w-4" />
                      ) : (
                        <PlayCircle className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <div className="flex items-start justify-between">
                      <Badge
                        variant={
                          item.type === "COURSE" ? "default" : item.type === "LEARNING_PATH" ? "secondary" : "outline"
                        }
                      >
                        {item.type === "COURSE" ? "课程" : item.type === "LEARNING_PATH" ? "学习路径" : "视频"}
                      </Badge>
                      <Badge variant="outline">{item.difficulty}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-1 p-4 pt-0">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-[80px] w-[120px] overflow-hidden rounded">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-1 right-1 rounded-full bg-black/70 p-1 text-white">
                      {item.type === "COURSE" ? (
                        <BookOpen className="h-3 w-3" />
                      ) : item.type === "LEARNING_PATH" ? (
                        <GraduationCap className="h-3 w-3" />
                      ) : (
                        <PlayCircle className="h-3 w-3" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <Badge
                        variant={
                          item.type === "COURSE" ? "default" : item.type === "LEARNING_PATH" ? "secondary" : "outline"
                        }
                      >
                        {item.type === "COURSE" ? "课程" : item.type === "LEARNING_PATH" ? "学习路径" : "视频"}
                      </Badge>
                      <Badge variant="outline">{item.difficulty}</Badge>
                      <span className="text-xs text-muted-foreground">
                        发布于 {new Date(item.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="line-clamp-1 text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-2 py-4">
          <Button variant="outline" size="sm" disabled>
            上一页
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <span>...</span>
          <Button variant="outline" size="sm">
            10
          </Button>
          <Button variant="outline" size="sm">
            下一页
          </Button>
        </div>
      </div>
    </div>
  )

  function renderFilters() {
    return (
      <div className="space-y-4">
        <div>
          <div className="flex items-center">
            <Label className="mb-2">关键词搜索</Label>
            <DataSourceTooltip source="Criteria Finder API" endpoint="/v2/learningAssets" fields="keyword" />
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="搜索课程、技能或主题..." className="pl-8" />
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <Label className="mb-2">资产类型</Label>
            <DataSourceTooltip source="Criteria Finder API" endpoint="/v2/learningAssets" fields="assetTypes" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="course" />
              <label htmlFor="course" className="text-sm">
                课程
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="learning-path" />
              <label htmlFor="learning-path" className="text-sm">
                学习路径
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="video" />
              <label htmlFor="video" className="text-sm">
                视频
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <Label className="mb-2">难度级别</Label>
            <DataSourceTooltip source="Criteria Finder API" endpoint="/v2/learningAssets" fields="difficultyLevels" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="beginner" />
              <label htmlFor="beginner" className="text-sm">
                初级
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="intermediate" />
              <label htmlFor="intermediate" className="text-sm">
                中级
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="advanced" />
              <label htmlFor="advanced" className="text-sm">
                高级
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <Label className="mb-2">分类/技能</Label>
            <DataSourceTooltip
              source="Criteria Finder API"
              endpoint="/v2/learningClassifications, /v2/learningAssets"
              fields="classifications"
            />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="选择技能或主题" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="leadership">领导力</SelectItem>
              <SelectItem value="communication">沟通</SelectItem>
              <SelectItem value="project-management">项目管理</SelectItem>
              <SelectItem value="data-analysis">数据分析</SelectItem>
              <SelectItem value="programming">编程</SelectItem>
            </SelectContent>
          </Select>
          <div className="mt-2 flex flex-wrap gap-1">
            <Badge variant="secondary" className="flex items-center gap-1">
              领导力
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <span className="sr-only">移除</span>
                &times;
              </Button>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              数据分析
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <span className="sr-only">移除</span>
                &times;
              </Button>
            </Badge>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <Label className="mb-2">语言/地区</Label>
            <DataSourceTooltip source="Criteria Finder API" endpoint="/v2/learningAssets" fields="locales" />
          </div>
          <Select defaultValue="zh_CN">
            <SelectTrigger>
              <SelectValue placeholder="选择语言" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zh_CN">中文 (简体)</SelectItem>
              <SelectItem value="en_US">英语 (美国)</SelectItem>
              <SelectItem value="ja_JP">日语</SelectItem>
              <SelectItem value="fr_FR">法语</SelectItem>
              <SelectItem value="de_DE">德语</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">应用筛选器</Button>
      </div>
    )
  }
}
