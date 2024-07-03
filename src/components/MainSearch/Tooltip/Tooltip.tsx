import React from 'react'
import classes from './tooltip.module.css'
import { ITooltip } from '../interfaceSearch'

interface propsITooltip {
  tooltip: ITooltip
}

/**КОмпонент отрисовывает подсказку под строкой поиска в NainSearch */
export const Tooltip = (props: propsITooltip) => {
  const { title, text } = props.tooltip
  return (
    <div className={classes['tooltip']}>
      <div className={classes['title']}>{title}</div>
      <div className={classes['text']}>{text}</div>
    </div>
  )
}
