import React from 'react'
import "./pet.scss"

const PetCard = ({name, img}) => {
  return (
    <div className='pet-cont'>
        <div className="pet-card">
            <p>{name}</p>
            <div className="img-wrapper">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PetCard