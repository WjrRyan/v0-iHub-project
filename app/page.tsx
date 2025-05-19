"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import Header from "@/components/header"
import ModelCard from "@/components/model-card"
import ModelDiagram from "@/components/model-diagram"
import Footer from "@/components/footer"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // 检查系统偏好
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(prefersDark)

    // 监听系统偏好变化
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches)
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 font-serif">
              领域模型可视化
            </h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label={darkMode ? "切换到亮色模式" : "切换到暗色模式"}
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>

          <section className="mb-12">
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                本页面展示了系统中的核心领域模型及其关系。每个模型都包含通用属性：创建人、创建时间、修改人、修改时间和删除标记。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">模型关系图</h2>
              <ModelDiagram />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ModelCard
                title="系统菜单"
                icon="fa-bars"
                properties={[
                  { name: "菜单名称", type: "String" },
                  { name: "语言", type: "Enum(中文/英文)" },
                  { name: "父级菜单id", type: "Long" },
                  { name: "链接", type: "String" },
                  { name: "排序号", type: "Integer" },
                ]}
                notes="菜单无访问权限，全员开放"
              />

              <ModelCard
                title="新闻"
                icon="fa-newspaper"
                properties={[
                  { name: "新闻标题", type: "String" },
                  { name: "语言", type: "Enum(中文/英文)" },
                  { name: "新闻跳转链接", type: "String" },
                  { name: "位置", type: "String(列表区域)" },
                  { name: "头图", type: "Image" },
                  { name: "视频", type: "Video" },
                  { name: "发布时间", type: "DateTime" },
                ]}
              />

              <ModelCard
                title="热门内容"
                icon="fa-fire"
                properties={[
                  { name: "标题", type: "String" },
                  { name: "正文描述", type: "Text" },
                  { name: "语言", type: "Enum(中文/英文)" },
                  { name: "跳转链接", type: "String" },
                  { name: "头图", type: "Image" },
                  { name: "发布时间", type: "DateTime" },
                  { name: "作者", type: "String" },
                  { name: "作者头像图片", type: "Image" },
                ]}
              />

              <ModelCard
                title="常用入口"
                icon="fa-door-open"
                properties={[
                  { name: "入口名称", type: "String" },
                  { name: "语言", type: "Enum(中文/英文)" },
                  { name: "icon图片", type: "Image" },
                  { name: "链接", type: "String" },
                  { name: "排序号", type: "Integer" },
                ]}
              />

              <ModelCard
                title="常用文档"
                icon="fa-file-alt"
                properties={[
                  { name: "标题", type: "String" },
                  { name: "语言", type: "Enum(中文/英文)" },
                  { name: "链接", type: "String" },
                  { name: "排序号", type: "Integer" },
                ]}
              />

              <ModelCard
                title="友情链接"
                icon="fa-link"
                properties={[
                  { name: "名称", type: "String" },
                  { name: "语言", type: "Enum(中文/英文)" },
                  { name: "icon图片", type: "Image" },
                  { name: "链接", type: "String" },
                  { name: "排序号", type: "Integer" },
                ]}
                notes="和常用入口一样结构"
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">通用属性</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        属性名
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        描述
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        创建人
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">String</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        记录创建该条数据的用户
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        创建时间
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">DateTime</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        记录数据创建的时间
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        修改人
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">String</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        记录最后修改该条数据的用户
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        修改时间
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">DateTime</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        记录数据最后修改的时间
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        删除标记
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Boolean</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        标记数据是否被删除（逻辑删除）
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
