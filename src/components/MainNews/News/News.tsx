import React from 'react'
import classes from './news.module.css'
import { INew } from '../interfaceNews'

interface propsINews {
  news: INew[]
}

/**КОмпонент отрисовывает список новостей в родительском компоненте MainNews */
export const News = (props: propsINews) => {
  const news = props.news

  return (
    <ul className={classes['news']}>
      {news.map((i) => (
        <li key={i.description} className={classes['new']}>
          <img src={i.icon} className={classes['img']} alt="" />
          <a href={i.link} className={classes['link']}>{i.description}</a>
        </li>
      ))}
    </ul>
  )
}
