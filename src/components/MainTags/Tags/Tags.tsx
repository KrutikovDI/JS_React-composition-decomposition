import React, { ReactNode } from 'react'
import classes from './tags.module.css'

interface propsIWeather {
    children: ReactNode,
    header: string
}

export const Tags = (props: propsIWeather) => {

  return (
    <div className={classes['tag']}>
        <h3>{props.header}</h3>
        {props.children}
    </div>
  )
}