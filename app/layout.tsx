import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "iHub 领域模型可视化",
  description: "展示系统中的核心领域模型及其关系",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.staticfile.org/tailwindcss/2.2.19/tailwind.min.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
        />
        <Script src="https://cdn.jsdelivr.net/npm/mermaid@latest/dist/mermaid.min.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
