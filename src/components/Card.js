import React from 'react'

import {BsFillBagHeartFill} from "react-icons/bs"
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <div>
      <section className="card-container">
        <section className="card">
          <img src={img} alt={title}/>
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className='card-reviews'>
              {star} {star} {star} {star} {star}
              <span className='total-reviews'>{reviews}</span>
            </section>
            <section className='card-price'>
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
            </section>
            <div className="bag">
            <BsFillBagHeartFill  className='bag-icons'/>
            </div>
          </div>
        </section>
      </section>
      </div>
    </>
  )
}

export default Card