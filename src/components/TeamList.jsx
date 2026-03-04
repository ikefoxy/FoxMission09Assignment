import TeamCard from './TeamCard'

function TeamList({ teams }) {
  return (
    <section className="team-list" aria-label="List of college basketball teams">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </section>
  )
}

export default TeamList
