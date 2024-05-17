import React from 'react'
import '../style/SearchHeader.css'

const SearchHeader = () => {

  return (
    <div  className='SearchHeader'>
            <img  className="searchSVG" src='/Images/Vector.svg' alt='img'/>
      <input className='searchMain' type='text' placeholder='Search...'></input>
    </div>
  )
}

export default SearchHeader
