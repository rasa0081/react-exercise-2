const ShowPlanets = ({planets})=>{
  return ( <ul>
    {planets.map((planet, i)=>{
      return <li key={i}>
        {planet}
      </li>
    })}
  </ul>)
}
export default ShowPlanets;