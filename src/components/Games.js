import React from 'react'

function Games(props) {

  return (
    <div>
      <img src={props.astro.avi} alt='astro collective' />
      <br />
      {props.astro.displayName}
      <br />
      {props.astro.established}
      <br />
      {props.astro.creators.map(creator => {
        return (
          <p>{creator.user_login}</p>
        )
      })}
    </div>
  )
}

export default Games