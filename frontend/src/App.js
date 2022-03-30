import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Index from "./pages/Index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/:id" component={Item} />
        <Route path="/shell" exact component={List} /> */}
        {/* <Redirect path="*" to="/" /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
