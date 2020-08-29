import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import img1 from '../assets/static/pexels-angelo-duranti-3512848.jpg'
const CarouselItem = () =>(
    <div className="carousel-item">
    <img className="carousel-item__img"src={img1} alt="pc"/>
     <div className="carousel-item__details">
        <div className="carousel-item__details-img">
         <img className="carousel-item__details--play"src="https://img.icons8.com/flat_round/64/000000/play--v1.png"/>
         <img className="carousel-item__details--suma"src="https://img.icons8.com/flat_round/64/000000/plus.png"/>
      </div> 
     <p className="carousel-item__details--title">Titulo descriptivo</p>
     <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
 </div>
 </div>
)
export default CarouselItem