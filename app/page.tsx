import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import { ContentExplorer } from "@/components/content-explorer"
import { LearningActivity } from "@/components/learning-activity"
import { LearnerInsights } from "@/components/learner-insights"
import { ExportButton } from "@/components/export-button"
import { DepartmentFilter } from "@/components/department-filter"

export default function LinkedInLearningInsights() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold md:text-2xl">领英学习数据洞察平台</h1>
          <div className="flex items-center gap-4">
            <DepartmentFilter />
            <DateRangePicker />
            <ExportButton />
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
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
      </main>
      <footer className="border-t bg-muted px-4 py-3 text-center text-sm text-muted-foreground md:px-6">
        © {new Date().getFullYear()} 领英学习数据洞察平台 | 数据来源: LinkedIn Learning API
      </footer>
    </div>
  )
}
