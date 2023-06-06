import React from 'react'
// import img from '../assets/energia.png'
import img1 from '../assets/eestienergia.png'
import img2 from '../assets/volt.png'
import img3 from '../assets/elektrilevi.png'
import img4 from '../assets/telia.png'

export default function Partners() {
  return (
    <div id='partners'>
      <div className='partnerHeading'>
        <h2>Наши партнеры</h2>
      </div>
        <div className='partnerContainer'>
            {/* <div className='partnerRow'>
                <img src={img}></img>
            </div> */}
            <div className='partnerRow'>
                <img src={img1}></img>
                <img src={img2}></img>
            </div>
            <div className='partnerRow'>
                <img src={img3}></img>
                <img src={img4}></img>
            </div>
        </div>
    </div>
  )
}
