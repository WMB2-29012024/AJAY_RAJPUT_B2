import React from 'react'
import ShowEntries from './ShowEntries'
import SearchHeader from './SearchHeader'
import AddCustomer from './AddCustomer'
import '../style/MainHeader.css'

const MainHeader = () => {
  return (
    <div className='MainHeader'>
      <div className='search-entry'>
        <ShowEntries/>
        <SearchHeader/>
      </div>
      <div >
        <AddCustomer/>
      </div>
    </div>
  )
}

export default MainHeader


