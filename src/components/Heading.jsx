import basketballPng from '../assets/basketball.png'

function Heading({ teamCount }) {
  return (
    <header className="heading">
      <img className="banner-ball" src={basketballPng} alt="" aria-hidden="true" />
      <p className="eyebrow">2026 NCAA Team Directory</p>
      <h1>NCAA College Basketball Teams</h1>
      <p>
        Browse every team in the provided dataset, including school name,
        mascot, and location.
      </p>
      <p className="count-pill">{teamCount} Teams Loaded</p>
    </header>
  )
}

export default Heading
