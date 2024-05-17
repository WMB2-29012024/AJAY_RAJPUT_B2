import React from 'react'
import productData from './productData'
import '../style/Thead.css'

const Thead = () => {
  const titles=Object.keys(productData[0]).filter(title => title !== 'ProductImage');
  return (
    <tr className='table-title'>
        {<>{
          titles.map((item,i)=>{
            return (<th  className='titles' key={i} >{item}</th>)
          })
        }
            <th className='titles'>Action</th>
            </>
        }
     </tr>
  )
}

export default Thead
