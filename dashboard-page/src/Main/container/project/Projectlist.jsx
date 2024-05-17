import React from 'react'
import '../../components/style/ProjectList.css'

const Projectlist = ({Class,Svg,ProjectName,Campaign}) => {
  return (
    <div className='Projectlist'>
      <div className='`${class}`' >{Svg}</div>
      <div className='project-information'>
<div className='ProjectName'>{ProjectName}</div>
<div>{Campaign}</div>

      </div>
    </div>
  )
}

export default Projectlist
