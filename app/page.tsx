import ProjectTimeline from "@/components/project-timeline"
import MonthlyCalendar from "@/components/monthly-calendar"
import GanttChart from "@/components/gantt-chart"
import TimeBasedView from "@/components/time-based-view"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">项目时间规划</h1>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">时间视图</h2>
          <TimeBasedView />
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">甘特图视图</h2>
          <GanttChart />
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">阶段视图</h2>
          <ProjectTimeline />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-700 mb-4">五月日历视图</h2>
          <MonthlyCalendar />
        </div>
      </div>
    </div>
  )
}
