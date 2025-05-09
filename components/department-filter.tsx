"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const departments = [
  { value: "all", label: "所有部门" },
  { value: "engineering", label: "工程部" },
  { value: "marketing", label: "市场部" },
  { value: "sales", label: "销售部" },
  { value: "hr", label: "人力资源部" },
  { value: "finance", label: "财务部" },
]

export function DepartmentFilter() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("all")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[180px] justify-between">
          {value ? departments.find((department) => department.value === value)?.label : "选择部门"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="搜索部门..." />
          <CommandList>
            <CommandEmpty>未找到部门</CommandEmpty>
            <CommandGroup>
              {departments.map((department) => (
                <CommandItem
                  key={department.value}
                  value={department.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === department.value ? "opacity-100" : "opacity-0")} />
                  {department.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
