"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ExportButton() {
  const handleExport = (format: string) => {
    // 实际实现中，这里会根据当前视图导出数据
    console.log(`Exporting data as ${format}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          导出数据
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleExport("csv")}>导出为 CSV</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("excel")}>导出为 Excel</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
