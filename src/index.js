import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query-devtools'
import { hydrate, dehydrate } from 'react-query/hydration'
import { GlobalLoader, Sidebar } from './components'
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
        <Wrapper>
          <Main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1>Welcome!</h1>
                  </>
                }
              />
            </Routes>
          </Main>
        </Wrapper>
        <GlobalLoader />
        <ReactQueryDevtools />
      </BrowserRouter>
    </SupressHydrationWarning>
  )
}

export const Wrapper = styled.div`
  display: flex;
  height: 96vh;
`

export const Main = styled.div`
  flex: 1;
  padding: 1rem;
`
