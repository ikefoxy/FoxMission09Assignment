import Heading from './components/Heading'
import TeamList from './components/TeamList'
import teamsData from './CollegeBasketballTeams.json'

// App connects the dataset to the visual components.
function App() {
  return (
    // Page wrapper for the assignment content.
    <main className="page">
      {/* Top section with the title and total number of teams. */}
      <Heading teamCount={teamsData.teams.length} />
      {/* Grid/list section that shows every team card. */}
      <TeamList teams={teamsData.teams} />
    </main>
  )
}

export default App
