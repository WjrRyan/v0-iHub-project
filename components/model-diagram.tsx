"use client"

import { useEffect } from "react"

export default function ModelDiagram() {
  useEffect(() => {
    // 初始化 Mermaid
    if (typeof window !== "undefined") {
      import("mermaid").then((mermaid) => {
        mermaid.default.initialize({
          startOnLoad: true,
          theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: "basis",
          },
        })
        mermaid.default.contentLoaded()
      })
    }
  }, [])

  return (
    <div className="overflow-x-auto pb-4">
      <div className="mermaid min-w-[800px]">
        {`
        graph TD
          BaseModel["通用基础模型<br>创建人, 创建时间<br>修改人, 修改时间<br>删除标记"]
          
          Menu["系统菜单<br>菜单名称, 语言<br>父级菜单id, 链接<br>排序号"]
          News["新闻<br>新闻标题, 语言<br>新闻跳转链接, 位置<br>头图, 视频, 发布时间"]
          HotContent["热门内容<br>标题, 正文描述, 语言<br>跳转链接, 头图<br>发布时间, 作者<br>作者头像图片"]
          CommonEntrance["常用入口<br>入口名称, 语言<br>icon图片, 链接<br>排序号"]
          Document["常用文档<br>标题, 语言<br>链接, 排序号"]
          FriendlyLink["友情链接<br>名称, 语言<br>icon图片, 链接<br>排序号"]
          
          BaseModel --> Menu
          BaseModel --> News
          BaseModel --> HotContent
          BaseModel --> CommonEntrance
          BaseModel --> Document
          BaseModel --> FriendlyLink
          
          classDef base fill:#f9f9f9,stroke:#ff4081,stroke-width:2px,color:#333
          classDef model fill:#fff,stroke:#ccc,stroke-width:1px,color:#333
          
          class BaseModel base
          class Menu,News,HotContent,CommonEntrance,Document,FriendlyLink model
        `}
      </div>
    </div>
  )
}
