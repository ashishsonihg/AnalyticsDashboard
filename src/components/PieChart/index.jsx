import * as React from 'react'
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'
import { useSelector } from "react-redux";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'

// const chartData = [
//   { source: 'advertising', revenue: 59, fill: 'var(--color-advertising)' },
//   { source: 'subscription', revenue: 42, fill: 'var(--color-subscription)' },
//   { source: 'liveEvents', revenue: 26, fill: 'var(--color-liveEvents)' },
//   { source: 'royalty', revenue: 12, fill: 'var(--color-royalty)' }
// ]

const chartConfig = {
  revenue: {
    label: 'Revenue'
  },
  advertising: {
    label: 'Advertising',
    color: 'hsl(var(--chart-1))'
  },
  subscription: {
    label: 'Subscription',
    color: 'hsl(var(--chart-2))'
  },
  liveEvents: {
    label: 'Live Events',
    color: 'hsl(var(--chart-3))'
  },
  royalty: {
    label: 'Royalty',
    color: 'hsl(var(--chart-4))'
  }
}

export default () => {
  const {
    data ,
  } = useSelector(
    ({
      analytics: {
        revenue: data
      } = {}
    }) => ({
      data
    })
  );
  const chartData = React.useMemo(() => {
    return (data ||[]).map((row) => ({...row, fill: `var(--color-${row.source})`}))
  }, [data])
  
  // console.log("chartData:" ,chartData, data)
  const totalRevenue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => {
      console.log(curr)
    return  acc + curr.revenue
    }, 0)
  }, [data])

  return (
    <Card className='flex flex-col w-full'>
      <CardHeader className='items-center border-b'>
        <CardTitle>Revenue Distribution</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[400px]'
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className='w-[180px]'
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className='h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]'
                        style={{
                          '--color-bg': `var(--color-${name})`
                        }}
                      />
                      {chartConfig[name]?.label || name}
                      <div className='ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground'>
                        {value} M USD
                      </div>
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
            <Pie
              data={chartData}
              dataKey='revenue'
              nameKey='source'
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-xl font-bold'
                        >
                          {totalRevenue.toLocaleString()}M USD
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Revenue
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total revenue for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
