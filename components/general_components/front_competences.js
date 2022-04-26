

export default function FrontpageCompetencesTest({ competences, lan }) {
  console.log(competences)
  return (
      <div style={{
        height: "100vh",
        backgroundColor: "white"
      }} >
        <h2>osaaminen</h2>
          {competences.map((value, key) => (
            <div>{value.title[lan]}</div>
          ))}
      </div>
  )
}
