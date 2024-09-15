import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { useSelector } from "react-redux";

export const description = 'A multiple line chart'

const chartConfig = {
  allUsers: {
    label: 'All Users',
    color: 'hsl(var(--chart-1))'
  },
  premium: {
    label: 'Premium',
    color: 'hsl(var(--chart-2))'
  },
  premiumPlus: {
    label: 'Premium Plus',
    color: 'hsl(var(--chart-3))'
  },
  activeUsers: {
    label: 'Active Users',
    color: 'hsl(var(--chart-4))'
  }
}

export default () => {
  const {
    data = [],
  } = useSelector(
    ({
      analytics: {
        users: data
      } = {}
    }) => ({
      data
    })
  );
  return (
    <Card className='flex flex-col w-full'>
      <CardHeader className='items-center border-b'>
        <CardTitle>Total Active Users</CardTitle>
      </CardHeader>
      <CardContent className={'pt-5'}>
        <ChartContainer config={chartConfig} className={'max-h-[400px] w-full'}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: -20,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey='allUsers'
              tickLine={false}
              axisLine={false}
              // tickMargin={20}
              tickFormatter={value => value + 'M'}
            />
            <XAxis
              dataKey='month'
              // tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={value => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className='w-[180px]'
                  formatter={(value, name) => (
                    <>
                      <div
                        className='h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]'
                        style={{
                          '--color-bg': `var(--color-${name})`
                        }}
                      />
                      {chartConfig[name]?.label || name}
                      <div className='ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground'>
                        {value} M
                      </div>
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
            <Line
              dataKey='allUsers'
              type='monotone'
              stroke='var(--color-allUsers)'
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey='activeUsers'
              type='monotone'
              stroke='var(--color-activeUsers)'
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey='premium'
              type='monotone'
              stroke='var(--color-premium)'
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey='premiumPlus'
              type='monotone'
              stroke='var(--color-premiumPlus)'
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className={'mt-auto center'}>
        <div className='flex w-full items-start gap-2 text-sm justify-center'>
          <div className='grid gap-2 '>
            <div className='flex justify-center items-center gap-2 font-medium leading-none'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div>
            <div className='flex items-center gap-2 leading-none text-muted-foreground'>
              Showing total Users for the last 12 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
