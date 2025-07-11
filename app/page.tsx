"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Target,
  Lightbulb,
  Settings,
  ChevronRight,
  Brain,
  Code,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react"

export default function PromptEngineeringGuide() {
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "引言", icon: BookOpen },
    { id: "understanding", title: "理解提示词", icon: Brain },
    { id: "types", title: "提示词类型", icon: Code },
    { id: "engineering", title: "提示词工程", icon: Settings },
    { id: "design", title: "设计流程", icon: Target },
    { id: "frameworks", title: "撰写框架", icon: Lightbulb },
    { id: "techniques", title: "核心技巧", icon: Zap },
    { id: "parameters", title: "关键参数", icon: TrendingUp },
  ]

  const frameworks = [
    {
      name: "TAG框架",
      description: "简洁高效",
      components: ["Task-任务", "Action-行动", "Goal-目标"],
      useCase: "日常快速任务定义",
    },
    {
      name: "APE框架",
      description: "强调意图",
      components: ["Action-行动", "Purpose-目的", "Expectation-期望"],
      useCase: "需要理解任务背后目的的场景",
    },
    {
      name: "COAST框架",
      description: "应对复杂战略",
      components: ["Context-背景", "Objective-目标", "Actions-行动", "Scenario-情景", "Task-任务"],
      useCase: "复杂或战略性任务",
    },
    {
      name: "LangGPT框架",
      description: "构建专属AI智能体",
      components: ["Role-角色", "Profile-档案", "Rules-规则", "Workflow-工作流", "Initialization-初始化"],
      useCase: "需要长期保持一致性的虚拟助手",
    },
  ]

  const techniques = [
    { name: "零样本提示", description: "不提供范例，直接要求模型完成任务", icon: "0️⃣" },
    { name: "少样本提示", description: "提供1-5个完整的任务范例", icon: "📝" },
    { name: "分解技术", description: "将复杂任务拆分成简单子任务", icon: "🔧" },
    { name: "角色提示", description: "赋予AI特定的身份或专家角色", icon: "🎭" },
    { name: "思维链", description: "引导模型展示思考过程", icon: "🧠" },
    { name: "思维树", description: "探索多个解决路径", icon: "🌳" },
    { name: "自我批评", description: "让模型评估和改进自身输出", icon: "🔍" },
    { name: "负面约束", description: "明确告知模型不要做什么", icon: "🚫" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  提示词工程完全指南
                </h1>
                <p className="text-sm text-gray-600">从"会用AI"迈向"用好AI"</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              生产级教程
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">目录导航</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveSection(section.id)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {section.title}
                    </Button>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            {activeSection === "introduction" && (
              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">掌握AI时代的核心技能</h2>
                    <p className="text-lg opacity-90 leading-relaxed">
                      在AI技术迅速发展的今天，提示词工程（Prompt
                      Engineering）正成为产品经理和技术从业者必须掌握的核心技能。
                      本文系统梳理了提示词的基本概念、设计流程、常用框架与实用技巧，帮助你从"会用AI"迈向"用好AI"。
                    </p>
                    <div className="mt-6 flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5" />
                        <span>适合产品经理</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Code className="w-5 h-5" />
                        <span>技术从业者</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">系统化学习</h3>
                    <p className="text-sm text-gray-600">从基础概念到高级技巧的完整学习路径</p>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">实用框架</h3>
                    <p className="text-sm text-gray-600">多种经过验证的提示词撰写框架</p>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">生产级应用</h3>
                    <p className="text-sm text-gray-600">直接应用于实际业务场景的方法</p>
                  </Card>
                </div>
              </div>
            )}

            {/* Understanding Prompts */}
            {activeSection === "understanding" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="w-6 h-6 text-blue-600" />
                      <span>理解提示词：AI的指令语言</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">什么是提示词？</h3>
                      <p className="text-gray-700 leading-relaxed">
                        在人工智能的语境中，提示词（Prompt）是用户提供给模型的、用以引导其生成特定响应的输入文本。
                        它可以是简单的问题、一串关键词，也可以是包含复杂说明、上下文信息乃至代码片段的详细指令。
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4 text-blue-800">提示词的四大核心要素</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-600 mb-2">指令 (Instruction)</h5>
                          <p className="text-sm text-gray-600">明确告知模型需要执行的具体任务</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-semibold text-purple-600 mb-2">上下文 (Context)</h5>
                          <p className="text-sm text-gray-600">提供背景信息或外部知识</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-semibold text-green-600 mb-2">输入数据 (Input Data)</h5>
                          <p className="text-sm text-gray-600">模型需要处理的具体内容</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-semibold text-orange-600 mb-2">输出指示 (Output Indicator)</h5>
                          <p className="text-sm text-gray-600">指定输出内容的类型、格式或风格</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">为什么设计高质量的提示词至关重要？</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <p className="text-gray-700">提示词的质量直接决定了AI输出内容的质量、相关性和准确性</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <p className="text-gray-700">精心设计的提示词能够有效引导模型，产出符合预期的高质量结果</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <p className="text-gray-700">降低因AI输出错误而产生的业务风险和后期人工修正成本</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Types */}
            {activeSection === "types" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="w-6 h-6 text-purple-600" />
                      <span>提示词的两种类型</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-2 border-blue-200">
                        <CardHeader>
                          <CardTitle className="text-blue-600">日常对话提示词</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-gray-600">
                            非结构化的、即兴的自然语言查询，适用于探索性、非正式的知识获取和娱乐场景。
                          </p>
                          <div className="bg-blue-50 p-3 rounded">
                            <p className="text-sm font-mono">"给我推荐几部科幻电影"</p>
                          </div>
                          <div className="space-y-2">
                            <Badge variant="outline" className="text-blue-600">
                              简单直接
                            </Badge>
                            <Badge variant="outline" className="text-blue-600">
                              依赖预训练知识
                            </Badge>
                            <Badge variant="outline" className="text-blue-600">
                              探索性使用
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-purple-200">
                        <CardHeader>
                          <CardTitle className="text-purple-600">生产级提示词</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-gray-600">
                            经过"工程化"设计的指令，确保输出的可靠性、一致性和可扩展性。
                          </p>
                          <div className="bg-purple-50 p-3 rounded">
                            <p className="text-sm font-mono">结构化、规范化的业务指令</p>
                          </div>
                          <div className="space-y-2">
                            <Badge variant="outline" className="text-purple-600">
                              可靠一致
                            </Badge>
                            <Badge variant="outline" className="text-purple-600">
                              可扩展性
                            </Badge>
                            <Badge variant="outline" className="text-purple-600">
                              业务导向
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">核心认知转变</h4>
                      <p className="text-yellow-700">
                        日常对话是一种"交谈"，而生产级应用是一种"指令"。
                        专业应用无法承受AI"看心情"式的回答，它要求的是每一次服务都达到可预期的标准。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Engineering */}
            {activeSection === "engineering" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-6 h-6 text-green-600" />
                      <span>什么是提示词工程？</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">定义与过程</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        提示词工程（Prompt Engineering）是一门新兴的学科，它专注于开发和优化提示词，
                        帮助用户更有效地利用语言模型完成各种复杂的任务。
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800">
                          这个过程并非一蹴而就，而是一个类似于软件开发或机器学习的迭代循环，
                          通常包括需求分析、初始设计、测试评估和持续优化等环节。
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">提示词工程的价值</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-blue-50">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-blue-800 mb-2">成本与效率</h4>
                            <p className="text-sm text-blue-700">
                              相比模型微调，提示词工程提供了更高效、更灵活的AI能力利用方式，
                              以更低的成本、更快的速度进行AI应用的原型设计和功能迭代。
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="bg-purple-50">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-purple-800 mb-2">灵活性与可控性</h4>
                            <p className="text-sm text-purple-700">
                              提示词可以被看作是应用的"软逻辑"，可以随时进行修改和部署，
                              而无需重新训练整个模型，使产品团队能够快速响应业务变化。
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Design Process */}
            {activeSection === "design" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="w-6 h-6 text-red-600" />
                      <span>提示词设计流程：从需求到实现</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card className="text-center p-4 bg-red-50">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-red-600 font-bold">1</span>
                          </div>
                          <h4 className="font-semibold text-red-800 mb-2">需求分析</h4>
                          <p className="text-sm text-red-600">明确业务目标和用户需求</p>
                        </Card>
                        <Card className="text-center p-4 bg-blue-50">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-blue-600 font-bold">2</span>
                          </div>
                          <h4 className="font-semibold text-blue-800 mb-2">初始设计</h4>
                          <p className="text-sm text-blue-600">草拟第一个版本的提示词</p>
                        </Card>
                        <Card className="text-center p-4 bg-green-50">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-green-600 font-bold">3</span>
                          </div>
                          <h4 className="font-semibold text-green-800 mb-2">测试评估</h4>
                          <p className="text-sm text-green-600">使用多种输入数据测试</p>
                        </Card>
                        <Card className="text-center p-4 bg-purple-50">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-purple-600 font-bold">4</span>
                          </div>
                          <h4 className="font-semibold text-purple-800 mb-2">迭代优化</h4>
                          <p className="text-sm text-purple-600">持续优化和精炼</p>
                        </Card>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">关键问题清单</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start space-x-2">
                              <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                              <span className="text-sm">我们要解决什么问题？</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                              <span className="text-sm">AI在这个流程中扮演什么角色？</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-2">
                              <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                              <span className="text-sm">一个"成功"的输出是什么样的？</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                              <span className="text-sm">目标用户是谁？</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Frameworks */}
            {activeSection === "frameworks" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lightbulb className="w-6 h-6 text-yellow-600" />
                      <span>常用的提示词撰写框架</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {frameworks.map((framework, index) => (
                        <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{framework.name}</CardTitle>
                              <Badge variant="secondary">{framework.description}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <h5 className="font-semibold mb-2">组成要素：</h5>
                              <div className="space-y-1">
                                {framework.components.map((component, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm">{component}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded">
                              <p className="text-sm text-gray-600">
                                <strong>适用场景：</strong>
                                {framework.useCase}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Techniques */}
            {activeSection === "techniques" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="w-6 h-6 text-orange-600" />
                      <span>核心提示词技巧</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {techniques.map((technique, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="text-2xl">{technique.icon}</span>
                              <h4 className="font-semibold">{technique.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600">{technique.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-8 space-y-6">
                      <Card className="bg-blue-50">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-blue-800 mb-3">重点技巧：思维链（Chain of Thought）</h4>
                          <p className="text-blue-700 mb-4">
                            通过在提示词中加入"让我们一步一步地思考"，可以显著提升模型在逻辑推理、算术和复杂问题解决上的准确性。
                          </p>
                          <div className="bg-white p-4 rounded border">
                            <p className="text-sm font-mono text-gray-800">
                              "A套餐每月50元，含1000分钟通话，超出部分每分钟0.1美元。B套餐每月70元，不限通话。
                              如果客户上月通话1200分钟，哪个套餐更划算？让我们一步一步地思考。"
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Parameters */}
            {activeSection === "parameters" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-6 h-6 text-indigo-600" />
                      <span>关键参数：微调AI的风格</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Tabs defaultValue="temperature" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="temperature">Temperature</TabsTrigger>
                        <TabsTrigger value="top-p">Top-p</TabsTrigger>
                        <TabsTrigger value="top-k">Top-k</TabsTrigger>
                      </TabsList>

                      <TabsContent value="temperature" className="space-y-4">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold mb-3">Temperature（温度）</h4>
                            <p className="text-gray-700 mb-4">
                              控制模型生成下一个词时的随机性程度。较低的温度值（如0.2）产生更可预测的文本，
                              较高的温度值（如0.8）产生更具创造性的文本。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-blue-50 p-4 rounded">
                                <h5 className="font-semibold text-blue-800 mb-2">创意任务</h5>
                                <p className="text-sm text-blue-700">温度值：0.8-1.0</p>
                                <p className="text-sm text-blue-600">适用于头脑风暴、营销文案、创作故事</p>
                              </div>
                              <div className="bg-green-50 p-4 rounded">
                                <h5 className="font-semibold text-green-800 mb-2">事实性任务</h5>
                                <p className="text-sm text-green-700">温度值：0.2-0.5</p>
                                <p className="text-sm text-green-600">适用于获取准确事实、文本摘要、生成代码</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="top-p" className="space-y-4">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold mb-3">Top-p（核采样）</h4>
                            <p className="text-gray-700 mb-4">
                              动态控制词汇选择范围的方法。设定一个概率阈值p（如0.9），
                              模型从输出概率最高的词开始累加，直到总和达到p为止。
                            </p>
                            <div className="bg-purple-50 p-4 rounded">
                              <h5 className="font-semibold text-purple-800 mb-2">推荐设置</h5>
                              <p className="text-sm text-purple-700">
                                通常使用0.9到0.95之间的值，这能在保证连贯性的前提下，提供良好的多样性。
                                Top-p通常被认为是比Temperature更优的控制方法。
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="top-k" className="space-y-4">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold mb-3">Top-k</h4>
                            <p className="text-gray-700 mb-4">
                              直接限制模型在生成下一个词时，只能从概率最高的k个词中进行选择。
                              例如，设置Top-k为10，模型只会在10个备选词中挑选。
                            </p>
                            <div className="bg-orange-50 p-4 rounded">
                              <h5 className="font-semibold text-orange-800 mb-2">使用建议</h5>
                              <p className="text-sm text-orange-700">
                                当需要确保输出内容严格限制在某个主题范围内时，可以使用较小的k值（如5-20）。
                                在实际应用中，通常会调整Temperature和Top-p中的一个，而不是同时调整。
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">本文由 @Mrs.Data 原创发布于人人都是产品经理</p>
            <p className="text-sm text-gray-500">未经作者许可，禁止转载 | 题图来自Unsplash，基于CC0协议</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
