import React from 'react'
import './components/style/Main.css'
import Title from './components/Title'
import Heading from './components/Heading'
import Container from './container/Container'

const Main = () => {
  return (
    <div className='Main'>
      <Title />
      <Heading size={"lg"} text={"See What your team has been up to"}/>
      <Container/>
      
    </div>
  )
}

export default Main
