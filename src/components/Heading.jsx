import basketballPng from '../assets/basketball.png'

// Heading displays the title area at the top of the page.
function Heading({ teamCount }) {
  return (
    // Intro area with assignment title and quick context.
    <header className="heading">
      {/* Decorative basketball image for visual style only. */}
      <img className="banner-ball" src={basketballPng} alt="" aria-hidden="true" />
      <p className="eyebrow">2026 NCAA Team Directory</p>
      <h1>NCAA College Basketball Teams</h1>
      <p>
        Browse every team in the provided dataset, including school name,
        mascot, and location.
      </p>
      {/* Simple summary of how many teams are in the data file. */}
      <p className="count-pill">{teamCount} Teams Loaded</p>
    </header>
  )
}

export default Heading
