import React from 'react'

function Home(props) {

  return (
    <div>
      <br />
      {props.astro.displayName}
      <br />
      {props.astro.established}
    </div>
  )
}

export default Home