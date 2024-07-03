import React from 'react'
import classes from './recommendations.module.css'
import { IRecommendation } from '../interfaceNews'

interface propsIRecommendations {
  recommendations: IRecommendation[]
}

/**КОмпонент отрисовывает рекоммендации над списком новостей в родительском компоненте MainNews */
export const Recommendations = (props: propsIRecommendations) => {
  const listRecommendations = props.recommendations
  return (
    <>
      {listRecommendations.map(i => (
        <a key={i.text} href={i.link} className={classes['link']}>{i.text}</a>
      ))}
    </>
  )
}
