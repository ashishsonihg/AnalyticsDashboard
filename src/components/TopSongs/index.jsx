import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, XAxis, YAxis, LabelList } from 'recharts'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent,  } from '../ui/chart'
;[]
const chartData = [
  {
    id: 'song-1',
    songTitle: 'Blinding Lights The Weeknd',
    plays: 4440817906,
    fill: 'hsl(var(--chart-1))'
  },
  {
    id: 'song-2',
    songTitle: 'Shape of You Ed Sheeran',
    plays: 4005235240,
    fill: 'hsl(var(--chart-2))'
  },
  {
    id: 'song-3',
    songTitle: 'Someone You Loved Lewis Capaldi',
    plays: 3569805790,
    fill: 'hsl(var(--chart-3))'
  },
  {
    id: 'song-4',
    songTitle: 'As It Was Harry Styles',
    plays: 3525969965,
    fill: 'hsl(var(--chart-4))'
  },
  {
    id: 'song-5',
    songTitle: 'Perfect Ed Sheeran',
    plays: 3225969965,
    fill: 'hsl(var(--chart-5))'
  }
]

// add support for billion in the below function

const formatNumber = (num) => {
  // If the number is greater than or equal to 1 million
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2).replace(/\.0$/, '') + 'B'
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  
  // If the number is greater than or equal to 1 thousand
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }

  // For numbers below 1 thousand, return the number as it is
  return num.toString();
}
const chartConfig = chartData.reduce((acc, post) => {
  let { id, songTitle, fill } = post
  return { ...acc, [id]: { ...(acc[id] || {}), label: songTitle, color: fill } }
}, {})
console.log(chartConfig)
export default () => {
  return (
    <Card className='flex flex-col w-full'>
      <CardHeader className='items-center border-b'>
        <CardTitle>Top 5 Streamed Songs</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className={'mt-[10px]'}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <YAxis
              dataKey="id"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis dataKey="plays" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="plays"
              layout="vertical"
              radius={4}
            >
              <LabelList
                dataKey="songTitle"
                position="insideLeft"
                offset={8}
                className="fill-[#fff] font-bold"
                fontSize={12}
              />
              <LabelList
                dataKey="plays"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value) => formatNumber(value)}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm items-center'>
        <div className='flex gap-2 font-medium leading-none align-center'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground text-center'>
          Showing total plays for last 30 days
        </div>
      </CardFooter>
    </Card>
  )
}
