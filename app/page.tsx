import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import { ContentExplorer } from "@/components/content-explorer"
import { LearningActivity } from "@/components/learning-activity"
import { LearnerInsights } from "@/components/learner-insights"
import { ExportButton } from "@/components/export-button"
import { DepartmentFilter } from "@/components/department-filter"
import { HeroSection } from "@/components/hero-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LinkedInLearningInsights() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold md:text-2xl">领英学习数据洞察平台</h1>
          <div className="flex items-center gap-2 md:gap-4">
            <DepartmentFilter />
            <DateRangePicker />
            <ExportButton />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <div className="px-4 py-6 md:px-6 md:py-8">
          <Tabs defaultValue="content-explorer" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="content-explorer">学习内容浏览器</TabsTrigger>
              <TabsTrigger value="learning-activity">学习活动报告</TabsTrigger>
              <TabsTrigger value="learner-insights">学习者洞察</TabsTrigger>
            </TabsList>
            <TabsContent value="content-explorer">
              <ContentExplorer />
            </TabsContent>
            <TabsContent value="learning-activity">
              <LearningActivity />
            </TabsContent>
            <TabsContent value="learner-insights">
              <LearnerInsights />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t bg-muted px-4 py-6 text-center text-sm text-muted-foreground md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-linkedin text-xl text-blue-500"></i>
              <span>© {new Date().getFullYear()} 领英学习数据洞察平台</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <i className="fa-solid fa-book-open mr-1"></i> 使用指南
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <i className="fa-solid fa-circle-question mr-1"></i> 帮助中心
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <i className="fa-solid fa-code mr-1"></i> API 文档
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
