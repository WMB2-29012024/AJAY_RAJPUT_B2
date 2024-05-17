import React from 'react'
import '../style/Pagination.css'
const Pagination = () => {
  return (
    <div className='Pagination'>
      <button className='Previous'>Previous</button>
      <button className='page1'>1</button>
      <button className='page2'>2</button>
      <button className='page3'>3</button>
      <button className='Next'>Next</button>

    </div>
  )
}

export default Pagination
