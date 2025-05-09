"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M0 0L48 26.7C96 53 192 107 288 133.3C384 160 480 160 576 138.7C672 117 768 75 864 74.7C960 75 1056 117 1152 117.3C1248 117 1344 75 1392 53.3L1440 32V800H1392C1344 800 1248 800 1152 800C1056 800 960 800 864 800C768 800 672 800 576 800C480 800 384 800 288 800C192 800 96 800 48 800H0V0Z"
            fill="url(#paint0_linear)"
          />
          <path
            opacity="0.5"
            d="M0 800L48 773.3C96 747 192 693 288 666.7C384 640 480 640 576 661.3C672 683 768 725 864 725.3C960 725 1056 683 1152 682.7C1248 683 1344 725 1392 746.7L1440 768V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V800Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0077B5" />
              <stop offset="1" stopColor="#0077B5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="720" y1="800" x2="720" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0077B5" />
              <stop offset="1" stopColor="#0077B5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16 lg:py-20">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            领英学习数据<span className="text-blue-600 dark:text-blue-400">洞察平台</span>
          </h1>
          <p className="mb-6 max-w-[600px] text-lg text-muted-foreground md:text-xl">
            全面分析学习内容、活动和学习者行为，助力企业打造高效学习文化，提升员工技能发展。
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              <i className="fa-solid fa-chart-line"></i>
              查看数据报告
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <i className="fa-solid fa-circle-play"></i>
              平台使用教程
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-database text-blue-600 dark:text-blue-400"></i>
              <span className="text-sm font-medium">实时数据</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-chart-pie text-blue-600 dark:text-blue-400"></i>
              <span className="text-sm font-medium">可视化分析</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-file-export text-blue-600 dark:text-blue-400"></i>
              <span className="text-sm font-medium">数据导出</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900/30"></div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-100 dark:bg-blue-900/30"></div>
            <img
              src="/placeholder.svg?height=400&width=600&text=领英学习数据分析"
              alt="领英学习数据分析平台"
              className="relative z-10 rounded-lg shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  )
}
