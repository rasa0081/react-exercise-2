import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
 const Alert =({text})=>{
  return (
    <div className='alert alert-danger' role='alert'>
      {text}
    </div>
  )
 }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Alert text="OMG! Something really bad has happened!"/>
  </StrictMode>,
)
