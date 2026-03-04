function TeamCard({ team }) {
  return (
    <article className="team-card">
      <span className="state-chip">{team.state}</span>
      <h2>{team.school}</h2>
      <p>
        <strong>Mascot:</strong> {team.name || 'N/A'}
      </p>
      <p>
        <strong>Location:</strong> {team.city.trim()}, {team.state}
      </p>
    </article>
  )
}

export default TeamCard
