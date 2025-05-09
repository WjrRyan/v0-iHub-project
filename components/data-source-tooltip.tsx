"use client"

import { InfoIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DataSourceTooltipProps {
  source: string
  endpoint: string
  fields?: string
}

export function DataSourceTooltip({ source, endpoint, fields }: DataSourceTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <InfoIcon className="ml-1 h-4 w-4 cursor-help text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent className="max-w-[300px] text-xs">
          <p>
            <strong>数据来源:</strong> {source}
          </p>
          <p>
            <strong>API 端点:</strong> {endpoint}
          </p>
          {fields && (
            <p>
              <strong>字段:</strong> {fields}
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
