import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShowPlanets from './App';
const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

const App = ()=>{
  return <ShowPlanets planets={planets} />
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
