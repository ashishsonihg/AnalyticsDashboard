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
import { useSelector } from "react-redux";
import React, { useMemo } from 'react';

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

export default () => {
  const {
    data,
  } = useSelector(
    ({
      analytics: {
        topSongs: data
      } = {}
    }) => ({
      data
    })
  );
  const chartData = React.useMemo(() => {
    return (data ||[]).map((row, index) => ({...row, fill: `hsl(var(--chart-${index+1}))`}))
  }, [data])
  const chartConfig = chartData.reduce((acc, post) => {
    let { id, songTitle, fill } = post
    return { ...acc, [id]: { ...(acc[id] || {}), label: songTitle, color: fill } }
  }, {})
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
