import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

const customer = {
  first_name: "Bob",
  last_name: "Dylan",
};


const App = ()=>{
  return(
  <div>
    <h1>{`my name is ${customer.first_name}`}</h1>
    <h2>{`my last name is ${customer.last_name}`}</h2>
  </div>
)}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
