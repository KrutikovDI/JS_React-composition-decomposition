import React from 'react'
import classes from './imageTag.module.css'
import { IData } from '../interfaceTags'

interface propsIData {
    data: IData[]
}

/**Компонент содержит детей отсновного компонента Tags и отрисовывает теги, где впереди картинка */
export const ImageTag = (props: propsIData) => {
  return (
    <>
    {props.data.map(i => (
      <div key={i.text} className={classes['conteiner']}>
        <img src={i.name} alt="" />
        <div>{i.text}</div>
        <div className={classes['addit']}>{i.addit}</div>
      </div>
    ))}
    </>
  )
}