import Heading from './components/Heading'
import TeamList from './components/TeamList'
import teamsData from './CollegeBasketballTeams.json'

function App() {
  return (
    <main className="page">
      <Heading teamCount={teamsData.teams.length} />
      <TeamList teams={teamsData.teams} />
    </main>
  )
}

export default App
