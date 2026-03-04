// TeamCard prints one team's school, mascot, and location.
function TeamCard({ team }) {
  return (
    // One card showing basic info for a single school.
    <article className="team-card">
      <span className="state-chip">{team.state}</span>
      <h2>{team.school}</h2>
      <p>
        {/* Show N/A if mascot data is missing in the JSON. */}
        <strong>Mascot:</strong> {team.name || 'N/A'}
      </p>
      <p>
        {/* trim() removes any extra spaces from the city name. */}
        <strong>Location:</strong> {team.city.trim()}, {team.state}
      </p>
    </article>
  )
}

export default TeamCard
