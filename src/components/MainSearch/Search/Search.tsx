import React from 'react'
import classes from './search.module.css'

interface propsIIcon {
  icon: string
}

/**Компонент используется для отрисовки строки поиска в NainSearch */
export const Search = (props: propsIIcon) => {
  return (
    <form className={classes['search']}>
      <img src={props.icon} alt="Лого" />
      <input className={classes['input']} type="text" />
      <button className={classes['btn']}>Найти</button>
    </form>
  )
}
