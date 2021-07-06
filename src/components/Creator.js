import React, { useState, useEffect } from 'react'
import api from '../api'

function Creator(props) {
  return (
    <div>
      {props.streamer.login}
    </div>
  )
}

export default Creator