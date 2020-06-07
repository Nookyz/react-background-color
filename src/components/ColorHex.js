import React from 'react'
import { hexArray } from '../helper/helper'
import './ColorHex.scss'

export const ColorHex = (props) => {
  
  const {index, item, changeValueHandler} = props

  const value = hexArray.indexOf(item)

  return (
    <div className='hex-wrap'>

      <span 
      onClick={() => changeValueHandler(index, value)}
      className="material-icons"
      >
        arrow_circle_up
      </span>

      <span>
        {item}
      </span>

    </div>  
  )
}
