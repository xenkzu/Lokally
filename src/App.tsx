import { useEffect } from 'react'
import { analytics } from './firebase'
import { logEvent } from 'firebase/analytics'

function App() {
  useEffect(() => {
    // Log a test event
    logEvent(analytics, 'test_event')
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Lokally
        </h1>
        <p className="text-gray-600">
          Your React + Tailwind + Firebase app is ready!
        </p>
      </div>
    </div>
  )
}

export default App
