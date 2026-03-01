'use client'

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/ui/code-block'
import { TabbedPreview } from '@/components/TabbedPreview'
import { chart_code_preview } from '@/constants/components_showcase/chart_code_preview'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"


const page = () => {
  
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Chart</h1>
      <p className="text-sm text-muted-foreground mb-6">Displays a Chart.</p>

      <Separator />

      <h2 className="text-2xl font-bold text-foreground py-4">Installation</h2>
      {chart_code_preview.code_snippet && (
        <CodeBlock
          language="bash"
          filename='Chart Import'
          code={chart_code_preview.code_snippet}
        />
      )}

      <Separator className="my-8" />

      {/* Basic Chart Example */}
      <div>
        <h2 className="text-2xl font-bold text-foreground py-4">Chart</h2>
        <TabbedPreview 
          className="p-4 w-full max-w-xl"
          code={chart_code_preview.basic}
          language="typescript"
          filename="Chart-Basic.tsx"
          highlightLines={[]}
        >
          <div>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
        </TabbedPreview>
      </div>

      <Separator className="my-8" />

      
      
    </div>
  )
}

export default page