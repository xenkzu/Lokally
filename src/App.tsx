import { useEffect } from 'react'
import { analytics } from './firebase'
import { logEvent } from 'firebase/analytics'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import ComplaintCard from './components/ComplaintCard'

function App() {
  useEffect(() => {
    // Log a test event
    logEvent(analytics, 'test_event')
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatsCard
            title="Complaint Resolution"
            value="56.2%"
            subtext="Complaints resolved"
            chartType="line"
          />
          <StatsCard
            title="Upvotes Given"
            value="168"
            subtext="Total upvotes"
            chartType="bar"
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Complaints</h2>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all
            </a>
          </div>
          <div className="space-y-4">
            <ComplaintCard
              tag="Road"
              title="Potholes on Main St"
              status="Pending"
              subtext="Complaints resolved"
              urgency="Daily"
              tagColor="green"
            />
            <ComplaintCard
              tag="Water"
              title="Low water pressure"
              status="In Progress"
              subtext="Urgency urgent"
              urgency="Urgent"
              tagColor="blue"
            />
            <ComplaintCard
              tag="Sewer"
              title="Broken drain cover"
              status="Resolved"
              subtext="Resolved"
              urgency="Long-Term"
              tagColor="green"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
