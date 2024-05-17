import React from 'react'
import '../../components/style/ProjectProgress.css'

const ProjectProgress = ({Progress}) => {
  return (
    <div className='ProjectProgress'>
      <p>In Progress {Progress}%</p>
      <div style={{width:"176px",height:'2px',backgroundColor:"#B6C8FE"}}>
        <div style={{width:`${Progress}%`, height:"2px",backgroundColor:"blue"}}></div>
      </div>
    </div>
  )
}

export default ProjectProgress
