import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
const data = {
  image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTS-u1kEIy9lY8U7SSJdsKhdVzywy2lZ5uSGJ0Poygjdj1-7TixdFtjLdIcZd8rUqWuRxI-1NQRzH_HtkSa25jgw8AhAd132gtBMDCaQQI',
  cardTitle: 'Bob Dylan',
  cardDescription:
    'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  button: {
    url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    label: 'Go to wikipedia',
  },
};

const Card = ({image , cardTitle, cardDescription, button})=>{
  return (
    <div className='card m-5'>
      <img className="card-img-top" src={image} alt={cardTitle} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
      <div className='card-body'>
        <h5 className='card-title'>{cardTitle}</h5>
        <p className='card-text'>{cardDescription}</p>
        <a href={button.url} className='btn btn-primary'>
         {button.label}
        </a>
      </div>
    </div>
  )
}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card {...data}/>
  </StrictMode>,
)
