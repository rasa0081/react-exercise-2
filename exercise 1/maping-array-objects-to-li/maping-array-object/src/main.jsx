import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const animals = [
  { label: 'Horse' },
  { label: 'Turtle' },
  { label: 'Elephant' },
  { label: 'Monkey' },
];


const Animal = ()=>{
  return (
    <ul>
      {animals.map((singleAnimal, i)=>{
          return <li key={i}>
            {singleAnimal.label}
          </li>
    })}
    </ul>
  )
};





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Animal />
  </StrictMode>,
)
