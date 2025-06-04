"use client"

import { useState } from "react"
import { Search, Bell, ChevronDown, Edit, Eye, MessageCircle, Star, ThumbsUp, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CommunityForum() {
  const [activeTab, setActiveTab] = useState("最热")
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const sidebarSections = [
    {
      title: "程里事",
      icon: "📋",
      items: ["程里热点", "职言直语", "大佬小事", "管理者赋能", "二手交易", "兴趣部落", "碎碎念"],
    },
    {
      title: "生活圈",
      icon: "🌟",
      items: ["相亲交友", "租房拼车"],
    },
    {
      title: "产研圈",
      icon: "🔬",
      items: ["产品汪", "Tech专区", "ChatGPT"],
    },
  ]

  const forumPosts = [
    {
      id: 1,
      category: "程里热点",
      badge: "置顶",
      title: "616客服节｜晒出你的好服务高光时刻，瓜分6160福豆！",
      author: "iN携程",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "2025/06/04 09:58",
      views: 3987,
      comments: 1055,
      stars: 61,
      likes: 330,
      image: "/images/forum-post-1.png",
      tag: "616客服节",
    },
    {
      id: 2,
      category: "职言直语",
      badge: "置顶",
      title: '【程里内推活动】IBU CSC客服节内推季，推荐你的"星"上人（评...',
      author: "程里内推",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "2025/06/03 14:19",
      views: 2594,
      comments: 291,
      stars: 14,
      likes: 30,
      image: "/images/forum-post-1.png",
      tag: "程里内推",
    },
    {
      id: 3,
      category: "程里热点",
      title: "哇！星期三即将唤醒你的启蒙英语",
      author: "程里热点",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "2025/06/03 10:30",
      views: 1256,
      comments: 89,
      stars: 23,
      likes: 156,
      image: "/images/forum-post-1.png",
      content:
        'hi，各个年代的哇人们一波回忆杀即将来袭请回忆你的幼年启蒙英语，疯狂思考你的"人生第一句"英文！评论区留下"此时此刻，你脑海中第一句闪现出来的英文是什么？"【本哇的启蒙英语：-how are you？-I\'m fine,thank...',
    },
  ]

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${darkMode ? "dark" : ""}`}
    >
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">程里社区</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="支持搜索标题/正文/回复/话题"
                  className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="text-sm">
                En
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ryann</span>
              </div>
              <Button variant="outline" size="sm">
                登录
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              {sidebarSections.map((section, index) => (
                <div key={index} className="p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg">{section.icon}</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        className="block w-full text-left px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="p-4">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  收起
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Tab Navigation */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-6">
                {["最热", "最新"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
                      activeTab === tab
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Edit className="w-4 h-4 mr-2" />
                发帖
              </Button>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      {/* Post Image */}
                      {post.image && (
                        <div className="flex-shrink-0">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt="Post thumbnail"
                            className="w-32 h-24 object-cover rounded-lg"
                          />
                        </div>
                      )}

                      {/* Post Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                          {post.badge && (
                            <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">{post.badge}</Badge>
                          )}
                          <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
                            {post.title}
                          </h2>
                        </div>

                        {post.tag && (
                          <div className="mb-2">
                            <Badge variant="outline" className="text-blue-600 border-blue-200">
                              🏷️ {post.tag}
                            </Badge>
                          </div>
                        )}

                        {post.content && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{post.content}</p>
                        )}

                        {/* Author and Stats */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={post.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{post.author[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                            <span className="text-sm text-gray-500">{post.time}</span>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4" />
                              <span>{post.stars}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 flex-shrink-0">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Ryann</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>黄金</span>
                      <span className="font-medium">1419/1500</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl">😊</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">帖子</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">回复</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dark Mode Toggle */}
            <Card>
              <CardContent className="p-4">
                <Button onClick={toggleDarkMode} variant="outline" className="w-full">
                  {darkMode ? "🌞 浅色模式" : "🌙 深色模式"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full w-14 h-14 bg-pink-500 hover:bg-pink-600 shadow-lg">
          <span className="text-xl">🎨</span>
        </Button>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-24">
        <Button size="lg" variant="secondary" className="rounded-full w-12 h-12 shadow-lg">
          ↑
        </Button>
      </div>
    </div>
  )
}
