import TeamCard from './TeamCard'

// TeamList receives the full teams array from App.
function TeamList({ teams }) {
  return (
    // Section that loops through teams and shows one card per team.
    <section className="team-list" aria-label="List of college basketball teams">
      {/* map() turns each team object into one rendered TeamCard component. */}
      {teams.map((team) => (
        // key helps React track each card efficiently while rendering.
        <TeamCard key={team.tid} team={team} />
      ))}
    </section>
  )
}

export default TeamList
