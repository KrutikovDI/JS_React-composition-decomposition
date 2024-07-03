import React from 'react'
import classes from './card.module.css'
import { ICard } from './interfaceCard'

interface propsICard {
    card: ICard
}
/**Компонент карточки, используется в приложении App , отрисовывает карточку справа от новостей */
export const Card = (props: propsICard) => {
    const { label, title, text} = props.card

  return (
    <div>
      <img className={classes['img']} src={label} alt="" />
      <div className={classes['title']}>{title}</div>
      <div >{text}</div>
    </div>
  )
}

