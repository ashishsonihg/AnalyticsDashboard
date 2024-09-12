import { TrendingUp, TrendingDown } from 'lucide-react'

import { Card, CardHeader, CardTitle } from '../ui/card'

export default () => {
  return (
    <Card className='flex flex-col w-full'>
      <CardHeader className='items-center border-b'>
        <CardTitle>Key Metrics</CardTitle>
      </CardHeader>
      <Card
        className={'flex flex-wrap lg:flex-nowrap gap-[20px] p-[20px] justify-items-center border-none'}
      >
        <Card className={'w-full h-auto p-5'}>
          <div className={'flex items-center justify-between'}>
            <div>
              <div className={'text-sm text-gray-500'}>Total Users</div>
              <div className={'text-lg font-bold'}>169 M</div>
            </div>
            <TrendingUp size={24} className={'text-green-500'} />
          </div>
        </Card>
        <Card className={'w-full h-auto p-5'}>
          <div className={'flex items-center justify-between'}>
            <div>
              <div className={'text-sm text-gray-500'}>Active Users</div>
              <div className={'text-lg font-bold'}>148 M</div>
            </div>
            <TrendingDown size={24} className={'text-red-500'} />
          </div>
        </Card>
        <Card className={'w-full h-auto p-5'}>
          <div className={'flex items-center justify-between'}>
            <div>
              <div className={'text-sm text-gray-500'}>Total Streams</div>
              <div className={'text-lg font-bold'}>20M</div>
            </div>
            <TrendingUp size={24} className={'text-green-500'} />
          </div>
        </Card>
        <Card className={'w-full h-auto p-5'}>
          <div className={'flex items-center justify-between'}>
            <div>
              <div className={'text-sm text-gray-500'}>Revenue</div>
              <div className={'text-lg font-bold'}>14 M USD</div>
            </div>
            <TrendingDown size={24} className={'text-red-500'} />
          </div>
        </Card>
        <Card className={'w-full h-auto p-5'}>
          <div className={'flex items-center justify-between'}>
            <div>
              <div className={'text-sm text-gray-500'}>Top Artist</div>
              <div className={'text-lg font-bold'}>Weeknd</div>
            </div>
            <div className={'text-lg font-bold'}>70 M</div>
          </div>
        </Card>
      </Card>
    </Card>
  )
}
