import Link from 'next/link'
import React from 'react'

function About() {
    const clickMe = () => {
        console.log('123123')
    }
  return (
    <div>
        <p>About</p>
        <button onClick={clickMe}><Link href='/'>Go to home</Link></button>
    </div>
  )
}

export default About