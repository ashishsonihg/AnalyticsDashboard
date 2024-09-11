import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import AboutUs from '../views/AboutUs'
export default (/* store, isMobile */) => {
  // function handleChange (prev, next, store, isMobile) {
  //   try {
  //     store.dispatch({
  //       type: 'UPDATE_ROUTE_PARAMS',
  //       payload: { ...next.location, params: next.params }
  //     })
  //     const nextPageType = next.routes[next.routes.length - 1].pageType
  //     let prevPageType = prev.routes[prev.routes.length - 1].pageType
  //     prevPageType = prevPageType.replace(/appbs/g, '').trim()
  //     document.body.classList.remove(prevPageType)
  //     document.body.classList.add(nextPageType)
  //   } catch (e) {}
  // }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </Router>
  )
}
