import React from 'react'
import Kiosk from './components/Kiosk'

function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-4">
      {/* Tablet Landscape Container (simulated) */}
      <div className="w-full max-w-5xl h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex relative">
        <Kiosk />
      </div>
    </div>
  )
}

export default App
