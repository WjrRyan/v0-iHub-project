# 项目文档

## 项目简介
本项目基于 Next.js 构建，提供一份交互式的“提示词工程”指南。主页面通过侧边导航组织引言、提示词类型、撰写框架等多个内容模块，并在页面中演示提示词的使用技巧。

## 技术栈
- Next.js 15 与 React 19
- Tailwind CSS 与 tailwind-merge
- Shadcn UI 组件（基于 Radix UI）
- next-themes 提供主题切换能力

## 目录结构
- `app/`：包含应用的入口和主要页面 `page.tsx`
- `components/`：封装的 UI 组件及主题提供器
- `hooks/`：自定义 React Hooks，如移动端检测
- `lib/`：工具函数
- `public/`：静态资源
- `styles/`：全局样式与 Tailwind 变量

## 核心页面
`app/page.tsx` 定义了页面的多个内容区块，包括引言、提示词类型、撰写框架和核心技巧等，并使用 Tabs、Card 等组件构建丰富的交互界面。

## 开发与构建
1. 安装依赖：`pnpm install`
2. 启动开发服务器：`pnpm dev`
3. 生产构建：`pnpm build`
4. 代码检查：`pnpm lint`

