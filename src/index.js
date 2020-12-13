import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query-devtools'
import { hydrate, dehydrate } from 'react-query/hydration'
import { GlobalLoader } from './components'
import { Home } from './screens/Home'
import { queryCache } from './components/App'

function cacheSync() {
  if (typeof localStorage !== 'undefined') {
    let cache = localStorage.getItem('queryCache_1')
    if (cache) {
      hydrate(queryCache, JSON.parse(cache))
    }

    queryCache.subscribe((cache) => {
      localStorage.setItem('queryCache_1', JSON.stringify(dehydrate(cache)))
    })
  }
}

cacheSync()

function SupressHydrationWarning({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export const Root = () => {
  return (
    <SupressHydrationWarning>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <GlobalLoader />
        <ReactQueryDevtools />
      </BrowserRouter>
    </SupressHydrationWarning>
  )
}
