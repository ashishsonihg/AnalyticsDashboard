import React, { useEffect } from 'react'
// import './style.css'

import UserGrowth from '../../components/UserGrowth'
import PieChart from '../../components/PieChart'
import TopSongs from '../../components/TopSongs'
import KeyMetrics from '../../components/KeyMetrics'
import DataTable from '../../components/DataTable'
import { fetchData } from './actions'
import { useDispatch } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <div className='dark home-page-style bg-[hsl(var(--background))] p-[0px] sm:p-[20px] flex flex-col gap-[20px]'>
      <KeyMetrics />
      <div className='flex flex-col lg:flex-row gap-[20px]'>
        <TopSongs />
        <PieChart />
      </div>
      <UserGrowth />
      <DataTable />
    </div>
  )
}

export default Home
